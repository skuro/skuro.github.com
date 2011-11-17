---
layout: post
title: "Maven 3 Cookbook reviewed"
---
<a href="http://www.packtpub.com/apache-maven-3-0-cookbook/book"><img class="aligncenter size-full wp-image-399" title="Apache Maven 3 Cookbook" src="http://www.skuro.tk/wp-content/uploads/2011/09/Apache-Maven-3-Cookbook.png" alt="" width="125" height="152" /></a>

Better late than ever, here you can find my review on the <a href="http://www.google.nl/url?sa=t&rct=j&q=packt&source=web&cd=1&ved=0CCkQFjAA&url=http%3A%2F%2Fwww.packtpub.com%2F&ei=2VbCTq6qHsjs-gbEzZD_DQ&usg=AFQjCNE3QDtLQQneLEduZpKvWcyN8Bp3kg&sig2=AHMqZnDXQwCV5prbVMayGQ">Packt Publishing</a> book <a href="http://www.packtpub.com/apache-maven-3-0-cookbook/book">"Apache Maven 3 Cookbook"</a> written by <a href="http://srirangan.net/">Sriragan</a>. Let's see what it has to offer.

<h3>The basics</h3>
The author aims to talk to Maven, and possibly <span title="Application Lifecycle Management">ALM</span>, illiterates. This means the first step is to allow the reader to bootstrap his build infrastructure. This is one of the main Maven features, and the first chapters are easily leaping from nothing to a QA and TDD enabled build system. The book exploits Maven magic all the way there, and goes really fast to the target, no time for digressions on how, why or how does it compare with other build systems.

<h3>The ALM</h3>
Chapter 3 it's a bit off topic, even though it's probably for the greater good: it broadens the attention to ALM as a whole, all on open source products such as Hudson/Jenkins, SCM and a bit of agile. The topic is so huge that one single chapter cannot afford to cover it extensively, nor effectively: take it as an introduction to software lifecycle management, and dig somewhere else if you want more (and you definitely want). Chapter 4 indulges a bit more in QA and non functional build features, such as documentation and reporting. After all, the real mission of Maven <strong>is</strong> ALM.

<h3>The Meat</h3>
Chapters 5 to 9 form the really juicy part of the book. I'm not going to rewrite the <a href="http://www.packtpub.com/toc/apache-maven-3-cookbook-table-contents">TOC</a> here, but it's definitely a rich set of handy recipes that can either directly target common needs or provide inspirational snippets that will effectively help you writing your POM. Good marks for the attention to languages other than Java (but bad marks for forgetting <a href="https://github.com/talios/clojure-maven-plugin">Clojure</a>!).

These chapters offer much more value than the previous, as they're better aiming at developer needs. Still, focus could have been more towards existing Maven users, leaving the newbies to better learning paths.

<h3>Overall impression</h3>

<br />

<p style="background-color: #ddd; padding: 2px"><strong>tl;dr:</strong> If you are already a Maven literate, it's a book you probably want to have close to your keyboard. Just forget about the first three or four chapters.
</p>


The book is an authentic source of good base recipes, that you would keep on your desk for quick reference of specific build tasks you need to implement (and your Google foo is weak). All the recipes are provided with a little description of what happens under the hood, so that you may use such knowledge to build upon them your more complex procedures. The whole focus on the book is on getting things done, with
lesser attention to fully understanding Maven: after all, a recipes book cannot replace a cooking course. As a result, its tutorial style of presenting recipes completely overlooks fundamental concepts such as plugins, executions and goals, with seldom sloppy terminology ("archetype:generate" is a goal, not a command). While it can be good to always have this book on your desk, if you're a Maven newbie it's highly recommended to look somewhere else to build up your knowledge.

<h3>Full disclosure</h3>
I was asked by Packt to provide this online review, for which I've been handed over a digital preview of the book.