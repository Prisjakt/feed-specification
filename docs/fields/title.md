---
description: It should contain the full product name. The title is used to clearly state what product your shop is selling. It's the **most important attribute** for Prisjakt to be able to index your product/offer correctly. It should contain a manufacturer name along with product name or model. Including size, color and gender is recommended for product types that specifies this.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# title

<RequiredField/>

## Description

It should contain the full product name. The title is used to clearly state what product your shop is selling. It's the **most important attribute** for Prisjakt to be able to index your product/offer correctly. It should contain a manufacturer name along with product name or model. Including size, color and gender is recommended for product types that specifies this.






## Validation Rules

- Use only one title attribute per product
- Length must be between `1-255` characters


## Best Practices


### Do

- Add full product name
- Use the same title as it is present on your product page
- Add variant information if applicable: colour, size, gender etc.
- Preferred syntax [brand] + [model name] + [additional product information]
- Use language of the specific market where the product is being sold (for better user experience)



### Don´t

- Do not use HTML tag - Do not include promotional text
- Do not use tabs or extra spaces
- Do not write detailed information in title, this belongs in the description attribute




## Example Values

Here are examples of how a valid *title* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
title
Samsung Galaxy S8 Black 128G
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
title
Samsung Galaxy S8 Black 128G
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
<g:title><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)]]></g:title>
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" /> 

```xml
<g:title></g:title>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" /> 

```csv
title
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" /> 

```csv
title
""
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
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324415)
