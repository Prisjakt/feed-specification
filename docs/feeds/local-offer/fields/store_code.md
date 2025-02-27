---
description: Identifier to specify which local store this local offer belongs to.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# store_code

<RequiredField/>

## Description

Identifier to specify which local store this local offer belongs to.






## Validation Rules

- Length must be between `1-64`
- Must be unique
- Must match the [`shop_code`](/feeds/local-shop/fields/shop_code.md) you have specified in your [`local store`](/feeds/local-shop/) feed.
- Case sensitive


## Example Values

Here are examples of how a valid *store_code* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:store_code>StoreAngelholm</g:store_code>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:store_code>StoreAngelholm</g:store_code>
```

```xml
<g:store_code>aBCd1123</g:store_code>
```

```xml
<g:store_code>09az</g:store_code>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
store_code
StoreAngelholm
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
store_code
StoreAngelholm
```

```csv
store_code
aBCd1123
```

```csv
store_code
09az
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger[**<Anchor id="validation_id_blacklisted_ascii_character" title="validation_id_blacklisted_ascii_character" />**]


```xml
<g:store_code><![CDATA[!+@#$%^&*]]></g:store_code>
```

:::

:::danger[**<Anchor id="validation_invalid_length" title="validation_invalid_length" />**]


```xml
<g:store_code>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</g:store_code>
```

:::

:::danger[**<Anchor id="validation_invalid_value" title="validation_invalid_value" />**]


```xml
<g:store_code> </g:store_code>
```

:::

:::danger[**<Anchor id="validation_missing_value" title="validation_missing_value" />**]


```xml
<g:store_code></g:store_code>
```

:::

:::danger[**<Anchor id="validation_non_ascii_character" title="validation_non_ascii_character" />**]


```xml
<g:store_code>ąśπœę©</g:store_code>
```

:::

:::danger[**<Anchor id="validation_trailing_whitespace" title="validation_trailing_whitespace" />**]


```xml
<g:store_code>a </g:store_code>
```
```xml
<g:store_code> a</g:store_code>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_id_blacklisted_ascii_character" title="validation_id_blacklisted_ascii_character" />

```csv
store_code
!+@#$%^&*
```

:::

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```csv
store_code
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

:::

:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" />

```csv
store_code
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" />

```csv
store_code
""
```

:::

:::danger <Anchor id="validation_non_ascii_character" title="validation_non_ascii_character" />

```csv
store_code
ąśπœę©
```

:::

:::danger <Anchor id="validation_trailing_whitespace" title="validation_trailing_whitespace" />

```csv
store_code
a
```
```csv
store_code
 a
```

:::


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **True**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2025-02-24"}]} dateOnly={true} />

## References
- [Google Local Inventory Data Specification For This Field](https://support.google.com/merchants/answer/13869896?sjid=12668122117297241362-EU)
- [Google Local Inventory Data Specification](https://support.google.com/merchants/answer/14819809?hl=en)
