# size_system

## Description

This attribute is *optional*.
Using this attribute is strongly recommended if size for product is present.

## Requirements

* *optional*


## Specification Details

- Use accepted size systems
- Do not create own size system

## Allowed Values
- au
- br
- cn
- de
- eu
- fr
- it
- jp
- mex
- uk
- us

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
<g:size_system>au</g:size_system> 
```

</td></tr>
<tr><td>

```xml
<g:size_system>br</g:size_system> 
```

</td></tr>
<tr><td>

```xml
<g:size_system>cn</g:size_system> 
```

</td></tr>
<tr><td>

```xml
<g:size_system>de</g:size_system> 
```

</td></tr>
<tr><td>

```xml
<g:size_system>eu</g:size_system> 
```

</td></tr>
<tr><td>

```xml
<g:size_system>fr</g:size_system> 
```

</td></tr>
<tr><td>

```xml
<g:size_system>it</g:size_system> 
```

</td></tr>
<tr><td>

```xml
<g:size_system>jp</g:size_system> 
```

</td></tr>
<tr><td>

```xml
<g:size_system>mex</g:size_system>
```

</td></tr>
<tr><td>

```xml
<g:size_system>uk</g:size_system> 
```

</td></tr>
<tr><td>

```xml
<g:size_system>us</g:size_system> 
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
size_system
au 
```

</td></tr>
<tr><td>

```csv
size_system
br 
```

</td></tr>
<tr><td>

```csv
size_system
cn 
```

</td></tr>
<tr><td>

```csv
size_system
de 
```

</td></tr>
<tr><td>

```csv
size_system
eu 
```

</td></tr>
<tr><td>

```csv
size_system
fr 
```

</td></tr>
<tr><td>

```csv
size_system
it 
```

</td></tr>
<tr><td>

```csv
size_system
jp 
```

</td></tr>
<tr><td>

```csv
size_system
mex
```

</td></tr>
<tr><td>

```csv
size_system
uk 
```

</td></tr>
<tr><td>

```csv
size_system
us 
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                       </th><th>Resulting error code   </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:size_system>unknown</g:size_system>
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
<tr><th>Invalid example    </th><th>Resulting error code   </th></tr>
</thead>
<tbody>
<tr><td>

```csv
size_system
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
* https://support.google.com/merchants/answer/6324502
