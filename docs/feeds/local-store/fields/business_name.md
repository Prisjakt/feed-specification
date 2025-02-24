---
description: The name of your shop, as shown on public sources.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# business_name

<RequiredField/>

## Description

The name of your shop, as shown on public sources.






## Validation Rules

- Length must be between `1-100`


## Best Practices


### Do

- Use title casing



### Don´t

- Use all caps
- Put other information in the name (such as building or mall names)




## Example Values

Here are examples of how a valid *business_name* value  should look like in CSV (with header).

:::tip Valid CSV Value

```csv
business_name
Prisjakts Shop
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
business_name
Prisjakts Shop
```

```csv
business_name
Elgiganten
```


  </div>
</details>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```csv
business_name
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
