---
description: Offer Id that specific promotion is attached.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# item_id

<OptionalField/>

## Description

Offer Id that specific promotion is attached.


:::warning
    It must be same as the `id` in offer feed for same item.
:::

- See [offer_id](./offer_id.md) for more information.
- See [offer_feed](../../feeds/offer_feed.md) for more information.
## Validation Rules

- Must be a string
- Must be shorter than `36` characters


## Example Values

Here are examples of how a valid *item_id* value should look like in XML.


:::tip Valid Value

```xml
<pj:item_id><![CDATA[shop_offer_id_1]]></pj:item_id>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<pj:item_id><![CDATA[offer_id_1]]></pj:item_id>
<pj:item_id><![CDATA[id_1]]></pj:item_id>
<pj:item_id>offer_id_1</pj:item_id>
<pj:item_id>0421</pj:item_id>
```


  </div>
</details>


## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.


:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length (more then 36 characters)" />

```xml
<pj:item_id><![CDATA[shop_offer_id_1_attached_to_promotion_for_shop_odder_id_1]]></pj:item_id>
```

:::



## Properties

|     **Property** | **Value**  | **Description**                                              |
|-----------------:|:----------:|:-------------------------------------------------------------|
|        Data Type | **string** | Closest data type in code                                    |
|           Nested | **False**  | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **True**  | If small or large letters matter for this field              |
|       Repeatable |  **yes**   | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit |   **0**    | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2024-06-06"}]} dateOnly={true} />

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324405)
