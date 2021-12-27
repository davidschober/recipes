https://zwbetz.com/make-a-hugo-blog-from-scratch/#date-and-tags-partial


{{with $.Params .}}

<h2>{{ . }}</h2>

{{ . | markdownify }}

{{end}}


{{range (slice "description" "ingredients" "directions" "notes")}}
{{ end}}


## Datamigration to fields


```
import frontmatter

def build_content(f):
    post = frontmatter.load(f)
    content = post.content.split('\n')
    t = ''
    k = None
    for c in content:
        if c.startswith('##'):
            if k:
                post[k.lower()]=t.lstrip('\n').rstrip('\n')
                t = ''
            k = c.lstrip('##').strip()
        else:
            t = t+c+'\n'
        if k:
            post[k.lower()]=t.lstrip('\n').rstrip('\n')
            post.content = ''
    with open(f, 'w'):
        print(f)
        frontmatter.dump(post, f)
    return post 

for x in os.listdir():
    build_content(x)

```

{'Description': 'Grandma Giordano made this for special occasions, especially Easter.', 'Ingredients': '* 1 lb frozen peas, cooked according to package* 1 lb frozen cubed carrots, cooked according to package* 2 large potatoes boiled and cubed* Mayonnaise'}
