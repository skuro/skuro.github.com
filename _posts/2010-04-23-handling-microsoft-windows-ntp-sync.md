---
layout: post
title: "Handling Microsoft Windows NTP sync"
primary_img: /img/post/gear-clock-win.jpg
categories: [windows]
---

This post should raise some eyebrows around, as I'm advocating Linux since ages and I'm not at all into Microsoft stuff for the 99.99% of my time. This story comes out of that (usually negligible) 0.01%.

Why bother with NTP on MS Windows?
----------------------------------
The Alfresco implementation I'm working on has to integrate with a fully MS-powered environment, with a Domain Controller pulling the strings of network entities such as users and hosts. As the customer has strict security requirements, no remote access can be granted to their intranet, and since their offices are a bit far away from mine, we decided to replicate their environment locally, providing the minimum set of components such as
<ul>
	<li>a domain controller (WinServer 2k8)</li>
	<li>a domain host (WinXP Pro SP2)</li>
	<li>the Alfresco server (RHELv5.4)</li>
</ul>
I was able to build up the whole replicated environment, with a relative limited effort, using virtual machines to host all the different operating system on my laptop. I was so happy that everything worked almost at the first shot that I almost died when it all went wrong after the first reboot of the VMs: I couldn't log anymore on the WinXP box!

It turned out that all clocks drifted away, making Kerberos auth checks fail because of replication attacks protection. Looked like it was time to strengthen my Win-fu and configure NTP in a proper way. This is what I learned.

WinServer2k8 and clock management
---------------------------------

If there's one thing I enjoyed out of all the time spent on these tasks, the prize goes definitely to w32tm: I had to deal with Windows, and there were no windows involved! As usual, whenever I'm typing into a command line, I feel at home. I'm actually writing this whole blog post to take note of the tricks I learned around w32tm and NTP clock sync. Here we go:
<ul>
	<li><strong>Configure NTP servers</strong>
<blockquote><pre>w32tm /config /manualpeerlist:<a href="http://europe.pool.ntp.org" target="_blank">europe.pool.ntp.org</a> \
&nbsp;&nbsp;&nbsp;&nbsp; /syncfromflags:manual /reliable:no /update</pre></blockquote>
</li>
	<li><strong>Query NTP servers</strong>
<blockquote><pre>w32tm /stripchart /computer:<a href="http://europe.pool.ntp.org" target="_blank">europe.pool.ntp.org</a> \
&nbsp;&nbsp;&nbsp;&nbsp; /samples:5 /dataonly</pre></blockquote>
</li>
	<li><strong>Resync clock</strong>
<blockquote><pre>w32tm /resync /rediscover</pre></blockquote>
</li>
	<li><strong>Allow resync in case of huge drifts</strong>
If your clock drifted too far away Windows will refuse to sync. In order to disable such check you have to import the following changes (write them in a reg-keys.reg file and double click it):
<blockquote><pre>Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W32Time\Config]
"MaxNegPhaseCorrection"=dword:ffffffff
"MaxPosPhaseCorrection"=dword:ffffffff</pre></blockquote>
</li>
</ul>

That's it for now. I hope this will come in handy to somebody else, since I'll try to avoid any more contact with the Microsoft stacks as long as possible, since without grep, find, awk, sed, vim I feel as uncomfortable as <a href="http://farm4.static.flickr.com/3290/2615393415_0d9e8eb97d.jpg">this</a>.
