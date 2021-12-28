{{- $page:= . }}
## {{ $page.Title}}

{{- range $header := (slice "description" "ingredients" "directions" "notes" )}}
{{- with $page.Params.Get $header }}

### {{ $header | title }}

{{ . }}
{{- end }}
{{- end }}
