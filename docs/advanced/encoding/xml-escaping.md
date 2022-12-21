# Special Characters in XML

It is possible to escape special characters in XML (see [this answer](https://stackoverflow.com/a/1091953) and [this answer](https://stackoverflow.com/a/46637835)) using number notations such as this example:


```
Joe's Café & Bar ♫
```

escaped using number notation:

```
Joe&#39;s Caf&#233; &amp; Bar &#9835;
```

But in the case of product feeds, **you should never need to do this** as long as your XML file is [UTF-8 encoded](./file-encoding.md) and that **all fields containing strings** are [wrapped in CDATA tags](./cdata.md). 

Please note that for URLs we are more strict and require them to be [url encoded](./url-encode.md) properly according to RFC specification.