---
layout: layout.liquid
pageTitle: Blog
---
<a href="{{ '/archive' | url }}">Show me all articles</a>

{% for post in collections.post reversed -%}

<h1><a href="{{ post.url | url }}">{{ post.data.pageTitle }}</a></h1>
<p><i>{{ post.date | date: "%d.%m.%Y" }}</i></p>
<p>{{ post.templateContent }}</p>
<p>-</p>
{% endfor %}