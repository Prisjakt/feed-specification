# brand

## Description

This attribute is *optional*.
The brand attribute is used to indicate a product's brand/manufacturer name. Prisjakt strongly encourage using only valid brands.

## Requirements

* *optional*


## Specification Details

- Don't provide a value that is not a brand like N/A, generic, unknown
- Use valid brands

## Allowed Values
- Skip `N/A`, `generic`, `no name`, `unknown` and similar brand names as they are of no help when indexing your products/offers.

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no
- Length: up to 70 characters


## Validation Error Codes

### validation_invalid_length

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example              </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>                 
```

</td></tr>
<tr><td>

```xml
<g:brand>Prisjakt</g:brand>
```

</td></tr>
<tr><td>

```xml
<g:brand>Sony</g:brand>    
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
brand
""                
```

</td></tr>
<tr><td>

```csv
brand
Prisjakt                
```

</td></tr>
<tr><td>

```csv
brand
Sony                
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                           </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:brand>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)</g:brand>
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
<tr><th>Invalid example  </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```csv
brand
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)                  
```

</td><td>

```csv
validation_invalid_length
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324351
