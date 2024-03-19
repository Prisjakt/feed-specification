---
description: The `promotion_id` field allows mapping your inventory to promotions.  Offer if mapped to promotion by [`promotion_id`](/fields/promotion/promotion_id.md) in promotion feed.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# promotion_id

<OptionalField/>

## Description

The `promotion_id` field allows mapping your inventory to promotions.  Offer if mapped to promotion by [`promotion_id`](/fields/promotion/promotion_id.md) in promotion feed.



### Effects When Used

- Use this attribute if you want to highlight offers included in your current promotion campaigns.









## Validation Rules

- Length must be between `1-50` characters


## Example Values

Here are examples of how a valid *promotion_id* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:promotion_id><![CDATA[10-year-anniversary-promo]]></g:promotion_id>
<g:promotion_id><![CDATA[mega deals]]></g:promotion_id>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:promotion_id><![CDATA[10-year-anniversary-promo]]></g:promotion_id>
<g:promotion_id><![CDATA[mega deals]]></g:promotion_id>
```

```xml
<g:promotion_id><![CDATA[super promo]]></g:promotion_id>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
promotion_id
"10-year-anniversary-promo,mega deals"
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
promotion_id
"10-year-anniversary-promo,mega deals"
```

```csv
promotion_id
super promo
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
<g:promotion_id><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)]]></g:promotion_id>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```csv
promotion_id
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)
```

:::


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **List[String]**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **True**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **10** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2022-12-07"}]} dateOnly={true} />

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/7050148)
