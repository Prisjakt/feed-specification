---
description: Defines type of the promotion
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# coupon_value_type

<RequiredField/>

## Description

Defines type of the promotion




## Allowed Enum Values

<dl>
<dt>
      <pre>
      <code>
      money_off
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      The promotion offers a money discount.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      percent_off
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      The promotion offers a percent discount.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      buy_m_get_n_money_off
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      The promotion offers a money discount when you buy a certain number of items.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      buy_m_get_percent_off
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      The promotion offers a percent discount when you buy a certain number of items.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      buy_m_get_money_off
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      The promotion offers a money discount when you buy a certain number of items.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      free_gift
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      The promotion offers a free gift.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      free_gift_with_value
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      The promotion offers a free gift with a given value.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      free_gift_with_item_id
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      The promotion offers a free gift if certain item is purchased.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      free_shipping_standard
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      Part of google promotion standard, currently not supported by Prisjakt. Will be mapped to other promotion type, use the description field for details to your customers.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      free_shipping_overnight
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      Part of google promotion standard, currently not supported by Prisjakt. Will be mapped to other promotion type, use the description field for details to your customers.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      free_shipping_two_day
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      Part of google promotion standard, currently not supported by Prisjakt. Will be mapped to other promotion type, use the description field for details to your customers.
    </ReactMarkdown>
    </dd>
<dt>
      <pre>
      <code>
      free_shipping_with_shipping_config
      </code>
      </pre>
    </dt>
    <dd>
    <ReactMarkdown>
      Part of google promotion standard, currently not supported by Prisjakt. Will be mapped to other promotion type, use the description field for details to your customers.
    </ReactMarkdown>
    </dd>
</dl>


## Validation Rules

- Value must be one of the allowed enum values


## Example Values

Here are examples of how a valid *coupon_value_type* value  should look like in XML.

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

:::tip Valid Value

```xml
<g:coupon_value_type>money_off</g:coupon_value_type>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<g:coupon_value_type>money_off</g:coupon_value_type>
```

```xml
<g:coupon_value_type>percent_off</g:coupon_value_type>
```

```xml
<g:coupon_value_type>buy_m_get_n_money_off</g:coupon_value_type>
```

```xml
<g:coupon_value_type>buy_m_get_percent_off</g:coupon_value_type>
```

```xml
<g:coupon_value_type>buy_m_get_money_off</g:coupon_value_type>
```

```xml
<g:coupon_value_type>free_gift</g:coupon_value_type>
```

```xml
<g:coupon_value_type>free_gift_with_value</g:coupon_value_type>
```

```xml
<g:coupon_value_type>free_gift_with_item_id</g:coupon_value_type>
```

```xml
<g:coupon_value_type>free_shipping_standard</g:coupon_value_type>
```

```xml
<g:coupon_value_type>free_shipping_overnight</g:coupon_value_type>
```

```xml
<g:coupon_value_type>free_shipping_two_day</g:coupon_value_type>
```

```xml
<g:coupon_value_type>free_shipping_with_shipping_config</g:coupon_value_type>
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
<g:coupon_value_type>uknown_value</g:coupon_value_type>
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
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2023-12-11"}]} dateOnly={true} />

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/13861986)
