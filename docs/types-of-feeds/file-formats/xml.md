---
sidebar_position: 1
---

# XML

[XML](https://en.wikipedia.org/wiki/XML) stands for e**X**tensinble **M**arkup **L**anguage. It is very similar to HTML except it doesn't have any predefined tags. It's a meta language that allows you to define your own markup language which then can be used to store and share data in a structured manner.

Prisjakt XML feeds are based on the [Google Product Data Specification](https://support.google.com/merchants/answer/7052112?hl=en) which means that in most cases you can generate a Google Product feed and then send the link to us and let us consume it.

## Namespaces

A Prisjakt feed should use two namespaces, the `g` namespace which most fields belong to that are defined by the Google Product Specification and then the `pj` namespace which contains some [additional Prisjakt specific fields](/docs/terminology/prisjakt-specific-fields) defined by us.

```xml
<rss xmlns:pj="https://schema.prisjakt.nu/ns/1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">
```


All fields stemming from the Google Product Data specification will use the `g:` namespace prefix and the Prisjakt specific fields should use the `pj:` prefix.

#### Priority When Parsed

If multiple fields with the same name but different namepaces exist, the field will be parsed with the following priority:

1. `pj:` first eg. `<pj:price>100 SEK</pj:price>`
1. `g:` second eg. `<g:price>100 SEK</g:price>`
1. **no namespace** third eg. `<price>100 SEK</price>`
1. **other/unknown** third in undefined order eg. `<xyz:price>100 SEK</xyz:price>`
### Prisjakt XML Namespace

Our namespace definiton file is located at the following URL:

```
https://schema.prisjakt.nu/ns/1.0
```

## Use UTF-8

All XML feeds should start with the following header and the files should be properly [UTF-8 encoded](/advanced/encoding/file-encoding.md).

```
<?xml version='1.0' encoding='UTF-8'?>
```

## Use CDATA

Since XML is a tag based language: `<tag>content</tag>` some characters like brackets (`<` or `>`) are reserved for the XML markup itself. If your data contains these characters it may cause a parser to become confused. We recommend that you embed **all fields that contain string values** in [CDATA](/docs/advanced/encoding/cdata) tags in order to avoid the risk of your content causing troubles for our parser.

```xml
<g:field><![CDATA[your complex string with special xml markup characters]]></g:field>
```
Here you can see an example of CDATA on a google_product_category. Even if the data contains brackets `>` and special characters like `&` they will parse successfully and without the need for encoding when wrapped in a CDATA tag.

```xml
<g:google_product_category><![CDATA[Animals & Pet Supplies > Pet Supplies > Reptile & Amphibian Supplies]]></g:google_product_category>
```

:::caution Your Data

Beware that even if you do not have any data containing these special characters today, you might add a product at a later stage that have these special characters in it´s description or other string fields. Hence we recommend to always use CDATA wrapping in order to avoid unexpected errors in the future.

:::