# title

## Description

This attribute is **required**.
It should contain the full product name. The title is used to clearly state what product your shop is selling. It's the **most important attribute** for Prisjakt to be able to index your product/offer correctly. It should contain a manufacturer name along with product name or model. Including size, color and gender is recommended for product types that specifies this.

## Requirements

* **required**


## Specification Details

- It should contain the full product name (it should be easy to identify the product by title)
- Use the same title as it is present on your product page
- Add variant information if applicable: colour, size, gender etc.
- Do not use HTML tag - Do not include promotional text
- Do not use tabs or extra spaces
- Do not write detailed information in title, this belongs in the description attribute
- Preferred syntax [brand] + [model name] + [additional product information]
- Use language of the specific market where the product is being sold (for better user experience)

## Allowed Values
- Use only one title attribute per product

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no
- Length: from 1 up to 255 characters


## Validation Error Codes

### validation_invalid_length
### validation_null_value

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                  </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:title>Samsung Galaxy S8 Black 128G</g:title>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example                     </th></tr>
</thead>
<tbody>
<tr><td>

```csv
title
Samsung Galaxy S8 Black 128G
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                                                                                                                                                                                                      </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:title>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)</g:title>
```

</td><td>

```xml
validation_invalid_length
```

</td></tr>
<tr><td>

```xml
<g:title></g:title>                                                                                                                                                                                                                                                                                                  
```

</td><td>

```xml
validation_null_value    
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                                                                                                                                                                                         </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```csv
title
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)
```

</td><td>

```csv
validation_invalid_length
```

</td></tr>
<tr><td>

```csv
title
""                                                                                                                                                                                                                                                                                                
```

</td><td>

```csv
validation_null_value    
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324415
