---
title: The Observer Pattern in Spring
layout: post
primary_img: /img/post/observer.png
categories: [java, spring, patterns]
meta-description: The Observer Pattern in a Spring application
---

Observers in Spring
===================

> To the man-in-the-street, who, I'm sorry to say,  
> Is a keen observer of life,  
> The word "Intellectual" suggests straight away  
> A man who's untrue to his wife.  
>
> -- W.H. Auden

The Observer pattern is a very basic one out of the GoF bible which is unbelivably easy to implement and still quote
powerful so use. Here I present my take on it using the Spring observer pattern which I found quite helpful in designing
extension points for my software.

Core classes
============

Pushing back the little NIH devil whispering in my ears, I started by reusing the standard building blocks for the
Observer pattern: `java.util.Observable` and `java.util.Observer`. The Observable class provides the logic to handle a
registry of Observers, and to propagate updates (I prefer to think more of in terms of events) to all of the registered
Observers.

In the context of a Spring container, there will be beans to configure and hook together, and it's key to this exercise
to find a flexible and handy way to connect things together.

Automatic registration
=====================

Supporting code for this blog post can be found on [GitHub](https://github.com/skuro/spring-observer).

When developing a Spring application you're always instantiating your classes as singletons within the Spring container.
Annotations or XML configurations will take care  of initialize instances of your classes, wiring them together in a
connected graph of objects with loose dependencies on the specific concrete classes you adopt in your code.

As you will always have to declare beans, it would be nice to let Spring wire obects for you in an Observer fashion,
with a minimal coding effort required. The most minimalistic approach I could think of is to just require developers to
declare their observer beans, and put in place enough machinery to automatically hook them to an Observable provided by
the application. In this example I create a `ObserverBeanPostProcessor` and a `SpringObserver`
tagging interface to identify which beans are actually declaring valid Observers, and register them automatically.

To complete the picture, the `SpringObservable` interface declares which `Observer` class it's able to notify, thus
leveraging the tagging interface and letting the `ObserverBeanPostProcessor` know which beans to filter and registser.

This enables a software component to provide the desired `SpringObservable` and the `ObserverBeanPostProcessor` beans, where
consumers of such API will be only required to instantiate their `Observer` beans.

Note that `Observers` can be themselves `Observables`, so that you can easily construct chains of beans in which events
will be propagated. As long as you ensure not to form any cyclic graph, of course.

Conclusions
===========

In object oriented languages such as Java, patterns are a powerful tool to apply. The Observer is a neat strategy for
cascading changes on objects, or just to propagate events through a series of processors. All in a clean, loosly coupled
fashion.

The code here is just a proof of concept, not a library which is intended for production use. The concepts and the
implementation are easy enough to be applied in your Spring application without any need for depending on this code.
