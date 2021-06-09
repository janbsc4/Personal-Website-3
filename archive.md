---
layout: layout.liquid
pageTitle: Article Archive
---
# [{{pageTitle}}]({{ url | url }})
{% for post in collections.post reversed -%}
<h2><a href="{{ post.url | url }}">{{ post.data.pageTitle }} - {{ post.date | date: "%d.%m.%Y" }}</a></h2>
<p>---</p>
{% endfor %}