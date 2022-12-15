---
description: This attribute indicates if the offer is a bundle of products (mobile phone and subscription or DSLR camera and additional lens etc). It is **optional** in most countries, but **required** for products sold on French market.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# is_bundle

<OptionalField/>

## Description

This attribute indicates if the offer is a bundle of products (mobile phone and subscription or DSLR camera and additional lens etc). It is **optional** in most countries, but **required** for products sold on French market.



## Allowed Enum Values

```
false
```
```
no
```
```
true
```
```
yes
```


## Validation Rules

- The list of allowed values is limited


## Best Practices


### Do

- Use this attribute if your product is a custom bundle



### Don´t

- Don't use this attribute for manufacturer specific bundles




## Example Values

Here are examples of how a valid *is_bundle* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
(empty string)
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
(empty string)
```

```xml
<g:is_bundle>true</g:is_bundle>
```

```xml
<g:is_bundle>false</g:is_bundle>
```

```xml
<g:is_bundle>yes</g:is_bundle>
```

```xml
<g:is_bundle>no</g:is_bundle>
```

```xml
<g:is_bundle>YES</g:is_bundle>
```

```xml
<g:is_bundle>NO</g:is_bundle>
```

```xml
<g:is_bundle>tRuE</g:is_bundle>
```

```xml
<g:is_bundle>fAlSE</g:is_bundle>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
is_bundle
""
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
is_bundle
""
```

```csv
is_bundle
true
```

```csv
is_bundle
false
```

```csv
is_bundle
yes
```

```csv
is_bundle
no
```

```csv
is_bundle
YES
```

```csv
is_bundle
NO
```

```csv
is_bundle
tRuE
```

```csv
is_bundle
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

:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" /> 

```xml
<g:is_bundle>unknown</g:is_bundle>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_value" title="validation_invalid_value" /> 

```csv
is_bundle
unknown
```

:::


  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324449)

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2022-12-07"}]} dateOnly={true} />

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |