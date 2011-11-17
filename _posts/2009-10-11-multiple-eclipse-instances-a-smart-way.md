---
layout: post
title: "Multiple Eclipse instances, a smart way"
primary_img: /img/post/eclipse-logo.png
categories: [eclipse]
---

I'm one of the many Java devs around the world that chose Eclipse as IDE platform. It happens to me that when I reuse the same Eclipse instance across various projects I almost always end up transforming my IDE in a fat elephant with a broken leg, with tons of plugins and extensions that have to cope with the different workspaces and projects I'm currently running. As a result, I had to wait ages for a lot of operations within the IDE, like startup, update of plugins and installation of new ones from an update site.
It started to bother me so badly that I switched to a single-workspace, multiple instances way of life, that is rolling out a new installation of Eclipse per each project I have and never, ever consider to create more than one workspace for it. I just zipped a fresh J2EE Eclipse install with the common plugins I almost always need (i.e. <a href="http://m2eclipse.sonatype.org/">m2eclipse</a>, <a href="http://subclipse.tigris.org/">subclipse</a>, <a href="http://springide.org/blog/">spring-ide</a>) I unzip somewhere when starting a new project.

I knew that this approach needed some tooling and processes around it, otherwise I'd go mad trying to figure out which Eclipse was meant for which project and where I placed it. That said, I needed to blow away the thick layer of dust standing over my bash skills and started to put pieces together
<h2>Filesystem organization</h2>
First and foremost, I already had some Eclipse instances here and there across my filesystem. I'm not that neat dev, so they were really scattered across the entire FS, and I needed to use all of them plus the future ones. The simplest and easy solution: I created a folder, call it <strong>selector</strong> where I collected links to all the existing folders, calling the links with the project/workspace name. I actually linked the
Eclipse executable (being under OSX, the Eclipse.app folder). This allowed for a graphical link that will popup with a list of different Eclipses named with the projects they handle. I started to feel better.

<img class="aligncenter size-full wp-image-133" title="eclipse-blog-selector" src="/img/post/eclipse-blog-selector.jpg" alt="eclipse-blog-selector" width="269" height="416" />

<h2>Command Line</h2>
Then, other needs begun to come out: being a Maven user, and a command line junkie, I need to switch to the correct workspace folder to execute some commands. Looking at the link target in the selector folder and then manually cd there is simply not an option. That's the job of a script, thus I opened vim.
You can see the result <a href="https://gist.github.com/1374802">here</a>. I'm not that god of bash programming, so feel free to tell me what I'm doing wrong there (without insulting, please).

That script will invoke a cd command, so that I need that to be executed in my very bash process: if you run it directly, it will get executed in a subshell and it won't change your real location. To solve this, I added these two lines in my ~/.bash_profile:

    # My $PATH includes /Users/skuro/scripts, of course
    export SELECTOR_DIR='/Users/skuro/MyApplications/eclipse-select'
    alias workspace='. /Users/skuro/scripts/selector.sh'

the dot builtin command imports the script passed as an argument in your shell environment, so that it gets executed in your very bash process. The environment variable is my configured selector folder, of course.

<h2>Last piece: completion!</h2>
Ok, I was almost fine with the full thing: I have a central point where I can choose my Eclipse environment, and I could jump directly to the workspace I needed with ease. Wait a moment, with ease? Actually, I had to know the name of the project I want to jump into, and I have to write it fully, otherwise my script would fail badly. This limitation was not acceptable, I wanted more. I wanted auto completion!

After digesting some <a href="http://www.gnu.org/software/bash/manual/html_node/Programmable-Completion-Builtins.html#Programmable-Completion-Builtins">documentation</a> I came up with a configuration file for <em>complete</em> that was able to fetch the project names and offer them to you when TAB-completing your workspace command.

You can find the configuration file <a href="/files/workspace.tar.gz">here</a>. To be able to use it, on OSX you have first to run

    $ sudo port install bash-completion

Place the configuration file into <tt>/opt/local/etc/bash-completion.d</tt>.
<img class="aligncenter size-full wp-image-142" title="eclipse-blog-cmdline" src="/img/post/eclipse-blog-cmdline.jpg" alt="eclipse-blog-cmdline" width="367" height="194" />

Done!

That closed the circle and now I'm pretty fine with this way of switching development environments.
The only improvement I'm thinking of is on rolling out a new project: instead of having a fixed .tar.gz archive to uncompress, I'd like to select on the fly which plugin I want to have installed on a new Eclipse instance. But that's a TODO, by now I'm really eager to hear some comments from you about my approach to Eclipse based development. Do you see any value in it?
