---
description: Label that you assign to a product to help assign shipping in Google Merchant Center. **Not used** by Prisjakt.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# local_shipping_label

<OptionalField/>

## Description

Label that you assign to a product to help assign shipping in Google Merchant Center. **Not used** by Prisjakt.






## Validation Rules

- Length must be between `1-100`


## Example Values

Here are examples of how a valid *local_shipping_label* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:local_shipping_label>Sameday</g:local_shipping_label>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:local_shipping_label>Sameday</g:local_shipping_label>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
local_shipping_label
Sameday
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
local_shipping_label
Sameday
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **True**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2025-02-24"}]} dateOnly={true} />

## References
- [Google Local Inventory Data Specification](https://support.google.com/merchants/answer/14819809?hl=en)
