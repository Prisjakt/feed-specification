# member_price

## Description

This attribute is *optional*.
It should be the same as the price value on your product page with active membership program. Prisjakt XML namespace definition is available at `https://storage.googleapis.com/prisjakt-namespace/ns`

## Requirements

* *optional*


## Specification Details

- Price value must be greater than 0
- Don't provide more than 2 digits after decimal point
- Don't provide comma or point as separator for both thousands and fractional part, i.e. we don't support `1,000,00 SEK` and `1.000.00 SEK` formats

## Allowed Values
- Mixed values: number, currency (ISO 4217) and decimal point
- Only one price value per product followed by one currency unit, or one currency unit followed by only one price value per product

## Format

- Type: Price
- Encoding: UTF-8
- Repeatable: no


## Validation Error Codes

### validation_missing_currency
### validation_missing_price_value
### validation_not_number
### validation_not_positive_number
### validation_unknown_currency

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                   </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>                                      
```

</td></tr>
<tr><td>

```xml
<pj:member_price>100 SEK</pj:member_price>      
```

</td></tr>
<tr><td>

```xml
<pj:member_price>SEK 100</pj:member_price>      
```

</td></tr>
<tr><td>

```xml
<pj:member_price>99.99 SEK</pj:member_price>    
```

</td></tr>
<tr><td>

```xml
<pj:member_price>99,99 SEK</pj:member_price>    
```

</td></tr>
<tr><td>

```xml
<pj:member_price>10,000.00 SEK</pj:member_price>
```

</td></tr>
<tr><td>

```xml
<pj:member_price>10 000.00 SEK</pj:member_price>
```

</td></tr>
<tr><td>

```xml
<pj:member_price>10.000 SEK</pj:member_price>   
```

</td></tr>
<tr><td>

```xml
<pj:member_price>1.144.000 SEK</pj:member_price>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example  </th></tr>
</thead>
<tbody>
<tr><td>

```csv
member_price
""                
```

</td></tr>
<tr><td>

```csv
member_price
100 SEK                
```

</td></tr>
<tr><td>

```csv
member_price
SEK 100                
```

</td></tr>
<tr><td>

```csv
member_price
99.99 SEK                
```

</td></tr>
<tr><td>

```csv
member_price
"99,99 SEK"                
```

</td></tr>
<tr><td>

```csv
member_price
"10,000.00 SEK"                
```

</td></tr>
<tr><td>

```csv
member_price
10 000.00 SEK                
```

</td></tr>
<tr><td>

```csv
member_price
10.000 SEK                
```

</td></tr>
<tr><td>

```csv
member_price
1.144.000 SEK                
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                  </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<pj:member_price>$100</pj:member_price>          
```

</td><td>

```xml
validation_unknown_currency   
```

</td></tr>
<tr><td>

```xml
<pj:member_price>100$</pj:member_price>          
```

</td><td>

```xml
validation_unknown_currency   
```

</td></tr>
<tr><td>

```xml
<pj:member_price>10.0.00.00 SEK</pj:member_price>
```

</td><td>

```xml
validation_not_number         
```

</td></tr>
<tr><td>

```xml
<pj:member_price>10.0.00.00 SEK</pj:member_price>
```

</td><td>

```xml
validation_not_number         
```

</td></tr>
<tr><td>

```xml
<pj:member_price>foo SEK</pj:member_price>       
```

</td><td>

```xml
validation_missing_price_value
```

</td></tr>
<tr><td>

```xml
<pj:member_price>1000</pj:member_price>          
```

</td><td>

```xml
validation_missing_currency   
```

</td></tr>
<tr><td>

```xml
<pj:member_price>-10 SEK</pj:member_price>       
```

</td><td>

```xml
validation_not_positive_number
```

</td></tr>
<tr><td>

```xml
<pj:member_price>0 SEK</pj:member_price>         
```

</td><td>

```xml
validation_not_positive_number
```

</td></tr>
<tr><td>

```xml
<pj:member_price>5.00 dollars</pj:member_price>  
```

</td><td>

```xml
validation_missing_currency   
```

</td></tr>
<tr><td>

```xml
<pj:member_price>SEK</pj:member_price>           
```

</td><td>

```xml
validation_missing_price_value
```

</td></tr>
<tr><td>

```xml
<pj:member_price>5.00</pj:member_price>          
```

</td><td>

```xml
validation_missing_currency   
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example  </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```csv
member_price
$100                  
```

</td><td>

```csv
validation_unknown_currency   
```

</td></tr>
<tr><td>

```csv
member_price
100$                  
```

</td><td>

```csv
validation_unknown_currency   
```

</td></tr>
<tr><td>

```csv
member_price
10.0.00.00 SEK                  
```

</td><td>

```csv
validation_not_number         
```

</td></tr>
<tr><td>

```csv
member_price
10.0.00.00 SEK                  
```

</td><td>

```csv
validation_not_number         
```

</td></tr>
<tr><td>

```csv
member_price
foo SEK                  
```

</td><td>

```csv
validation_missing_price_value
```

</td></tr>
<tr><td>

```csv
member_price
1000                  
```

</td><td>

```csv
validation_missing_currency   
```

</td></tr>
<tr><td>

```csv
member_price
-10 SEK                  
```

</td><td>

```csv
validation_not_positive_number
```

</td></tr>
<tr><td>

```csv
member_price
0 SEK                  
```

</td><td>

```csv
validation_not_positive_number
```

</td></tr>
<tr><td>

```csv
member_price
5.00 dollars                  
```

</td><td>

```csv
validation_missing_currency   
```

</td></tr>
<tr><td>

```csv
member_price
SEK                  
```

</td><td>

```csv
validation_missing_price_value
```

</td></tr>
<tr><td>

```csv
member_price
5.00                  
```

</td><td>

```csv
validation_missing_currency   
```

</td></tr>
</tbody>
</table>

