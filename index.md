---
layout: default
comments: true
---

{% assign post = site.posts.first %}

<div class="post">

<!-- copied from post_header include -->
<h1 class="title">
  <a href="{{ post.url }}">{{ post.title }}</a>
</h1>
<h2 class="date">
  {{ post.date | date: "%B %e, %Y" }}
  {% if post.categories != empty %}
   -- filed under 
  {% for c in post.categories %}
  <a href="/category/{{ c }}">#{{ c }}</a>
  {% endfor %}
  {% endif %}
</h2>
<!-- end copy -->

  {% if post.primary_img %}
  <img src="{{ post.primary_img }}" class="primary" />
  {% endif %}
  {{ post.content }}
  {% if page.comments %}
  {% include disqus.html %}
  {% endif %}

</div>
