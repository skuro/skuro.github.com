---
layout: post
title: "Tutorial: Corkscrew on Leopard"
categories: [apple]
primary_img: /img/post/corkscrewvsmac.jpg
---

As I usually work at the client premises, I <strong>need</strong> to access the Net through their HTTP proxy. It's a common need and I expect to deal easily with it for every task my job needs me to accomplish. But I'm wrong...

Though most tools and software which access HTTP hosts around the Net offer some configurable ways to set up a proxy server, and most of them can cope with proxy authentication as well, SSH has some troubles here. In other words, SSH doesn't know how to tunnel data through an HTTP proxy. S**t! Are we going to surrender to that Giant Squid that block our shy attempts to connect to our servers?

Luckily enough, <a title="Corkscrew homepage" href="http://www.agroman.net/corkscrew/">Corkscrew</a> comes in handy to help us reaching our network boxes through that evil HTTP proxy. The following steps will help you to install and it on OSX 10.5 to tunnel your SSH sessions through a proxied HTTP stream.

Use the Source, Luke!
---------------------

Even if you can use MacPorts to install Corkscrew, make sure you're at home before trying it: HTTP Proxies are scaring monsters for <em>port</em> users too. So, let's do it the OpenSource way and grab the code from <a title="Corkscrew sources" href="http://www.agroman.net/corkscrew/corkscrew-2.0.tar.gz">here</a>:

    ~$ wget http://www.agroman.net/corkscrew/corkscrew-2.0.tar.gz
    ~$ tar xvzf corkscrew-2.0.tar.gz
    ~$ cd corkscrew-2.0

From the included README you can notice that on the "tested on" list there's no mention to OSX, and in fact if you run the <em>configure</em> script it complains that your host is not recognized, so that you have to provide one in the command line before you're able to compile. Fair enough.
This does the trick:

    ~$ ./configure --host=i686-apple-darwin9
    ~$ make
    ~$ sudo make install

So far so good. Now that you have installed your tunnelling software, you must instruct hot SSH to use it.

Configuration
-------------

The README provided in the corkscrew distribution contains almost all the information you need to use it. To configure SSH to use the HTTP tunnel, you should edit your personal SSH configuration file in ~/.ssh/config, but for some reason this didn't work in my situation, so I edited the global SSH configuration file:

    ~$ sudo su
    ~# vim /etc/ssh_config

and added this line:

    ProxyCommand /usr/local/bin/corkscrew proxy.address 80 %h %p

Just adapt This will enable the HTTP tunnel when using SSH, but remember to re-edit the config file if you connect from within different networks!

If you're interested in this argument and want a more flexible configuration for your tunnels, I've found a lot of useful info <a href="http://www.mtu.net/~engstrom/ssh-proxy.php">here</a>.

Hope this helps!
