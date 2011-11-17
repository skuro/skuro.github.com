---
layout: post
title: "Are you good at Javascript? #1"
categories: [javascript]
---
<img class="aligncenter size-full wp-image-224" title="javascript" src="/img/post/javascript.jpg" alt="javascript" width="627" height="126" />

I'm not, really. Still I've been debugging some JS code just to remember why I was not <a href="http://twitter.com/skuro/status/6367988240">so excited</a> in the past about the language: your code needs to cope with  browser specific crap.

Now, are <strong>you</strong> good at Javascript? If so, without running it, have a look at the following code:

    var array = [
      {
          key : 'value',
          foo : 'bar'
      },
      {
          key : 'eulav',
          foo : 'rab'
      },
    ];

    for (var i = 0 ; i &lt; array.length ; i++)
    {
      console.log (&quot;key -&gt; &quot; + array[i].key);
      console.log (&quot;foo -&gt; &quot; + array[i].foo);
    }

How many elements does the <code>array</code> variable holds?

That code actually hides an Evil&#8482; syntax detail I discovered today. Now, since I've been recently approached by the viral ideas of <a href="http://codemeself.blogspot.com/">somebody</a>, I felt compelled to fully understand the above code (and the bug we worked together from which this example came out). So if you really want some hints about what the hell is this all about:
<ul>
<li>if you're not running Microsoft IE7, chances are you're not going to see anything weird in the console output :-)</li>
<li>section 11.1.4 of the <a href="http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf">ECMAScript v3</a> spec tells you all you need to know about the array initializers</li>
</ul>

After all, I'll be probably continuing to study this "suddenly-a-hot-chick" Javascript thing, hoping to find a better world where my eventual code will be living into than that I found in the old days.
