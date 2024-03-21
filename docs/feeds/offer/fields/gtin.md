---
description: Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin).
  A GTIN uniquely identifies your product.
  Including this will help indexing your products faster on Pricespy.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# gtin

<OptionalField/>

## Description

Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin).
  A GTIN uniquely identifies your product.
  Including this will help indexing your products faster on Pricespy.






## Validation Rules

- Use only one attribute of this type per product
- Length should be one of `0, 8, 12, 13, or 14` digits (UPC, EAN, JAN, or ISBN)
- Make sure that the check digit is present and correct using the [GS1 Check digit calculator](https://www.gs1.org/check-digit-calculator)
- Don’t submit a GTIN in the restricted ranges. Restricted ranges have the following prefixes: `02, 04, or 2 (when gtin is 13-digit number)`
- Don’t submit a GTIN in the coupon ranges. Coupons have the following GS1 prefixes ranges: `05, 98–99 (when gtin is 13-digit number)`
- GTINs with restricted prefixes from above are valid when gtin is 12 or 14-digit number
- Must be an number


## Example Values

Here are examples of how a valid *gtin* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:gtin>90311017</g:gtin>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:gtin>90311017</g:gtin>
```

```xml
<g:gtin>036282818705</g:gtin>
```

```xml
<g:gtin>8806088269696</g:gtin>
```

```xml
<g:gtin>10614141000415</g:gtin>
```

```xml
<g:gtin>9031-1017</g:gtin>
```

```xml
<g:gtin>0362 8281-8705</g:gtin>
```

```xml
<g:gtin>8806-08826 9696</g:gtin>
```

```xml
<g:gtin>10614141000415</g:gtin>
```

```xml
<g:gtin>10614141000415</g:gtin>
<g:gtin>90311017</g:gtin>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
gtin
90311017
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
gtin
90311017
```

```csv
gtin
036282818705
```

```csv
gtin
8806088269696
```

```csv
gtin
10614141000415
```

```csv
gtin
9031-1017
```

```csv
gtin
0362 8281-8705
```

```csv
gtin
8806-08826 9696
```

```csv
gtin
10614141000415
```

```csv
gtin
"10614141000415,90311017"
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger[**<Anchor id="validation_gtin_invalid_check_digit" title="validation_gtin_invalid_check_digit" />**]


```xml
<g:gtin>026282818705</g:gtin>
```
```xml
<g:gtin>046282818705</g:gtin>
```
```xml
<g:gtin>03628281</g:gtin>
```
```xml
<g:gtin>97795145</g:gtin>
```
```xml
<g:gtin>8801088269696</g:gtin>
```
```xml
<g:gtin>996282818705</g:gtin>
```
```xml
<g:gtin>03628281</g:gtin>
```

:::

:::danger[**<Anchor id="validation_gtin_prefix_not_allowed" title="validation_gtin_prefix_not_allowed" />**]


```xml
<g:gtin>9900114145837</g:gtin>
```

:::

:::danger[**<Anchor id="validation_invalid_length" title="validation_invalid_length" />**]


```xml
<g:gtin>881111088111169696</g:gtin>
```

:::

:::danger[**<Anchor id="validation_not_integer" title="validation_not_integer" />**]


```xml
<g:gtin>88aaa08869696</g:gtin>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_gtin_invalid_check_digit" title="validation_gtin_invalid_check_digit" />

```csv
gtin
026282818705
```
```csv
gtin
046282818705
```
```csv
gtin
03628281
```
```csv
gtin
97795145
```
```csv
gtin
8801088269696
```
```csv
gtin
996282818705
```
```csv
gtin
03628281
```

:::

:::danger <Anchor id="validation_gtin_prefix_not_allowed" title="validation_gtin_prefix_not_allowed" />

```csv
gtin
9900114145837
```

:::

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```csv
gtin
881111088111169696
```

:::

:::danger <Anchor id="validation_not_integer" title="validation_not_integer" />

```csv
gtin
88aaa08869696
```

:::


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **True**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **10** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2022-12-07"}]} dateOnly={true} />

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324461)
