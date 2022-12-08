# mpn

## Description

This attribute is *optional*.
Add valid MPN, manufacturer part number for the specific product. MPN is a unique number which identifies specific products among a manufacturer's product range. The numbers are used by shoppers to find specifically what they are looking for. MPNs help Prisjakt index your offers more efficiently.

## Requirements

* *optional*


## Specification Details

- MPN enables automated product classification therefore any new products added to the feed will be indexed automatically.
- Only MPNs created by a manufacturer should be added here.
- Distinguish between variants

## Allowed Values
- Use only one attribute of this type per product

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
<tr><th>Valid example           </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:mpn>SM-G920F</g:mpn> 
```

</td></tr>
<tr><td>

```xml
<g:mpn>MGCH3LL/A</g:mpn>
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
mpn
SM-G920F                
```

</td></tr>
<tr><td>

```csv
mpn
MGCH3LL/A                
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                       </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:mpn>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 70 characters value)</g:mpn>
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
mpn
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
* https://support.google.com/merchants/answer/6324482
