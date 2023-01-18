---
description: It is recommended to add this attribute if delivery costs based on weight.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# shipping_weight

<OptionalField/>

## Description

It is recommended to add this attribute if delivery costs based on weight.


## Related Fields

```mermaid
%%{init: {'theme':'neutral'}}%%
flowchart LR
shipping_weight -- should be supplied together  --- shipping_length
  click shipping_length "/fields/shipping_length" "shipping_length" _blank
shipping_weight -- should be supplied together  --- shipping_height
  click shipping_height "/fields/shipping_height" "shipping_height" _blank
shipping_weight -- should be supplied together  --- shipping_width
  click shipping_width "/fields/shipping_width" "shipping_width" _blank
shipping_weight -- affects price and eligibility of  --- shipping
  click shipping "/fields/shipping" "shipping" _blank
shipping_weight -- determines label of  --- shipping_label
  click shipping_label "/fields/shipping_label" "shipping_label" _blank
   
  
  click shipping_weight "/fields/shipping_weight" "shipping_weight" _blank
  style shipping_weight fill:#4cb3d4
```




## Validation Rules

- Length must be between `1-50` characters
- Unit must be one of `g`, `kg`, `lb` or `oz`


## Example Values

Here are examples of how a valid *shipping_weight* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:shipping_weight>11.2 kg</g:shipping_weight>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:shipping_weight>11.2 kg</g:shipping_weight>
```

```xml
<g:shipping_weight>11 kg</g:shipping_weight>
```

```xml
<g:shipping_weight>11 g</g:shipping_weight>
```

```xml
<g:shipping_weight>11.2 g</g:shipping_weight>
```

```xml
<g:shipping_weight>11 oz</g:shipping_weight>
```

```xml
<g:shipping_weight>11 lb</g:shipping_weight>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
shipping_weight
11.2 kg
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
shipping_weight
11.2 kg
```

```csv
shipping_weight
11 kg
```

```csv
shipping_weight
11 g
```

```csv
shipping_weight
11.2 g
```

```csv
shipping_weight
11 oz
```

```csv
shipping_weight
11 lb
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
<g:shipping_weight>11.,.,.,111</g:shipping_weight>
```

:::

:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" /> 

```xml
<g:shipping_weight>empty value</g:shipping_weight>
```

:::

:::danger <Anchor id="validation_invalid_weight_unit" title="validation_invalid_weight_unit" /> 

```xml
<g:shipping_weight>11 kilo</g:shipping_weight>
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" /> 

```xml
<g:shipping_weight>11 </g:shipping_weight>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_format" title="validation_invalid_format" /> 

```csv
shipping_weight
"11.,.,.,111"
```

:::

:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" /> 

```csv
shipping_weight
empty value
```

:::

:::danger <Anchor id="validation_invalid_weight_unit" title="validation_invalid_weight_unit" /> 

```csv
shipping_weight
11 kilo
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" /> 

```csv
shipping_weight
11
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
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2022-12-07"}]} dateOnly={true} />

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324503)
