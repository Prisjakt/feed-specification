---
sidebar_position: 1
---

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```


# XML

## Overview

[XML](https://en.wikipedia.org/wiki/XML) stands for e**X**tensinble **M**arkup **L**anguage. It is very similar to HTML except it doesn't have any predefined tags. It's a meta language that allows you to define your own markup language which then can be used to store and share data in a structured manner.

## Namespaces
A Prisjakt offer feed should use two namespaces, the `g` namespace which most fields belong to that are defined by the Google Product Specification and then the `pj` namespace which contains some [additional Prisjakt specific fields](/terminology/prisjakt-specific-fields#offer-feeds) defined by us.

Offers: https://schema.prisjakt.nu/ns/1.0

```xml
<rss xmlns:pj="https://schema.prisjakt.nu/ns/1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">
```

Promotions: https://schema.prisjakt.nu/ns/promotions-1.0

```xml
<rss xmlns:pj="https://schema.prisjakt.nu/ns/promotions-1.0" xmlns:g="http://base.google.com/ns/1.0" version="3.0">
```

### Namespace Priority When Parsed

If multiple fields with the same name but different namespaces exist, the field will be parsed with the following priority:

1. `pj:` first eg. `<pj:some_field>Some pj field</pj:some_field>`
1. `g:` second eg. `<g:some_field>Gome g field</g:some_field>`
1. **no namespace** third eg. `<some_field>Some field</some_field>`
1. **other/unknown** in undefined order eg. `<xyz:some_field>Some xyz field</xyz:some_field>`

## Recommendations

### Use UTF-8

All XML feeds should start with the following header and the files should be properly [UTF-8 encoded](/advanced/encoding/file-encoding.md).

Do not use [control characters](https://en.wikipedia.org/wiki/Control_character) in feed file. We support some of them trying to follow [XML spec](https://en.wikipedia.org/wiki/Valid_characters_in_XML) but not guarantee to fully support it.

```
<?xml version='1.0' encoding='UTF-8'?>
```

### Use CDATA

You should lower the risk of your data causing xml parsers to fail because of invalid data by encoding your data correctly. Take a look on our [CDATA](/advanced/encoding/cdata.md) article to achieve this.
