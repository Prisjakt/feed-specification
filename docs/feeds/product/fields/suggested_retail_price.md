---
description: The Suggested Retail Price is the price that a product’s manufacturer recommends it should be sold for in retail stores.
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

## Description

The Suggested Retail Price is the price that a product’s manufacturer recommends it should be sold for in retail stores.






## Validation Rules

- Must be a number (value) followed by a space and a currency (unit)
- Number *may* have **two decimals**, separated by a `.` (dot)
- Currency must be three upper case characters and a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency
- Zero prices are **not** allowed


## Best Practices



### Don't

- Do **not** include extra charges in the cost (such as shipping cost)
- Do **not** use thousand separators or similar in the value (while we may handle some of these cases we recommend you to just send plain numbers like `10000.50 SEK`)




## Example Values

Here are examples of how a valid *suggested_retail_price* value  should look like in XML and CSV (with header) respectively.

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
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
suggested_retail_price
99.99 SEK
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
suggested_retail_price
99.99 SEK
```

```csv
suggested_retail_price
100 SEK
```

```csv
suggested_retail_price
SEK 100
```

```csv
suggested_retail_price
"99,99 SEK"
```

```csv
suggested_retail_price
"10,000.00 SEK"
```

```csv
suggested_retail_price
10 000.00 SEK
```

```csv
suggested_retail_price
10.000 SEK
```

```csv
suggested_retail_price
1.144.000 SEK
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger[**<Anchor id="validation_missing_currency" title="validation_missing_currency" />**]


```xml
<g:suggested_retail_price>100$</g:suggested_retail_price>
```

:::

:::danger[**<Anchor id="validation_missing_price_value" title="validation_missing_price_value" />**]


```xml
<g:suggested_retail_price>SEK</g:suggested_retail_price>
```

:::

:::danger[**<Anchor id="validation_not_number" title="validation_not_number" />**]


```xml
<g:suggested_retail_price>10.0.00.00 SEK</g:suggested_retail_price>
```
```xml
<g:suggested_retail_price>10.0.00.00 SEK</g:suggested_retail_price>
```
```xml
<g:suggested_retail_price>foo SEK</g:suggested_retail_price>
```

:::

:::danger[**<Anchor id="validation_not_positive_number" title="validation_not_positive_number" />**]


```xml
<g:suggested_retail_price>-10 SEK</g:suggested_retail_price>
```
```xml
<g:suggested_retail_price>0 SEK</g:suggested_retail_price>
```

:::

:::danger[**<Anchor id="validation_price_out_of_range" title="validation_price_out_of_range" />**]


```xml
<g:suggested_retail_price>1000000000 SEK</g:suggested_retail_price>
```

:::

:::danger[**<Anchor id="validation_unknown_currency" title="validation_unknown_currency" />**]


```xml
<g:suggested_retail_price>$100</g:suggested_retail_price>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_missing_currency" title="validation_missing_currency" />

```csv
suggested_retail_price
100$
```

:::

:::danger <Anchor id="validation_missing_price_value" title="validation_missing_price_value" />

```csv
suggested_retail_price
SEK
```

:::

:::danger <Anchor id="validation_not_number" title="validation_not_number" />

```csv
suggested_retail_price
10.0.00.00 SEK
```
```csv
suggested_retail_price
10.0.00.00 SEK
```
```csv
suggested_retail_price
foo SEK
```

:::

:::danger <Anchor id="validation_not_positive_number" title="validation_not_positive_number" />

```csv
suggested_retail_price
-10 SEK
```
```csv
suggested_retail_price
0 SEK
```

:::

:::danger <Anchor id="validation_price_out_of_range" title="validation_price_out_of_range" />

```csv
suggested_retail_price
1000000000 SEK
```

:::

:::danger <Anchor id="validation_unknown_currency" title="validation_unknown_currency" />

```csv
suggested_retail_price
$100
```

:::


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **price**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2024-10-28"}]} dateOnly={true} />

## References
- [Google Merchant Specification](https://support.google.com/manufacturers/answer/7421591?sjid=10921698754713815686-EU)
- [Wikipedia on ISO 4217 Currency codes](https://en.wikipedia.org/wiki/ISO_4217)
