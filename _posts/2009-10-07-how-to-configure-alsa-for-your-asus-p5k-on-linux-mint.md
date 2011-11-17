---
layout: post
title: "(how to configure Alsa for your Asus P5K on) Linux Mint"
primary_img: /img/post/gomit.jpg
categories: [linux]
---

As I proudly (by now, at least) announced <a href="http://twitter.com/skuro/status/4689227551">on twitter</a>, I've installed <a href="http://www.linuxmint.com">Linux Mint</a> on my home desktop. I was having some troubles with my old and poorly mantained <a href="http://www.mepis.org/">Mepis</a>, and Mint seemed promising. For the records, I'll probably never, <strong>NEVER</strong> use a non-deb based distro on my personal computers. Let's say I'm religious about this :-)

Well, Mint showed a pretty fancy and straightforward installer, all graphical of course, which reminded me I'm aging: I didn't freak out because of the small set of choices and configuration options an old Debian-smelling fart like me was used to!

Anyway, it all went fine and I was pretty much impressed about how simple it was to install those evil proprietary NVidia drivers that let me suffer so many times in the past: I was prompted to install it and in a 2-click worth wizard, and an Xorg restart, and it was all done. Cool! I was so exited about it that I froze when I discovered that <strong>the audio was not working!!</strong>

For the impatients, this is the fix that worked for me:

    # last line in /etc/modprobe.d/alsa-base.conf
    options snd-hda-intel model=3stack-6ch-dig

Here follows the full, tedious story :-)

I've had to look <a href="http://ubuntuforums.org/showthread.php?t=202555&amp;page=5">here</a> and <a href="https://bugs.launchpad.net/ubuntu/+source/alsa-driver/+bug/114053">there</a> to figure out how to convince the alsa driver to push those audio bits through the integrated adio card of my <strong>Asus P5K</strong> motherboard. It was not hard to understand that modprobe had to be properly configured in order to initialize the <strong>snd_hda_intel</strong> module with the correct card model, for which I had to choose one as listed in <em>/usr/share/doc/alsa-base/driver/ALSA-Configuration.txt.gz</em> that would have best suited my hw. These were the choices:

    ALC883/888
    3stack-dig    3-jack with SPDIF I/O
    6stack-dig    6-jack digital with SPDIF I/O
    3stack-6ch    3-jack 6-channel
    3stack-6ch-dig 3-jack 6-channel with SPDIF I/O
    6stack-dig-demo  6-jack digital for Intel demo board
    acer          Acer laptops (Travelmate 3012WTMi, Aspire 5600, etc)
    acer-aspire   Acer Aspire 9810
    medion        Medion Laptops
    medion-md2    Medion MD2
    targa-dig     Targa/MSI
    targa-2ch-dig Targs/MSI with 2-channel
    laptop-eapd   3-jack with SPDIF I/O and EAPD (Clevo M540JE, M550JE)
    lenovo-101e   Lenovo 101E
    lenovo-nb0763 Lenovo NB0763
    lenovo-ms7195-dig Lenovo MS7195
    lenovo-sky    Lenovo Sky
    haier-w66     Haier W66
    3stack-hp     HP machines with 3stack (Lucknow, Samba boards)
    6stack-dell   Dell machines with 6stack (Inspiron 530)
    mitac         Mitac 8252D
    clevo-m720    Clevo M720 laptop series
    fujitsu-pi2515 Fujitsu AMILO Pi2515
    3stack-6ch-intel Intel DG33* boards
    auto          auto-config reading BIOS (default)

I eventually chose the highlighted one, even if I'm not completely fine with it since my card actually supports 8 channels. But whatever, <strong>it worked!</strong> And that's the important thing.

I didn't found any specific information for this specific motherboard, so I thought it might be of some help for others. 

Hope this helps!
