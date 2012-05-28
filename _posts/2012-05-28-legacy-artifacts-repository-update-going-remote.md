---
title: "Legacy artifacts repository update: going remote"
layout: post
primary_img: /img/post/legacy-remote.png
categories: [alm, maven]
meta-description: Use Github as a remote repository
---

The case against
================

After [showing](http://skuro.tk/2012/05/14/legacy-libraries-for-your-maven-build/) how to use your version control repository to host legacy libraries, [Tim O'Brien](http://discursive.com/) made a case against its use mentioning how a maintenance hell it would be to use such a strategy, and that a repository manager like [Nexus](http://www.sonatype.org/nexus) or [Artifactory](http://www.jfrog.com/index.php) is the preferred solution. After all, with a local repository in your sources you're indeed unable to **download** the JAR, so that any dependent project wouldn't be able to compile against your transitive dependencies. Isn't it part of the maven revolution to never, ever check in your libraries in your VCS?

The case for
============

When your project has a mid-big scale, and you depend on a tens of legacy/funny libraries that the whole Internet can't provide, which are maybe still likely to get updates, you should ~~question your project~~ take the chance to leverage a repository manager. But, if your project is relatively small, with just a bunch of stray dependencies and no access to a repository manager for any reason, there's little value to gain from building an infrastructure around your JARs, and you can easily leverage a piece of infrastructure you're most likely to have already: your remote or centralized VCS repository.

[Not only] Github
=================

While [Github](https://github.com/) is my source hosting service of choice, and I'm sticking to it for the sake of my example, the strategy is not limited to it, and as long as you have plain HTTP access to your source files you can create such an integration. [SVN on Google Code](http://code.google.com/p/maven-svn-wagon/wiki/MavenRepositoryInsideGoogleCode) is just another option.

That said, let's get to the juicy part. The main problem with a `file://` based repository is that absolute URLs and locality of artifacts get in the way of other people leveraging your project, eventually breaking transitive dependencies access. The trick is then to just point to the remote location where your sources are already hosted and available, still exploiting the Maven repository layout. As already explained [elsewhere](http://cemerick.com/2010/08/24/hosting-maven-repos-on-github/), here's the `<repository>` definition to put in your POM in case you're on Github:

    <repository>
        <id>repo</id>
        <url>https://github.com/$USER/$PROJECT/raw/master/$PATH</url>
    </repository>

Where you have to replace `$USER`, `$PROJECT` and `$PATH` with your Github username, your project name and the path to your maven repository root within your sources (e.g. `src/main/lib` in the previous article).
