---
description: Should be used for tagging products for an adult audience. Not used to describe [`age_group`](/feeds/offer/fields/age_group.md), but for specific product types, such as sex toys.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# adult

<OptionalField/>

## Description

Should be used for tagging products for an adult audience. Not used to describe [`age_group`](/feeds/offer/fields/age_group.md), but for specific product types, such as sex toys.






## Validation Rules

- Should be one of the examples in [valid examples](#example-values)


## Best Practices



### Don´t

- Don't use adult to indicate [`age_group`](/feeds/offer/fields/age_group.md)




## Example Values

Here are examples of how a valid *adult* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:adult>true</g:adult>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:adult>true</g:adult>
```

```xml
<g:adult>false</g:adult>
```

```xml
<g:adult>yes</g:adult>
```

```xml
<g:adult>no</g:adult>
```

```xml
<g:adult>YES</g:adult>
```

```xml
<g:adult>NO</g:adult>
```

```xml
<g:adult>tRuE</g:adult>
```

```xml
<g:adult>fAlSE</g:adult>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
adult
true
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
adult
true
```

```csv
adult
false
```

```csv
adult
yes
```

```csv
adult
no
```

```csv
adult
YES
```

```csv
adult
NO
```

```csv
adult
tRuE
```

```csv
adult
fAlSE
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger[**<Anchor id="validation_invalid_enum" title="validation_invalid_enum" />**]


```xml
<g:adult>unknown</g:adult>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_enum" title="validation_invalid_enum" />

```csv
adult
unknown
```

:::


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **Boolean**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2022-12-07"}]} dateOnly={true} />

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324508)
