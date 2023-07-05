---
description: This is a field used only in [delta feeds](/types-of-feeds/pull/delta-feeds) to specify the operation of a change in a delta file. This field have no effect in [normal feeds](/types-of-feeds/pull/feed).
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# delta_command

<OptionalField/>

## Description

This is a field used only in [delta feeds](/types-of-feeds/pull/delta-feeds) to specify the operation of a change in a delta file. This field have no effect in [normal feeds](/types-of-feeds/pull/feed).



### Effects When Used

- Will tell us what operation to use for the change







## Allowed Enum Values

<dl>
<dt>
      <pre>
      <code>
      upsert
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
<dt>
      <pre>
      <code>
      remove
      </code>
      </pre>
    </dt>
    <dd>
    </dd>
</dl>


## Validation Rules

- Value must be one of the allowed enum values


## Best Practices


### Do

- When operation is `remove` only offer id should be supplied
- When operation is `upsert` send only the fields that have changed
- When operation is `upsert` and you want to add a new offer, send complete offer





## Example Values

Here are examples of how a valid *delta_command* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<pj:delta_command>upsert</pj:delta_command>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<pj:delta_command>upsert</pj:delta_command>
```

```xml
<pj:delta_command>remove</pj:delta_command>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
delta_command
upsert
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
delta_command
upsert
```

```csv
delta_command
remove
```


  </div>
</details>

  </TabItem>
</Tabs>

## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">


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
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2023-01-12"}]} dateOnly={true} />

## References
- [Prisjakt XML namespace](https://storage.googleapis.com/prisjakt-namespace/ns)
