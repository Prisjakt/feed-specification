# CDATA Encoding in XML Files

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
