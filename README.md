TRAINING CONTENT
====================

This is the repository for the content feeding https://docs2.simplicite.io

Content dir format
---------------------------

### Category

**Folder name :** CTG_<order>_<code>
**Folder Content :**
- folders (sub-categories & lessons)
- category.png
- category.json , category_ENU.json , category_FRA.json

```
{
  "ANY": {
    "title": "",
    "description": ""
  },
  "ENU": {
    "title": "",
    "description": ""
  }
}
```

### Lesson

**Folder name :** LSN_<order>_<code>
**Folder Content :**
- images: img01.png , img02_FRA.png, img02_ENU.png, img03.png ....
- lesson.md , lesson_FRA.md
- lesson.json , lesson_ENU.json , lesson_FRA.json

```
{
  "ANY": {
    "title": "",
    "description": ""
  },
  "ENU": {
    "title": "",
    "description": ""
  }
}
```