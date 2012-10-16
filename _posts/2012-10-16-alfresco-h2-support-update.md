---
title: H2 support 1.5 for Alfresco 4.1.1 Enterprise
layout: post
primary_img: /img/post/h2piechart.png
categories: [alfresco, h2support, maven, sonatype]
meta-description: Alfresco H2 support module just reached version 1.5 to support Alfresco Enterprise 4.1.1
---

After Alfresco version 4.1.1 Enterprise came out earlier this month,
[H2 support](https://github.com/skuro/alfresco-h2-support) needed to
stay up to date and release a new version which incorporates the
few schema changes in the Alfresco database. Thanks to
[Jon Evans](http://springyweb.com) and [Ixxus](http://www.ixxus.com),
 H2 Support v1.5 it's already out there!

Version management
==================

As
[usual](https://github.com/skuro/alfresco-h2-support/wiki/H2-Database-support-for-Alfresco),
H2 support follows its own version numbering scheme, and you need to
double check which one to use depending on the Alfresco version you're
running: version 1.5 only supports Alfresco 4.1.1 Enterprise, so if
you're targeting other versions go and update your POM.

Availability on Maven Central
=============================

By the time of this writing, H2 support was just pushed to
[Sonatype OSS](https://oss.sonatype.org/index.html), and while it
should happen shortly, it still has to be synchronized with Maven
Central. If the following Maven dependency fails to resolve, try to
download and install it from
[here](https://oss.sonatype.org/content/repositories/releases/tk/skuro/alfresco/h2-support/1.5/):

    <dependency>
      <groupId>tk.skuro.alfresco</groupId>
      <artifactId>h2-support</artifactId>
      <version>1.5</version>
    </dependency>
    
On a side note, the stats feature of Sonatype Nexus are plain awesome.
I can have direct insights of the amount of downloads of H2 support
over time, split by version number. Check it out:

![H2 download stats](/img/post/h2stats.png "H2 download stats")

    
Your chance to be awesome
=========================

Jon was just great to help H2 support and provide the patch that made
1.5 happen. It's always inspiring to see how OpenSource drives people
to build something together, spending time to shape technology to be
the way we need, asking for nothing else in return than just be part
of the community. 

H2 support is a tiny project, and requires little
development and maintenance. Still, you can always help by either
testing it against [undocumented Alfresco versions](https://github.com/skuro/alfresco-h2-support/wiki/H2-Database-support-for-Alfresco), or [reporting bugs](https://github.com/skuro/alfresco-h2-support/issues)
or your wish list as soon as you figure them out.

Thanks for reading this and happy Alfresco hacking!
