---
layout: post
title: "Deploy your site on Nexus™ OpenSource"
---
These days I have to provide a documentation site to one customer, so I started playing around with the maven site plugin and I created a really beautiful set of pages that will be able to teach all the details of my project to a chimp. Now, it's time to make it available for that chimp: since my artifacts are delivered through Maven on a Nexus handled repository, I opted for the same Nexus instance to host my site. Let's see what's needed to achieve this result.

First of all, you have to download Nexus™. The <a title="Nexus OpenSource homepage" href="http://nexus.sonatype.org/">OpenSource version</a> is fine, so that you can start to play around before you eventually decide <a title="Nexus Professional homepage" href="http://www.sonatype.com/products/nexus">it's time to go Pro</a>. You can get Nexus from <a title="Sonatype Nexus download page" href="http://nexus.sonatype.org/downloads/">here</a>. In the following I'll assume you downloaded the quick start bundle, so that you'll have a separated application server for Nexus shipped within the same zip file you downloaded. If you opted for the WAR download, you probably already know how to go :)
<h2>Configure &amp; run Nexus</h2>
The default configuration provided with Nexus is probably fine for having just a quick try, but I suggest to configure one or two things, just to start feeling comfortable with the nice toy you've just downloaded. So, unzip the Nexus archive whereve you prefere, you will end up with a folder named like nexus-webapp-blabla. We will call it $NEXUS_HOME.

Open the file $NEXUS_HOME/conf/plexus.properties. Here I changed only two lines, namely the TCP port where the application will bind to and the storage area where all the artifacts (and sites!) will be stored. Here is my configuration file:
<pre lang="Bash">application-port=8082
application-host=0.0.0.0
runtime=${basedir}/runtime
apps=${runtime}/apps
nexus-work=/var/sonatype-work/nexus-opensource
webapp=${runtime}/apps/nexus/webapp
webapp-context-path=/nexus
security-xml-file=${nexus-work}/conf/security.xml
application-conf=${nexus-work}/conf

# If this file is present, it will be used to configure Jetty.
jetty.xml=${basedir}/conf/jetty.xml

# Uncomment this to use the debug js files
#index.template.file=templates/index-debug.vm</pre>
Since I changed the storage area, I had to create the folder configured in nexus-work:
<pre lang="bash">~ skuro$ cd /var
var skuro$ sudo mkdir -p sonatype-work/nexus-opensource
var skuro$ sudo chgrp -R admin sonatype-nexus
var skuro$ sudo chmod -R g+rwx sonatype-nexus</pre>
<strong>NOTE</strong>: the permission you set on the created folders must match the user under which you'll run Nexus.

Now it's time to let it run. Nexus comes shipped with wrapper scripts that are able to launch the application on several different platforms. I'm running MacOSX on an Intel machine, but you'll have to check inside the $NEXUS_HOME/bin/jsw folder to find the wrapper that best suits your system configuration.
<pre lang="bash">~ skuro$ cd $NEXUS_HOME
nexus-webapp-1.3.4 skuro$ ./bin/jsw/macosx-universal-32/nexus start</pre>
Done. Now if you point your browser to http://localhost:8082/nexus you should see it's dashboard:
<p style="text-align: center;"><a rel="thumbnail" href="http://www.skuro.tk/wp-content/uploads/2009/07/picture-6-1024x245.png"><img class="aligncenter size-large wp-image-90" title="Nexus OpenSource dashboard" src="http://www.skuro.tk/wp-content/uploads/2009/07/picture-6-1024x245.png" alt="Nexus OpenSource dashboard" width="398" height="95" /></a></p>

The default admin username/password is admin/admin123, you can log in now and play around Nexus.
<h2>Configuring a repo for your sites</h2>
You don't want to mess up artifacts and sites, it will be a lot neater if you have a separated repo for each kind of deliverable. When logged in as admin in Nexus, click the Repositories link on the left menu and then select Add-&gt;Hosted repository. A form will appear where you will have to enter the details of the repo you're creating. Edit it to look like this:
<p style="text-align: center;"><a rel="thumbnail" href="http://www.skuro.tk/wp-content/uploads/2009/07/picture-7-1024x372.png"><img class="aligncenter size-large wp-image-91" title="Site repository configuration" src="http://www.skuro.tk/wp-content/uploads/2009/07/picture-7-1024x372.png" alt="Site repository configuration" width="400" height="145" /></a></p>

