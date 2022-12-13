---
description: State the condition of the product you are selling for your customers.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# condition

<RequiredField/>

## Description

State the condition of the product you are selling for your customers.



### Effects When Used

- Will improve filtering capabilities for customers






## Allowed Enum Values

```
damaged packaging
```
```
demo
```
```
new
```
```
refurbished
```
```
used
```


## Validation Rules

- Value must be one of the allowed enum values


## Best Practices


### Do

- Make sure the attributes reflects actual product condition





## Example Values

Here are examples of how a valid *condition* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:condition>new</g:condition>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:condition>new</g:condition>
```

```xml
<g:condition>refurbished</g:condition>
```

```xml
<g:condition>used</g:condition>
```

```xml
<g:condition>damaged packaging</g:condition>
```

```xml
<g:condition>demo</g:condition>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
condition
new
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
condition
new
```

```csv
condition
refurbished
```

```csv
condition
used
```

```csv
condition
damaged packaging
```

```csv
condition
demo
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger <Anchor id="validation_invalid_enum" title="validation_invalid_enum" /> 

```xml
<g:condition>unknown</g:condition>
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" /> 

```xml
(empty string)
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_enum" title="validation_invalid_enum" /> 

```csv
condition
unknown
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" /> 

```csv
condition
""
```

:::


  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324469)

## Changelog
<ChangeLog versionHistory={[{
    semanticVersion: "",
    date: new Date("2022-12-07"),
added: [
"Initial definition",
    ]  },
]} dateOnly={true} />

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |