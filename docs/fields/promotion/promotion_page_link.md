---
description: Link to the promotion page.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Anchor from "@site/src/components/anchor"
import Field from '@site/docs/partials/_field.mdx';
import ReactMarkdown from 'react-markdown';
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# promotion_page_link

<OptionalField/>

## Description

Link to the promotion page.






## Validation Rules

- Value must be a valid and properly encoded url.


## Example Values

Here are examples of how a valid *promotion_page_link* value should look like in XML.


:::tip Valid Value

```xml
<pj:promotion_page_link>http://example.com/link</pj:promotion_page_link>
```

:::

<details>
  <summary>Click to show more valid XML examples</summary>
  <div>

```xml
<pj:promotion_page_link>http://example.com/link</pj:promotion_page_link>
```

```xml
<pj:promotion_page_link>https://example.com/link</pj:promotion_page_link>
```

```xml
<pj:promotion_page_link>https://example.com/link(black)_(large)</pj:promotion_page_link>
```

```xml
<pj:promotion_page_link>https://example.com/link#foo</pj:promotion_page_link>
```

```xml
<pj:promotion_page_link><![CDATA[https://example.com/link?utm_source=1&utm_medium=2]]></pj:promotion_page_link>
```

```xml
<pj:promotion_page_link>http://example.com/link-%E2%84%A2-mu-20%C2%B5m</pj:promotion_page_link>
```

```xml
<pj:promotion_page_link>https://mysite.com/promotion-campaign-2023</pj:promotion_page_link>
```

```xml
<pj:promotion_page_link>https://mysite.com/promotion-campaign-2023</pj:promotion_page_link>
```


  </div>
</details>


## Error Codes

Below you will find possible error codes generated when validating this field alongside with an example in XML and CSV that would trigger the code. Please refer to the [validation rules](#validation-rules) to understand the cause.


:::danger <Anchor id="validation_invalid_length" title="validation_invalid_length" />

```xml
<pj:promotion_page_link>https://example.com/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 2047 characters value)</pj:promotion_page_link>
```

:::

:::danger <Anchor id="validation_invalid_url" title="validation_invalid_url" />

```xml
<pj:promotion_page_link>http://bar</pj:promotion_page_link>
```

:::

:::danger <Anchor id="validation_invalid_url_fragment" title="validation_invalid_url_fragment" />

```xml
<pj:promotion_page_link>https://example.com/link##</pj:promotion_page_link>
```

:::

:::danger <Anchor id="validation_invalid_url_host" title="validation_invalid_url_host" />

```xml
<pj:promotion_page_link>http://example%.com/link</pj:promotion_page_link>
```

:::

:::danger <Anchor id="validation_invalid_url_path" title="validation_invalid_url_path" />

```xml
<pj:promotion_page_link>https://example.com/link[12-34]</pj:promotion_page_link>
```

:::

:::danger <Anchor id="validation_invalid_url_port" title="validation_invalid_url_port" />

```xml
<pj:promotion_page_link>http://example.com:foo/link</pj:promotion_page_link>
```

:::

:::danger <Anchor id="validation_invalid_url_query" title="validation_invalid_url_query" />

```xml
<pj:promotion_page_link>https://example.com/link?param=value^up-arrow</pj:promotion_page_link>
```

:::

:::danger <Anchor id="validation_url_scheme_not_allowed" title="validation_url_scheme_not_allowed" />

```xml
<pj:promotion_page_link>foo://example.com/link</pj:promotion_page_link>
```

:::



## Properties

|     **Property** |         **Value**          | **Description**                                              |
|-----------------:|:--------------------------:|:-------------------------------------------------------------|
|        Data Type |    **string**     | Closest data type in code                                    |
|           Nested |      **False**      | Defines if this field consists of one or more sub-fields     |
|   Case Sensitive |  **False**  | If small or large letters matter for this field              |
|       Repeatable |    **False**    | If you can supply multiple items of this field (it´s a list) |
| Repeatable limit | **0** | If a list, this specifices the max number of items           |

## Changelog
<ChangeLog versionHistory={[{"added": ["Initial definition"], "date": "2023-12-11"}]} dateOnly={true} />

