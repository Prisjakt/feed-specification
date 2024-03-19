---
description: Identifier should be unique for every promotion. Attribute is used to map promotion to a product. In the offer feed, [`promotion_id`](/feeds/offer/fields/promotion_id.md) field is used to map a promotion to a product.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# promotion_id

<RequiredField/>

## Description

Identifier should be unique for every promotion. Attribute is used to map promotion to a product. In the offer feed, [`promotion_id`](/feeds/offer/fields/promotion_id.md) field is used to map a promotion to a product.






## Validation Rules

- Must be a string
- Must be shorter than `50` characters
- Must be unique for every promotion


## Best Practices


### Do

- Use a unique ID for each different promotion.



### Don´t

- Don’t reuse or recycle the same ID for different promotions
- Avoid whitespaces




## Example Values

Here are examples of how a valid *promotion_id* value should look like in XML.


:::tip Valid Value

```xml
<g:promotion_id><![CDATA[tbby123_us]]></g:promotion_id>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:promotion_id><![CDATA[tbby123_us]]></g:promotion_id>
```


  </div>
</details>


## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.


:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```xml
<g:promotion_id><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)]]></g:promotion_id>
```

:::



## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **True**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2023-12-11"}]} dateOnly={true} />

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/7050148)
