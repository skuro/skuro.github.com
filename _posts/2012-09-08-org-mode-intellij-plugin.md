---
title: org4idea adds org-mode support to Intellij IDEA
layout: post
primary_img: /img/post/org4idea.png
categories: [clojure, emacs, orgmode, intellij]
meta-description: Initial support for org-mode in IntelliJ IDEA
---


*tl;dr:* [org4idea](https://github.com/skuro/org4idea) is a brand new
 project to add [org-mode](http://orgmode.org) support to [IntelliJ IDEA](http://www.jetbrains.com/idea/)

A coin with two sides
---------------------

Given the gargantuan size of the feature list of
[org-mode](http://orgmode.org/), there's hardly any competition of
note taking systems for hackers. I'm completely sold on it since long
time already, so much that
[uptime(1)](http://unixhelp.ed.ac.uk/CGI/man-cgi?uptime) returns
always a quite precise approximation of the Emacs process lifetime.

While such setup makes for a merry and seamless experience while
hacking on my [Clojure](http://clojure.org/) projects, the dream
breakes when I move to work on Java code, where I shall have no other
IDE besides [IntelliJ IDEA](http://www.jetbrains.com/idea/).

Baby steps
----------

As there's no better way than a quick hacking session to start the
weekend, I eventually decided to take some time to put together a
minimal plugin to support editing org files within IntelliJ: a few
hours later [org4idea](https://github.com/skuro/org4idea) landed on my
GitHub account. It's a ridiculously tiny plugin at the moment, only
providing syntax highlight for comments and outlines.

While I'm
not planning to support all the features and plugins of org in
IntelliJ you can safely bet I'll be adding new features with time. You
can always open an [issue](https://github.com/skuro/org4idea/issues)
to try to buy some karma points to that specific feature you desperately
need to be implemented (well, in such cases you could also realize you're just
one fork away).

Installation
------------

While the plugin still awaits approval in the official
[repository](http://plugins.intellij.net/plugin?pr=&pluginId=7095) you
can manually install the plugin by downloading [org4idea.jar](https://github.com/downloads/skuro/org4idea/org4idea.jar)
and feed it to the *Settings -> Plugins -> Install plugin from disk*
dialog.

Happy GTD!
