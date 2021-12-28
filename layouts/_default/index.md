# Recipes
{{range $categories :=  .Site.Taxonomies.categories}}
# {{$categories.Page.Title}}
{{range $page := $categories}}
{{- partial "recipe.md" $page}}
{{- end}}
{{- end}}
