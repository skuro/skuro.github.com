---
layout: post
title: "Google Chrome on Air&#8482;"
---
<img class="size-full wp-image-210 aligncenter" title="chrome-ff" src="/img/post/chrome-ff.png" alt="Chrome VS Firefox" width="549" height="230" />

Today I eventually made one big decision, dropping <a href="http://www.mozilla-europe.org/en/firefox/">Firefox</a> (call it Shiretoko, if you want) as my default browser and embracing <a href="http://www.google.com/chrome">Chrome</a>. Why? Well, they're right: Chome is <strong>fast</strong>. Really fast.

It is not even a matter of how quick it's able to render a web page or to execute JS code (though that's also an <a href="http://code.google.com/p/v8/">interesting topic</a>) that lead me to the decision, I just happened to start Chrome, browse a bit, open some different windows with some 20 tabs each, and then, from <a href="http://www.tweetdeck.com/beta/">TweetDeck</a>, I clicked on a link. That's exactly when it all started. I mean Firefox, begun to start. Intentional wordplay.

After reindexing my whole home folder, it finally showed up some content. It might even be that I installed too many plugins (<a href="https://addons.mozilla.org/en-US/firefox/addon/1843">firebug</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/9527">ubiquity</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/2079">seleniumIDE</a>, <a href="https://addons.mozilla.org/en-US/firefox/addon/3006">downloadHelper</a>, and <a href="https://addons.mozilla.org/en-US/firefox/addon/59">userAgent switcher</a>, that's it), but it still needed~10s before showing up anything, not to steal any credit from the waiting time on loading my saved sessions of 2 windows with around 10 tabs each.

Then I decided to give it a try: I restarted Chrome. And that was the moment I decided I don't want to waste my time wating for Firefox startup. Chrome -&gt; Options -&gt; Make Chrome my default browser.

Now we come at the problem mentioned in the subject: even if Chrome is now my default browser, Adobe Air applications such as TweetDeck still trigger a new Firefox tab upon clicks on an HTTP link. I googled around (too much google, I know. And it's getting worse as I speak, I fear!) just to find a bunch <a href="http://blog.andreaolivato.net/open-source/change-adobe-air-apps-default-browser.html">crazy guys</a> editing binary libraries using <a href="http://www.vim.org/">vim</a>. Although I really love vim, I was pleased to find an <a href="http://blog.andreaolivato.net/open-source/change-adobe-air-apps-default-browser.html#comment-13651946">interesting comment</a> that led to a <a href="http://www.roytanck.com/2009/08/26/getting-adobe-air-to-use-the-default-browser-under-ubuntu/">solution</a>:

    export GNOME_DESKTOP_SESSION_ID=Default
    /opt/TweetDeck/bin/TweetDeck

I will miss a lot my dear Ubiquity extension, and I still think Firefox is not <a href="http://www.microsoft.com/windows/Internet-explorer/default.aspx">that bad</a> as a browser. But I spend 95% of my computer life on a browser, as Google guys didn't have troubles to <a href="http://googleblog.blogspot.com/2009/07/introducing-google-chrome-os.html">argue</a>, and therefore speed matters. A lot.
