# is_bundle

## Description

This attribute is *optional*.
This attribute indicates if the offer is a bundle of products (mobile phone and subscription or DSLR camera and additional lens etc). It is **optional** in most countries, but **required** for products sold on French market.

## Requirements

* *optional*


## Specification Details

- Use this if your product is a custom bundle of products
- Don't use this for manufacturer-specified bundles

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
<tr><th>Valid example                   </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>                      
```

</td></tr>
<tr><td>

```xml
<g:is_bundle>true</g:is_bundle> 
```

</td></tr>
<tr><td>

```xml
<g:is_bundle>false</g:is_bundle>
```

</td></tr>
<tr><td>

```xml
<g:is_bundle>yes</g:is_bundle>  
```

</td></tr>
<tr><td>

```xml
<g:is_bundle>no</g:is_bundle>   
```

</td></tr>
<tr><td>

```xml
<g:is_bundle>YES</g:is_bundle>  
```

</td></tr>
<tr><td>

```xml
<g:is_bundle>NO</g:is_bundle>   
```

</td></tr>
<tr><td>

```xml
<g:is_bundle>tRuE</g:is_bundle> 
```

</td></tr>
<tr><td>

```xml
<g:is_bundle>fAlSE</g:is_bundle>
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
is_bundle
""                
```

</td></tr>
<tr><td>

```csv
is_bundle
true                
```

</td></tr>
<tr><td>

```csv
is_bundle
false                
```

</td></tr>
<tr><td>

```csv
is_bundle
yes                
```

</td></tr>
<tr><td>

```csv
is_bundle
no                
```

</td></tr>
<tr><td>

```csv
is_bundle
YES                
```

</td></tr>
<tr><td>

```csv
is_bundle
NO                
```

</td></tr>
<tr><td>

```csv
is_bundle
tRuE                
```

</td></tr>
<tr><td>

```csv
is_bundle
fAlSE                
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
<g:is_bundle>unknown</g:is_bundle>
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
is_bundle
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
* https://support.google.com/merchants/answer/6324449
