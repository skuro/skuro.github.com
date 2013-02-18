---
title: A svn post commit hook to comment on Jira
layout: post
primary_img: /img/post/jirasvn.png
categories: [subversion, jira, development, software]
meta-description: Here I explain the Subversion post-commit hook I developed to integrate with Jira OnDemand
---

If I had to pick a single thing that really bothers me of [Jira OnDemand](https://confluence.atlassian.com/display/AOD/JIRA+OnDemand)
is that it [doesn't support our hosted svn](https://jira.atlassian.com/browse/AOD-710) in any
possible way.

The biggest pain developers like me have without any basic integration between the VCS and the ticketing system is that any time you have to
test an issue, perform some code reviews, sort out some merging or simply digging the history of a given piece of code, it wastes your time to
switch between all of your unconnected tools to accomplish your task. As an example, at [Backbase](http://www.backbase.com) we use
[Trac](http://trac.edgewall.org/) to look at our code on a browser, and we end up having to type URLs by hand to switch on and off Jira.

How hard could it be to simply *link* Jira to our commits?

A hint to the solution
----------------------

Looking at a way to fix this issue, I first had an intuition: what our Jira *does* support are web links to an issue. Trac is
just another web site, why can't we use application links instead of listing the commit messages as Jira comments? After all,
there's a [rich API](https://developer.atlassian.com/display/JIRADEV/JIRA+REST+API+for+Remote+Issue+Links) that I can use to
script the hell out of our commits! It literally took me 40 minutes to come up with the following:

<script src="https://gist.github.com/skuro/4981464.js"></script>

It currently features:

* creates a *Related commits* link on each Jira issue mentioned in your commit comment
* multiple Jira keys in the same commit message supported

That's it. Not an impressive list of features, but enough for 40m hacking on bash scripts. When we'll have this hook installed
in our svn server, we can easily go from the Jira issue to all the diffs associated with it.

This facilitates code reviews and
issue verification or analysis at a later stage, enormously simplifying the life of every developer by providing that dead-simple
integration that Atlassian doesn't want to provide out of the box.

I understand the performance reasons behind avoid fully integrating
on-premise svn with OnDemand instances. Still, they could do much, much better than say they're sorry and live their customers
lives being miserable because of it.
