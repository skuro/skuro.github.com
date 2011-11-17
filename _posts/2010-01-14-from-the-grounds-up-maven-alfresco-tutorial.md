---
layout: post
title: "From the grounds up, your Maven powered Alfresco dev box"
categories: [alm, alfresco]
---
<img class="aligncenter size-full wp-image-240" title="mint alf mvn" src="/img/post/mint-alf.png" alt="mint alf mvn" width="437" height="311" />
The target
----------
To start your Alfresco development experience, you need a development environment. Let's say you're more into this Maven and you'd rather leverage its capabilities instead of using the default ant based build system provided along with the SDK. In this tutorial, I'll guide you through the process of setting up from scratch your development environment. And by saying "from scratch", I really mean it: we'll start from a fresh installed Linux box and the we will add piece over piece until we'll be see the Alfresco flower on our browser.  This will be a *basic* tutorial, just to put in place the foundation for later improvements.

I'm actually performing these steps in a virtual machine, so that next time a quick&amp;dirty Alfresco PoC is required I might use this very same VM to start right away from a known, dev ready point.

<strong><span style="color: #ff0000;">UPDATE: <span style="color: #000000;"><span style="font-weight: normal;">the Maven project structure I end up with at the end of this article can be downloaded directly from <a title="alfresco-dev.skuro.tk // Tag: #01" href="http://github.com/skuro/alfresco-dev.skuro.tk/tree/%2301">GitHub</a>.</span></span></span></strong>
<h2>Operating System</h2>
Ok, I assume you know your stuff and don't want to get a bore-some lesson on how to install Linux. The whole internet is polluted by billions of guides and tutorial since 199x, anyway, so let's just say I just completed the install process of Mint7 and I'm at my very first login. I would go for <a href="http://ftp.heanet.ie/pub/linuxmint.com/stable/8/LinuxMint-8.iso">Mint8</a> if my current connection was fast enough to download it before I finish writing these notes, but whatever, there's nothing really bad in v7.
<h2>Tools</h2>
The shopping list here includes a JDK, Maven and... well, that should be it, theoretically. Unfortunately, due to a nasty <a href="https://issues.alfresco.com/jira/browse/ALFCOM-3691">regression</a>, we're going to need a db. My choice goes to MySQL.
<h3>MySQL</h3>
First thing first, let's install it:

    ~$ sudo apt-get install mysql-server

When this is done, we have to create the db Alfresco is going to use:

    ~$ mysql -u root
    mysql&gt; CREATE DATABASE alf_jetty;
    mysql&gt; GRANT ALL ON alf_jetty.* TO 'alfresco'@'%' IDENTIFIED BY 'alfresco';

Username and password are the default for the <a href="http://wiki.alfresco.com/wiki/Managing_Alfresco_Lifecyle_with_Maven">maven stuff</a> we're going to use.
<h3>Java</h3>
Java™ 5 <a href="http://java.sun.com/products/archive/eol.policy.html">has already passed on</a>, let it rest in peace. Instead, go and install Java™ 6:

    ~$ sudo apt-get install sun-java6-jdk
    [/code]

<h3>Maven</h3>
Hold on the temptation of installing Maven 3 or to ask apt-get to do this task for you. We're going to the official <a href="http://maven.apache.org/download.html">download page</a> and following the links to get the latest stable 2.x release. You should end up with something like apache-maven-2.2.1-bin.tar.bz2 on your file system. Then do the following:

    ~$ cs /opt
    ~$ sudo tar xvjf apache-maven-2.2.1-bin.tar.bz2
    ~$ sudo ln -sfv /opt/apache-maven-2.2.1/bin/mvn /usr/bin/mvn

There are less intrusive ways to bring your downloaded application into your PATH, but this is the quickest possible. Let's go on to the next step.
<h3>Plumbing</h3>
We're almost there, we just have to lay down our projects. Let's start with the Alfresco repo extension:

    ~$ mkdir -p development/alfresco-showcase
    ~$ cd development/alfresco-showcase
    alfresco-showcase$ wget http://download.skuro.tk/alfresco-showcase/pom.xml
    alfresco-showcase$ mvn archetype:generate -DarchetypeGroupId=com.sourcesense.alfresco \
     -DarchetypeArtifactId=maven-alfresco-extension-archetype \
     -DarchetypeVersion=1.9.1 \
     -DgroupId=it.sk.alfresco \
     -DartifactId=alfresco-showcase-extension \
     -Dversion=1.0-SNAPSHOT \
     -DarchetypeRepository=http://maven.alfresco.com/nexus/content/repositories/releases \
     -DinteractiveMode=false

The POM I'm making available <a href="http://download.skuro.tk/alfresco-showcase/pom.xml">here</a> is just a very basically one, I'm using it here just for you to speed up the process.

<strong>UPDATE: </strong> as others pointed me out, it looks like you somehow need to download such a pom for the whole thing to stand up. That's simply not true, I'm just building a more complex dev environment and it's better if we have some structure in place. This includes having a parent project, along with its parent pom, with nested projects registered as its modules. These will come in the next posts. But that's just part of the reason for this pom to be here: I also tend to be <a href="http://blogoscoped.com/archive/2005-08-24-n14.html">lazy</a>, so that letting you download it was easier than explaining myself. Note to self: thou shalt not post anything at 2am.
<h3>First achievement</h3>
Ok, let's stop here now and see what we've done by now. Go to the alfresco-showcase folder and type:

    alfresco-showcase$ MAVEN_OPTS="-Xmx512m -XX:MaxPermSize=128m" \
     mvn clean install -Prun

This will start a local jetty instance where Alfresco 3.2 community will be deployed. So, if you now point your browser to <code>http://localhost:8080/alfresco</code> you will finally see that flower we talked about at the beginning of this post.

<h2>Next steps</h2>
That's it for now, but other blocks are still missing: what about AMPs? And WCM? And does Share fits in the picture? I'll cover all the points in the next episodes of this series. See you there!
