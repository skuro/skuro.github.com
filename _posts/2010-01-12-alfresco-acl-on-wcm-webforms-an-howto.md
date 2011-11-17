---
layout: post
title: "Alfresco ACL on WCM WebForms, an howto"
primary_img: /img/post/fingerprint.png
categories: [alfresco]
---

When it comes to setting up an Alfresco WebProjects, you configure it to make use of a set of WebForms already available on the Alfresco repository. From that moment on, every user with write rights on the web project will be able to pick one web form and push some content through it into the AVM repository. But what if you want to forbid some users to actually make use of some web forms? The default Alfresco doesn't present any GUI control that allows you to define web forms level ACLs, but in facts there's a way to define them in an easy way, without the need of any real customization. Let's see how to do that on the Alfresco WCM we setup in the previous chapters of this series.

The idea
--------

So, we want to be able to relate web forms and users or groups, thus restricting access to web forms depending on your credentials. We want to configure a number of web forms to be available on the web project, while users will see only the ones they've access to when trying to create some contents, so that dropdowns and links will appear only when it's appropriate. Moreover, we do not want to waste our time on custom code, we just want Alfresco to do its job.

The way we are going to address this requirement is through the use of real ACL setup configured on the web forms themselves, so that the Alfresco permission checks will be able to trim the list of available web forms to the users whenever they ask for create content. Sounds reasonable, right?
<h2>Bug!</h2>
As a disclaimer, I must say the proposed approach doesn't work with a vanilla Alfresco3.2r because of a <a href="https://issues.alfresco.com/jira/browse/ETHREEOH-2595">nasty bug</a> that will throw Exceptions all over the place once you configured restrictive ACLs on web forms. Thanks to the OpenSource nature of Alfresco, and thanks to <a href="http://twitter.com/bradsdavis">Brad Davis</a> that provided a patch for it, we can just change the Alfresco source code and we'll be able to go forward. While we wait for a real mavenized Alfresco, this involves having the Alfresco SDK properly installed on your system, apply the patch and upload it to your local maven repo. To ease your life, you can just go with this last step using this patched <a href="http://download.skuro.tk/alfresco/alfresco-3.2r-community-patched.war">Alfresco WAR</a> and type:

    utopia-II:Downloads skuro$ mvn install:install-file -DartifactId=alfresco -DgroupId=org.alfresco \
     -Dversion=3.2r -Dtype=war -Dclassifier=community-patched -Dfile=alfresco-3.2r-community-patched.war

After that you have to switch to this artifact in your alfresco-extension project's pom dependencies.
<h2>Define the ACL</h2>
Now start up Alfresco and login as the <em>admin</em>. To prove the ACL effectiveness, we will need two users and one group. In the following I'll assume the users are called <em>bob</em> and <em>todd</em> and the group, where only <em>bob</em> is listed, is called <em>full-access</em>.

Now go to the <em><strong>Company Home/Data Dictionary/Web Forms</strong></em> folder and open the property sheet of the <em><strong>article</strong></em> web form folder.

You'll be now able to customize the permissions on this level by clicking on <em><strong>Manage Space users</strong></em>, that will bring you to the ACL managing wizard. <strong>Uncheck</strong> the <strong><em>Inherit Parent Space Permissions</em></strong> box and then click on <em><strong>Invite..</strong></em>, setting up the <em>full-access</em> group to have the <em><strong>Coordinator</strong></em> role.
<h2>Test it</h2>
We're already done! Now, try to log in into Alfresco with the two users and verify that only bob can actually see the article web form appearing on the UI.
<h2>Conclusion</h2>
This technique allows for a whole lot of use cases, where different divisions are not allowed to author content of different types. The only drawback of this solution is that when you have more than one web project per Alfresco instance, and you want to reuse the web forms, you will need to setup different groups for the different web projects (this will almost always be the case, anyway) and do the ACL configuration twice. Not that big deal, of course, but the lack of any centralized ACL managing tool will make it harder to maintain the permissions schemes.
