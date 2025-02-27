---
description: Use the availability attribute to display your stock status. Please note that the values of this field (which is for the local shop offer) differs from [`availability`](/feeds/offer/fields/availability.md) on the high level offer.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# availability

<RequiredField/>

## Description

Use the availability attribute to display your stock status. Please note that the values of this field (which is for the local shop offer) differs from [`availability`](/feeds/offer/fields/availability.md) on the high level offer.



### Effects When Used

- Enables us to indicate if a customer can order the product







## Allowed Enum Values

<dl>
<dt>
      <pre>
      <code>
      in_stock
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      {`You have more than 3 items or more available in your local inventory.`}
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      out_of_stock
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      {`Items with 0 in quantity`}
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      limited_availability
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      {`You have two or less items in your local inventory.`}
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      on_display_to_order
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      {`Items that are displayed in-shop, but not immediately available for purchase: Such as large furniture items, or different sizes and colors of a display model.`}
    </ReactMarkdown>
    </dd>
</dl>


## Validation Rules

- Value must be one of the allowed enum values


## Best Practices


### Do

- Use up-to-date stock info



### Don´t

- Don't use out of stock when the shop is temporarily down
- Don't use out of stock when you want to remove the product from the listing
- Don't use out of stock for products that are discontinued




## Example Values

Here are examples of how a valid *availability* value  should look like in XML and CSV (with header) respectively.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:availability>download</g:availability>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:availability>download</g:availability>
```

```xml
<g:availability>in_stock</g:availability>
```

```xml
<g:availability>out_of_stock</g:availability>
```

```xml
<g:availability>preorder</g:availability>
<g:availability_date>2021-03-21</g:availability_date>
```

```xml
<g:availability>backorder</g:availability>
<g:availability_date>2021-03-21</g:availability_date>
```


  </div>
</details>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

:::tip Valid Value

```csv
availability
download
```

:::

<details>
  <summary>Click to show more valid CSV examples</summary>
  <div>

```csv
availability
download
```

```csv
availability
in_stock
```

```csv
availability
out_of_stock
```

```csv
availability,availability_date
preorder,2021-03-21
```

```csv
availability,availability_date
backorder,2021-03-21
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
<g:availability>unknown</g:availability>
```

:::

:::danger[**<Anchor id="validation_missing_value" title="validation_missing_value" />**]


```xml
<g:availability></g:availability>
```

:::


 </TabItem>
  <TabItem value="invalid_csv" label="CSV">

:::danger <Anchor id="validation_invalid_enum" title="validation_invalid_enum" />

```csv
availability
unknown
```

:::

:::danger <Anchor id="validation_missing_value" title="validation_missing_value" />

```csv
availability
""
```

:::


  </TabItem>
</Tabs>

## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **enum**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **True**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2025-02-24"}]} dateOnly={true} />

## References
- [Google Local Inventory Data Specification For This Field](https://support.google.com/merchants/answer/7371390?sjid=12668122117297241362-EU)
- [Google Local Inventory Data Specification](https://support.google.com/merchants/answer/14819809?hl=en)
