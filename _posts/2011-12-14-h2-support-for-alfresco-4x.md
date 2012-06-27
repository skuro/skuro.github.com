---
title: H2 support updated for Alfresco 4.x
layout: post
categories: [alm, alfresco, h2-support]
primary_img: /img/post/alfresco-h2.png
meta-description: Alfresco 4 heavily changed the database configuration and scripts. This required an update of the H2 support module
---

H2 Support reloaded
-------------------

Some time ago I [announced](/2011/08/03/h2-embedded-db-and-alfresco-3-4/) a [module](https://github.com/skuro/alfresco-h2-support) to enhance [Alfresco](http://www.alfresco.com) in order to support H2 as its persistent data storage. While it was successfully tested against Alfresco v3.4 and v3.5, [@mindthegab](http://www.mindthegab.com) pointed me out that Alfresco v4.x wasn't even starting when using the H2 module. 

A quick look at the PostgreSQL scripts and configuration of Alfresco 4 revealed that they were indeed radically changed in the new release, so that an update was necessary. 

Matching versions
-----------------

Since 3.4+ and 4.x version series have quite different configuration, you need to use a different version of the h2 module depending on the Alfresco version you're running, namely:

<table>
    <tr>
      <th>H2 module</th><th>Alfresco versions supported</th>
    </tr>
  <tbody>
    <tr>
      <td>1.1</td><td>3.4+</td>
    </tr>
    <tr>
      <td>1.2</td><td>4.x</td>
    </tr>
  </tbody>
</table>

The artifacts for both versions are available on [clojars](http://clojars.org), please refer to the official documentation for the usage guide.
