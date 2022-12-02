# gender

## Description

This attribute is *optional*.
It is recommended to use this attribute in Fashion categories. Add it to improve search results and listing.

## Requirements

* *optional*


## Specification Details

- Use standard values
- Don't add info like `none`, `NA`

## Allowed Values
- female
- male
- unisex

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no


## Validation Error Codes

### validation_invalid_enum

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example              </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:gender>female</g:gender>
```

</td></tr>
<tr><td>

```xml
<g:gender>male</g:gender>  
```

</td></tr>
<tr><td>

```xml
<g:gender>unisex</g:gender>
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
gender
female  
```

</td></tr>
<tr><td>

```csv
gender
male    
```

</td></tr>
<tr><td>

```csv
gender
unisex  
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example             </th><th>Resulting error code   </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:gender>unknown</g:gender>
```

</td><td>

```xml
validation_invalid_enum
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example  </th><th>Resulting error code   </th></tr>
</thead>
<tbody>
<tr><td>

```csv
gender
unknown   
```

</td><td>

```csv
validation_invalid_enum
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324479
