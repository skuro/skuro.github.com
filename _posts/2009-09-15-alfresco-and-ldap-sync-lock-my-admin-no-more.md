---
layout: post
title: "Alfresco and LDAP sync lock my Admin no more!"
primary_img: /img/post/baby-ninja.jpg
categories: [alfresco]
---

On the custom <a href="http://www.alfresco.com">Alfresco Enterprise</a> project I'm working we use LDAP sync to import users from a Novell eDirectory server[<a href="#note-1">1</a>]. Now, it happened from time to time that the user Alfresco binds itself with, i.e. the LDAP admin user, got locked in eDirectory as a "Intrusion prevention" mechanism or something like that.

The LDAP sysadmin said we were guilty of providing wrong credentials too many times when logging in. Which is weird, since most of the time the LDAP sync went well, which meant that either that sysadmin was seldom changing back and forth the Admin credentials or something Evil&#8482; was going on under the hood. I personally feared for the latter, but let the issue wait a bit, since staging environments seemed to work just fine.

Then, when my dev team grew up with three more people, the issue worsened terribly, with the admin account locked almost any hour. I really started to get bothered by it, and did some investigations.

It turned out, it was all working "by design", in the sense that yes, our Alfresco was providing wrong credentials and yes, the admin account was properly configured. This is how it went.

To be 100% sure our Alfresco configuration was correct, apart from checking every configuration file from here to eternity, I wanted to sniff the network connection to the LDAP server. When networked systems fail to work together, I always feel like I <strong>need</strong> raw network data.

Made a <a href="http://www.google.com/search?q=socat"><strong>socat</strong></a> tunnel[<a href="#note-2">2</a>] to look at data BEFORE it entered the encrypted VPN connection, started Alfresco and waited. And, eventually, got it: I expected one bind connection request, I got more. Plus, the first three or four attempts were using almost random user accounts, while the last showed the known LDAP admin user name and the wrong password! WTF?

A closer look at the <a href="http://svn.alfresco.com/repos/alfresco-open-mirror/alfresco/HEAD/root/projects/repository/source/java/org/alfresco/repo/security/authentication/ldap/LDAPInitialDirContextFactoryImpl.java">Alfresco LDAP connector</a> solved the mistery. Here's an excerpt from that code:

     // Correct principal invalid password
     env = new Hashtable(initialDirContextEnvironment.size());
     env.putAll(initialDirContextEnvironment);
     env.put(Context.SECURITY_CREDENTIALS, "sdasdasdasdasd123123123");
     try
     {

         new InitialDirContext(env);

         throw new AuthenticationException(
                 "The ldap server at "
                         + env.get(Context.PROVIDER_URL)
                         + " falls back to use anonymous bind for a known principal if  invalid security credentials are presented. This is not supported.");
     }

That's it: Alfresco performs intentionally a number of connections that are supposed to fail, in order to infer some LDAP server configurations. The code presented here above is what made eDirectory lock the admin user: when our 5~6 developer environments started up, almost simultaneously at the morning, they performed too many wrong login attempts with the correct user name in a row before the first one eventually started using both the valid username <strong>and</strong> the correct password.

Setting up the allowed failed logins on eDirectory for the local testing environment, finally, solved this hidden and tedious issue. Still unclear if the Alfresco approach is really a smart one, due to some limitations of the LDAP handshake protocol I'm not aware of (well, I'm not that LDAP expert, after all) or such intentionally failing logins can/should be deleted/changed. What do you think?

[<a name="note-1">1</a>] Here Alfresco happens to be MultiTenant, but still we are able to import users&amp;groups from the Directory. Which has been my very first successful customization task as an Alfresco dev :)

[<a name="note-2">2</a>] I'll eventually end up using socat for brushing my teeth, I guess
