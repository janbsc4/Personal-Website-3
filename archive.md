---
layout: layout.liquid
pageTitle: Jan Balanya Scholl - Article Archive
---
# [Blog]({{ url | url }})
{% for post in collections.post reversed -%}
<h3><a href="{{ post.url | url }}">{{ post.data.pageTitle }}</a></h3>{{ post.date | date: "%d.%m.%Y" }}
{% endfor %}