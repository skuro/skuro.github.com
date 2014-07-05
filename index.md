---
layout: default
comments: false
---

{% assign post = site.posts.first %}

<div class="post">

{% include previous_next.html %}

<!-- copied from post_header include -->
<h1>
  {{ post.title }}
  <a href="{{ post.url }}">
    <img src="/img/link.jpg" alt="Permalink to {{ post.title }}" />
  </a>
</h1>
<div class="well well-sm">
  <h5>
    {{ post.date | date: "%B %e, %Y" }}
    {% if post.categories != empty %}
    &nbsp;
    {% for c in post.categories %}
    <span class="label label-primary category"><a href="/category/{{ c }}">#{{ c }}</a></span>
    {% endfor %}
    {% endif %}
  </h5>
</div>
<!-- end copy -->

  {% if post.primary_img %}
  <img class="primary-image" src="{{ post.primary_img }}" />
  {% endif %}
  {{ post.content }}

</div>
