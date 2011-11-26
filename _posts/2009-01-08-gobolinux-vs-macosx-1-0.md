---
layout: post
title: "GoboLinux vs MacOSX 1-0"
categories: [linux, apple]
---
Be aware that the title is nothing but provocatory: it's not really about what's best between the two opponent, but they've some stuff similar to each other, and the former follows a better path. Let's see what's all about...

<img title="GoboLinux logo" src="http://toko.baliwae.com/images/gobo.jpg" alt="GoboLinux logo" width="90" height="83" style="float:right" />

Recently I ran into a weird Linux distribution I never heard of: <a title="GoboLinux homepage" href="http://www.gobolinux.org/">GoboLinux</a>. The (most innovative) idea behind this distribution is that the Unix <a title="Wikipedia entry on the FHS" href="http://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard">Fileystem Hierarchy Standard</a> is somewhat obsolete and allows for the package manager mess that breaks software packages compatibility among different Linux distros. The GoboLinux developers chose then to move away from it, though holding compatibility to it, and reinvent a filesystem structure that eradicates any need of a package manager: every application, with its binaries, configuration files, resources and whatever, is entirely placed in its own folder tree. No more /etc/appnamerc, /usr/bin/appname or any other file spreaded around the whole filesystem, but /Programs/Appname/version/Settings and /Programs/Appname/version/bin/appname. Thus GoboLinux developer claims that:
<blockquote><em>the filesystem is the package manager</em></blockquote>
As soon as I looked at this I immediatly thought of MacOSX self-contained apps, which allows more or less the same behaviour: to install an app, you just copy a folder into /Applications (note that they even share the same uppercase naming schema). Now, my impression is that GoboDevs had a better idea than Apple's: they decided to make a revolution, and the resulting project seems neat and coherent. You know you have to study all the new conventions of their approach, but once you got it, you're ok with it. And with it alone, the new knowledge is limited to the GoboLinux world, leaving all your previous *nix expertise as you left it.

Now, what about MacOSX? I came to it recently, someone could say "too late". But I had no chance to look at it until two months ago. The only thing I knew of it before booting my MacBookPro was that "it is Unix, anyway". At the first sight, it was: the Bash shell was there, all kind of Unix command such as grep, find, awk was already available. But then I doscovered that folders were named Uppercase, that the FS is case iNseNsItivE, that /etc is a symlink, that /procfs doesn't exist. That was just a second before I was slaming down the lid, running away to hide in the dark crying out "It cannot be!! It cannot be!! Evil! Evil! EVIL!!!".

The point is, why the hell people make fun of standards, feeling free to alter, squeeze, shrink and mix them with the sole intent of breaking any compatibility? Even if I usually like standard compliance, as all of us do, I was not hurt by GoboLinux new way of doing things, not as much as I was with OSX silly stuff. And that was because, as it's path convention, the whole GoboLinux idea is self contained, leaving old standards apart and proposing new, standalone ones. Neat.