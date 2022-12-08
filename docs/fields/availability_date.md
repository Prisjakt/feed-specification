import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# availability_date

<OptionalField/>

|                                                      **Property** | **Description**        |
|------------------------------------------------------------------:|:-----------------------|
|                                                     **Data Type** | date        |
|                 **[Nested](/docs/terminology/terms#term_nested)** | False           |
| **[Case Sensitive](/docs/terminology/terms#term_case_sensitive)** | False   |
|  **[Repeatable](/docs/terminology/terms#term_repeatable) (list)** | False       |
|                                              **Repeatable limit** | 0 |



## Description

This field is used together with [availability](/docs/fields/availability) for `preorder` or `backorder` values.



:::tip Effects When Used

- We will display a label alongside with availability indicator that says when the product is available

:::



:::caution Effects When Omitted

- No information is available for customer regarding when a `preorder` or `backorder` offer is available

:::






## Validation Rules

- Value must parse as valid ISO 8601, see examples


## Best Practices


### Do

- Include the time portion of the date (if missing 12:00 AM CET will be set)





## Error Codes

- <Anchor id="validation_invalid_format" title="validation_invalid_format" />
- <Anchor id="validation_invalid_value" title="validation_invalid_value" />
- <Anchor id="validation_missing_field" title="validation_missing_field" />

## Examples
### Valid

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

<table>
<thead>
<tr><th>Valid example  </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>preorder</g:availability>                
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-12-22T03:12:58.019077+00:00</g:availability_date>
<g:availability>preorder</g:availability>                
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
availability_date,availability
2021-03-21,preorder                
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-12-22T03:12:58.019077+00:00,preorder                
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
<tr><th>Invalid example                                               </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:availability_date>2021/12/22/12:23:00</g:availability_date>
```

</td><td>

```xml
validation_invalid_format
```

</td></tr>
<tr><td>

```xml
<g:availability_date>today</g:availability_date>              
```

</td><td>

```xml
validation_invalid_format
```

</td></tr>
<tr><td>

```xml
<g:availability>preorder</g:availability>                     
```

</td><td>

```xml
validation_missing_field 
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>in_stock</g:availability>                                                               
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>out_of_stock</g:availability>                                                               
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>pickup</g:availability>                                                               
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>download</g:availability>                                                               
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>not_available_for_purchase</g:availability>                                                               
```

</td><td>

```xml
validation_invalid_value 
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
availability_date
2021/12/22/12:23:00                  
```

</td><td>

```csv
validation_invalid_format
```

</td></tr>
<tr><td>

```csv
availability_date
today                  
```

</td><td>

```csv
validation_invalid_format
```

</td></tr>
<tr><td>

```csv
availability_date,availability
,preorder                  
```

</td><td>

```csv
validation_missing_field 
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-03-21,in_stock                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-03-21,out_of_stock                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-03-21,pickup                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-03-21,download                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-03-21,not_available_for_purchase                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
</tbody>
</table>
  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324470)
- [Wikipedia on ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

## Changelog
<ChangeLog versionHistory={[{
    semanticVersion: "",
    date: new Date("2022-12-07"),
added: [
"Initial definition",
    ]  },
]} dateOnly={true} />
