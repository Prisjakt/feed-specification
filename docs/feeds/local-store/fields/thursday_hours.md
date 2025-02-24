---
description: Describes opening hours for a given day, can be multiple sets or indicate closed. When you have different hours for a short period use the field [`special_hours`](/feeds/local-store/fields/special_hours.md).
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# thursday_hours

<RequiredField/>

## Description

Describes opening hours for a given day, can be multiple sets or indicate closed. When you have different hours for a short period use the field [`special_hours`](/feeds/local-store/fields/special_hours.md).






## Validation Rules

- Use 24-hour format: `HH:MM-HH:MM`


## Best Practices


### Do

- Use an `X` to indicate **closed all day**
- For multiple sets per day, use a comma to separate `11:30-14:00, 17:00-22:00`





## Example Values

Here are examples of how a valid *thursday_hours* value  should look like in CSV (with header).

:::tip Valid CSV Value

```csv
thursday_hours
09:00-17:00
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
thursday_hours
09:00-17:00
```

```csv
thursday_hours
"11:30-14:00, 17:00-22:00"
```

```csv
thursday_hours
18:00-02:00
```

```csv
thursday_hours
X
```

```csv
thursday_hours
""
```

```csv
thursday_hours
00:00-24:00
```


  </div>
</details>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.



## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2025-02-24"}]} dateOnly={true} />

## References
- [Google Merchant - Bulk Upload Spreadsheet For Business Profiles](https://support.google.com/business/answer/3370250?hl=en&sjid=9926158084056215740-EU)
- [Google Merchant API - LfpStore Definition](https://developers.google.com/merchant/api/reference/rest/lfp_v1beta/accounts.lfpStores#LfpStore)
