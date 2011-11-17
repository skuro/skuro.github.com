---
layout: post
title: "Encode videos for the Philips SA3325 with mencoder"
primary_img: /img/post/philips-ipod.jpg
categories: [linux, apple]
---

I got it!! It took me a while to figure out how the hell to make it work but it definitely was worth it.

Firstly, the problem: my ex-coworkers gave me this nice portable MP4 reader, with a tear-jerker video they made to salute me[1]. They said "we made sure it's Linux friendly, you'll not have any problem!!". And problems then arrived... 
Eventually, I turned Mac, but this had not helped at all, since Philips thought it was a good idea not to give Mac software in boundle with their nice player. Anyway, the player is actually accessible from OSX just like a USB storage drive, and it's cool[2]. The problem is, the player can play only videos with certain encoding props, which is actually the job of the bundled not-for-mac-nor-linux-users software.
That said, I've started to search the web to see if there was anyone there with the same player and the same needs, but it seems I'm kind of the first one. This issue is a common one for any portable video player, anyway, so it was easy to find at least some hints where to start, even if they targetted other players.
It was clear I had to use something like <a href="http://www4.mplayerhq.hu/">mencoder</a>, and I found a downloadable Mac version along with a <a href="http://www.the8thsign.com/2006/11/22/encode-video-for-the-blackberry-pearl-8100-mac-edition/">nice tutorial for Blackberry users</a>. That was the very start.
Two hours later I was still blaming that bloody player, who seemed to not support the video specs it was supposed to play, when I finally find that Magic Command&trade;:

    mencoder &lt;input-file.avi&gt; -ovc lavc -lavcopts vcodec=mpeg4:vbitrate=384:abitrate=128 -vop scale=320:240 -oac copy -ofps 15 -o &lt;output-file.avi&gt;

Thic command produce something playable by the SA3325, though it's maybe not well optimized. I will hopefully have time to make some script out of it, or maybe an <a href="http://en.wikipedia.org/wiki/Automator_%28software%29">Automator</a> workflow, just to understand how it works :)

Hope this helps!

[1] I still watch it from time to time, I admit. Well, before now it was the only one video I could see anyway.. :)

[2] I still hate MTP devices, but that's an old story...
