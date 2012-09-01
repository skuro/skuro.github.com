---
title: Slides from Dispatch in Clojure
layout: post
primary_img: /img/post/newflag.png
categories: [meetup, clojure, presentation, slides]
meta-description: Slides from the Dispatch in Clojure presentation I gave at the Amsterdam Clojurians August 2012 meetup
---

Presentation slides
-------------------

A bit late, and already announced
[elsewhere](https://twitter.com/skuro/status/233285542769487875), but
here you can find the slides from the *Dispatch in Clojure*
presentation I gave at the
[August 2012 meetup](http://www.meetup.com/The-Amsterdam-Clojure-Meetup-Group/events/73689122/)
of the
[Amsterdam Clojurians](http://www.meetup.com/The-Amsterdam-Clojure-Meetup-Group/)
group. Hopefully it will ease you bearing to wait for the [October
Amsterdam Clojure](amsclj.nl/october.htm) event later in October :-)

The code samples I used in the presentation are available on [GitHub](https://github.com/skuro/clj-dispatch).

<iframe src="http://www.slideshare.net/slideshow/embed_code/13915010" width="427" height="356" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC;border-width:1px 1px 0;margin-bottom:5px" allowfullscreen> </iframe>

The story behind
----------------

In a previous meetup a discussion arose about
[protocols](http://clojure.org/protocols) and how they relate to
[mixins](http://en.wikipedia.org/wiki/Mixin) in other languages such
as [Ruby](http://www.ruby-lang.org/en/). A quick mention to virtual
methods dispatch table was enough to let my head spin around all the
details I was missing on low level Clojure mechanics. A presentation
was due.

What's in
---------

What I was curious about, and eventually ended in the presentation, is
how Clojure implements function calls and method dispatch from both a
low level JVM and high level language syntax perspectives, and how
they relate to each other. What's (briefly) covered in the
presentation:

- JVM bytecodes used for method call
- plain [function call](http://clojure.org/functional_programming) in Clojure
- [multimethods](http://clojure.org/multimethods)
- [protocols](http://clojure.org/Protocols)

What couldn't be entered in the presentation is the interesting
digressions we had during the meetup using an open REPL, some sample
projects and a Java decompiler. 

Video recordings are still a pending TODO in the meetup list, so if
you're around Amsterdam make sure you come and [join us](http://www.meetup.com/The-Amsterdam-Clojure-Meetup-Group/) for some other
awesome Dutch Clojure nights!
