---
description: It is recommended to add this attribute if delivery costs based on dimensions.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# shipping_length

<OptionalField/>

## Description

It is recommended to add this attribute if delivery costs based on dimensions.





## Validation Rules

- Length must be between `1-50` characters


## Best Practices


### Do

- Use accepted units systems





## Example Values

Here are examples of how a valid *shipping_length* value  should look like in XML and CSV (with header) respectively.

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
<g:shipping_length>0 cm</g:shipping_length>
```

```xml
<g:shipping_length>0.0 in</g:shipping_length>
```

```xml
<g:shipping_length>11 cm</g:shipping_length>
```

```xml
<g:shipping_length>15.2 in</g:shipping_length>
```

```xml
<g:shipping_length>10.12 cm</g:shipping_length>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
shipping_length
""
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
shipping_length
""
```

```csv
shipping_length
0 cm
```

```csv
shipping_length
0.0 in
```

```csv
shipping_length
11 cm
```

```csv
shipping_length
15.2 in
```

```csv
shipping_length
10.12 cm
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger <Anchor id="validation_invalid_format" title="validation_invalid_format" /> 

```xml
<g:shipping_length>123cm</g:shipping_length>
```

:::

:::danger <Anchor id="validation_invalid_length_unit" title="validation_invalid_length_unit" /> 

```xml
<g:shipping_length>2 m</g:shipping_length>
```

:::

:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" /> 

```xml
<g:shipping_length>unkn own</g:shipping_length>
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" /> 

```xml
<g:shipping_length> in</g:shipping_length>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_format" title="validation_invalid_format" /> 

```csv
shipping_length
123cm
```

:::

:::danger <Anchor id="validation_invalid_length_unit" title="validation_invalid_length_unit" /> 

```csv
shipping_length
2 m
```

:::

:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" /> 

```csv
shipping_length
unkn own
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" /> 

```csv
shipping_length
 in
```

:::


  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324498?hl=en-GB&ref_topic=6324338)

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2022-12-07"}]} dateOnly={true} />

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |