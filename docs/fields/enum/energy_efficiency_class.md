# energy_efficiency_class

## Description

This attribute is *optional*.
It's strongly recommented to use this attribute for Electronics/Household Appliances categories.

## Requirements

* *optional*


## Specification Details

- TBD

## Allowed Values
- a
- a+
- a++
- a+++
- b
- c
- d
- e
- f
- g

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no


## Validation Error Codes

### validation_invalid_enum

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                              </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:energy_efficiency_class>a+++</g:energy_efficiency_class>
```

</td></tr>
<tr><td>

```xml
<g:energy_efficiency_class>a++</g:energy_efficiency_class> 
```

</td></tr>
<tr><td>

```xml
<g:energy_efficiency_class>a+</g:energy_efficiency_class>  
```

</td></tr>
<tr><td>

```xml
<g:energy_efficiency_class>a</g:energy_efficiency_class>   
```

</td></tr>
<tr><td>

```xml
<g:energy_efficiency_class>b</g:energy_efficiency_class>   
```

</td></tr>
<tr><td>

```xml
<g:energy_efficiency_class>c</g:energy_efficiency_class>   
```

</td></tr>
<tr><td>

```xml
<g:energy_efficiency_class>d</g:energy_efficiency_class>   
```

</td></tr>
<tr><td>

```xml
<g:energy_efficiency_class>e</g:energy_efficiency_class>   
```

</td></tr>
<tr><td>

```xml
<g:energy_efficiency_class>f</g:energy_efficiency_class>   
```

</td></tr>
<tr><td>

```xml
<g:energy_efficiency_class>g</g:energy_efficiency_class>   
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example               </th></tr>
</thead>
<tbody>
<tr><td>

```csv
energy_efficiency_class
a+++
```

</td></tr>
<tr><td>

```csv
energy_efficiency_class
a++ 
```

</td></tr>
<tr><td>

```csv
energy_efficiency_class
a+  
```

</td></tr>
<tr><td>

```csv
energy_efficiency_class
a   
```

</td></tr>
<tr><td>

```csv
energy_efficiency_class
b   
```

</td></tr>
<tr><td>

```csv
energy_efficiency_class
c   
```

</td></tr>
<tr><td>

```csv
energy_efficiency_class
d   
```

</td></tr>
<tr><td>

```csv
energy_efficiency_class
e   
```

</td></tr>
<tr><td>

```csv
energy_efficiency_class
f   
```

</td></tr>
<tr><td>

```csv
energy_efficiency_class
g   
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                               </th><th>Resulting error code   </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:energy_efficiency_class>unknown</g:energy_efficiency_class>
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
<tr><th>Invalid example                </th><th>Resulting error code   </th></tr>
</thead>
<tbody>
<tr><td>

```csv
energy_efficiency_class
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
* https://support.google.com/merchants/answer/7562785
