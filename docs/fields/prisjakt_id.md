---
description: Add this information if you know to which Prisjakt product we should match your product.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# prisjakt_id

<OptionalField/>

## Description

Add this information if you know to which Prisjakt product we should match your product.



### Effects When Used

- Adding this will give you control over indexing process








## Validation Rules

- Length must be between `1-50` characters


## Best Practices


### Do

- Make sure you add correct prisjakt_id





## Example Values

Here are examples of how a valid *prisjakt_id* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<pj:prisjakt_id>1</pj:prisjakt_id>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<pj:prisjakt_id>1</pj:prisjakt_id>
```

```xml
<pj:prisjakt_id>123</pj:prisjakt_id>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
prisjakt_id
1
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
prisjakt_id
1
```

```csv
prisjakt_id
123
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" /> 

```xml
<pj:prisjakt_id>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)</pj:prisjakt_id>
```

:::

:::danger <Anchor id="validation_not_integer" title="validation_not_integer" /> 

```xml
<pj:prisjakt_id>foo</pj:prisjakt_id>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" /> 

```csv
prisjakt_id
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)
```

:::

:::danger <Anchor id="validation_not_integer" title="validation_not_integer" /> 

```csv
prisjakt_id
foo
```

:::


  </TabItem>
</Tabs>

## References
- [Prisjakt XML namespace](https://storage.googleapis.com/prisjakt-namespace/ns)

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