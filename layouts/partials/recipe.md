{{- $page:= . }}
## {{ $page.Title}}

Prep Time:{{$page.Params.prepTime | default "-"}} | Cook Time : {{$page.Params.cookTime | default "-"}} | Servings: {{.Params.servings | default "-" }} |
{{ replace .RawContent "##" "###" }}


