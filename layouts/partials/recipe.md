{{- $page:= . }}
## {{ $page.Title}}

Prep Time:{{$page.Params.prepTime | default "-"}} | Cook Time : {{$page.Params.cookTime | default "-"}} | Servings: {{.Params.servings | default "-" }} |

{{- range $header := (slice "description" "ingredients" "directions" "notes" )}}
{{- with $page.Params.Get $header }}

### {{ $header | title }}

{{ . }}

{{- end }}
{{- end }}
