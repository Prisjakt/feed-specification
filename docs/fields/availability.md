import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# availability

<RequiredField/>

|                                                      **Property** | **Description**        |
|------------------------------------------------------------------:|:-----------------------|
|                                                     **Data Type** | enum        |
|                 **[Nested](/docs/terminology/terms#term_nested)** | False           |
| **[Case Sensitive](/docs/terminology/terms#term_case_sensitive)** | False   |
|  **[Repeatable](/docs/terminology/terms#term_repeatable) (list)** | False       |
|                                              **Repeatable limit** | 0 |



## Description

Use the availability attribute to display your stock status.



:::tip Effects When Used

- Will visually (green, yellow, red) indicate if a customer can order the product

:::






## Allowed Enum Values

```
download
```
```
in_stock
```
```
not_available_for_purchase
```
```
out_of_stock
```
```
pickup
```
```
preorder
```
```
backorder
```


## Validation Rules

- Value must be one of the allowed enum values


## Best Practices


### Do

- Use up-to-date stock info



### Don´t

- Don't use out of stock when the shop is temporarily down
- Don't use out of stock when you want to remove the product from the listing
- Don't use out of stock for products that are discontinued




## Error Codes

- <Anchor id="validation_invalid_enum" title="validation_invalid_enum" />
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
<g:availability>in_stock</g:availability>                  
```

</td></tr>
<tr><td>

```xml
<g:availability>out_of_stock</g:availability>              
```

</td></tr>
<tr><td>

```xml
<g:availability>pickup</g:availability>                    
```

</td></tr>
<tr><td>

```xml
<g:availability>download</g:availability>                  
```

</td></tr>
<tr><td>

```xml
<g:availability>not_available_for_purchase</g:availability>
```

</td></tr>
<tr><td>

```xml
<g:availability>preorder</g:availability>
<g:availability_date>2021-03-21</g:availability_date>                                                            
```

</td></tr>
<tr><td>

```xml
<g:availability>backorder</g:availability>
<g:availability_date>2021-03-21</g:availability_date>                                                            
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
availability
in_stock                
```

</td></tr>
<tr><td>

```csv
availability
out_of_stock                
```

</td></tr>
<tr><td>

```csv
availability
pickup                
```

</td></tr>
<tr><td>

```csv
availability
download                
```

</td></tr>
<tr><td>

```csv
availability
not_available_for_purchase                
```

</td></tr>
<tr><td>

```csv
availability,availability_date
preorder,2021-03-21                
```

</td></tr>
<tr><td>

```csv
availability,availability_date
backorder,2021-03-21                
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
<tr><th>Invalid example                         </th><th>Resulting error code    </th></tr>
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
<g:availability>unknown</g:availability>
```

</td><td>

```xml
validation_invalid_enum 
```

</td></tr>
</tbody>
</table>
 </TabItem>
  <TabItem value="invalid_csv" label="CSV">
<table>
<thead>
<tr><th>Invalid example  </th><th>Resulting error code    </th></tr>
</thead>
<tbody>
<tr><td>

```csv
availability
""                  
```

</td><td>

```csv
validation_missing_value
```

</td></tr>
<tr><td>

```csv
availability
unknown                  
```

</td><td>

```csv
validation_invalid_enum 
```

</td></tr>
</tbody>
</table>
  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324448)

## Changelog
<ChangeLog versionHistory={[{
    semanticVersion: "",
    date: new Date("2022-12-20"),
changed: [
"Previously `out_of_stock` values were still orderable, from now on `out_of_stock` will not be orderable. If you want to represent a product that is not in stuck but still orderable you should use `backorder` and set `availability_date`",
    ]  },
{
    semanticVersion: "",
    date: new Date("2022-12-08"),
added: [
"New enum value `backorder`, this value should be used for products that are orderable but currently not in stock.",
    ]  },
{
    semanticVersion: "",
    date: new Date("2022-12-07"),
added: [
"Initial definition",
    ]  },
]} dateOnly={true} />
