---
description: Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# mpn

<OptionalField/>

## Description

Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently.



### Effects When Used

- Including this will help indexing your products faster on Pricespy.









## Validation Rules

- Length must be between `1-70` characters


## Best Practices


### Do

- Only MPNs created by a manufacturer should be added here.





## Example Values

Here are examples of how a valid *mpn* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:mpn>SM-G920F</g:mpn>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:mpn>SM-G920F</g:mpn>
```

```xml
<g:mpn>MGCH3LL/A</g:mpn>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
mpn
SM-G920F
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
mpn
SM-G920F
```

```csv
mpn
MGCH3LL/A
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
<g:mpn>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)</g:mpn>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" /> 

```csv
mpn
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)
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
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324482)
