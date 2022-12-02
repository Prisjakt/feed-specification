# shipping_height

## Description

This attribute is *optional*.
It is recommended to add this attribute if delivery costs based on dimensions.

## Requirements

* *optional*


## Specification Details

- Use accepted units systems

## Allowed Values
- 11 cm
- 15.2 in
- 10.12 cm
- 0 cm
- 0.0 in
- 0 lb

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no
- Length: up to 50 characters


## Validation Error Codes

### validation_invalid_format
### validation_invalid_length_unit
### validation_invalid_value
### validation_missing_value

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                  </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>                                     
```

</td></tr>
<tr><td>

```xml
<g:shipping_height>0 cm</g:shipping_height>    
```

</td></tr>
<tr><td>

```xml
<g:shipping_height>0.0 in</g:shipping_height>  
```

</td></tr>
<tr><td>

```xml
<g:shipping_height>11 cm</g:shipping_height>   
```

</td></tr>
<tr><td>

```xml
<g:shipping_height>15.2 in</g:shipping_height> 
```

</td></tr>
<tr><td>

```xml
<g:shipping_height>10.12 cm</g:shipping_height>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example           </th></tr>
</thead>
<tbody>
<tr><td>

```csv
shipping_height
""      
```

</td></tr>
<tr><td>

```csv
shipping_height
0 cm    
```

</td></tr>
<tr><td>

```csv
shipping_height
0.0 in  
```

</td></tr>
<tr><td>

```csv
shipping_height
11 cm   
```

</td></tr>
<tr><td>

```csv
shipping_height
15.2 in 
```

</td></tr>
<tr><td>

```csv
shipping_height
10.12 cm
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
<g:shipping_height>123cm</g:shipping_height>         
```

</td><td>

```xml
validation_invalid_format     
```

</td></tr>
<tr><td>

```xml
<g:shipping_height>2 m</g:shipping_height>           
```

</td><td>

```xml
validation_invalid_length_unit
```

</td></tr>
<tr><td>

```xml
<g:shipping_height>unkn own</g:shipping_height>      
```

</td><td>

```xml
validation_invalid_value      
```

</td></tr>
<tr><td>

```xml
<g:shipping_height>111.222.333 in</g:shipping_height>
```

</td><td>

```xml
validation_invalid_value      
```

</td></tr>
<tr><td>

```xml
<g:shipping_height> in</g:shipping_height>           
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
<tr><th>Invalid example               </th><th>Resulting error code          </th></tr>
</thead>
<tbody>
<tr><td>

```csv
shipping_height
123cm         
```

</td><td>

```csv
validation_invalid_format     
```

</td></tr>
<tr><td>

```csv
shipping_height
2 m           
```

</td><td>

```csv
validation_invalid_length_unit
```

</td></tr>
<tr><td>

```csv
shipping_height
unkn own      
```

</td><td>

```csv
validation_invalid_value      
```

</td></tr>
<tr><td>

```csv
shipping_height
111.222.333 in
```

</td><td>

```csv
validation_invalid_value      
```

</td></tr>
<tr><td>

```csv
shipping_height
 in           
```

</td><td>

```csv
validation_missing_value      
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324498?hl=en-GB&ref_topic=6324338
