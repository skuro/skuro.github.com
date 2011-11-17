---
layout: post
title: "VirtualBox'ed Ubuntu with KDE4 on a MacbookPro"
categories: [linux, apple]
---
Today I decided to spend a little of my time on configuring an Ubuntu VBox on my MacbookPro. I was bugged by a "your system is not supported by us" error message while connecting to a remote service, which in turn stated Linux was actually supported. (Un)Fair enough, I love Linux much more than Macs too.
Even if having a triple-boot mac(hine) is already planned, I had no time to spend giving BootCamp the first try, so I decided for a quicker way: install VirtualBox, grab an already installed&amp;configured Ubuntu VBox an work with it. It's a really easy and straightforward job:
<ul>
	<li><strong>Install VirtualBox</strong> -- if your Mac is Intel based, there's a handy <a title="VirtualBox installer" href="http://download.virtualbox.org/virtualbox/2.1.0/VirtualBox-2.1.0-41146-OSX_x86.dmg">dmg installer</a> you can download from the <a title="VirtualBox homesite" href="http://www.virtualbox.org/" target="_blank">VirtualBox homesite</a></li>
	<li><strong>Download a preconfigured VBox</strong> -- installing a Linux virtual machine from scratch, i.e. from the distribution ISOs, is not really rocket science, but we want to go quick, though not dirt this time. Fortunately, the <a title="VirtualBox images project" href="http://virtualbox.wordpress.com/" target="_blank">VirtualBox images project</a> made available a number of ready-to-use *nix images, like Ubuntu, RedHat, OpenSolaris or even ReactOS! I picked up a <a title="Ubuntu Server Intrepid Ibex" href="http://downloads.sourceforge.net/virtualboximage/ubuntu-8.10-server-x86.7z">Ubuntu Server Intrepid Ibex</a> (username/password: ubuntu/reverse). You'll need some 7zip software to extract the VBox</li>
	<li> <strong>Configure the VBox</strong> -- this step requires you've already extracted the VBox from the 7zip package. I used <a title="7zX homepage" href="http://sixtyfive.xmghosting.com/products/7zx/">7zX</a>, but there are a bunch on the Internet. Now, start the VirtualBox software and add the VBox disk with File-&gt; Virtual Media Manager -&gt; Add, selecting the file in the VDI folder of the exploded package. This will be your virtual Hard Disk, with a maximum capacity of 20GB. Then you can follow the Machine -&gt; New wizard, selecting Ubuntu Linux and the virtual drive just configured to make your setup almost complete. The only thing I had to modify from the default options was, in the General tab of the Settings of the newly created VBox, to <strong>enable the PAE</strong> feature, otherwise your VBox won't start.</li>
	<li><strong>Launch your VBox and install stuff</strong> -- we're almost done. I had a very little issue with the Network, which was correctly configured from the Settings pane but was not working: the network interface was down. From dmesg I also noted that the iface name was different from what I was supposing. This made the trick:

    ubuntu@ubuntu: ~$ sudo ifconfig eth1 up
    ubuntu@ubuntu: ~$ sudo dhclient eth1

Then I noted that no Desktop Environment was already installed, but we know how to go (I love Deb* distros, as you may know :) ):

    ubuntu@ubuntu: ~$ sudo apt-get install kde yaquake firefox

After about 1 hour (my Internet connection sucks, I know it) all was configured and usable. This is the result:

<img class="size-medium wp-image-47" title="ubuntu-kde4-firefox-yakuake-virtualbox" src="/img/post/virt-kde-yakuake.png" alt="Ubuntu + KDE4 + Firefox + Yakuake inside a VirtualBox ;)" width="300" height="241" /></li>
</ul>

I must say, it runs quite well. Not a speed champion, but I had many other stuff working besides the virtual machine, like JBoss, Eclipse and Firefox instances.

Well, that's it. Take care!
