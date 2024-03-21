---
description: This attribute is strongly recommended for fashion and beauty segment. It helps us group variant offers and present relevant offers to the users.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# item_group_id

<OptionalField/>

## Description

This attribute is strongly recommended for fashion and beauty segment. It helps us group variant offers and present relevant offers to the users.



### Effects When Used

- With this attribute we're able to present the user a list of available









## Validation Rules

- Length must be between `1-50` characters


## Best Practices


### Do

- Make sure the combination of `item_group_id` and other variant specific attributes like `color`, `size` and `pattern` are consistent



### Don't

- Be extra careful and don't mix up `id` and `item_group_id`




## Example Values

Here are examples of how a valid *item_group_id* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:item_group_id>AAA111</g:item_group_id>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:item_group_id>AAA111</g:item_group_id>
```

```xml
<g:item_group_id>aaa111</g:item_group_id>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
item_group_id
AAA111
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
item_group_id
AAA111
```

```csv
item_group_id
aaa111
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger[**<Anchor id="validation_invalid_length" title="validation_invalid_length" />**]


```xml
<g:item_group_id>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)</g:item_group_id>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```csv
item_group_id
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)
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
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2024-03-30"}]} dateOnly={true} />

## References
- [Google Manufacturer Specification](https://support.google.com/manufacturers/answer/7422498)
