import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# age_group

<OptionalField/>

|                                                      **Property** | **Description**        |
|------------------------------------------------------------------:|:-----------------------|
|                                                     **Data Type** | string        |
|                 **[Nested](/docs/terminology/terms#term_nested)** | False           |
| **[Case Sensitive](/docs/terminology/terms#term_case_sensitive)** | False   |
|  **[Repeatable](/docs/terminology/terms#term_repeatable) (list)** | False       |
|                                              **Repeatable limit** | 0 |



## Description

Sets the demographic age your product is designed for.







## Allowed Enum Values

```
adult
```
```
infant
```
```
kids
```
```
newborn
```
```
toddler
```


## Validation Rules

- Value must be one of the allowed enum values


## Best Practices


### Do

- It is recommended to add this attribute for fashion products to improve results and listing





## Error Codes

- <Anchor id="validation_invalid_enum" title="validation_invalid_enum" />

## Examples
### Valid

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

<table>
<thead>
<tr><th>Valid example                     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:age_group>adult</g:age_group>  
```

</td></tr>
<tr><td>

```xml
<g:age_group>infant</g:age_group> 
```

</td></tr>
<tr><td>

```xml
<g:age_group>kids</g:age_group>   
```

</td></tr>
<tr><td>

```xml
<g:age_group>newborn</g:age_group>
```

</td></tr>
<tr><td>

```xml
<channel/>                        
```

</td></tr>
<tr><td>

```xml
<g:age_group>toddler</g:age_group>
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
age_group
adult                
```

</td></tr>
<tr><td>

```csv
age_group
infant                
```

</td></tr>
<tr><td>

```csv
age_group
kids                
```

</td></tr>
<tr><td>

```csv
age_group
newborn                
```

</td></tr>
<tr><td>

```csv
age_group
""                
```

</td></tr>
<tr><td>

```csv
age_group
toddler                
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
<tr><th>Invalid example                   </th><th>Resulting error code   </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:age_group>unknown</g:age_group>
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
<tr><th>Invalid example  </th><th>Resulting error code   </th></tr>
</thead>
<tbody>
<tr><td>

```csv
age_group
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
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324463)

## Changelog
<ChangeLog versionHistory={[{
    semanticVersion: "",
    date: new Date("2022-12-07"),
added: [
"Initial definition",
    ]  },
]} dateOnly={true} />
