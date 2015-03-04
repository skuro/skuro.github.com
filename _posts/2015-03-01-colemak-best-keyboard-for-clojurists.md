---
title: The best keyboard layout for Clojurists
layout: post
primary_img: /img/post/keyboard_alien.jpg
categories: [clojure, keyboard, colemak]
meta-description: If you're a programmer, you spend most of your working life on your keyboard, and a good keyboard layout can make the difference between touch typing and carpal syndrome. In this post some preliminary (and intentionally teasing) results for electing the best keyboard layout for Clojure programmers.
keywords: [clojure, programming, colemak, keyboard]
---

Keyboards, oh my!
=================

If you're a programmer, you spend most of your working life on your keyboard, and a good keyboard layout can make the difference between touch typing and carpal syndrome.

That, and an irresistible drive for being the alpha nerd around, pushed me to teach myself [Colemak](http://colemak.com/).

It was painful and frustrating at the beginning, when I saw my typing speed precipitating from a respectable 80 words per minute to a horrific 20wpm. But now, now that touch typing has no mysteries for me on this mystical keyboard, now I got beyond my past self, recently crushing the 90wpm milestone. Hooray!

`(def best)`
============

In this data driven world, we constantly need to verify whether the decisions we make are still valid, and therefore the question: would Colemak be the best keyboard for me? Am I losing by sticking with the wrong choice? And would I be even willing to switch again keyboard layout in the foreseeable future?

While the answer to the last question is a roaring ["NO!"](http://images.sodahead.com/polls/003657975/125779928_Noooooooooooooooo_answer_1_xlarge.Peg), I needed to know. I needed data. But how?

Well, first things first, I type lots of [Groovy](http://groovy.codehaus.org/) and [Clojure](http://clojure.org/) these days. But I don't care for the former language, my heart is really about my dear lispy friend. I just had to find a way to produce an automatic comparison, surely enough, here it is: the [Keyboard Layout Analyzer](http://patorjk.com/keyboard-layout-analyzer/), courtesy of [Patrick Gillespie](http://patorjk.com/).

I love the Internet.

The winner is..
===============

Aaaaand here it is: a comparative analysis of what keyboard is the best for Clojure Developers&#8482;, after feeding the analyzer with [`clojure/core.clj`](https://github.com/clojure/clojure/blob/master/src/clj/clojure/core.clj), with its impressive 7447 lines of code:

![Test results](/img/post/colemak_clj.png)

Now you know. Now it's official.

Happy touch typing, everyone!

p.s.: you can read the details of the comparison [here](http://patorjk.com/keyboard-layout-analyzer/#/load/D40PQ0hB)
