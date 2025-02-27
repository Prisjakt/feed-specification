---
description: A unique code identifying the store. Use this code to attache local offers to your store when uploading local offer inventory.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# shop_code

<RequiredField/>

## Description

A unique code identifying the store. Use this code to attache local offers to your store when uploading local offer inventory.






## Validation Rules

- Must be unique
- Length must be between `1-64`
- Only **ascii** characters
- Trailing whitespace characters are not allowed
- Disallowed characters are `!` `+` `@` `#` `$` `%` `^` `&` `*` `<` `>` `;` `:`


## Best Practices


### Do

- Create memorable codes (eg. `ShopHbg`, `ShopAngelholm`, `ShopStockholm`)
- If a store move to a new location, create a new code for it





## Example Values

Here are examples of how a valid *shop_code* value  should look like in CSV (with header).

:::tip Valid CSV Value

```csv
shop_code
StoreAngelholm
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
shop_code
StoreAngelholm
```

```csv
shop_code
aBCd1123
```

```csv
shop_code
09az
```


  </div>
</details>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

:::danger <Anchor id="validation_id_blacklisted_ascii_character" title="validation_id_blacklisted_ascii_character" />

```csv
shop_code
!+@#$%^&*
```

:::

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```csv
shop_code
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

:::

:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" />

```csv
shop_code
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" />

```csv
shop_code
""
```

:::

:::danger <Anchor id="validation_non_ascii_character" title="validation_non_ascii_character" />

```csv
shop_code
ąśπœę©
```

:::

:::danger <Anchor id="validation_trailing_whitespace" title="validation_trailing_whitespace" />

```csv
shop_code
a
```
```csv
shop_code
 a
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
