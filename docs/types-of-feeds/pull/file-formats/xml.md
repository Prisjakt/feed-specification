---
sidebar_position: 1
---

# XML

[XML](https://en.wikipedia.org/wiki/XML) stands for e**X**tensinble **M**arkup **L**anguage. It is very similar to HTML except it doesn't have any predefined tags. It's a meta language that allows you to define your own markup language which then can be used to store and share data in a structured manner.

Prisjakt XML feeds are based on the [Google Product Data Specification](https://support.google.com/merchants/answer/7052112?hl=en) which means that in most cases you can generate a Google Product feed and then send the link to us and let us consume it.

## Namespaces

A Prisjakt feed should use two namespaces, the `g` namespace which most fields belong to that are defined by the Google Product Specification and then the `pj` namespace which contains some [additional Prisjakt specific fields](/terminology/prisjakt-specific-fields) defined by us.

```xml
<rss xmlns:pj="https://schema.prisjakt.nu/ns/1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">
```


All fields stemming from the Google Product Data specification will use the `g:` namespace prefix and the Prisjakt specific fields should use the `pj:` prefix.

#### Priority When Parsed

If multiple fields with the same name but different namepaces exist, the field will be parsed with the following priority:

1. `pj:` first eg. `<pj:some_field>100 SEK</pj:some_field>`
1. `g:` second eg. `<g:some_field>100 SEK</g:some_field>`
1. **no namespace** third eg. `<some_field>100 SEK</some_field>`
1. **other/unknown** third in undefined order eg. `<xyz:some_field>100 SEK</xyz:some_field>`
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

You should lower the risk of your data causing xml parsers to fail because of invalid data by encoding your data correctly. Take a look on our [CDATA](/advanced/encoding/cdata.md) article to achieve this.