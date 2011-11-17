---
layout: post
title: "Performance boost in Clojure 1.3 (alpha4)"
categories: [clojure]
---

As release 1.3 of Clojure is <a href="http://www.assembla.com/spaces/clojure/milestones/238781-release-next">on its way</a>, I decided to give the currently available alpha4 a try and see some of the good stuff it brings. First thing first, I wanted to experiment myself with the performance gain that the extended support for native types would bring. I ran into an old <a title="old post, but inspirational" href="http://hughw.blogspot.com/2009/01/clojure-vs-javafx-script-only-5x-slower.html">post</a> from which I got the inspiration for the specific test to run: the <a title="Takeuchi function on Wikipedia" href="http://en.wikipedia.org/wiki/Tak_(function)">Takeuchi function</a>.

<img class="aligncenter size-full wp-image-340" title="Full disclosure: I own a Triumph Street Triple and I love Clojure" src="/img/post/clj-triple.jpg" alt="Full disclosure: I own a Triumph Street Triple and I love Clojure" width="375" height="322" />

The Java implementation for Tak provided me with a bottom line for performance comparison:
<script src="https://gist.github.com/788834.js?file=Tak.java"></script> Then I used the Clojure version provided in the original blog post run to test against Clojure 1.2: <script src="https://gist.github.com/788834.js?file=tak2.clj"></script>

Finally, I leveraged the new syntax for the <a href="http://dev.clojure.org/display/doc/Enhanced+Primitive+Support">enhanced primitives support</a> to test against Clojure 1.3 (thanks to <a href="http://twitter.com/neotyk">neotyk</a> to point that out to me):
<script src="https://gist.github.com/788834.js?file=tak.clj"></script>

As you can see, timing is tracked from the application code, as various accessory overhead like JVM and Clojure runtime bootstrap are not in the scope of this post.

As this benchmark is "just for fun", I won't pretent I did an extensive benchmark, or that I engineered a bullet proof benchmark strategy and the like. I just ran the above code some tens of times and here follows the average running time for the three versions:

<span style="color: #ff0000;">NOTE: an updated benchmark is provided down below</span>
<span style="color: #ff0000;">NOTE2: to have a more fair performance comparison, <a href="#reloaded">keep reading</a></span>
<img class="aligncenter size-full wp-image-344" title="Benchmark results" src="http://www.skuro.tk/wp-content/uploads/2011/01/clj-bench-graph.png" alt="Average running time in ms" width="467" height="292" />

The results tells of a <strong>~4.5x</strong> speed gain, <del datetime="2011-01-26T09:59:07+00:00">getting close to match plain Java code performance</del>.

Now, even if such a benchmark won't be any news to the Clojure community, it's still <strong>absolutely awesome</strong> to see such a performance gain in the next release of this beautiful Lispy language :-)

<strong>Update: </strong>following the advice by <strong>Jürgen Hötzel</strong> in his comment, I slightly modified my Clojure sources to change <span style="font-family: monospace;"><a href="http://clojure.github.com/clojure/clojure.core-api.html#clojure.core/-">clojure.core/-</a></span> with <span style="font-family: monospace;"><a href="http://clojure.github.com/clojure/clojure.core-api.html#clojure.core/unchecked-subtract">clojure.core/unchecked-subtract</a></span> and re-run the test. Here's the final results, which are way better for Clojure, especially for version 1.2:

<img class="aligncenter size-full wp-image-350" title="clj-bench-graph-unchecked" src="http://www.skuro.tk/wp-content/uploads/2011/01/clj-bench-graph-unchecked.png" alt="" width="493" height="302" />

<strong>Update 2:</strong> the following graph shows the impact of the direct use of the <span style="font-family: monospace;">recur</span> special form tested against plain recursive invocation of Tak, as per requested in some comments
<img class="aligncenter size-full wp-image-353" title="clj-bench-graph-norecur" src="http://www.skuro.tk/wp-content/uploads/2011/01/clj-bench-graph-norecur.png" alt="" width="476" height="267" />

<strong>Update 3:<a name="reloaded"></a></strong> even if this all started as a quick&amp;dirty, amatorial benchmark, it attracted quite some <a href="http://news.ycombinator.com/item?id=2134950">attentions</a>, demanding more fair and precise benchmarks, especially on the Java vs Clojure comparison. As in the Java version of Tak I used Integers and not primitive types, there is an unfair burden Java had to carry along the computation. The following is the result of a re-run of the test for Java (using primitive <span style="font-family: monospace;">long</span>) and Clojure 1.3:
<img class="aligncenter size-full wp-image-356" title="clj-bench-reloaded" src="http://www.skuro.tk/wp-content/uploads/2011/01/clj-bench-reloaded.png" alt="" width="463" height="272" />
