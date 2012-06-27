---
title: Spring surf Clojure and Alfresco H2 support now in Maven Central
layout: post
primary_img: /img/post/maven-central.png
categories: [alfresco, alm, sonatype, h2-support]
meta-description: Spring surf Clojure and Alfresco H2 support now in Maven Central
---

**tl;dr:** I had to change the groupId of both
  [h2-support](https://github.com/skuro/alfresco-h2-support) and
  [spring-webscripts-addon-clojure](https://github.com/skuro/spring-webscripts-addon-clojure). Good
  news is, they're now available on Maven Central!

Build management dilemma
------------------------

Part of [my company](http://www.backbase.com) offering is an Alfresco
based CMS, which we build the 
[maven way](code.google.com/p/maven-alfresco-archetypes/). While this
is already a nicely integrated build with the rest of the other
products, I currently find it annoying to require a database to be
installed wherever the project is built (ubiquitous MySQL installed
locally on my laptop, on the CI server, etc.). As I'm maintaining an
H2 [compatibility module](https://github.com/skuro/alfresco-h2-support) 
for Alfresco it's natural for me to integrate and use it.

There was only one thing blocking this process, and that's the maven
repository where such artifact were deployed.

Deploy on Central
-----------------

As much as I love [Clojars](http://clojars.org), it still requires to be manually configured
when dealing with a pure Maven build. Since it's not quite an option to add
an artifacts repository for something as small as `h2-support`, I
decided to just follow the guidelines for Maven Central sync on 
[OSS Sonatype](https://docs.sonatype.org/display/Repository/Sonatype+OSS+Maven+Repository+Usage+Guide) and
rename the group ID to resabmle my personal web domain. This means I
did dirty, dirty things that bought me an entire eternity in hell,
such as retagging both
[v1.1](https://github.com/skuro/alfresco-h2-support/tree/v1.1) and
[v1.2](https://github.com/skuro/alfresco-h2-support/tree/v1.2).

But, as the only change in the POM is "non functional" such as
description, developers and such, it's not going to hurt much I
believe.

This move is reflected also in the currently unreleased
`spring-webscripts-addon-clojure`, so if you'll be using it or
you need `h2-support` remember to use the `tk.skuro.*` group IDs, and
you won't need to add a `<repository>` to your POM ever again.

Thanks [Sonatype](http://www.sonatype.com) for the awesome service!
