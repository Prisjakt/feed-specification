# shipping_weight

## Description

This attribute is *optional*.
It is recommended to add this attribute if delivery costs based on weight.

## Requirements

* *optional*


## Specification Details

- Use accepted units systems

## Allowed Values
- 0 lb
- 0.0 oz
- 0 g
- 10.12 g
- 11 kg
- 15.2 kg

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no
- Length: up to 50 characters


## Validation Error Codes

### validation_invalid_format
### validation_invalid_value
### validation_invalid_weight_unit
### validation_missing_value

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                 </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:shipping_weight>11 kg</g:shipping_weight>  
```

</td></tr>
<tr><td>

```xml
<g:shipping_weight>11.2 kg</g:shipping_weight>
```

</td></tr>
<tr><td>

```xml
<g:shipping_weight>11 g</g:shipping_weight>   
```

</td></tr>
<tr><td>

```xml
<g:shipping_weight>11.2 g</g:shipping_weight> 
```

</td></tr>
<tr><td>

```xml
<g:shipping_weight>11 oz</g:shipping_weight>  
```

</td></tr>
<tr><td>

```xml
<g:shipping_weight>11 lb</g:shipping_weight>  
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example          </th></tr>
</thead>
<tbody>
<tr><td>

```csv
shipping_weight
11 kg  
```

</td></tr>
<tr><td>

```csv
shipping_weight
11.2 kg
```

</td></tr>
<tr><td>

```csv
shipping_weight
11 g   
```

</td></tr>
<tr><td>

```csv
shipping_weight
11.2 g 
```

</td></tr>
<tr><td>

```csv
shipping_weight
11 oz  
```

</td></tr>
<tr><td>

```csv
shipping_weight
11 lb  
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                      </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:shipping_weight>11.,.,.,111</g:shipping_weight>   
```

</td><td>

```xml
validation_invalid_format     
```

</td></tr>
<tr><td>

```xml
<g:shipping_weight>11 kilo</g:shipping_weight>       
```

</td><td>

```xml
validation_invalid_weight_unit
```

</td></tr>
<tr><td>

```xml
<g:shipping_weight>unkn-own</g:shipping_weight>      
```

</td><td>

```xml
validation_invalid_format     
```

</td></tr>
<tr><td>

```xml
<g:shipping_weight>empty value</g:shipping_weight>   
```

</td><td>

```xml
validation_invalid_value      
```

</td></tr>
<tr><td>

```xml
<g:shipping_weight>11 </g:shipping_weight>           
```

</td><td>

```xml
validation_missing_value      
```

</td></tr>
<tr><td>

```xml
<g:shipping_weight>111.222.333 kg</g:shipping_weight>
```

</td><td>

```xml
validation_invalid_value      
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example               </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```csv
shipping_weight
"11.,.,.,111" 
```

</td><td>

```csv
validation_invalid_format     
```

</td></tr>
<tr><td>

```csv
shipping_weight
11 kilo       
```

</td><td>

```csv
validation_invalid_weight_unit
```

</td></tr>
<tr><td>

```csv
shipping_weight
unkn-own      
```

</td><td>

```csv
validation_invalid_format     
```

</td></tr>
<tr><td>

```csv
shipping_weight
empty value   
```

</td><td>

```csv
validation_invalid_value      
```

</td></tr>
<tr><td>

```csv
shipping_weight
11            
```

</td><td>

```csv
validation_missing_value      
```

</td></tr>
<tr><td>

```csv
shipping_weight
111.222.333 kg
```

</td><td>

```csv
validation_invalid_value      
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324503
