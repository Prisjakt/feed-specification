---
description: Title is the **most important attribute** for Prisjakt to be able to index your product/offer correctly. It should contain manufacturer name along with product name and/or model. Additionally size, color and gender is recommended for product types that specifies this.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# title

<RequiredField/>

## Description

Title is the **most important attribute** for Prisjakt to be able to index your product/offer correctly. It should contain manufacturer name along with product name and/or model. Additionally size, color and gender is recommended for product types that specifies this.





## Validation Rules

- Length should be between `1-255`


## Best Practices


### Do

- Use the same title as it is present on your product page
- Preferred syntax is `[brand] + [model name] + [additional product information]`
- Use language of the specific market where the product is being sold (for better user experience)
- Embed in a [CDATA](/docs/syntax/cdata) tag if using xml in order to avoid any potential issues with special characters



### Don´t

- Avoid commas, tabs, extra spaces, newlines and other special characters (especially if you use CSV format)
- Do not use HTML tags or any other codes
- Do not include promotional text
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
(empty string)
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

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324415)

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
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |