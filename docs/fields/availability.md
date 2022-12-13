---
description: Use the availability attribute to display your stock status.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# availability

<RequiredField/>

## Description

Use the availability attribute to display your stock status.



### Effects When Used

- Will visually (green, yellow, red) indicate if a customer can order the product






## Allowed Enum Values

```
download
```
```
in_stock
```
```
not_available_for_purchase
```
```
out_of_stock
```
```
pickup
```
```
preorder
```
```
backorder
```


## Validation Rules

- Value must be one of the allowed enum values


## Best Practices


### Do

- Use up-to-date stock info



### Don´t

- Don't use out of stock when the shop is temporarily down
- Don't use out of stock when you want to remove the product from the listing
- Don't use out of stock for products that are discontinued




## Example Values

Here are examples of how a valid *availability* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:availability>in_stock</g:availability>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:availability>in_stock</g:availability>
```

```xml
<g:availability>out_of_stock</g:availability>
```

```xml
<g:availability>pickup</g:availability>
```

```xml
<g:availability>download</g:availability>
```

```xml
<g:availability>not_available_for_purchase</g:availability>
```

```xml
<g:availability>preorder</g:availability>
<g:availability_date>2021-03-21</g:availability_date>
```

```xml
<g:availability>backorder</g:availability>
<g:availability_date>2021-03-21</g:availability_date>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
availability
in_stock
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
availability
in_stock
```

```csv
availability
out_of_stock
```

```csv
availability
pickup
```

```csv
availability
download
```

```csv
availability
not_available_for_purchase
```

```csv
availability,availability_date
preorder,2021-03-21
```

```csv
availability,availability_date
backorder,2021-03-21
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger <Anchor id="validation_invalid_enum" title="validation_invalid_enum" /> 

```xml
<g:availability>unknown</g:availability>
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" /> 

```xml
(empty string)
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_enum" title="validation_invalid_enum" /> 

```csv
availability
unknown
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" /> 

```csv
availability
""
```

:::


  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324448)

## Changelog
<ChangeLog versionHistory={[{"changed": ["Previously `out_of_stock` values were still orderable, from now on `out_of_stock` will not be orderable. If you want to represent a product that is not in stuck but still orderable you should use `backorder` and set [availability_date](/docs/fields/availability_date)"], "date": "2022-12-20"}, {"added": ["New enum value `backorder`, this value should be used for products that are orderable but currently not in stock."], "date": "2022-12-08"}, {"added": ["Initial definition"], "date": "2022-12-07"}]} dateOnly={true} />

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **enum**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |