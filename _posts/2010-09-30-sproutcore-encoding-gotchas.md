---
layout: post
title: "SproutCore encoding gotchas"
categories: [javascript]
primary_img: /img/post/sproutcore.png
---

These days I'm trying out <a title="Sproutcore homepage" href="http://www.sproutcore.com/">SproutCore</a>, an MVC framework written in Javascript that aims to help developing rich client web applications. I'm not going to entertain you with any juicy technical spotlight, as they'll hopefully find their way in these pages later on with plenty of details. At the moment I'd like to share a little problem I got stuck with that had a non trivial solution<del datetime="2010-09-28T20:03:47+00:00">,  at least for the noob I am</del>.

First thing you have to know is that SproutCore ships with both a rich <a title="SproutCore source code" href="http://github.com/sproutcore/sproutcore">Javascript library</a> and a set of building tools written in ruby, which go under the code name of <a title="Abbot source code" href="http://github.com/sproutcore/abbot">abbot</a>. New projects kickstart, <a title="sc-gen" href="http://wiki.sproutcore.com/Abbot+Spec+sc-gen">scaffolding</a>, <a title="sc-docs" href="http://blog.sproutcore.com/post/150789672/now-available-sproutcore-1-0-reference-docs">automatic documentation</a> are among the features that abbot provides you with, along with the ability to <a title="sc-server" href="http://wiki.sproutcore.com/BuildTools-Reference+sc-server">run you application</a> on a local web server during development. Sounds cool, isn't it? And I didn't even mention it's integrated <a title="unit tests" href="http://wiki.sproutcore.com/UnitTesting-Introduction">unit testing</a> facility!

I immediately tried to give it a shot, and ran through <a title="Todos tutorial" href="http://wiki.sproutcore.com/Todos%C2%A0Intro">one of the tutorials</a> to write down my first HelloWorld. The first pieces got into place, and after the first quick round I left my hello world project in such a state that I already decided to build a simple but complete application right away. How arrogant.

The second day something Bad™ happened, I cannot really tell what, but <a title="#fail" href="http://gist.github.com/597780">everything</a> started <a title="#fail" href="https://gist.github.com/f2a107a3a0a2cd49e4e5">to fall apart</a>: no one tool in the abbot suite worked properly, I was no more able to get any further and I started a painful journey of which I only remember installing and changing between zillions of ruby versions, crying and considering to give up with IT and to start my own religion to make a living.

But then I simply resorted to the #sproutcore IRC channel and I got the tip that saved the day (thanks <a title="my saviour" href="http://www.flashesofpanic.com/">pjmorse</a>!):

<code>export LC_CTYPE=UTF-8</code>

"Boom baby!" I said, everything got back to normality. I can save my holy plans for a rainy day. It seems that encoding is an <a title="#fail" href="http://www.taylorluk.com/2009/08/ruby-19-encoding-gotcha-retreat-to-ascii-8bit">endless</a><a title="#fail" href="http://gnuu.org/2009/11/02/ruby-1-9-encoding-issues-again/"> source</a> of <a title="#fail" href="http://stackoverflow.com/questions/3597255/why-does-my-sproutcore-development-server-drop-connections-with-invalid-byte-seq">issues</a> in the ruby world, so that probably if you have any ruby knowledge whatsoever this all rant might just seem pointless and the solution trivial.

Next episode on SproutCore (if everything goes well): a sample SproutCore + Clojure application. See you there!
