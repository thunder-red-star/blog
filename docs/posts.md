# .post docs
How do .post files work? 
Here's a quick explanation:
- They're mostly just markdown files.
- Basically, there is a <pm> tag and a <pc> tag.
- The \<pm> tag holds within it the metadata of the post:
  - It should be formatted a specific way. After the <pm> tag, there should be a line break, followed by the title, author, and date of the post.
  - The date should be formatted like this: YYYY-MM-DD (the server will automatically format it to a nicer-looking date).
- Like this:
  - ```
    <pm>
    My Post
    ThunderRedStar
    2018-01-01
    </pm>
    ```
- The \<pc> tag holds the actual content of the post.
  - This is filled with Markdown. 
- Like this:
  - ```
    <pc>
    # My Post
    This is my post.
    </pc>
    ```
    
Example post:
```
<pm>
My Post
ThunderRedStar
2018-01-01
</pm>
<pc>
# My Post
This is my post.
</pc>