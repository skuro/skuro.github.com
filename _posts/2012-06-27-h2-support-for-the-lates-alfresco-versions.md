---
title: H2 support updated to the latest Alfresco versions
layout: post
primary_img: /img/post/h2-logo.png
categories: [alfresco, alm, h2-support]
meta-description: H2 support released two new versions to back up Alfresco v4.0.1 and v4.0.2
---

**tl;dr:** two new releases of [H2 Support](https://github.com/skuro/alfresco-h2-support) are available, to support both Alfresco v4.0.1 and v4.0.2 Enterprise edition

Time flies, and (good) software always keeps a fast development pace. This applies to [Alfresco](http://www.alfresco.com), which released a couple of Enterprise versions since I last updated the [H2 Support](https://github.com/skuro/alfresco-h2-support) module. Promptly, [Piergiorgio Lucidi](https://twitter.com/#!/pjlucidi) [found out](http://code.google.com/p/maven-alfresco-archetypes/issues/detail?id=94) that the latest H2 Support version was incompatible with Alfresco v4.0.2. Time for a new release.

Double rainbows
---------------

Last time I released H2 Support Alfresco was still on v4.0.0, with v4.0.1 and v4.0.2 already released in the meanwhile. The effort to upgrade H2 Support is fairly trivial, as it only requires some diff&merge of DB related configuration from the original Alfresco codebase to H2 Support sources. Hence, not one but **two** releases of H2 Support were issued today, namely

 * [v1.4](https://github.com/skuro/alfresco-h2-support/tree/v1.4) -- H2 Support for Alfresco v4.0.2

 * [v1.3](https://github.com/skuro/alfresco-h2-support/tree/v1.3) -- H2 Support for Alfresco v4.0.1

As usual, please refer to the [official documentation](https://github.com/skuro/alfresco-h2-support/wiki/H2-Database-support-for-Alfresco) for matching H2 Support and Alfresco versions.

Availability on Central
------------------------

The new releases are already available on OSS Sonatype [maven repository](https://oss.sonatype.org/content/groups/public/tk/skuro/alfresco/h2-support/). Give it enough time and they'll end up in Maven Central.
