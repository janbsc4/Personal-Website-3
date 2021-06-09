---
layout: layout.liquid
pageTitle: Homepage
---
{% for post in collections.post reversed -%}
<p><i>{{ post.date | date: "%d.%m.%Y" }}</i></p>
<h1><a href="{{ post.url | url }}">{{ post.data.pageTitle }}</a></h1>
<p>{{ post.templateContent }}</p>
<p>--------</p>
{% endfor %}