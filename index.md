---
layout: default
title:  "Current Posts"
---
<div id="archive" class="archive">
  <ul>
    {% for post in site.posts %}
      {% include listitem.html %}
    {% endfor %}
  </ul>
</div>
