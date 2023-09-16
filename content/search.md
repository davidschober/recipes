---
edit fuse.js options to search: |-
  `static/js/search.js`
  \```
  keys: [
    "title",
    "contents",
    "tags",
    "categories"
  ]
  \```
edit layouts/_default/index.json: |-
  This exposes the values in /index.json
  i.e. add `category`
  \```
  ...
    "contents":{{ .Content | plainify | jsonify }}
    {{ if .Params.tags }},
    "tags":{{ .Params.tags | jsonify }}{{end}},
    "categories" : {{ .Params.categories | jsonify }},
  ...
  \```
initial setup: |-
  This file exists solely to respond to /search URL with the related `search` layout template.

  No content shown here is rendered, all content is based in the template layouts/page/search.html

  Setting a very low sitemap priority will tell search engines this is not important content.

  This implementation uses Fusejs, jquery and mark.js



  Search  depends on additional output content type of JSON in config.toml
  \```
  [outputs]
    home = ["HTML", "JSON"]
  \```
layout: search
searching additional fileds: To search additional fields defined in front matter,
  you must add it in 2 places.
sitemap:
  priority: 0.1
title: Search Results
---
