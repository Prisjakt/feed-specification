import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# condition

<RequiredField/>

|                                                      **Property** | **Description**        |
|------------------------------------------------------------------:|:-----------------------|
|                                                     **Data Type** | string        |
|                 **[Nested](/docs/terminology/terms#term_nested)** | False           |
| **[Case Sensitive](/docs/terminology/terms#term_case_sensitive)** | False   |
|  **[Repeatable](/docs/terminology/terms#term_repeatable) (list)** | False       |
|                                              **Repeatable limit** | 0 |



## Description

State the condition of the product you are selling for your customers.



:::tip Effects When Used

- Will improve filtering capabilities for customers

:::






## Allowed Enum Values

```
damaged packaging
```
```
demo
```
```
new
```
```
refurbished
```
```
used
```


## Validation Rules

- Value must be one of the allowed enum values


## Best Practices


### Do

- Make sure the attributes reflects actual product condition





## Error Codes

- <Anchor id="validation_invalid_enum" title="validation_invalid_enum" />
- <Anchor id="validation_missing_value" title="validation_missing_value" />

## Examples
### Valid

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

<table>
<thead>
<tr><th>Valid example                               </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:condition>new</g:condition>              
```

</td></tr>
<tr><td>

```xml
<g:condition>refurbished</g:condition>      
```

</td></tr>
<tr><td>

```xml
<g:condition>used</g:condition>             
```

</td></tr>
<tr><td>

```xml
<g:condition>damaged packaging</g:condition>
```

</td></tr>
<tr><td>

```xml
<g:condition>demo</g:condition>             
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
condition
new                
```

</td></tr>
<tr><td>

```csv
condition
refurbished                
```

</td></tr>
<tr><td>

```csv
condition
used                
```

</td></tr>
<tr><td>

```csv
condition
damaged packaging                
```

</td></tr>
<tr><td>

```csv
condition
demo                
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
<tr><th>Invalid example                   </th><th>Resulting error code    </th></tr>
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
<g:condition>unknown</g:condition>
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
condition
""                  
```

</td><td>

```csv
validation_missing_value
```

</td></tr>
<tr><td>

```csv
condition
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
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324469)

## Changelog
<ChangeLog versionHistory={[{
    semanticVersion: "",
    date: new Date("2022-12-07"),
added: [
"Initial definition",
    ]  },
]} dateOnly={true} />
