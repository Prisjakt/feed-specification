# adult

## Description

This attribute is *optional*.
Should be used for tagging products for an adult audience. Not used to describe age group, but for specific product types, such as sex toys.

## Requirements

* *optional*


## Specification Details

- Don't use adult to indicate age_group

## Allowed Values
- false
- no
- true
- yes

## Format

- Type: Boolean
- Encoding: UTF-8
- Repeatable: no


## Validation Error Codes

### validation_invalid_value

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example           </th></tr>
</thead>
<tbody>
<tr><td>

```xml
                        
```

</td></tr>
<tr><td>

```xml
<g:adult>true</g:adult> 
```

</td></tr>
<tr><td>

```xml
<g:adult>false</g:adult>
```

</td></tr>
<tr><td>

```xml
<g:adult>yes</g:adult>  
```

</td></tr>
<tr><td>

```xml
<g:adult>no</g:adult>   
```

</td></tr>
<tr><td>

```xml
<g:adult>YES</g:adult>  
```

</td></tr>
<tr><td>

```xml
<g:adult>NO</g:adult>   
```

</td></tr>
<tr><td>

```xml
<g:adult>tRuE</g:adult> 
```

</td></tr>
<tr><td>

```xml
<g:adult>fAlSE</g:adult>
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
adult
""                
```

</td></tr>
<tr><td>

```csv
adult
true                
```

</td></tr>
<tr><td>

```csv
adult
false                
```

</td></tr>
<tr><td>

```csv
adult
yes                
```

</td></tr>
<tr><td>

```csv
adult
no                
```

</td></tr>
<tr><td>

```csv
adult
YES                
```

</td></tr>
<tr><td>

```csv
adult
NO                
```

</td></tr>
<tr><td>

```csv
adult
tRuE                
```

</td></tr>
<tr><td>

```csv
adult
fAlSE                
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example           </th><th>Resulting error code    </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:adult>unknown</g:adult>
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
<tr><th>Invalid example  </th><th>Resulting error code    </th></tr>
</thead>
<tbody>
<tr><td>

```csv
adult
unknown                  
```

</td><td>

```csv
validation_invalid_value
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324508
