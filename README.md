# Metamorph
## Change (morph) content of <meta> tags in templates

### Basic Use
To change content of a single meta tag.
`metamorph.setTags(tag, content)`
- `tag`: String. Name of tag.
- `content`: String or Array.
  - if String, contents of tag.
  - if Array, must be in form `[content, attr]`
    - `content`: desired tag content
    - `attr`: String. Name of meta tag attribute, must be either `"name"` or
      `"property"`

To change content of multiple meta tags.
`metamorph.setTags(tags)`
- `tags`: Object. When passed object, runs `metamorph.setTags(key, value)`.

To obtain content of a single meta tag.
`metamorph.getTags(tag)`
- `tag`: String. Name of tag.

To obtain content of multiple meta tags.
`metamorph.setTags(tags)`
- `tags`: Array. Contains tags runs `metamorph.setTags(key)` and returns
   object whose keys are tags and values are corresponding content.

To change a page's title.
`metamorph.pageTitle(title)`
- `title`: String. Desired title of page.
