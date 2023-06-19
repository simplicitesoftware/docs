TRAINING CONTENT
====================

This is the repository for the content feeding https://docs2.simplicite.io

Documentation format guidelines [](#guidelines)
---------------------------

---

## Category

**Folder name:** CTG_*&lt;order>*_*&lt;category-code>*


**Folder content:**
- folders (sub-categories & lessons)
- category.json:

```
{
  "ANY": {
    "title": "",
    "description": ""
  },
  "ENU": {
    "title": "",
    "description": ""
  },
  "FRA": {
    "title": "",
    "description": ""
  },
  "published": <true|false>
}
```

The *published* attribute is optionnal. It's by default set to *true*.

It is not mandatory to specify every language configuration. For example, if your content does not have a translation in french and in english, you can get rid of the *FRA* and *ENU* attributes. 

---

## Lesson

**Folder name:** *LSN_&lt;order>*_*&lt;lesson-code>*

&lt;lesson-code> being the name of the markdown file. If your folder name is *LSN_10_my-lesson*, then the markdown(s) file(s) **must** be named *my_lesson.md* or *my_lesson_FRA.md* or *my_lesson_ENU.md*. 

**Folder content:**

You can specify the language of your content (lessons, images and videos) by adding the language code at the end of the file name: file-name_*&lt;FRA|ENU>* or any language supported by the instance. If not specified, then the content will be set as **any** content. The **any** content is **served by default** when specific language content does not exist.

- images: img01.png, img02_FRA.png, img02_ENU.png, img03.png...
- lesson.md, lesson_FRA.md...
- lesson.json:

```
{
  "ANY": {
    "title": "",
    "description": ""
  },
  "ENU": {
    "title": "",
    "description": ""
  },
  "FRA": {
    "title": "",
    "description": ""
  },
  "published": <true|false>,
  "display": "<LINEAR|TUTO>"
}
```

Like categories, the *published* attribute is not mandatory and is by default set to true. Also it is not mandatory to specify every language configuration.





