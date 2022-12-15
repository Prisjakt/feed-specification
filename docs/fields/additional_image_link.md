---
description: Used to add additional image links. The images may include different angles, colours etc. This gives the user the option to view different variants that might exist for a product.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# additional_image_link

<OptionalField/>

## Description

Used to add additional image links. The images may include different angles, colours etc. This gives the user the option to view different variants that might exist for a product.



### Effects When Used

- Your user will se more product images








## Validation Rules

- Must be valid [RFC 3986](https://www.rfc-editor.org/rfc/rfc3986) uri
- Must have a protocol (eg. `https`)
- Must have a path (eg. `.../my-product`)
- Must be shorter than `2047` characters
- Unicode characters must be [url encoded](/docs/advanced/encoding/url-encode)


## Best Practices


### Do

- Use stable url (for better user experience)
- Use URL to pre-selected product variants (if applicable)
- Use as few redirects as possible (for better user experience)



### Don´t

- Supply uri's to other things than images




## Example Values

Here are examples of how a valid *additional_image_link* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
(empty string)
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
(empty string)
```

```xml
<g:additional_image_link>ftp://example.com/link</g:additional_image_link>
```

```xml
<g:additional_image_link>ftps://example.com/link</g:additional_image_link>
```

```xml
<g:additional_image_link>https://example.com/image1.jpg</g:additional_image_link>
<g:additional_image_link>https://example.com/image2.jpg</g:additional_image_link>
```

```xml
<g:additional_image_link>http://example.com/link</g:additional_image_link>
```

```xml
<g:additional_image_link>https://example.com/link</g:additional_image_link>
```

```xml
<g:additional_image_link>https://example.com/link(black)_(large)</g:additional_image_link>
```

```xml
<g:additional_image_link>https://example.com/link#foo</g:additional_image_link>
```

```xml
<g:additional_image_link><![CDATA[https://example.com/link?utm_source=1&utm_medium=2]]></g:additional_image_link>
```

```xml
<g:additional_image_link>http://example.com/link-%E2%84%A2-mu-20%C2%B5m</g:additional_image_link>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
additional_image_link
""
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
additional_image_link
""
```

```csv
additional_image_link
ftp://example.com/link
```

```csv
additional_image_link
ftps://example.com/link
```

```csv
additional_image_link
"https://example.com/image1.jpg,https://example.com/image2.jpg"
```

```csv
additional_image_link
http://example.com/link
```

```csv
additional_image_link
https://example.com/link
```

```csv
additional_image_link
https://example.com/link(black)_(large)
```

```csv
additional_image_link
https://example.com/link#foo
```

```csv
additional_image_link
https://example.com/link?utm_source=1&utm_medium=2
```

```csv
additional_image_link
http://example.com/link-%E2%84%A2-mu-20%C2%B5m
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" /> 

```xml
<g:additional_image_link>https://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)</g:additional_image_link>
```

:::

:::danger <Anchor id="validation_invalid_url" title="validation_invalid_url" /> 

```xml
<g:additional_image_link>http://bar</g:additional_image_link>
```

:::

:::danger <Anchor id="validation_invalid_url_fragment" title="validation_invalid_url_fragment" /> 

```xml
<g:additional_image_link>https://example.com/link##</g:additional_image_link>
```

:::

:::danger <Anchor id="validation_invalid_url_host" title="validation_invalid_url_host" /> 

```xml
<g:additional_image_link>http://example%.com/link</g:additional_image_link>
```

:::

:::danger <Anchor id="validation_invalid_url_path" title="validation_invalid_url_path" /> 

```xml
<g:additional_image_link>https://example.com/link[12-34]</g:additional_image_link>
```

:::

:::danger <Anchor id="validation_invalid_url_port" title="validation_invalid_url_port" /> 

```xml
<g:additional_image_link>http://example.com:foo/link</g:additional_image_link>
```

:::

:::danger <Anchor id="validation_invalid_url_query" title="validation_invalid_url_query" /> 

```xml
<g:additional_image_link>https://example.com/link?param=value^up-arrow</g:additional_image_link>
```

:::

:::danger <Anchor id="validation_url_scheme_not_allowed" title="validation_url_scheme_not_allowed" /> 

```xml
<g:additional_image_link>foo://example.com/link</g:additional_image_link>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" /> 

```csv
additional_image_link
https://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)
```

:::

:::danger <Anchor id="validation_invalid_url" title="validation_invalid_url" /> 

```csv
additional_image_link
http://bar
```

:::

:::danger <Anchor id="validation_invalid_url_fragment" title="validation_invalid_url_fragment" /> 

```csv
additional_image_link
https://example.com/link##
```

:::

:::danger <Anchor id="validation_invalid_url_host" title="validation_invalid_url_host" /> 

```csv
additional_image_link
http://example%.com/link
```

:::

:::danger <Anchor id="validation_invalid_url_path" title="validation_invalid_url_path" /> 

```csv
additional_image_link
https://example.com/link[12-34]
```

:::

:::danger <Anchor id="validation_invalid_url_port" title="validation_invalid_url_port" /> 

```csv
additional_image_link
http://example.com:foo/link
```

:::

:::danger <Anchor id="validation_invalid_url_query" title="validation_invalid_url_query" /> 

```csv
additional_image_link
https://example.com/link?param=value^up-arrow
```

:::

:::danger <Anchor id="validation_url_scheme_not_allowed" title="validation_url_scheme_not_allowed" /> 

```csv
additional_image_link
foo://example.com/link
```

:::


  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324370?hl=en)
- [Uniform Resource Identifier (URI): Generic Syntax](https://www.rfc-editor.org/rfc/rfc3986)

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2022-12-07"}]} dateOnly={true} />

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **Url**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **True**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **10** | If a list, this specifices the max number of items           |