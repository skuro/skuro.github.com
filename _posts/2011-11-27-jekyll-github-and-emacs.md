---
title: Jekyll, Github and Emacs
layout: post
categories: [blog, emacs]
primary_img: http://skuro.tk/img/post/emacs-txt-logo.png
meta-description: Hosting a personal [Wordpress](http://wordpress.org/) was not the best option I had. I happily moved to a static Jekyll site hosted on Github, and I explain here why.
---

> **tl;dr:** I moved from Wordpress to [Jekyll](github.com/mojombo/jekyll), you can now find the sources for this blog on [Github](https://github.com/skuro/skuro.github.com)

It has been a great adventure to host my blog on a private machine for [more than two years](http://skuro.tk/2009/10/20/home-sweet-home/). Setting up everything, in a pure DIY fashion, has been instructive and a funny journey. Unfortunately, there were a number of reasons why a privately hosted [Wordpress](http://wordpress.org) instance was not optimal anymore.

I also gave the whole blog a new look, shamelessly copying much of [Zach Holman](http://zachholman.com) design, I think it greatly improves readibility. Feedback welcome!

Going down
----------

It first happened at the beginning of this year that [one of my posts](http://skuro.tk/2011/01/24/performance-boost-in-clojure-1-3) attracted a good deal of attention. While it wasn't really that big thing, 2k requests/hour were enough to drain every bit of available memory my VPS had to offer, thus repeatedly killing my whole [LAMP](http://en.wikipedia.org/wiki/LAMP_(software_bundle)) system down. It has to be noted that I'm no PHP nor Wordpress expert, and I was also so sloppy to let every single [apache](http://httpd.apache.org/) process (-> request) suck up to a round 20MB. No wander my machine went down, and while I was able to finally handle 1k request/hour order of magnitude [several](http://skuro.tk/2011/09/04/clojure-makes-it-the-alfresco-devcon-2011-emea-london) [times](http://skuro.tk/2011/09/27/october-amsterdam-clojure-with-uncle-bob) [later](http://skuro.tk/2011/11/10/slides-from-alfresco-the-clojure-way) on, it was everytime on the edge of the catastrophe. It was clear to me that my Wordpress blog was to be replaced.

Note: I'm not saying LAMP + Wordpress is not a good option for a personal blog, it just wasn't an attractive option for me to get into the details of how to make it robust enough in my case.

Static content
--------------

PHP allows for highly dynamic content via server side rendering. Cool, but does a blog *really* need such power? The reality is that most of the pages served by a blog are the same almost all the time.Apart from when you create a new post, there's hardly any difference in a page in its whole lifetime. All the [features](http://news.ycombinator.com/item?id=896744) you might get out of a blog engine such as Wordpress are in my case of no real use.

Static content was appealing from a number of reasons: lightweight, plain HTML and resources (JS, CSS). The whole site fits in my mental picture quite easily. I needed only a thin layer that would allow me to use a more convenient interface to the presentation layer than HTML.

Github Pages and Jekyll
-----------------------

I did some initial experiments with a fully custom [Clojure](http://clojure.org) blog engine, where I explored various combinations of [Compojure](https://github.com/weavejester/compojure/wiki), [Noir](http://webnoir.org/), [Hiccup](https://github.com/weavejester/hiccup), [Enlive](https://github.com/cgrand/enlive), etc. While it was a nice exercise, it was really more of a technical exercise which wasn't getting me nowhere, as I kept running in circles while picking up new technologies every other day. [Github Pages](http://pages.github.com/) was there, tempting me all along the way: I already loved [Git](http://git-scm.com/) and [Markdown](http://daringfireball.net/projects/markdown/), and delegating the whole infrastructure to Github was eventually tackling the very core of my original issues with hosting my own blog. It was when I found a great [migration guide](http://vitobotta.com/how-to-migrate-from-wordpress-to-jekyll/) that I couldn't deny anymore Github hosted [Jekyll](github.com/mojombo/jekyll) was the best option I had.

Emacs, of course
----------------

Migrating to Jekyll took just a couple of days, I even wrote my first Ruby [code](https://github.com/skuro/skuro.github.com/blob/sources/_plugins/categories.rb) ever. Everything looked pretty promising, but I needed an extra step: there was no point in having a plain text interface if I couldn't use the [Almighty Emacs&trade;](http://www.gnu.org/s/emacs/) editor as the main interface to my blog. Sure thing, I wasn't the first to think so, and I promptly found an [initial implementation](http://metajack.im/2009/01/02/manage-jekyll-from-emacs/) I could use to start walking the Emacs way.

Needless to say, I'm writing this very post from Emacs. And it feels good.

Conclusions
-----------

With this first post I just started feeling the good parts of my new setup. There are huge areas of improvements here and there, but hey, for just a 4 days job I can't be more happy!
