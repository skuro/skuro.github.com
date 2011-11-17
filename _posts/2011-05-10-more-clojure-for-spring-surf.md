---
layout: post
title: "More Clojure for Spring Surf"
primary_img: /img/post/spring-p-clj.jpg
categories: [alfresco, clojure]
---

After some time from my <a href="http://www.skuro.tk/2010/05/23/spring-surf-meets-clojure">initial announcement</a>, I've started again working on my <a href="https://github.com/skuro/spring-webscripts-addon-clojure">Clojure addon for Spring Surf</a>. While it's still a rudimentary piece of glue code, it's now getting better and better, so much that I decided it's good enough now to release an alpha version on <a href="http://clojars.org/it.sk.spring.surf.clojure/spring-webscripts-addon-clojure">clojars</a>. Here's what this library currently provides:
<ul>
	<li>a <a href="https://github.com/skuro/spring-webscripts-addon-clojure/blob/master/src/main/java/org/springframework/extensions/webscripts/processor/ClojureScriptProcessor.java">ScriptProcessor</a> that allows webscript controllers to be written in Clojure</li>
	<li><a href="https://github.com/skuro/spring-webscripts-addon-clojure/blob/master/src/main/clojure/spring/surf/webscript.clj">a <em>WebScript</em> protocol and some utility functions</a> to ease development of your own web scripts</li>
	<li>enough <a href="https://github.com/skuro/spring-webscripts-addon-clojure/tree/master/src/main/resources/org/springframework/extensions/clj/webscripts">spring configuration</a> to enable this addon just by importing the provided contextes</li>
</ul>
The approach is indeed easy and hopefully straightforward: the idea is to have your WebScript clojure controllers return an instance of a concrete implementation of the WebScript protocol, which will implement the <em>run</em> method the way you like.

Here's the sample code from a <a href="https://gist.github.com/965008">gist</a> you might want to have a look at to better understand how to use this library:

<script src="https://gist.github.com/965008.js?file=sample.get.clj"></script>

You can also find other samples in the project <a href="https://github.com/skuro/spring-webscripts-addon-clojure/tree/master/src/test/resources/webscripts/test">tests</a>.

The next episode will be about <a href="https://github.com/skuro/lambdalf"><em>lambdalf</em></a>, an Alfresco AMP I've been initially developing to prove the Clojure surf addon works fine, but that is now growing to be a full blown project by itself: a Clojure API for Alfresco!

Stay tuned. <span style="color: #ffffff;">UVBRKNJTRFH7</span>
