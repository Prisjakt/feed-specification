---
description: Use it to add unstructured product information
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# suggested_retail_price

<OptionalField/>


## Validation Rules

- Must be a number (value) followed by a space and a currency (unit)
- Number *may* have **two decimals**, separated by a `.` (dot)
- Currency must be three upper case characters and a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency
- Zero prices are **not** allowed

## Example Values

Here are examples of how a valid *price* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:suggested_retail_price>99.99 SEK</g:suggested_retail_price>
```

:::
<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:suggested_retail_price>99.99 SEK</g:suggested_retail_price>
```

```xml
<g:suggested_retail_price>100 SEK</g:suggested_retail_price>
```

```xml
<g:suggested_retail_price>SEK 100</g:suggested_retail_price>
```

```xml
<g:suggested_retail_price>99,99 SEK</g:suggested_retail_price>
```

```xml
<g:suggested_retail_price>10,000.00 SEK</g:suggested_retail_price>
```

```xml
<g:suggested_retail_price>10 000.00 SEK</g:suggested_retail_price>
```

```xml
<g:suggested_retail_price>10.000 SEK</g:suggested_retail_price>
```

```xml
<g:suggested_retail_price>1.144.000 SEK</g:suggested_retail_price>
```
  </div>
</details>
  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **suggested_retail_price**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## References
- [Google Merchant Specification for Suggested Retail Price](https://support.google.com/manufacturers/answer/7421591?hl=en-GB)
- [Wikipedia on ISO 4217 Currency codes](https://en.wikipedia.org/wiki/ISO_4217)
