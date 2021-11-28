# Recipes
{{range .Site.Taxonomies.categories}}
# {{.Page.Title}}
{{range .}}
## {{.Page.Title}} 
{{replace .RawContent "##" "###"}}
{{end}}
{{end}}
