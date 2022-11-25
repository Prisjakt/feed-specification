# additional_fees

## Description

This attribute is *optional*.
Include any additional fees that are applied during the checkout process. This should be used to eliminate "hidden fees" that might not be included in the product's specific price. Such as "pant" in Sweden, green taxation and similar.

## Requirements

* *optional*

## Specification Details

- Include VAT in the price
- Add ISO 4217 currency code
- Don't provide comma or point as separator for both thousands and fractional part in fee_value, i.e. we don't support `1,000,00 SEK` and `1.000.00 SEK` formats

## Allowed Values

- Submit complete additional fee information
- Overestimate if you can't provide accurate additional fee cost
- Submit additional fee cost including VAT, use local currency

## Format

- Type: List[Nested]
- Encoding: UTF-8
- Repeatable: yes, up to 3
- Subattributes:
   - fee_name (**required**) - String   - fee_value (**required**) - Price, Number, currency (ISO 4217) and decimal point

## Validation Error Codes

### validation_invalid_format

### validation_missing_currency

### validation_missing_field

### validation_missing_price_value

### validation_not_number

### validation_not_positive_number

### validation_null_value

### validation_too_many_repetitions

### validation_unknown_currency

### validation_unknown_field

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                                                                                                                                                                                                          </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>100 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                     
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>SEK 100</pj:fee_value>
</pj:additional_fees>                                                                                                                     
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>99.99 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                   
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>99,99 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                   
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>10,000.00 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                               
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>10 000.00 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                               
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>10.000 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                  
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>1.144.000 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                               
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>5.99 EUR</pj:fee_value>
</pj:additional_fees>
<pj:additional_fees>
  <pj:fee_name>bar</pj:fee_name>
  <pj:fee_value>4.99 EUR</pj:fee_value>
</pj:additional_fees>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example                                                  </th></tr>
</thead>
<tbody>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
100 SEK:foo                
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
SEK 100:foo                
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
99.99 SEK:foo              
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
"99,99 SEK:foo"            
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
"10,000.00 SEK:foo"        
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
10 000.00 SEK:foo          
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
10.000 SEK:foo             
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
1.144.000 SEK:foo          
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
"5.99 EUR:foo,4.99 EUR:bar"
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </th><th>Resulting error code           </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>10.0.00.00 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                          
```

</td><td>

```xml
validation_not_number          
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>10.0.00.00 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                          
```

</td><td>

```xml
validation_not_number          
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>XC SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                  
```

</td><td>

```xml
validation_not_number          
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>1000</pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                    
```

</td><td>

```xml
validation_invalid_format      
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>- 10 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                
```

</td><td>

```xml
validation_invalid_format      
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>0 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                   
```

</td><td>

```xml
validation_not_positive_number 
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>5.00 dollars</pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                            
```

</td><td>

```xml
validation_unknown_currency    
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                     
```

</td><td>

```xml
validation_missing_price_value 
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>5.00</pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                    
```

</td><td>

```xml
validation_missing_currency    
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value></pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                        
```

</td><td>

```xml
validation_null_value          
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>foo</pj:fee_name>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                                                                                        
```

</td><td>

```xml
validation_missing_field       
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:bar>5</pj:bar>
  <pj:fee_name>foo</pj:fee_name>
  <pj:fee_value>10 SEK</pj:fee_value>
</pj:additional_fees>                                                                                                                                                                                                                                                                                                                                             
```

</td><td>

```xml
validation_unknown_field       
```

</td></tr>
<tr><td>

```xml
<pj:additional_fees>
  <pj:fee_name>test</pj:fee_name>
  <pj:fee_value>5.00 EUR</pj:fee_value>
</pj:additional_fees>
<pj:additional_fees>
  <pj:fee_name>test</pj:fee_name>
  <pj:fee_value>5.00 EUR</pj:fee_value>
</pj:additional_fees>
<pj:additional_fees>
  <pj:fee_name>test</pj:fee_name>
  <pj:fee_value>5.00 EUR</pj:fee_value>
</pj:additional_fees>
<pj:additional_fees>
  <pj:fee_name>test</pj:fee_name>
  <pj:fee_value>5.00 EUR</pj:fee_value>
</pj:additional_fees>
```

</td><td>

```xml
validation_too_many_repetitions
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example                                                                              </th><th>Resulting error code           </th></tr>
</thead>
<tbody>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
10.0.00.00 SEK:foo                                       
```

</td><td>

```csv
validation_not_number          
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
10.0.00.00 SEK:foo                                       
```

</td><td>

```csv
validation_not_number          
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
XC SEK:foo                                               
```

</td><td>

```csv
validation_not_number          
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
1000:foo                                                 
```

</td><td>

```csv
validation_invalid_format      
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
- 10 SEK:foo                                             
```

</td><td>

```csv
validation_invalid_format      
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
0 SEK:foo                                                
```

</td><td>

```csv
validation_not_positive_number 
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
5.00 dollars:foo                                         
```

</td><td>

```csv
validation_unknown_currency    
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
SEK:foo                                                  
```

</td><td>

```csv
validation_missing_price_value 
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
5.00:foo                                                 
```

</td><td>

```csv
validation_missing_currency    
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
:foo                                                     
```

</td><td>

```csv
validation_null_value          
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_name)
foo                                                                
```

</td><td>

```csv
validation_missing_field       
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name:bar)
10 SEK:foo:5                                         
```

</td><td>

```csv
validation_unknown_field       
```

</td></tr>
<tr><td>

```csv
additional_fees(fee_value:fee_name)
"5.00 EUR:test,5.00 EUR:test,5.00 EUR:test,5.00 EUR:test"
```

</td><td>

```csv
validation_too_many_repetitions
```

</td></tr>
</tbody>
</table>