Click on Save and the new repo will appear on the Repositories list, with the base URL you will have to use in your POM configuration. But let's stick on Nexus configuration for now, we still have something to do here. Let's create a Repository Target, which will be used to fine tune our configuration for our test project. Click on the Repository Targets in the Administration menu on the left and then Add. Another form will appear which you'll fill like this:
<p style="text-align: center;"></p>
<p style="text-align: center;"><a rel="thumbnail" href="http://www.skuro.tk/wp-content/uploads/2009/07/picture-8.png"><img class="aligncenter size-full wp-image-101" title="Repository target configuration" src="http://www.skuro.tk/wp-content/uploads/2009/07/picture-8.png" alt="Repository target configuration" width="400" height="230" /></a></p>

OK, we're almost there, we just have to set some authorization stuff and we'll be done with Nexus. In Nexus, the security model is made of <strong>Privileges</strong>, which describe actions like "read" and "write", <strong>Roles</strong>, that define a set of Privileges, and <strong>Users</strong>, to whom you can grant both Roles and Privileges. So, first of all click on the Permissions link from the left menu, and then Add-&gt;Repository Target Privilege. You'll end up with something like this:

<a rel="thumbnail" href="http://www.skuro.tk/wp-content/uploads/2009/07/picture-9.png"><img class="aligncenter size-full wp-image-102" title="Privileges configuration" src="http://www.skuro.tk/wp-content/uploads/2009/07/picture-9.png" alt="Privileges configuration" width="400" height="140" /></a>

The Role and User creation is really straightforward, I'll leave it to you to figure out how to create a Role that aggregates the Site repo privileges and a User that will be granted that role. In my test configuration, the User and the Role are both called site-dev.
<h2>Configuring the Maven site plugin</h2>
Now that we created a repo to host our sites, let's try to deploy something in it! We have to do basically two things
<ul>
	<li>create a project, if we don't have one already</li>
	<li>configure the repository where the site will be deployed in the distributionManagement section of the POM</li>
	<li>configure the user credential that will be used to upload the site</li>
</ul>
Developers are supposed to be lazy, otherwise automating things won't be that effective. Knowing that, you can use this <a href="http://www.skuro.tk/wp-content/uploads/2009/07/test-site-projecttar.bz2">test-site-project</a> to test your configuration. It is already a project with a parent POM and a module, just to prove that multi module projects are not an issue here ;)

Before uploading the site, make sure that the site URL in the parent pom.xml matches your Nexus URL, and add a configuration in your $MAVEN_HOME/settings.xml to identify your user against Basic HTTP when deploying the site:
<pre lang="xml">
<server>
      <id>nexus-local-opensource</id>
      <username>site-dev</username>
      <password>password</password>
</server>
</pre>
Remember that the site &lt;id&gt; must match the distributionManagement repository &lt;id&gt;.
<h2>Deploy it!</h2>
Ok, we got it, now we have a (hopefully) working configuration we can use to upload and make available your site through Nexus. To prove yourself that ir really works, just run this commands:
<pre lang="bash">test-site skuro$ mvn site:site
test-site skuro$ mvn site:deploy</pre>
Done! Now, if you used the configuration I showed you, you should be able to access the site at the URL <a href="http://localhost:8082/nexus/content/repositories/site-repo/test-site/index.html">http://localhost:8082/nexus/content/repositories/site-repo/test-site/index.html</a>
<h2>Conclusions</h2>
Using Nexus as a single provider for both your artifacts and the associated sites can be easier to maintain, and I hope this post will help you to start using this configuration. The next step will be the configuration for the maven release plugin, that can be easily achieved using maven <a title="Maven CALM homepage" href="http://code.google.com/p/maven-calm/">CALM</a>. But this is stuff for another post, so if you want to know more about it <a href="http://pillitu.wordpress.com/2009/06/26/maven-calm/">just</a> <a href="http://mindthegab.com/2009/06/26/launching-calm-an-opensource-answer-to-application-lifecycle-management/">search</a> <a href="http://www.theserverside.com/news/thread.tss?thread_id=55075">the</a> Net [1] [2] or stay tuned!