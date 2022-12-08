import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ValidExamples from "./gtin_valid_examples.mdx"
import Anchor from "@site/src/components/anchor"
import ChangeLog from '@site/src/components/changelog';
import RequiredField from '@site/docs/partials/_required_field.md';

# price

<RequiredField/>

|                                                      **Property** | **Description**        |
|------------------------------------------------------------------:|:-----------------------|
|                                                     **Data Type** | price        |
|                 **[Nested](/docs/terminology/terms#term_nested)** | False           |
| **[Case Sensitive](/docs/terminology/terms#term_case_sensitive)** | False   |
|  **[Repeatable](/docs/terminology/terms#term_repeatable) (list)** | False       |
|                                              **Repeatable limit** | 0 |



## Description

Use this attribute to tell customers what you charge for your product.





## Validation Rules

- Must be a number (value) followed by a space and a currency (unit)
- Number *may* have **two decimals**, separated by a `.` (dot)
- Currency must be three upper case characters and a valid [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency
- Zero prices are **not** allowed


## Best Practices


### Do

- Price sent in feed should be the same as the price value on your product page
- Currency sent in feed should match currency on your product page



### Don´t

- Do **not** include extra charges in the cost (such as shipping cost)
- Do **not** use thousand separators or similar in the value (while we may handle some of these cases we recommend you to just send plain numbers like `10000.50 SEK`)




## Error Codes

- <Anchor id="validation_missing_currency" title="validation_missing_currency" />
- <Anchor id="validation_missing_price_value" title="validation_missing_price_value" />
- <Anchor id="validation_missing_value" title="validation_missing_value" />
- <Anchor id="validation_not_number" title="validation_not_number" />
- <Anchor id="validation_not_positive_number" title="validation_not_positive_number" />
- <Anchor id="validation_unknown_currency" title="validation_unknown_currency" />

## Examples
### Valid

<Tabs>
  <TabItem value="valid_xml" label="XML" default>

<table>
<thead>
<tr><th>Valid example                   </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:price>100 SEK</g:price>      
```

</td></tr>
<tr><td>

```xml
<g:price>SEK 100</g:price>      
```

</td></tr>
<tr><td>

```xml
<g:price>99.99 SEK</g:price>    
```

</td></tr>
<tr><td>

```xml
<g:price>99,99 SEK</g:price>    
```

</td></tr>
<tr><td>

```xml
<g:price>10,000.00 SEK</g:price>
```

</td></tr>
<tr><td>

```xml
<g:price>10 000.00 SEK</g:price>
```

</td></tr>
<tr><td>

```xml
<g:price>10.000 SEK</g:price>   
```

</td></tr>
<tr><td>

```xml
<g:price>1.144.000 SEK</g:price>
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
price
100 SEK                
```

</td></tr>
<tr><td>

```csv
price
SEK 100                
```

</td></tr>
<tr><td>

```csv
price
99.99 SEK                
```

</td></tr>
<tr><td>

```csv
price
"99,99 SEK"                
```

</td></tr>
<tr><td>

```csv
price
"10,000.00 SEK"                
```

</td></tr>
<tr><td>

```csv
price
10 000.00 SEK                
```

</td></tr>
<tr><td>

```csv
price
10.000 SEK                
```

</td></tr>
<tr><td>

```csv
price
1.144.000 SEK                
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
<tr><th>Invalid example                  </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:price>$100</g:price>          
```

</td><td>

```xml
validation_unknown_currency   
```

</td></tr>
<tr><td>

```xml
<g:price>100$</g:price>          
```

</td><td>

```xml
validation_unknown_currency   
```

</td></tr>
<tr><td>

```xml
<g:price>10.0.00.00 SEK</g:price>
```

</td><td>

```xml
validation_not_number         
```

</td></tr>
<tr><td>

```xml
<g:price>10.0.00.00 SEK</g:price>
```

</td><td>

```xml
validation_not_number         
```

</td></tr>
<tr><td>

```xml
<g:price>foo SEK</g:price>       
```

</td><td>

```xml
validation_missing_price_value
```

</td></tr>
<tr><td>

```xml
<g:price>1000</g:price>          
```

</td><td>

```xml
validation_missing_currency   
```

</td></tr>
<tr><td>

```xml
<g:price>-10 SEK</g:price>       
```

</td><td>

```xml
validation_not_positive_number
```

</td></tr>
<tr><td>

```xml
<g:price>0 SEK</g:price>         
```

</td><td>

```xml
validation_not_positive_number
```

</td></tr>
<tr><td>

```xml
<g:price>5.00 dollars</g:price>  
```

</td><td>

```xml
validation_missing_currency   
```

</td></tr>
<tr><td>

```xml
<g:price>SEK</g:price>           
```

</td><td>

```xml
validation_missing_price_value
```

</td></tr>
<tr><td>

```xml
<g:price>5.00</g:price>          
```

</td><td>

```xml
validation_missing_currency   
```

</td></tr>
<tr><td>

```xml
<channel/>                       
```

</td><td>

```xml
validation_missing_value      
```

</td></tr>
</tbody>
</table>
 </TabItem>
  <TabItem value="invalid_csv" label="CSV">
<table>
<thead>
<tr><th>Invalid example  </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```csv
price
$100                  
```

</td><td>

```csv
validation_unknown_currency   
```

</td></tr>
<tr><td>

```csv
price
100$                  
```

</td><td>

```csv
validation_unknown_currency   
```

</td></tr>
<tr><td>

```csv
price
10.0.00.00 SEK                  
```

</td><td>

```csv
validation_not_number         
```

</td></tr>
<tr><td>

```csv
price
10.0.00.00 SEK                  
```

</td><td>

```csv
validation_not_number         
```

</td></tr>
<tr><td>

```csv
price
foo SEK                  
```

</td><td>

```csv
validation_missing_price_value
```

</td></tr>
<tr><td>

```csv
price
1000                  
```

</td><td>

```csv
validation_missing_currency   
```

</td></tr>
<tr><td>

```csv
price
-10 SEK                  
```

</td><td>

```csv
validation_not_positive_number
```

</td></tr>
<tr><td>

```csv
price
0 SEK                  
```

</td><td>

```csv
validation_not_positive_number
```

</td></tr>
<tr><td>

```csv
price
5.00 dollars                  
```

</td><td>

```csv
validation_missing_currency   
```

</td></tr>
<tr><td>

```csv
price
SEK                  
```

</td><td>

```csv
validation_missing_price_value
```

</td></tr>
<tr><td>

```csv
price
5.00                  
```

</td><td>

```csv
validation_missing_currency   
```

</td></tr>
<tr><td>

```csv
price
""                  
```

</td><td>

```csv
validation_missing_value      
```

</td></tr>
</tbody>
</table>
  </TabItem>
</Tabs>

## References
- [Google Merchant Specification](https://support.google.com/merchants/answer/6324371)
- [Wikipedia on ISO 4217 Currency codes](https://en.wikipedia.org/wiki/ISO_4217)

## Changelog
<ChangeLog versionHistory={[{
    semanticVersion: "",
    date: new Date("2022-12-07"),
added: [
"Initial definition",
    ]  },
]} dateOnly={true} />
