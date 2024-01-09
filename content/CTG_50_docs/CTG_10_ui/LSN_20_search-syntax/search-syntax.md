Search syntax
=============

Simple search syntax
--------------------

Simple search syntax for search filters is a plain character string including,
if required, search SQL-like wildcards:

- `*` (or `%`): any group of characters
- `?` (or `_`): any single character

Date fields search filter syntax is `YYYY-MM-DD`

Datetime fields search filter syntax is `YYYY-MM-DD hh:mm:ss`

An advanced syntax is also available for most field types to proceed with more complex
searches: its syntax uses SQL-like statements (see below).

Simple or advanced filters can be used in all search features:

- Search pages of the generic web UI (for non assisted search fields)
- Data access interfaces (that can be used as extrenal data source in office software like Microsoft Office&reg;)
- Web services (JSON/REST and legacy XML/SOAP)
- Raw data services

Advanced search syntax
----------------------

Advanced syntax is a combination of the following comparators that do requires
simple quotes to enclose all textual values (not required for number values)

- `=`: strict equals
- `<>` or `!=`: strict non equals
- `>` or `>=`: higher than
- `<` or `<=`: lower than
- `like`: partial equals
- `is null`: empty value
- `is not null`: any non empty value

Comparators can be combined with logical operators:

- `or`: inclusive or operator
- `and`: and operator
- `not`: negation operator

Parenthesis can be used for complex combinations, e.g.: `='value1' or (like 'value2%' and is not null)`.

### Interval searches on date and datetime fields

Date or datetime interval search syntax is `YYYY-MM-DD[ hh:mm:ss];YYYY-MM-DD[ hh:mm:ss]` each boundary date or datetime being optional.

Alternatively you can use search filters named `dmin__<field name>` or `dmax__<field name>`

### Geographical search

As of version 5.3, geographical **coordinates fields** allows proximity search using syntax: 

```
<latitude>;<longitude>~<distance with unit, e.g. 100mi, 10km, ...>
```

