# id

## Description

This attribute is **required**.
Identifier should be unique for every product and not be changed or re-used for other products, a good practice is to use SKUs as ids since they are unique.

## Requirements

* **required**


## Specification Details

- It must be unique (If not unique, your product will be indexed incorrectly)
- It must be case-insensitive (Casing will not make IDs unique, abc123 = ABC123)
- It cannot be re-used (If re-used, your product might end up indexed to the wrong Prisjakt product)
- It cannot change (If changed, the product will need to be indexed again)
- It must follow UTF-8 specs

## Allowed Values
- Value must be unique
- Numbers, letters (case insensitive), dash (-) and underscore (_)

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no
- Length: from 1 up to 36 characters


## Validation Error Codes

### validation_invalid_length
### validation_invalid_value
### validation_missing_value

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example              </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:id>213888</g:id>        
```

</td></tr>
<tr><td>

```xml
<g:id>120431832</g:id>     
```

</td></tr>
<tr><td>

```xml
<g:id>aBCd1123</g:id>      
```

</td></tr>
<tr><td>

```xml
<g:id>aBCd-1123</g:id>     
```

</td></tr>
<tr><td>

```xml
<g:id>aBCd_1123</g:id>     
```

</td></tr>
<tr><td>

```xml
<g:id>aBCd1123</g:id>      
```

</td></tr>
<tr><td>

```xml
<g:id>sv-2131.prod-1</g:id>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example    </th></tr>
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

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                   </th><th>Resulting error code     </th></tr>
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
<g:id>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</g:id>
```

</td><td>

```xml
validation_invalid_length
```

</td></tr>
<tr><td>

```xml
<g:id>aBCd/1123</g:id>                            
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:id>aBCd#1123</g:id>                            
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:id>aBCd 1123</g:id>                            
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:id>aBCd1(123)</g:id>                           
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:id>aBCd+1123</g:id>                            
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
<tr><th>Invalid example                         </th><th>Resulting error code     </th></tr>
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

## References
* https://support.google.com/merchants/answer/6324405
