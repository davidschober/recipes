import frontmatter
import os

def build_content(f):
    post = frontmatter.load(f)
    meta = post.metadata
    
    description, ingredients, directions, notes = (meta.pop('description', None), meta.pop('ingredients', None), meta.pop('directions', None ), meta.pop('notes', None))

    if description:
        post.content += f"## Description \n\n{description}\n\n"
    if ingredients:
        post.content += f"## Ingredients \n\n{ingredients}\n\n"
    if directions:
        post.content += f"## Directions \n\n{directions}\n\n"
    if notes:
        post.content += f"## Notes \n\n{notes}\n\n"

    with open(f, 'w'):
        print(f)
        frontmatter.dump(post, f)
    return post 

for x in os.listdir():
    print(x)
    build_content(x)

