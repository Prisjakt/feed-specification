---
description: Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# id

<RequiredField/>

## Description

Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique.






## Validation Rules

- Length must be between `1-36`
- Must be unique
- Only **ascii** characters
- Trailing whitespace characters are not allowed
- Allowed characters: All ascii characters
- Disallowed characters: `!` `+` `@` `#` `$` `%` `^` `&` `*` `<` `>` `;` `:`


## Best Practices


### Do

- Use SKUs as ids
- You can follow Google format but in some rare cases we might reject some offers due to stricter validation.



### Don´t

- Re-use, if re-used, your product might end up indexed to the wrong Prisjakt product
- Change over time, if changed, the product will need to be indexed again
- Don't add whitespace characters (" ", "\n", "t") at the beginning or the end of the id field




## Example Values

Here are examples of how a valid *id* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:id><![CDATA[213888]]></g:id>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:id><![CDATA[213888]]></g:id>
```

```xml
<g:id><![CDATA[aBCd1123]]></g:id>
```

```xml
<g:id><![CDATA[09az]]></g:id>
```

```xml
<g:id><![CDATA[a b./)(]]></g:id>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
id
213888
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
id
213888
```

```csv
id
aBCd1123
```

```csv
id
09az
```

```csv
id
a b./)(
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger <Anchor id="validation_id_blacklisted_ascii_character" title="validation_id_blacklisted_ascii_character" />

```xml
<g:id><![CDATA[!+@#$%^&*]]></g:id>
```

:::

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```xml
<g:id><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa]]></g:id>
```

:::

:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" />

```xml
<g:id><![CDATA[ ]]></g:id>
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" />

```xml
<g:id></g:id>
```

:::

:::danger <Anchor id="validation_non_ascii_character" title="validation_non_ascii_character" />

```xml
<g:id><![CDATA[ąśπœę©]]></g:id>
```

:::

:::danger <Anchor id="validation_trailing_whitespace" title="validation_trailing_whitespace" />

```xml
<g:id><![CDATA[a ]]></g:id>
```
```xml
<g:id><![CDATA[ a]]></g:id>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_id_blacklisted_ascii_character" title="validation_id_blacklisted_ascii_character" />

```csv
id
!+@#$%^&*
```

:::

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```csv
id
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

:::

:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" />

```csv
id
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" />

```csv
id
""
```

:::

:::danger <Anchor id="validation_non_ascii_character" title="validation_non_ascii_character" />

```csv
id
ąśπœę©
```

:::

:::danger <Anchor id="validation_trailing_whitespace" title="validation_trailing_whitespace" />

```csv
id
a
```
```csv
id
 a
```

:::


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **True**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"changed": ["Rule for id validation has been updated. Only ASCII characters (with some exceptions) are now allowed. There is also a list of disallowed characters. Please check documentaiton for more details."], "date": "2023-06-07"}, {"added": ["Initial definition"], "date": "2022-12-07"}]} dateOnly={true} />

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324405)
