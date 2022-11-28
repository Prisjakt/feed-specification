# age_group

## Description

This attribute is *optional*.
It is recommended to add this attribute for fashion products to improve results and listing.

## Requirements

* *optional*


## Specification Details

- Use standard values

## Allowed Values
- adult
- infant
- kids
- newborn
- toddler

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no


## Validation Error Codes

### validation_invalid_enum

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:age_group>adult</g:age_group>  
```

</td></tr>
<tr><td>

```xml
<g:age_group>infant</g:age_group> 
```

</td></tr>
<tr><td>

```xml
<g:age_group>kids</g:age_group>   
```

</td></tr>
<tr><td>

```xml
<g:age_group>newborn</g:age_group>
```

</td></tr>
<tr><td>

```xml
                                  
```

</td></tr>
<tr><td>

```xml
<g:age_group>toddler</g:age_group>
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
age_group
adult                
```

</td></tr>
<tr><td>

```csv
age_group
infant                
```

</td></tr>
<tr><td>

```csv
age_group
kids                
```

</td></tr>
<tr><td>

```csv
age_group
newborn                
```

</td></tr>
<tr><td>

```csv
age_group
""                
```

</td></tr>
<tr><td>

```csv
age_group
toddler                
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                   </th><th>Resulting error code   </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:age_group>unknown</g:age_group>
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
age_group
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
* https://support.google.com/merchants/answer/6324463
