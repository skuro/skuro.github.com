---
title: Debug your build with the plan maven plugin
layout: post
primary_img: /img/post/yunotbuild.png
categories: [alm, maven]
meta-description: Debug your build with the Plan Maven Plugin
---

Contention over configuration
=============================

While [ThoughtWorks](http://www.thoughtworks.com/) put it [on hold](http://www.thoughtworks.com/sites/www.thoughtworks.com/files/images/52/radar-march-2012-tools.jpg), there are still a number of occasions where a normal Java guy such as the truly yours have to face refactorings of ginormus Maven builds. In my company, for instance, I'm now in the situation where I need to speed up the build of one component whose project structure involves 27 POM files, with up to 4 levels of nesting. Needless to say, there are tens of plugin executions, plugins and all the possible Maven black magic you can think of. The default options for build introspection (help plugin, enable debug, etc.) left me helpless in the middle of a gargantuan build execution log file.

Plan plugin FTW
===============

I ended up writing a small plugin to help me debugging the build by dumping the execution plan. I originally named it [`plan-maven-plugin`](http://plan-maven-plugin.skuro.tk), and put all the sources on [github](https://github.com/skuro/plan-maven-plugin). As the plugin is already on [Maven Central](http://search.maven.org/#artifactdetails%7Ctk.skuro%7Cplan-maven-plugin%7C1.1%7Cmaven-plugin), you only need to place the following in your `settings.xml`:

    <pluginGroups>
      <pluginGroup>tk.skuro</pluginGroup>
    </pluginGroups>

Thanks to [David Thume](https://github.com/dthume), this is what it looks like now:

    $ mvn plan:plan -Dgoals=clean,javadoc:jar,sources:jar,package,gpg:sign
    ...
    [INFO] --- plan-maven-plugin:1.1:plan (default-cli) @ plan-maven-plugin ---
    [INFO] 
    [INFO] Current lifecycle:
    [INFO]     pre-clean
    [INFO]     clean
    [INFO]     post-clean
    [INFO]     validate
    [INFO]     initialize
    [INFO]     generate-sources
    [INFO]     process-sources
    [INFO]     generate-resources
    [INFO]     process-resources
    [INFO]     compile
    [INFO]     process-classes
    [INFO]     generate-test-sources
    [INFO]     process-test-sources
    [INFO]     generate-test-resources
    [INFO]     process-test-resources
    [INFO]     test-compile
    [INFO]     process-test-classes
    [INFO]     test
    [INFO]     prepare-package
    [INFO]     package
    [INFO]     pre-integration-test
    [INFO]     integration-test
    [INFO]     post-integration-test
    [INFO]     verify
    [INFO]     install
    [INFO]     deploy
    [INFO]     
    [INFO] Execution plan:
    [INFO]     [clean] org.apache.maven.plugins:maven-clean-plugin:clean (default-clean)
    [INFO]     [-] org.apache.maven.plugins:maven-javadoc-plugin:jar (default-cli)
    [INFO]     [-] org.apache.maven.plugins:maven-source-plugin:jar (default-cli)
    [INFO]     [validate] org.apache.maven.plugins:maven-enforcer-plugin:enforce (enforce-maven)
    [INFO]     [generate-resources] org.apache.maven.plugins:maven-plugin-plugin:descriptor (default-descriptor)
    [INFO]     [process-resources] org.apache.maven.plugins:maven-resources-plugin:resources (default-resources)
    [INFO]     [compile] org.apache.maven.plugins:maven-compiler-plugin:compile (default-compile)
    [INFO]     [process-test-resources] org.apache.maven.plugins:maven-resources-plugin:testResources (default-testResources)
    [INFO]     [test-compile] org.apache.maven.plugins:maven-compiler-plugin:testCompile (default-testCompile)
    [INFO]     [test] org.apache.maven.plugins:maven-surefire-plugin:test (default-test)
    [INFO]     [package] org.apache.maven.plugins:maven-jar-plugin:jar (default-jar)
    [INFO]     [package] org.apache.maven.plugins:maven-plugin-plugin:addPluginArtifactMetadata (default-addPluginArtifactMetadata)
    [INFO]     [-] org.apache.maven.plugins:maven-gpg-plugin:sign (default-cli)
    ...

I still have a long way to go before I can bring my build to acceptable performance levels, but surely enough this will give me much more insights on what's possibly going wrong. Enjoy!
