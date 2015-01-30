---
title: Spring Environment is for initialization code only
layout: post
primary_img: /img/post/spring-by-pivotal.png
categories: [java, performance]
meta-description: Spring Environment is a handy interface towards your configuration, but as it introduces a performance hit it should be only used for initialization code
keywords: [java, performance, spring, benchmark, jmh]
---

Since version 3.1, the [Spring framework](https://spring.io/) offers an abstraction towards several different
sources through which you can easily configure your application: the [``Environment``](http://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/core/env/Environment.html).

In this post I describe a micro benchmark that I ran to prove that, while it's a convenient API if you're
using Spring in your application, it might introduce a performance penalty for which you should not use it
outside of your initialization code.

How it works
============

Before getting into the numbers, a quick digression on the internals of the ``Environment`` that are important
to this post.

From the documentation:

>> _Properties play an important role in almost all applications, and may originate from a variety of sources: properties files, JVM system properties, system environment variables, JNDI, servlet context parameters, ad-hoc Properties objects, Maps, and so on. The role of the environment object with relation to properties is to provide the user with a convenient service interface for configuring property sources and resolving properties from them._

So, you can use the ``Environment`` to have a common interface to properties provided with different strategies, using
a simple ``getProperty`` call to access the required value. Look at the following Groovy code:

```java
    @Component
    public class Greeter {

        private Environment environment

        @Autowired
        public Greeter greeter(Environment environment){
            this.environment = environment
        }

        def nickName(user) {
            environment.getProperty("user") // here be magic
        }

        def greet(user) {
            def nick = nickName(user)
            if (name == null) println "Hi, ${user}!"
                         else println "Hi, ${nick}!"
        }

    }
```

Now, I can specify nicknames in a properties file so that I can greet know users with a more familiar nick name,
still being able to salute also users which are not given a nickname. Neat, but how about performance?

The hidden Exception
====================

I got into this exercise while debugging a couple of slow pages in the website I'm working on: the
[destinations pages](http://www.klm.com/destinations/nl/en/search) of the KLM main site. While performance is generally
satisfactory, two pages were constantly giving above second response times. Definitely [too much](http://www.vm.ibm.com/devpages/jelliott/evrrt.html).

In our code, we were translating some country names into queriable keys for an external services. We also needed to override
an otherwise straightforward translation algorithm with very specific exceptions to the rule. The actual code was pretty much
like the above ``Greeter.greet(user)``, and a [Flight Recorder](http://docs.oracle.com/javacomponents/jmc-5-4/jfr-runtime-guide/run.htm) session
eventually provided us with the performance bottleneck (click to open):

<a href="/img/post/exceptions.png"><img style="width: 500px" src="/img/post/exceptions.png" /></a>

For 12 page refreshes we were silently throwing 140k+ exceptions. And exceptions are
[sloooooow](http://java-performance.info/throwing-an-exception-in-java-is-very-slow/), even if you just create them.

Looking at the top thrown exception, it was actually pretty
easy to understand what's going on: the ``Environment`` checks whether the requested property is defined in the current JNDI context. But, if the
name is not found, a [``NameNotFoundException``](http://docs.oracle.com/javase/8/docs/api/javax/naming/NameNotFoundException.html) is thrown. In our specific case we were using property lookup for *exceptional* cases,
which means the vast majority of cases resulted in an exception being thrown.

Micro benchmark
===============

I put together a [micro benchmark](https://gist.github.com/skuro/648cf1d871d203a73a0c) to evaluate the potential performance gain
of the original property lookup strategy versus a simpler one where relevant properties are loaded up at class construction time. I used the
[Java Microbenchmark Harness](http://openjdk.java.net/projects/code-tools/jmh/), which does an incredible job at making micro benchmarks
easy on the JVM: JIT, warm up, class loading, all is taken care of for you and you can just go ahead and put your code under test. Here the results
(higher numbers better):

>> [Property lookup per invocation]
>>
>> Result: 28917.876 ?(99.9%) 183.630 ops/s [Average] <br />
>> Statistics: (min, avg, max) = (25688.067, 28917.876, 30976.876), stdev = 777.500 <br />
>> **Confidence interval (99.9%): [28734.246, 29101.505]**

----

>> [Property loading at class construction]
>>
>> Result: 159062.900 ?(99.9%) 1013.309 ops/s [Average] <br />
>> Statistics: (min, avg, max) = (138707.926, 159062.900, 177183.549), stdev = 4290.413 <br />
>> **Confidence interval (99.9%): [158049.591, 160076.209]**

As expected, five times as fast.

Conclusions
===========

I'm not a big fan of Spring, but if you're using it the ``Environment`` class is a dead easy interface to your application configuration. But,
unless you're using JNDI as your main store of configuration  properties,
its performance characteristics make it a great tool only if you're using it in your initialization code, and not during on-line processing of
requests.
