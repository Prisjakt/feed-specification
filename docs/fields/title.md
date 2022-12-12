import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# title

<RequiredField/>

|                                                      **Property** | **Description**        |
|------------------------------------------------------------------:|:-----------------------|
|                                                     **Data Type** | string        |
|                 **[Nested](/docs/terminology/terms#term_nested)** | False           |
| **[Case Sensitive](/docs/terminology/terms#term_case_sensitive)** | False   |
|  **[Repeatable](/docs/terminology/terms#term_repeatable) (list)** | False       |
|                                              **Repeatable limit** | 0 |



## Description

Title is the **most important attribute** for Prisjakt to be able to index your product/offer correctly. It should contain manufacturer name along with product name and/or model. Additionally size, color and gender is recommended for product types that specifies this.





## Validation Rules

- Length should be between `1-255`


## Best Practices


### Do

- Use the same title as it is present on your product page
- Preferred syntax is `[brand] + [model name] + [additional product information]`
- Use language of the specific market where the product is being sold (for better user experience)
- Embed in a [CDATA](/docs/syntax/cdata) tag if using xml in order to avoid any potential issues with special characters



### Don´t

- Avoid commas, tabs, extra spaces, newlines and other special characters (especially if you use CSV format)
- Do not use HTML tags or any other codes
- Do not include promotional text
- Do not write detailed information in title, this belongs in the description attribute




## Error Codes

- <Anchor id="validation_invalid_length" title="validation_invalid_length" />
- <Anchor id="validation_missing_value" title="validation_missing_value" />

## Examples
### Valid

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

<table>
<thead>
<tr><th>Valid example                                              </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:title><![CDATA[Samsung Galaxy S8 Black 128G]]></g:title>
```

</td></tr>
</tbody>
</table>

 </TabItem>
  <TabItem value="valid_csv" label="CSV">

<table>
<thead>
<tr><th>Valid example  </th></tr>
</thead>
<tbody>
<tr><td>

```csv
title
Samsung Galaxy S8 Black 128G                
```

</td></tr>
</tbody>
</table>

  </TabItem>
</Tabs>

### Invalid

<Tabs>
  <TabItem value="invalid_xml" label="XML" default>
<table>
<thead>
<tr><th>Invalid example                                                                                                                                                                                                                                                                                                                  </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>                                                                                                                                                                                                                                                                                                                       
```

</td><td>

```xml
validation_missing_value 
```

</td></tr>
<tr><td>

```xml
<g:title><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)]]></g:title>
```

</td><td>

```xml
validation_invalid_length
```

</td></tr>
</tbody>
</table>
 </TabItem>
  <TabItem value="invalid_csv" label="CSV">
<table>
<thead>
<tr><th>Invalid example  </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```csv
title
""                  
```

</td><td>

```csv
validation_missing_value 
```

</td></tr>
<tr><td>

```csv
title
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)                  
```

</td><td>

```csv
validation_invalid_length
```

</td></tr>
</tbody>
</table>
  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324415)

## Changelog
<ChangeLog versionHistory={[{
    semanticVersion: "",
    date: new Date("2022-12-07"),
added: [
"Initial definition",
    ]  },
]} dateOnly={true} />
