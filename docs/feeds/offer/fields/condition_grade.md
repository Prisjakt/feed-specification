---
description: Use this attribute to provide a grade for the condition of the product.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# condition_grade

<OptionalField/>

## Description

Use this attribute to provide a grade for the condition of the product.




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
    <ReactMarkdown>
      {`Product is in excellent condition, no visible scratches or marks`}
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      b
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      {`Product is in good condition, minor scratches or marks`}
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      c
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      {`Product is in fair condition, visible scratches or marks`}
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      d
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      {`Product is in fair condition, visible scratches or marks`}
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      e
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      {`Product is in poor condition, heavy scratches or marks`}
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      f
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      {`Product is in poor condition, heavy scratches or marks`}
    </ReactMarkdown>
    </dd>
</dl>


## Validation Rules

- One of enums listed below.


## Best Practices


### Do

- Make sure the attributes reflects actual product condition grading



### Don´t

- Don't use any other values than the ones listed




## Example Values

Here are examples of how a valid *condition_grade* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<pj:condition_grade>a</pj:condition_grade>
<g:condition>used</g:condition>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<pj:condition_grade>a</pj:condition_grade>
<g:condition>used</g:condition>
```

```xml
<pj:condition_grade>c</pj:condition_grade>
<g:condition>used</g:condition>
```

```xml
<pj:condition_grade>d</pj:condition_grade>
<g:condition>used</g:condition>
```

```xml
<pj:condition_grade>e</pj:condition_grade>
<g:condition>used</g:condition>
```

```xml
<pj:condition_grade>f</pj:condition_grade>
<g:condition>used</g:condition>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
condition_grade,condition
a,used
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
condition_grade,condition
a,used
```

```csv
condition_grade,condition
c,used
```

```csv
condition_grade,condition
d,used
```

```csv
condition_grade,condition
e,used
```

```csv
condition_grade,condition
f,used
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
<pj:condition_grade>x</pj:condition_grade>
<g:condition>used</g:condition>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_enum" title="validation_invalid_enum" />

```csv
condition_grade,condition
x,used
```

:::


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2024-11-25"}]} dateOnly={true} />

