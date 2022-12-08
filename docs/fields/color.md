# color

## Description

This attribute is *optional*.
Using this attribute is strongly recommended for Fashion and Beauty categories. Add it to improve search results and listing.

## Requirements

* *optional*


## Specification Details

- Include up to 3 different color in format `blue/black/green` where the first is primary, and the other two secondary
- Don't use numbers and HTML color coding
- Don't use phrases describing other product properties like design, pattern, size etc

## Allowed Values
- Use the same color as in your product page

## Format

- Type: List[String]
- Encoding: UTF-8
- Repeatable: yes, up to 3
- Length: up to 40 characters


## Validation Error Codes

### validation_invalid_length
### validation_too_many_repetitions

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                    </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>                       
```

</td></tr>
<tr><td>

```xml
<g:color>red</g:color>           
```

</td></tr>
<tr><td>

```xml
<g:color>green</g:color>         
```

</td></tr>
<tr><td>

```xml
<g:color>blue</g:color>          
```

</td></tr>
<tr><td>

```xml
<g:color>red/green/blue</g:color>
```

</td></tr>
<tr><td>

```xml
<g:color>RED/GREEN/BLUE</g:color>
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
color
""                
```

</td></tr>
<tr><td>

```csv
color
red                
```

</td></tr>
<tr><td>

```csv
color
green                
```

</td></tr>
<tr><td>

```csv
color
blue                
```

</td></tr>
<tr><td>

```csv
color
red/green/blue                
```

</td></tr>
<tr><td>

```csv
color
RED/GREEN/BLUE                
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                             </th><th>Resulting error code           </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:color>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 40 characters value)</g:color>
```

</td><td>

```xml
validation_invalid_length      
```

</td></tr>
<tr><td>

```xml
<g:color>black/mint/blue/white</g:color>                                                    
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
<tr><th>Invalid example  </th><th>Resulting error code           </th></tr>
</thead>
<tbody>
<tr><td>

```csv
color
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 40 characters value)                  
```

</td><td>

```csv
validation_invalid_length      
```

</td></tr>
<tr><td>

```csv
color
black/mint/blue/white                  
```

</td><td>

```csv
validation_too_many_repetitions
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324487
