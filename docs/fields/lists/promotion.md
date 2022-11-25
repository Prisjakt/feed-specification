# promotion

## Description

This attribute is *optional*.
Use it to indicate if the product can be bought at a different price than a sales or regular price eg. discount coupon can be applied. Membership price is excluded (We have different separated field for this type of promotion - 'member_price'.)

## Requirements

* *optional*


## Specification Details

- Add the full promotion price
- If there are discount coupons, add the product price, do not add the discount percentage
- Don't provide comma or point as separator for both thousands and fractional part of the promotion price, i.e. we don't support `1,000,00 SEK` and `1.000.00 SEK` formats

## Allowed Values
- Submit complete promotion information

## Format

- Type: List[Nested]
- Encoding: UTF-8
- Repeatable: yes, up to 10
- Subattributes:
   - promotion_name (**required**) - String, up to 10 characters   - promotion_price (**required**) - Price, Number, currency (ISO 4217) and decimal point

## Validation Error Codes

### validation_invalid_format
### validation_missing_currency
### validation_missing_field
### validation_missing_price_value
### validation_not_number
### validation_not_positive_number
### validation_unknown_currency

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                                                                                                              </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>100 SEK</pj:promotion_price>
</pj:promotion>      
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>SEK 100</pj:promotion_price>
</pj:promotion>      
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>99.99 SEK</pj:promotion_price>
</pj:promotion>    
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>99,99 SEK</pj:promotion_price>
</pj:promotion>    
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>10,000.00 SEK</pj:promotion_price>
</pj:promotion>
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>10 000.00 SEK</pj:promotion_price>
</pj:promotion>
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>10.000 SEK</pj:promotion_price>
</pj:promotion>   
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>1.144.000 SEK</pj:promotion_price>
</pj:promotion>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example                                                       </th></tr>
</thead>
<tbody>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:100 SEK        
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:SEK 100        
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:99.99 SEK      
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
"Club Price:99,99 SEK"    
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
"Club Price:10,000.00 SEK"
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:10 000.00 SEK  
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:10.000 SEK     
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:1.144.000 SEK  
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                             </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>10.0.00.00 SEK</pj:promotion_price>
</pj:promotion>
```

</td><td>

```xml
validation_not_number         
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>10.0.00.00 SEK</pj:promotion_price>
</pj:promotion>
```

</td><td>

```xml
validation_not_number         
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>XC SEK</pj:promotion_price>
</pj:promotion>        
```

</td><td>

```xml
validation_not_number         
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>1000</pj:promotion_price>
</pj:promotion>          
```

</td><td>

```xml
validation_invalid_format     
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>- 10 SEK</pj:promotion_price>
</pj:promotion>      
```

</td><td>

```xml
validation_invalid_format     
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>0 SEK</pj:promotion_price>
</pj:promotion>         
```

</td><td>

```xml
validation_not_positive_number
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>5.00 dollars</pj:promotion_price>
</pj:promotion>  
```

</td><td>

```xml
validation_unknown_currency   
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>SEK</pj:promotion_price>
</pj:promotion>           
```

</td><td>

```xml
validation_missing_price_value
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
  <pj:promotion_price>5.00</pj:promotion_price>
</pj:promotion>          
```

</td><td>

```xml
validation_missing_currency   
```

</td></tr>
<tr><td>

```xml
<pj:promotion>
  <pj:promotion_name>Club Price</pj:promotion_name>
</pj:promotion>                                                          
```

</td><td>

```xml
validation_missing_field      
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example                                                    </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:10.0.00.00 SEK
```

</td><td>

```csv
validation_not_number         
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:10.0.00.00 SEK
```

</td><td>

```csv
validation_not_number         
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:XC SEK        
```

</td><td>

```csv
validation_not_number         
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:1000          
```

</td><td>

```csv
validation_invalid_format     
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:- 10 SEK      
```

</td><td>

```csv
validation_invalid_format     
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:0 SEK         
```

</td><td>

```csv
validation_not_positive_number
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:5.00 dollars  
```

</td><td>

```csv
validation_unknown_currency   
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:SEK           
```

</td><td>

```csv
validation_missing_price_value
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name:promotion_price)
Club Price:5.00          
```

</td><td>

```csv
validation_missing_currency   
```

</td></tr>
<tr><td>

```csv
promotion(promotion_name)
Club Price                               
```

</td><td>

```csv
validation_missing_field      
```

</td></tr>
</tbody>
</table>

