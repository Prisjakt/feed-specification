---
description: Using this attribute is strongly recommended if [`size`](size.md) for product is present.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# size_system

<OptionalField/>

## Description

Using this attribute is strongly recommended if [`size`](size.md) for product is present.







## Best Practices


### Do

- Use accepted size systems
- Do not create own size system





## Example Values

Here are examples of how a valid *size_system* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:size_system>au</g:size_system>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:size_system>au</g:size_system>
```

```xml
<g:size_system>br</g:size_system>
```

```xml
<g:size_system>cn</g:size_system>
```

```xml
<g:size_system>de</g:size_system>
```

```xml
<g:size_system>eu</g:size_system>
```

```xml
<g:size_system>fr</g:size_system>
```

```xml
<g:size_system>it</g:size_system>
```

```xml
<g:size_system>jp</g:size_system>
```

```xml
<g:size_system>mex</g:size_system>
```

```xml
<g:size_system>uk</g:size_system>
```

```xml
<g:size_system>us</g:size_system>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
size_system
au
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
size_system
au
```

```csv
size_system
br
```

```csv
size_system
cn
```

```csv
size_system
de
```

```csv
size_system
eu
```

```csv
size_system
fr
```

```csv
size_system
it
```

```csv
size_system
jp
```

```csv
size_system
mex
```

```csv
size_system
uk
```

```csv
size_system
us
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
<g:size_system>unknown</g:size_system>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_enum" title="validation_invalid_enum" /> 

```csv
size_system
unknown
```

:::


  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324502)

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