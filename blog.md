---
layout: layout.liquid
pageTitle: Jan Balanya Scholl - Blog
---
# [Blog]({{ url | url }})
{% for post in collections.post reversed -%}
<h2><a href="{{ post.url | url }}">{{ post.data.pageTitle }}</a></h2>
{% endfor %}