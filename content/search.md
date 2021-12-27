---
edit fuse.js options to search: "`static/js/search.js`\n\\```\nkeys: [\n  \"title\",\n
  \ \"contents\",\n  \"tags\",\n  \"categories\"\n]\n\\```"
edit layouts/_default/index.json: "This exposes the values in /index.json\ni.e. add
  `category`\n\\```\n...\n  \"contents\":{{ .Content | plainify | jsonify }}\n  {{
  if .Params.tags }},\n  \"tags\":{{ .Params.tags | jsonify }}{{end}},\n  \"categories\"
  : {{ .Params.categories | jsonify }},\n...\n\\```"
initial setup: "This file exists solely to respond to /search URL with the related
  `search` layout template.\n\nNo content shown here is rendered, all content is based
  in the template layouts/page/search.html\n\nSetting a very low sitemap priority
  will tell search engines this is not important content.\n\nThis implementation uses
  Fusejs, jquery and mark.js\n\n\n\nSearch  depends on additional output content type
  of JSON in config.toml\n\\```\n[outputs]\n  home = [\"HTML\", \"JSON\"]\n\\```"
layout: search
searching additional fileds: To search additional fields defined in front matter,
  you must add it in 2 places.
sitemap:
  priority: 0.1
title: Search Results
---