import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# id

<RequiredField/>

|                                                      **Property** | **Description**        |
|------------------------------------------------------------------:|:-----------------------|
|                                                     **Data Type** | string        |
|                 **[Nested](/docs/terminology/terms#term_nested)** | False           |
| **[Case Sensitive](/docs/terminology/terms#term_case_sensitive)** | True   |
|  **[Repeatable](/docs/terminology/terms#term_repeatable) (list)** | False       |
|                                              **Repeatable limit** | 0 |



## Description

Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique.





## Validation Rules

- Length must be between `1-36`
- Must be unique
- Valid characters are bumbers, letters, dash (-) and underscore (_)


## Best Practices


### Do

- Use SKUs as ids



### Don´t

- Re-use, if re-used, your product might end up indexed to the wrong Prisjakt product
- Change over time, if changed, the product will need to be indexed again




## Error Codes

- <Anchor id="validation_invalid_length" title="validation_invalid_length" />
- <Anchor id="validation_invalid_value" title="validation_invalid_value" />
- <Anchor id="validation_missing_value" title="validation_missing_value" />

## Examples
### Valid

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

<table>
<thead>
<tr><th>Valid example                          </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:id><![CDATA[213888]]></g:id>        
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[120431832]]></g:id>     
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[aBCd1123]]></g:id>      
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[aBCd-1123]]></g:id>     
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[aBCd_1123]]></g:id>     
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[aBCd1123]]></g:id>      
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[sv-2131.prod-1]]></g:id>
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
id
213888                
```

</td></tr>
<tr><td>

```csv
id
120431832                
```

</td></tr>
<tr><td>

```csv
id
aBCd1123                
```

</td></tr>
<tr><td>

```csv
id
aBCd-1123                
```

</td></tr>
<tr><td>

```csv
id
aBCd_1123                
```

</td></tr>
<tr><td>

```csv
id
aBCd1123                
```

</td></tr>
<tr><td>

```csv
id
sv-2131.prod-1                
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
<channel/>                                                    
```

</td><td>

```xml
validation_missing_value 
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa]]></g:id>
```

</td><td>

```xml
validation_invalid_length
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[aBCd/1123]]></g:id>                            
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[aBCd#1123]]></g:id>                            
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[aBCd 1123]]></g:id>                            
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[aBCd1(123)]]></g:id>                           
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:id><![CDATA[aBCd+1123]]></g:id>                            
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
id
""                  
```

</td><td>

```csv
validation_missing_value 
```

</td></tr>
<tr><td>

```csv
id
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa                  
```

</td><td>

```csv
validation_invalid_length
```

</td></tr>
<tr><td>

```csv
id
aBCd/1123                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
id
aBCd#1123                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
id
aBCd 1123                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
id
aBCd1(123)                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
id
aBCd+1123                  
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
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324405)

## Changelog
<ChangeLog versionHistory={[{
    semanticVersion: "",
    date: new Date("2022-12-07"),
added: [
"Initial definition",
    ]  },
]} dateOnly={true} />
