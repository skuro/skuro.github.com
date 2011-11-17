---
layout: default
title:  "Current Posts"
---
<div id="archive" class="archive">
	<ul>
{% for post in site.posts %}
	<li>
        <span class="date">{{ post.date | date: "%e %B %Y" }}</span>
	<a href="{{ post.url }}">{{ post.title }}</a>
        <span class="categories">
        {% for c in post.categories %}
        <a href="category/{{ c }}">#{{ c }}</a>
        {% endfor %}
        </span>        
	</li> 
{% endfor %}
</ul>
</div>
