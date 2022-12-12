# price

## Description

This attribute is **required**.
It should be the same as the price value on your product page. It should contain sale price if `sale_price` attribute is not used.

## Requirements

* **required**


## Specification Details

- Price attribute should contain both price (value) and currency (unit)
- Make sure the price value and currency in the feed matches value and currency on your product page
- Don't include any additional cost in the price (e.g shipping cost)
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
### validation_missing_value
### validation_not_number
### validation_not_positive_number
### validation_unknown_currency

## Valid XML Examples

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

## Valid CSV Examples

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

## Invalid XML Examples

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

## Invalid CSV Examples

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

## References
* https://support.google.com/merchants/answer/6324371
