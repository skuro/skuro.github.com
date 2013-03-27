---
title: H2 support 1.1.1 for Alfresco 3.4.12 Enterprise with Maven
layout: post
primary_img: /img/post/h2piechart_2.png
categories: [alfresco, h2support, maven, sonatype]
meta-description: The maintenance version 1.1.1 of Alfresco H2 support module now supports Alfresco Enterprise 3.4.12
---

Just a quick update on the [H2 support](https://github.com/skuro/alfresco-h2-support)
project, today I released the `1.1.1` maintenance version which targets
Alfresco v3.4.12 Enterprise.

Please make sure you always double check the [official documentation](https://github.com/skuro/alfresco-h2-support/wiki/H2-Database-support-for-Alfresco)
to pick and choose the right version to use in your Alfresco project.

H2 and Maven
============

For ~~the sane~~ those among you that use the [Maven SDK](https://artifacts.alfresco.com/nexus/content/repositories/alfresco-docs/alfresco-lifecycle-aggregator/latest/index.html),
you should know that `H2 support` is used to quickly boot the Alfresco repository
webapp during your development cycles.

If you're using a version of Alfresco other than the default 4.x that's assumed
by the SDK, you must also adapt your H2 support version to be able to start up
Alfresco. It's as easy as overriding the following maven property:

    <h2-support.version>1.1.1</h2-support.version>

Happy development!
