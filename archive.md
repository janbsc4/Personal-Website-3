---
layout: layout.liquid
pageTitle: Jan Balanya Scholl - Article Archive
---
# [Article Archive]({{ url | url }})
{% for post in collections.post reversed -%}
<h3><a href="{{ post.url | url }}">{{ post.data.pageTitle }} - {{ post.date | date: "%d.%m.%Y" }}</a></h3>
{% endfor %}