# condition

## Description

This attribute is **required**.
It allows us to properly display condition of a product in our product listing.

## Requirements

* **required**


## Specification Details

- Use only one attribute of this type per product
- Make sure the attributes reflects actual product condition

## Allowed Values
- damaged packaging
- demo
- new
- refurbished
- used

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no


## Validation Error Codes

### validation_invalid_enum
### validation_missing_value

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                               </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:condition>new</g:condition>              
```

</td></tr>
<tr><td>

```xml
<g:condition>refurbished</g:condition>      
```

</td></tr>
<tr><td>

```xml
<g:condition>used</g:condition>             
```

</td></tr>
<tr><td>

```xml
<g:condition>damaged packaging</g:condition>
```

</td></tr>
<tr><td>

```xml
<g:condition>demo</g:condition>             
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example              </th></tr>
</thead>
<tbody>
<tr><td>

```csv
condition
new              
```

</td></tr>
<tr><td>

```csv
condition
refurbished      
```

</td></tr>
<tr><td>

```csv
condition
used             
```

</td></tr>
<tr><td>

```csv
condition
damaged packaging
```

</td></tr>
<tr><td>

```csv
condition
demo             
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                   </th><th>Resulting error code    </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>                        
```

</td><td>

```xml
validation_missing_value
```

</td></tr>
<tr><td>

```xml
<g:condition>unknown</g:condition>
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
<tr><th>Invalid example  </th><th>Resulting error code    </th></tr>
</thead>
<tbody>
<tr><td>

```csv
condition
""     
```

</td><td>

```csv
validation_missing_value
```

</td></tr>
<tr><td>

```csv
condition
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
* https://support.google.com/merchants/answer/6324469
