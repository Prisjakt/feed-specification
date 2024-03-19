---
description: Defines the time period when the promotion is active.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# promotion_effective_dates

<RequiredField/>

## Description

Defines the time period when the promotion is active.






## Validation Rules

- Must be a string
- Must contain two dates (start date, end date) separated by a forward slash `/
- ISO-8601 date format with timezone offset (e.g. `2023-12-20T12:00:00+00:00`)
- Start date must start in future (`start_date > now`)
- End date must be after start date (`end_date > start_date`)
- Ongoing promotion cannot be updated.


## Example Values

Here are examples of how a valid *promotion_effective_dates* value should look like in XML.


:::tip Valid Value

```xml
<g:promotion_effective_dates>2023-12-20T00:00:00+00:00/2023-12-24T00:00:00+00:00</g:promotion_effective_dates>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:promotion_effective_dates>2023-12-20T00:00:00+00:00/2023-12-24T00:00:00+00:00</g:promotion_effective_dates>
```


  </div>
</details>


## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.


:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" />

```xml
<g:promotion_effective_dates>2023-12-24T00:00:00+00:00/2023-12-20T00:00:00+00:00</g:promotion_effective_dates>
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" />

```xml
<g:promotion_effective_dates>2023-12-24T00:00:00+00:00/</g:promotion_effective_dates>
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
- [Google Merchant Specification](https://support.google.com/merchants/answer/13836990)
