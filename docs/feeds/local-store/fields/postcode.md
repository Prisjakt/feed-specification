---
description: The postal code of the business.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# postcode

<RequiredField/>

## Description

The postal code of the business.






## Validation Rules

- Length must be between `1-15`


## Best Practices


### Do

- Follow the country-specific format of where your store is located





## Example Values

Here are examples of how a valid *postcode* value  should look like in CSV (with header).

:::tip Valid CSV Value

```csv
postcode
262 32
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
postcode
262 32
```

```csv
postcode
254 69
```


  </div>
</details>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```csv
postcode
aaaaaaaaaaaaaaa
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
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2025-02-24"}]} dateOnly={true} />

## References
- [Google Merchant - Bulk Upload Spreadsheet For Business Profiles](https://support.google.com/business/answer/3370250?hl=en&sjid=9926158084056215740-EU)
- [Google Merchant API - LfpStore Definition](https://developers.google.com/merchant/api/reference/rest/lfp_v1beta/accounts.lfpStores#LfpStore)
