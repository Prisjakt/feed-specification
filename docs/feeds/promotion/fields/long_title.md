---
description: Full title of the promotion. Should describe the promotion completely and accurately.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# long_title

<RequiredField/>

## Description

Full title of the promotion. Should describe the promotion completely and accurately.






## Validation Rules

- Must be a string
- Must be shorter than `60` characters


## Best Practices


### Do

- Ensure titles are specific, accurate, and easy to understand.



### Don´t

- Don't use titles that may mislead customers.




## Example Values

Here are examples of how a valid *long_title* value should look like in XML.


:::tip Valid Value

```xml
<g:long_title><![CDATA[Free mug with purchase]]></g:long_title>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:long_title><![CDATA[Free mug with purchase]]></g:long_title>
```


  </div>
</details>


## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.


:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```xml
<g:long_title><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 60 characters value)]]></g:long_title>
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
- [Google Merchant Specification](https://support.google.com/merchants/answer/13838102)
