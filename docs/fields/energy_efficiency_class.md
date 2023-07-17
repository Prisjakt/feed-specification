---
description: It's strongly recommended to use this attribute for Electronics/Household Appliances categories.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# energy_efficiency_class

<OptionalField/>

## Description

It's strongly recommended to use this attribute for Electronics/Household Appliances categories.




## Allowed Enum Values

<dl>
<dt>
      <pre>
      <code>
      a
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
<dt>
      <pre>
      <code>
      a+
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
<dt>
      <pre>
      <code>
      a++
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
<dt>
      <pre>
      <code>
      a+++
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
<dt>
      <pre>
      <code>
      b
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
<dt>
      <pre>
      <code>
      c
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
<dt>
      <pre>
      <code>
      d
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
<dt>
      <pre>
      <code>
      e
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
<dt>
      <pre>
      <code>
      f
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
<dt>
      <pre>
      <code>
      g
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
</dl>


## Validation Rules

- Value must be one of the allowed enum values


## Example Values

Here are examples of how a valid *energy_efficiency_class* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:energy_efficiency_class>a+++</g:energy_efficiency_class>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:energy_efficiency_class>a+++</g:energy_efficiency_class>
```

```xml
<g:energy_efficiency_class>a++</g:energy_efficiency_class>
```

```xml
<g:energy_efficiency_class>a+</g:energy_efficiency_class>
```

```xml
<g:energy_efficiency_class>a</g:energy_efficiency_class>
```

```xml
<g:energy_efficiency_class>b</g:energy_efficiency_class>
```

```xml
<g:energy_efficiency_class>c</g:energy_efficiency_class>
```

```xml
<g:energy_efficiency_class>d</g:energy_efficiency_class>
```

```xml
<g:energy_efficiency_class>e</g:energy_efficiency_class>
```

```xml
<g:energy_efficiency_class>f</g:energy_efficiency_class>
```

```xml
<g:energy_efficiency_class>g</g:energy_efficiency_class>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
energy_efficiency_class
a+++
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
energy_efficiency_class
a+++
```

```csv
energy_efficiency_class
a++
```

```csv
energy_efficiency_class
a+
```

```csv
energy_efficiency_class
a
```

```csv
energy_efficiency_class
b
```

```csv
energy_efficiency_class
c
```

```csv
energy_efficiency_class
d
```

```csv
energy_efficiency_class
e
```

```csv
energy_efficiency_class
f
```

```csv
energy_efficiency_class
g
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
<g:energy_efficiency_class>unknown</g:energy_efficiency_class>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_enum" title="validation_invalid_enum" />

```csv
energy_efficiency_class
unknown
```

:::


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **enum**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2022-12-07"}]} dateOnly={true} />

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/7562785)
