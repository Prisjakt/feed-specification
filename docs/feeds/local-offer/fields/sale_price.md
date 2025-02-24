---
description: Your product's sale price
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# sale_price

<OptionalField/>

## Description

Your product's sale price


## Related Fields

```mermaid
%%{init: {'theme':'neutral'}}%%
flowchart LR
sale_price -- overrides if exist  --- price
  click price "/feeds/local-offer/fields/price" "price" _blank
sale_price -- can be enhanced by  --- sale_price_effective_date
  click sale_price_effective_date "/feeds/local-offer/fields/sale_price_effective_date" "sale_price_effective_date" _blank

  click sale_price "/feeds/local-offer/fields/sale_price" "sale_price" _blank
  style sale_price fill:#4cb3d4
```




## Validation Rules

- Meet the same formatting requirements as [`price`](/feeds/local-offer/fields/price.md)
- Must be lower than [`price`](/feeds/local-offer/fields/price.md)


## Best Practices



### Don´t

- When you have a sale, submit **both** __price__ and __sale_price__ do **not** put the lower price into the price field




## Example Values

Here are examples of how a valid *sale_price* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:sale_price>99.99 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:sale_price>99.99 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

```xml
<g:sale_price>100 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

```xml
<g:sale_price>SEK 100</g:sale_price>
<g:price>3200000 SEK</g:price>
```

```xml
<g:sale_price>99,99 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

```xml
<g:sale_price>10,000.00 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

```xml
<g:sale_price>10 000.00 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

```xml
<g:sale_price>10.000 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

```xml
<g:sale_price>1.144.000 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
sale_price,price
99.99 SEK,3200000 SEK
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
sale_price,price
99.99 SEK,3200000 SEK
```

```csv
sale_price,price
100 SEK,3200000 SEK
```

```csv
sale_price,price
SEK 100,3200000 SEK
```

```csv
sale_price,price
"99,99 SEK",3200000 SEK
```

```csv
sale_price,price
"10,000.00 SEK",3200000 SEK
```

```csv
sale_price,price
10 000.00 SEK,3200000 SEK
```

```csv
sale_price,price
10.000 SEK,3200000 SEK
```

```csv
sale_price,price
1.144.000 SEK,3200000 SEK
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
<g:sale_price>100$</g:sale_price>
<g:price>3200000 SEK</g:price>
```

:::

:::danger[**<Anchor id="validation_missing_price_value" title="validation_missing_price_value" />**]


```xml
<g:sale_price>SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

:::

:::danger[**<Anchor id="validation_not_number" title="validation_not_number" />**]


```xml
<g:sale_price>10.0.00.00 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```
```xml
<g:sale_price>10.0.00.00 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```
```xml
<g:sale_price>foo SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

:::

:::danger[**<Anchor id="validation_not_positive_number" title="validation_not_positive_number" />**]


```xml
<g:sale_price>-10 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```
```xml
<g:sale_price>0 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

:::

:::danger[**<Anchor id="validation_price_out_of_range" title="validation_price_out_of_range" />**]


```xml
<g:sale_price>1000000000 SEK</g:sale_price>
<g:price>3200000 SEK</g:price>
```

:::

:::danger[**<Anchor id="validation_sale_price_is_not_lower_then_price" title="validation_sale_price_is_not_lower_then_price" />**]


```xml
<g:sale_price>100 SEK</g:sale_price>
<g:price>100 SEK</g:price>
```
```xml
<g:sale_price>100 SEK</g:sale_price>
<g:price>50 SEK</g:price>
```

:::

:::danger[**<Anchor id="validation_unknown_currency" title="validation_unknown_currency" />**]


```xml
<g:sale_price>$100</g:sale_price>
<g:price>3200000 SEK</g:price>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_missing_currency" title="validation_missing_currency" />

```csv
sale_price,price
100$,3200000 SEK
```

:::

:::danger <Anchor id="validation_missing_price_value" title="validation_missing_price_value" />

```csv
sale_price,price
SEK,3200000 SEK
```

:::

:::danger <Anchor id="validation_not_number" title="validation_not_number" />

```csv
sale_price,price
10.0.00.00 SEK,3200000 SEK
```
```csv
sale_price,price
10.0.00.00 SEK,3200000 SEK
```
```csv
sale_price,price
foo SEK,3200000 SEK
```

:::

:::danger <Anchor id="validation_not_positive_number" title="validation_not_positive_number" />

```csv
sale_price,price
-10 SEK,3200000 SEK
```
```csv
sale_price,price
0 SEK,3200000 SEK
```

:::

:::danger <Anchor id="validation_price_out_of_range" title="validation_price_out_of_range" />

```csv
sale_price,price
1000000000 SEK,3200000 SEK
```

:::

:::danger <Anchor id="validation_sale_price_is_not_lower_then_price" title="validation_sale_price_is_not_lower_then_price" />

```csv
sale_price,price
100 SEK,100 SEK
```
```csv
sale_price,price
100 SEK,50 SEK
```

:::

:::danger <Anchor id="validation_unknown_currency" title="validation_unknown_currency" />

```csv
sale_price,price
$100,3200000 SEK
```

:::


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **price**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **True**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2025-02-24"}]} dateOnly={true} />

## References
- [Google Local Inventory Data Specification For This Field](https://support.google.com/merchants/answer/6324471?sjid=12668122117297241362-EU&visit_id=638760023831624244-3736320015&rd=1)
- [Google Local Inventory Data Specification](https://support.google.com/merchants/answer/14819809?hl=en)
