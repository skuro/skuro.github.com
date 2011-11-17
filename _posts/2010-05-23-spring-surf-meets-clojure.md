---
layout: post
title: "Spring Surf meets Clojure"
primary_img: /img/post/clojure-surf.png
categories: [clojure, alfresco]
---

For those who missed it, some time ago the <a href="http://www.alfresco.com/">Alfresco</a> guys <a href="http://www.alfresco.com/media/releases/2009/12/spring_surf/">donated</a> their <a href="http://wiki.alfresco.com/wiki/Surf_Platform">Surf Platform</a> to <a href="http://www.springsource.com/">SpringSource</a>, giving birth to the now-called <a href="http://www.springsource.org/extensions/se-surf">SpringSurf</a>, which is thereby described as:
<blockquote>a view composition framework for Spring MVC that plugs into your existing Spring applications. It provides a scriptable and content-centric approach to building web applications.</blockquote>
I'm not going to introduce you how to use this yet-another MVC framework, but Michael Uzquiano provided an <a href="http://blogs.alfresco.com/wp/uzi/2009/11/03/using-surf-in-your-spring-apps/">awesome blogpost</a>, in case you were interested into learning more about it.

Part of the job of this Spring Surf framework is to provide an easy to use web scripting framework, REST like, that enables you to easily put together a View and, optionally, a Controller to implement a web API, provide them in the classpath together with a small XML descriptor, and your REST API is deployed right away. In the SpringSurf parlance, this is called called WebScript. Again, technical insights about the framework are better explained <a href="http://blogs.alfresco.com/wp/webcasts/2010/01/introducing-spring-surf-and-spring-web-scripts/">elsewhere</a>, so no repetitions here. What I think is cool about Spring Surf, and I'm here with you to discuss, is it's multi-language focus: web script Controllers can be written in Javascript, PHP or Groovy right out of the box, allowing you to choose whichever language you prefer. Moreover, if you just peek at Spring Surf <a href="https://anonsvn.springframework.org/svn/se-surf/tags/release-1.0.0.M3/spring-webscripts-addons/">source code</a>, plugging in support for new languages doesn't look so hard, so I decided to challenge myself and write support for Clojure backed webscripts. You can find the result of my efforts on <a href="http://github.com/skuro/spring-webscripts-addon-clojure">github</a>, with a sample webscript that proves the concept.

Following the webscript framework praxis, a <em>model</em> map object is passed around that acts as a container for whichever result your computation will produce, that will at the end handed over to a view rendition engine, <a href="http://freemarker.sourceforge.net/">Freemarker</a> in our case, to build the resulting document. Webscripts are intended to support a number of different output formats, from JSON to XML to plain text, so being generic here is not an option.

Anyway, the first thing you usually do is to populate the <em>model</em> map with a number of objects that will be needed by the rendering engine to build the response. To support this use case, this first implementation of the Clojure backend for Spring Surf webscripts expects your Clojure "script" to yield a map, in Clojure sense. This map will be then forwarded to a Freemarker template and used to build a webpage or whatever the user asked for, i.e. this controller:

    (ns web.script.test)

    {:foo "bar"}

and this freemarker template:

    foo: ${foo}

will provide "foo: bar" back to the client.

This is just an experiment at the moment, and far from being production-quality stuff. Still, it has been instructing to build a  Java-to-Clojure integration, and nonetheless it might come in handy when I'll be trying to put more Clojure in my working life.

(bye)
