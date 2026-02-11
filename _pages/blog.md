---
layout: page
title: Blog
permalink: /blog/
nav: true
nav_order: 3
---

Occasional thoughts on AI research, reinforcement learning, and my experiences in the field.

<ul class="post-list">
  {% assign my_posts = site.posts | where_exp: "post", "post.categories contains 'blog'" %}
  {% for post in my_posts %}
  <li>
    <h3>
      <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h3>
    <p>{{ post.description }}</p>
    <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
  </li>
  {% endfor %}
</ul>
