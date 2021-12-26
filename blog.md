---
layout: layout.liquid
pageTitle: Jan Balanya Scholl - Blog
---
<a href="{{ '/archive' | url }}">All articles</a>

{% for post in collections.post reversed -%}

<h1><a href="{{ post.url | url }}">{{ post.data.pageTitle }}</a></h1>
<p><i>{{ post.date | date: "%d.%m.%Y" }}</i></p>
<p>{{ post.templateContent }}</p>
<p>-</p>
{% endfor %}