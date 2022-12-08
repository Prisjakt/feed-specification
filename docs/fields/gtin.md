# gtin

## Description

This attribute is *optional*.
Use the GTIN attribute to submit a [Global Trade Item Number (GTIN) | GS1](https://www.gs1.org/standards/id-keys/gtin). A GTIN uniquely identifies your product. Including this will help indexing your products faster on Pricespy.

## Requirements

* *optional*


## Specification Details

- GTIN enables automated product classification therefore any new products added to the feed will be indexed automatically
- See [Google Merchant Help Regarding GTIN](https://support.google.com/merchants/answer/6324461)
- We're strictly following UPC/EAN/JAN/ISBN/ITF-14 standard to minimize risk of indexing errors
- Wikipedia contains excellent documentation about:
  [UPC](https://en.wikipedia.org/wiki/Universal_Product_Code#Composition),
  [EAN](https://en.wikipedia.org/wiki/International_Article_Number#Composition),
  [JAN](https://en.wikipedia.org/wiki/International_Article_Number#jan),
  [ISBN](https://en.wikipedia.org/wiki/International_Standard_Book_Number)
  and [ITF-14](https://en.wikipedia.org/wiki/ITF-14)

## Allowed Values
- Use only one attribute of this type per product
- Length should be one of `0, 8, 12, 13, or 14` digits (UPC, EAN, JAN, or ISBN)
- Make sure that the check digit is present and correct using the [GS1 Check digit calculator](https://www.gs1.org/check-digit-calculator)
- Don’t submit a GTIN in the restricted ranges. Restricted ranges have the following prefixes: `02, 04, or 2`
- Don’t submit a GTIN in the coupon ranges. Coupons have the following GS1 prefixes ranges: `05, 98–99`

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no


## Validation Error Codes

### validation_gtin_invalid_check_digit
### validation_gtin_prefix_not_allowed
### validation_invalid_length
### validation_not_integer

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                            </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>                                               
```

</td></tr>
<tr><td>

```xml
<g:gtin>90311017</g:gtin>                                
```

</td></tr>
<tr><td>

```xml
<g:gtin>036282818705</g:gtin>                            
```

</td></tr>
<tr><td>

```xml
<g:gtin>8806088269696</g:gtin>                           
```

</td></tr>
<tr><td>

```xml
<g:gtin>10614141000415</g:gtin>                          
```

</td></tr>
<tr><td>

```xml
<g:gtin> -</g:gtin>                                      
```

</td></tr>
<tr><td>

```xml
<g:gtin>9031-1017</g:gtin>                               
```

</td></tr>
<tr><td>

```xml
<g:gtin>0362 8281-8705</g:gtin>                          
```

</td></tr>
<tr><td>

```xml
<g:gtin>8806-08826 9696</g:gtin>                         
```

</td></tr>
<tr><td>

```xml
<g:gtin>10614141000415</g:gtin>                          
```

</td></tr>
<tr><td>

```xml
<g:gtin>10614141000415</g:gtin>
<g:gtin>90311017</g:gtin>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example                 </th></tr>
</thead>
<tbody>
<tr><td>

```csv
gtin
""                       
```

</td></tr>
<tr><td>

```csv
gtin
90311017                 
```

</td></tr>
<tr><td>

```csv
gtin
036282818705             
```

</td></tr>
<tr><td>

```csv
gtin
8806088269696            
```

</td></tr>
<tr><td>

```csv
gtin
10614141000415           
```

</td></tr>
<tr><td>

```csv
gtin
 -                       
```

</td></tr>
<tr><td>

```csv
gtin
9031-1017                
```

</td></tr>
<tr><td>

```csv
gtin
0362 8281-8705           
```

</td></tr>
<tr><td>

```csv
gtin
8806-08826 9696          
```

</td></tr>
<tr><td>

```csv
gtin
10614141000415           
```

</td></tr>
<tr><td>

```csv
gtin
"10614141000415,90311017"
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                    </th><th>Resulting error code               </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:gtin>88aaa08869696</g:gtin>     
```

</td><td>

```xml
validation_not_integer             
```

</td></tr>
<tr><td>

```xml
<g:gtin>881111088111169696</g:gtin>
```

</td><td>

```xml
validation_invalid_length          
```

</td></tr>
<tr><td>

```xml
<g:gtin>026282818705</g:gtin>      
```

</td><td>

```xml
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```xml
<g:gtin>046282818705</g:gtin>      
```

</td><td>

```xml
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```xml
<g:gtin>236282818705</g:gtin>      
```

</td><td>

```xml
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```xml
<g:gtin>056282818705</g:gtin>      
```

</td><td>

```xml
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```xml
<g:gtin>986282818705</g:gtin>      
```

</td><td>

```xml
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```xml
<g:gtin>996282818705</g:gtin>      
```

</td><td>

```xml
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```xml
<g:gtin>03628281</g:gtin>          
```

</td><td>

```xml
validation_gtin_invalid_check_digit
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example        </th><th>Resulting error code               </th></tr>
</thead>
<tbody>
<tr><td>

```csv
gtin
88aaa08869696     
```

</td><td>

```csv
validation_not_integer             
```

</td></tr>
<tr><td>

```csv
gtin
881111088111169696
```

</td><td>

```csv
validation_invalid_length          
```

</td></tr>
<tr><td>

```csv
gtin
026282818705      
```

</td><td>

```csv
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```csv
gtin
046282818705      
```

</td><td>

```csv
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```csv
gtin
236282818705      
```

</td><td>

```csv
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```csv
gtin
056282818705      
```

</td><td>

```csv
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```csv
gtin
986282818705      
```

</td><td>

```csv
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```csv
gtin
996282818705      
```

</td><td>

```csv
validation_gtin_prefix_not_allowed 
```

</td></tr>
<tr><td>

```csv
gtin
03628281          
```

</td><td>

```csv
validation_gtin_invalid_check_digit
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324461
