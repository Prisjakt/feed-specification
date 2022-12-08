# sale_price

## Description

This attribute is *optional*.
It should be the same as the currently active sales price on your product page. If the sales is inactive it should be empty or [`sale_price_effective_date`](sale_price_effective_date.md) attribute should be used.

## Requirements

* *optional*


## Specification Details

- Add the full sale price
- sale_price works best when [`sale_price_effective_date`](sale_price_effective_date.md) attribute is also used
- sale_price has same requirements as [`price`](price.md) attribute
- Submit this attribute in addition to [`price`](price.md) attribute set to non-sale price
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
<tr><th>Valid example                             </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>                                
```

</td></tr>
<tr><td>

```xml
<g:sale_price>100 SEK</g:sale_price>      
```

</td></tr>
<tr><td>

```xml
<g:sale_price>SEK 100</g:sale_price>      
```

</td></tr>
<tr><td>

```xml
<g:sale_price>99.99 SEK</g:sale_price>    
```

</td></tr>
<tr><td>

```xml
<g:sale_price>99,99 SEK</g:sale_price>    
```

</td></tr>
<tr><td>

```xml
<g:sale_price>10,000.00 SEK</g:sale_price>
```

</td></tr>
<tr><td>

```xml
<g:sale_price>10 000.00 SEK</g:sale_price>
```

</td></tr>
<tr><td>

```xml
<g:sale_price>10.000 SEK</g:sale_price>   
```

</td></tr>
<tr><td>

```xml
<g:sale_price>1.144.000 SEK</g:sale_price>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example             </th></tr>
</thead>
<tbody>
<tr><td>

```csv
sale_price
""             
```

</td></tr>
<tr><td>

```csv
sale_price
100 SEK        
```

</td></tr>
<tr><td>

```csv
sale_price
SEK 100        
```

</td></tr>
<tr><td>

```csv
sale_price
99.99 SEK      
```

</td></tr>
<tr><td>

```csv
sale_price
"99,99 SEK"    
```

</td></tr>
<tr><td>

```csv
sale_price
"10,000.00 SEK"
```

</td></tr>
<tr><td>

```csv
sale_price
10 000.00 SEK  
```

</td></tr>
<tr><td>

```csv
sale_price
10.000 SEK     
```

</td></tr>
<tr><td>

```csv
sale_price
1.144.000 SEK  
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                            </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:sale_price>$100</g:sale_price>          
```

</td><td>

```xml
validation_unknown_currency   
```

</td></tr>
<tr><td>

```xml
<g:sale_price>100$</g:sale_price>          
```

</td><td>

```xml
validation_unknown_currency   
```

</td></tr>
<tr><td>

```xml
<g:sale_price>10.0.00.00 SEK</g:sale_price>
```

</td><td>

```xml
validation_not_number         
```

</td></tr>
<tr><td>

```xml
<g:sale_price>10.0.00.00 SEK</g:sale_price>
```

</td><td>

```xml
validation_not_number         
```

</td></tr>
<tr><td>

```xml
<g:sale_price>foo SEK</g:sale_price>       
```

</td><td>

```xml
validation_missing_price_value
```

</td></tr>
<tr><td>

```xml
<g:sale_price>1000</g:sale_price>          
```

</td><td>

```xml
validation_missing_currency   
```

</td></tr>
<tr><td>

```xml
<g:sale_price>-10 SEK</g:sale_price>       
```

</td><td>

```xml
validation_not_positive_number
```

</td></tr>
<tr><td>

```xml
<g:sale_price>0 SEK</g:sale_price>         
```

</td><td>

```xml
validation_not_positive_number
```

</td></tr>
<tr><td>

```xml
<g:sale_price>5.00 dollars</g:sale_price>  
```

</td><td>

```xml
validation_missing_currency   
```

</td></tr>
<tr><td>

```xml
<g:sale_price>SEK</g:sale_price>           
```

</td><td>

```xml
validation_missing_price_value
```

</td></tr>
<tr><td>

```xml
<g:sale_price>5.00</g:sale_price>          
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
<tr><th>Invalid example          </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```csv
sale_price
$100          
```

</td><td>

```csv
validation_unknown_currency   
```

</td></tr>
<tr><td>

```csv
sale_price
100$          
```

</td><td>

```csv
validation_unknown_currency   
```

</td></tr>
<tr><td>

```csv
sale_price
10.0.00.00 SEK
```

</td><td>

```csv
validation_not_number         
```

</td></tr>
<tr><td>

```csv
sale_price
10.0.00.00 SEK
```

</td><td>

```csv
validation_not_number         
```

</td></tr>
<tr><td>

```csv
sale_price
foo SEK       
```

</td><td>

```csv
validation_missing_price_value
```

</td></tr>
<tr><td>

```csv
sale_price
1000          
```

</td><td>

```csv
validation_missing_currency   
```

</td></tr>
<tr><td>

```csv
sale_price
-10 SEK       
```

</td><td>

```csv
validation_not_positive_number
```

</td></tr>
<tr><td>

```csv
sale_price
0 SEK         
```

</td><td>

```csv
validation_not_positive_number
```

</td></tr>
<tr><td>

```csv
sale_price
5.00 dollars  
```

</td><td>

```csv
validation_missing_currency   
```

</td></tr>
<tr><td>

```csv
sale_price
SEK           
```

</td><td>

```csv
validation_missing_price_value
```

</td></tr>
<tr><td>

```csv
sale_price
5.00          
```

</td><td>

```csv
validation_missing_currency   
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324471
