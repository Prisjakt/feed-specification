import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import OptionalField from '@site/docs/partials/_optional_field.md';

# adult

<OptionalField/>

|                                                      **Property** | **Description**        |
|------------------------------------------------------------------:|:-----------------------|
|                                                     **Data Type** | Boolean        |
|                 **[Nested](/docs/terminology/terms#term_nested)** | False           |
| **[Case Sensitive](/docs/terminology/terms#term_case_sensitive)** | False   |
|  **[Repeatable](/docs/terminology/terms#term_repeatable) (list)** | False       |
|                                              **Repeatable limit** | 0 |



## Description

Should be used for tagging products for an adult audience. Not used to describe age group, but for specific product types, such as sex toys.









## Validation Rules

- Should be one of the examples in [valid examples](#valid)


## Best Practices



### Don´t

- Don't use adult to indicate [age_group](/docs/fields/age_group)




## Error Codes

- <Anchor id="validation_invalid_value" title="validation_invalid_value" />

## Examples
### Valid

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

<table>
<thead>
<tr><th>Valid example           </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>              
```

</td></tr>
<tr><td>

```xml
<g:adult>true</g:adult> 
```

</td></tr>
<tr><td>

```xml
<g:adult>false</g:adult>
```

</td></tr>
<tr><td>

```xml
<g:adult>yes</g:adult>  
```

</td></tr>
<tr><td>

```xml
<g:adult>no</g:adult>   
```

</td></tr>
<tr><td>

```xml
<g:adult>YES</g:adult>  
```

</td></tr>
<tr><td>

```xml
<g:adult>NO</g:adult>   
```

</td></tr>
<tr><td>

```xml
<g:adult>tRuE</g:adult> 
```

</td></tr>
<tr><td>

```xml
<g:adult>fAlSE</g:adult>
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
adult
""                
```

</td></tr>
<tr><td>

```csv
adult
true                
```

</td></tr>
<tr><td>

```csv
adult
false                
```

</td></tr>
<tr><td>

```csv
adult
yes                
```

</td></tr>
<tr><td>

```csv
adult
no                
```

</td></tr>
<tr><td>

```csv
adult
YES                
```

</td></tr>
<tr><td>

```csv
adult
NO                
```

</td></tr>
<tr><td>

```csv
adult
tRuE                
```

</td></tr>
<tr><td>

```csv
adult
fAlSE                
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
<tr><th>Invalid example           </th><th>Resulting error code    </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:adult>unknown</g:adult>
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
<tr><th>Invalid example  </th><th>Resulting error code    </th></tr>
</thead>
<tbody>
<tr><td>

```csv
adult
unknown                  
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
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324508)

## Changelog
<ChangeLog versionHistory={[{
    semanticVersion: "",
    date: new Date("2022-12-07"),
added: [
"Initial definition",
    ]  },
]} dateOnly={true} />
