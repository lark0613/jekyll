---
layout: default
title: 启动台
---

<div class="startpage">
  <div class="startpage-grid">
    {% for link in site.quick_links %}
    <a href="{{ link.url }}" target="_blank" class="card">
      <i class="{{ link.icon }}"></i>
      <span>{{ link.name }}</span>
    </a>
    {% endfor %}
  </div>
</div>