---
layout: default
title:  "Current Posts"
---
<div id="archive" class="archive">
	<ul>
{% for post in site.posts %}
	<li><span class="date">{{ post.date | date: "%e %B %Y" }}</span>
		<h3> <a href="{{ post.url }}">{{ post.title }}</a></h3>
	</li> 
{% endfor %}
</ul>
</div>
