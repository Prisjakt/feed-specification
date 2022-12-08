# material

## Description

This attribute is *optional*.
It is recommended to use this attribute in Fashion categories. Add it to improve search results and listing.

## Requirements

* *optional*


## Specification Details

- Don't use values that do not describe material `None`, `N/A`

## Allowed Values
- Include the main fabric or material
- Add up to 3 materials separated by slash `Cotton/Leather`

## Format

- Type: List[String]
- Encoding: UTF-8
- Repeatable: yes, up to 3


## Validation Error Codes

### validation_invalid_length
### validation_too_many_repetitions

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                          </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:material>Cotton</g:material>        
```

</td></tr>
<tr><td>

```xml
<g:material>Cotton/Leather</g:material>
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
material
Cotton        
```

</td></tr>
<tr><td>

```csv
material
Cotton/Leather
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                                                                                                                                                                                                           </th><th>Resulting error code           </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:material>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 255 characters value)</g:material>
```

</td><td>

```xml
validation_invalid_length      
```

</td></tr>
<tr><td>

```xml
<g:material>Cotton/Leather/Elastane/Cotton</g:material>                                                                                                                                                                                                                                                                   
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
<tr><th>Invalid example                                                                                                                                                                                                                                                                                           </th><th>Resulting error code           </th></tr>
</thead>
<tbody>
<tr><td>

```csv
material
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 255 characters value)
```

</td><td>

```csv
validation_invalid_length      
```

</td></tr>
<tr><td>

```csv
material
Cotton/Leather/Elastane/Cotton                                                                                                                                                                                                                                                                   
```

</td><td>

```csv
validation_too_many_repetitions
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324410
