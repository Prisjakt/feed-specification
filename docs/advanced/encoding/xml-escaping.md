# Special Characters in XML

It is possible to escape special characters in [XML](/types-of-feeds/pull/file-formats/xml.md) (see [this answer](https://stackoverflow.com/a/1091953) and [this answer](https://stackoverflow.com/a/46637835)) using number notations such as this example:


```
Joe's Café & Bar ♫
```

escaped using number notation:

:::info TIP: Use an encoding tool

In order to test conversion and encoding you can use one of the many available online tools, one such example is [Coder´s Toolbox](https://coderstoolbox.net/string/#!encoding=xml&action=encode&charset=utf_8) for encoding URL values.

:::

```
Joe&#39;s Caf&#233; &amp; Bar &#9835;
```

But in the case of product feeds, **you should never need to do this** as long as your XML file is [UTF-8 encoded](./file-encoding.md) and that **all fields containing strings** are [wrapped in CDATA tags](./cdata.md). 

Please note that for URLs we are more strict and require them to be [url encoded](./url-encode.md) properly according to RFC specification.