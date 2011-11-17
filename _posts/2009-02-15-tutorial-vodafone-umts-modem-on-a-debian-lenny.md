---
layout: post
title: "Tutorial: Vodafone UMTS modem on a Debian lenny"
primary_img: /img/post/vodafone-umts.jpg
categories: [linux]
---

Today I finally had the time to give it a try to have my Vodafone UMTS modem running on my [not so] old Debian lenny/SID which is actually powering my desktop  PC.
I was a little scared, I must admit, since I never dealt with PPP stuff with linux... I always avoided it actually â˜º

It turned out, it was way much easier than I originally thought. The tougher part was due to my PC have no internet connection available, so that I had no chance to apt-get nothing. I knew there would be something missing, as there actually were, so I turned on my MacBook pro[<a href="#note-2">1</a>] (for which Mama VF provides a crappy software) and stated digging the net for what I needed...

My Linux skills are not being used since some months, but I still remember some rules about a penguin dealing with new cool devices.

Know your hardware
------------------

As always, the first thing you have to do when trying to install some new device on a linux box is to collect as much information as possible about the harware it is based on. This time it was  too easy: the bottom part of the modem has some bold lines stating

    HUAWEI
    Model: e220

way too easy, man!

Find out if/how good your hardware is already sopported
-------------------------------------------------------

I was expecting some exotic standalone projects were offering linux support for this little device, but it turned out it is supported out of the box by the Linux kernel since version 2.6.20, and it's written also in the <a title="Huawei e220 on wikipedia" href="http://en.wikipedia.org/wiki/Vodafone_Mobile_Connect_USB_Modem">wikipedia entry</a> for the modem! Geezz... time has changed, don't you think so?º

A quick check make a growing fear disappear[<a href="#note-2">2</a>]:

    sku@dreamland:~$ uname -r
    2.6.22-1-mepis-smp

YES!

Find out some how-to and do it!
-------------------------------

The official Debian wiki <a href="http://wiki.debian.org/Huawei/E220">says</a> simply:
<blockquote>wvdial hsdpa</blockquote>
That's it.Uhm.. no configuration, no telephone number to dial, no PIN, no nothing?! That's strange... but let's give it a try:

    sku@dreamland:~$ wvdial hsdpa
    bash: wvdial: command not found

Ok, I already knew it. Here starts the real game! Luckily enough, there is a Debian package named wvdial which should bring all the stuff I need in my box. Since I have no internet connection, the only chance I have is to download all the .deb files by hand and install it via dpkg. apt-get told me I needed only four of the dependencies for wvdial, so I downloaded them following the links on <a href="http://packages.debian.org/lenny/wvdial">packages.debian.org</a> to cope with the version hell. Once transferred the files from the Mac into the PC, I let Debian handle them:

    sku@dreamland:~$ sudo dpkg -i *.deb

Find the right configuration
----------------------------

It was impossible that no configuration at all was needed, and in fact some stuff was to be written somewhere, since wvdial complained about no wvdial.conf present in /etc. The first configuration was obtained with the wvdialconf tool provided by the wvdial package, but something was still missing:

    sku@dreamland:~/Desktop/wvdial/test$ wvdial
    --> WvDial: Internet dialer version 1.60
    --> Cannot get information for serial port.
    --> Initializing modem.
    --> Sending: ATZ
    ATZ
    OK
    --> Sending: ATQ0 V1 E1 S0=0 &amp;amp;C1 &amp;amp;D2
    ATQ0 V1 E1 S0=0 &amp;amp;C1 &amp;amp;D2
    OK
    --> Modem initialized.
    --> Configuration does not specify a valid phone number.
    --> Configuration does not specify a valid login name.
    --> Configuration does not specify a valid password.
    sku@dreamland:~/Desktop/wvdial/test$

After some other Internet investigation and tries, I finally came to a working configuration (user name and password can be anything, AFAIK):

    sku@dreamland:~$ cat /etc/wvdial.conf
    [Dialer Defaults]
    Init1 = ATZ
    Init2 = ATQ0 V1 E1 S0=0 &amp;amp;C1 &amp;amp;D2
    Init3 = AT+CPIN=&quot;0000&quot;
    Modem Type = Analog Modem
    ISDN = 0
    New PPPD = yes
    Phone = *99***1#
    Modem = /dev/ttyUSB0
    Username = vodafone
    Password = vodafone
    Baud = 460800

Have fun
--------

Last time `sudo wvdial` did the trick and, well, now I'm writing this post from my PC through the Huawei e220! ;)
I really appreciate how straightforward is now to do such things in Linux. Apart from the configuration, for which I had to guess a little bit how to handle it by my own, apt-get and a good howto would have been enough for everyone to install the required software.

Since configuration is (as quite always) the hard part, the posted wvdial.conf is the real useful part of the whole tutorial. My UMTS provider is actually Vodafone NL, but the configuration posted should be good for other carriers too.

That's it, hope it helps!

<a name="note-1">[1]</a> connection sharing from the UMTS modem to either WiFi or Ethernet peers doesn't work  from my Mac. I tried several times but with no luck...

<a name="note-2">[2]</a> ok, yes, my kernel is actually from Mepis, but I've update the whole system and now I'm on a quite pure Debian lenny :)
