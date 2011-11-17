---
layout: post
title: "Quick fix for ALSA error: cannot find the slot for index 0"
primary_img: /img/post/console-snapshot.png
categories: [linux]
---

Since the last kernel upgrade (now running a slightly customized 2.6.28) I started to experience a nasty issue with my audio configuration. I haven't had the time to look at it since today, and it actually took a bit to figure out what was going wrong. Actually, my integrated audio card was no more visible on the system, i.e.:

    sku@dreamland:~$ cat /proc/asound/cards
    0 [U0x46d0x9a1    ]: USB-Audio - USB Device 0x46d:0x9a1
    USB Device 0x46d:0x9a1 at usb-0000:00:1a.7-4, high speed

This actually means that ALSA only recognizes an USB audio device, which actually is my mic-enhanced web cam. From previous experiences, I knew the kernel module I have to look at for my integrated audio card was <em>snd_hda_intel</em>, and <em>lsmod</em> was actually listing it among the loaded modules. Something wrong probably happened when that module was loaded. Since I'm too lazy even to grep inside of syslog for that module, I just give it another chance with <em>rmmod snd_hda_intel ; lsmod snd_hda_intel</em>. Nothing changed. This time, with a <em>tail -f</em> on syslog:
    
    Apr  5 11:58:36 dreamland kernel: ALSA /usr/src/modules/alsa-driver/acore/init.c:138: cannot find the slot for index 0 (range 0-0), error: -16
    Apr  5 11:58:36 dreamland kernel: ALSA /usr/src/modules/alsa-driver/pci/hda/../../alsa-kernel/pci/hda/hda_intel.c:1878: hda-intel: Error creating card!
    Apr  5 11:58:36 dreamland kernel: HDA Intel: probe of 0000:00:1b.0 failed with error -12

AHA! Probably someone already noticed the issue: while /proc/sound/cards lists my USB card already installed in slot #0, snd_hda_intel is trying to use that one and only slot (index 0, range 0-0) to install the other card. This requires some modprobe configuration. My system offered already a /etc/modprobe.d/snd-hda-intel, which only contained:

    options snd-hda-intel position_fix=2
    options snd-hda-intel model=auto

I actually don't even know what that actually means, so I left those lines there while adding something above them. The resulting file is:

    alias snd-card-1 snd-usb-audio
    option snd-usb-audio index=1
    alias snd-card-0 snd-hda-intel
    option snd-hda-intel index=0
    options snd-hda-intel position_fix=2
    options snd-hda-intel model=auto

What I'm trying to do is obvious: put the cards in the correct order. And know what? It works! The image at the top of this post shows you it.
Probably there are other more clever way to configure it, so any suggestion is welcome.
