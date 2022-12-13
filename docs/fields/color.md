---
description: Describe your productÂ´s color. Using this attribute is strongly recommended for Fashion and Beauty categories. Add it to improve search results and listing.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# color

<OptionalField/>

## Description

Describe your productÂ´s color. Using this attribute is strongly recommended for Fashion and Beauty categories. Add it to improve search results and listing.





## Validation Rules

- Up to three color strings separated by a forward slash is allowed


## Best Practices


### Do

- Use the same color as in your product page



### Don´t

- Don't use numbers and HTML color coding
- Don't use phrases describing other product properties like design, pattern, size etc




## Example Values

Here are examples of how a valid *color* value  should look like in XML and CSV (with header) respectively.

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
<g:color>red</g:color>
```

```xml
<g:color>green</g:color>
```

```xml
<g:color>blue</g:color>
```

```xml
<g:color>red/green/blue</g:color>
```

```xml
<g:color>RED/GREEN/BLUE</g:color>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
color
""
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
color
""
```

```csv
color
red
```

```csv
color
green
```

```csv
color
blue
```

```csv
color
red/green/blue
```

```csv
color
RED/GREEN/BLUE
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
<g:color>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 40 characters value)</g:color>
```

:::

:::danger <Anchor id="validation_too_many_repetitions" title="validation_too_many_repetitions" /> 

```xml
<g:color>black/mint/blue/white</g:color>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" /> 

```csv
color
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 40 characters value)
```

:::

:::danger <Anchor id="validation_too_many_repetitions" title="validation_too_many_repetitions" /> 

```csv
color
black/mint/blue/white
```

:::


  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324487)

## Changelog
<ChangeLog versionHistory={[{
    semanticVersion: "",
    date: new Date("2022-12-07"),
added: [
"Initial definition",
    ]  },
]} dateOnly={true} />

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **True**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **3** | If a list, this specifices the max number of items           |