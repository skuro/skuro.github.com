---
layout: default
title:  "Current Posts"
---
<div class="post">
  <h1>Archive</h1>
  <div id="archive" class="archive">
    <ul>
      {% for post in site.posts %}
        {% include listitem.html %}
      {% endfor %}
    </ul>
  </div>
</div>
