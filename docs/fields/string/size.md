# size

## Description

This attribute is *optional*.
It is recommended to add this attribute for fashion products to improve results and listing.

## Requirements

* *optional*


## Specification Details

- For products with multiple sizes use slash to separate values `32/34`
- Don't add info like `none`, `NA`

## Allowed Values
- Use standard values

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no
- Length: up to 100 characters


## Validation Error Codes

### validation_invalid_length

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example        </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:size>XS</g:size>  
```

</td></tr>
<tr><td>

```xml
<g:size>XXXL</g:size>
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
size
XS        
```

</td></tr>
<tr><td>

```csv
size
XXXL      
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                                        </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:size>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 100 characters value)</g:size>
```

</td><td>

```xml
validation_invalid_length
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                            </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```csv
size
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 100 characters value)
```

</td><td>

```csv
validation_invalid_length
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324492
