# Recipes

A family recipe collection using hugo and the paper.css "less formal" style. 

## Adding content

Content can be added with mardown files in a content folder using standard hugo commands. In addition we he have a forestry.io.

## Frontmatter schema
All content is put in as frontmatter to ensure consistency. Frontmatter schema: 



## Extras

* Recipes includes a `json` endpoint for all recipes at /recipes/index.json.

* Recipes includes a `markdown` endpoint for all recipes at /recipes/index.md. 

## Creating a pdf book
To create a book run


`curl "https://davidschober.github.io/recipes/index.md" | pandoc --toc --toc-depth=2 --top-level-division=chapter -V book -o ~/Desktop/test.pdf'

## Data migrations using frontmatter

Data in the frontmatter can be accessed using python-frontmatter library. For instance, converting a bunch of free-form markdown to the standard format can be done with something like::

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




