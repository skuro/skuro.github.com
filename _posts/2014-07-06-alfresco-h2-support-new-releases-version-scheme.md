---
title: Alfresco H2 support releases and versioning scheme
layout: post
primary_img: /img/post/alfresco-h2.png
categories: [alfresco, alm, h2-support, maven]
meta-description: Alfresco H2 support got new releases and a new versioning scheme
keywords: [alfresco, h2, github, database, maven]
---

Some time has passed since the [last releases](/2013/03/27/h2-support-for-alfresco-3-4-12-and-maven/), and all the merits go once again to our dear [John Evans](http://springyweb.com/) from [Ixxus](http://www.ixxus.com/). Let's see what's new in the project.

Lots of releases, now with a new version scheme!
================================================

We were lagging behind Alfresco releases quite a bit, so you now have quite some [new releases](https://github.com/skuro/alfresco-h2-support/wiki/H2-Database-support-for-Alfresco) to look at. Most importantly, starting with Alfresco 4.2.0 we decided to align H2 Support with the official Alfresco versioning. So, while H2 Support v1.7 and v1.8 are the ones to be used respectively with Alfresco Enterprise 4.1.5 and 4.1.6, you will easily guess what versions of Alfresco Enterprise will have to use H2 Support v4.2.0 and v4.2.1.

Say your Alfresco v4.2.0 project is based on the [maven archetypes](https://code.google.com/p/maven-alfresco-archetypes/) (and shame on you if it's not), then you could simply override the following ``<property>`` in your pom:


{% highlight xml %}
    <h2-support.version>${alfresco.version}</h2-support.version> <!-- WARN WARN WARN!! -->
{% endhighlight %}

Neah huh? But there's a big ``WARN`` sign in there, why's that?

Say the release of H2 Support is broken in any way (in theory it should never happen, but in practice it might happen). Then it might be a bit unfortunate if your poms rely on H2 Support and Alfresco to have exactly the same version. So, while the above should work in most cases, the preferred way to include H2 Support in your project is still as follows:

{% highlight xml %}
    <h2-support.version>4.2.0</h2-support.version> <!-- much better! -->
{% endhighlight %}

Plans for the future
====================

In the future we plan to have a different strategy to bring H2 Support for Alfresco. Currently, we simply copy all the PostgreSQL in an H2 friendly package, so that the internal Alfresco machinery will automatically find them. Then, H2 compatibility mode is used to make the PostgreSQL dialect understood by the H2 driver. That's obviously suboptimal, and we will research methods to skip shuffling files around, but rather override the Alfresco SQL files locator strategy. The new strategy should provide a better integration with any Alfresco release, and we might very well need not new H2 Support releases per Alfresco version.

If you'd like to help us realizing this integration sweet spot, you're so much welcome to joink the H2 Support crew!
