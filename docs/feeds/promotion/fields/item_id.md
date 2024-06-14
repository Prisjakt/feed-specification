---
description: Identifier should be unique for every promotion item and not be changed or re-used for other promotion items, a good practice is to use SKUs as ids since they are unique.
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

Identifier should be unique for every promotion item and not be changed or re-used for other promotion items, a good practice is to use SKUs as ids since they are unique.






## Validation Rules

- Length must be between `1-36`
- Must be unique
- Must match `id` from offers feed for same product
- Only **ascii** characters
- Trailing whitespace characters are not allowed
- Disallowed characters are `!` `+` `@` `#` `$` `%` `^` `&` `*` `<` `>` `;` `:`


## Example Values

Here are examples of how a valid *item_id* value should look like in XML.


:::tip Valid Value

```xml
<g:item_id>shop_offer_id_1</g:item_id>
<g:item_id>shop_offer_id_2</g:item_id>
<g:item_id>shop_offer_id_3</g:item_id>
<g:item_id>shop_offer_id_4</g:item_id>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:item_id>shop_offer_id_1</g:item_id>
<g:item_id>shop_offer_id_2</g:item_id>
<g:item_id>shop_offer_id_3</g:item_id>
<g:item_id>shop_offer_id_4</g:item_id>
```


  </div>
</details>


## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.




## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **True**  | If small or large letters matter for this field              |
|       Repeatable |    **True**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2024-06-14"}]} dateOnly={true} />

