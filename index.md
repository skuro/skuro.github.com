---
layout: default
comments: false
---

{% assign post = site.posts.first %}

<div class="post">

<!-- copied from post_header include -->
<h1>
  {{ post.title }}
  <a href="{{ post.url }}">
    <img src="/img/link.jpg" alt="Permalink to {{ post.title }}" />
  </a>
</h1>
<blockquote class="date-wrapper">
  <h5 class="date">
    {{ post.date | date: "%B %e, %Y" }}
    {% if post.categories != empty %}
    &nbsp;
    {% for c in post.categories %}
    <a class="tag" href="/category/{{ c }}">#{{ c }}</a><span>&nbsp;&nbsp;</span>
    {% endfor %}
    {% endif %}
  </h5>
</blockquote>
<!-- end copy -->

  {% if post.primary_img %}
  <img src="{{ post.primary_img }}" class="primary" />
  {% endif %}
  {{ post.content }}

</div>
