# pattern

## Description

This attribute is *optional*.
Using this attribute is strongly recommended for Fashion categories. Add it to improve search results and listing.

## Requirements

* *optional*


## Specification Details

- Don't use values that do not describe pattern `None`, `N/A`

## Allowed Values
- Include a pattern or graphic
- Add only one value

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
<tr><th>Valid example                  </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:pattern>stripped</g:pattern>
```

</td></tr>
<tr><td>

```xml
<g:pattern>strips</g:pattern>  
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
pattern
stripped                
```

</td></tr>
<tr><td>

```csv
pattern
strips                
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                                              </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:pattern>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 100 characters value)</g:pattern>
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
pattern
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
* https://support.google.com/merchants/answer/6324483
