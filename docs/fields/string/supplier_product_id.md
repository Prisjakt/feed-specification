# supplier_product_id

## Description

This attribute is *optional*.
You can add it to improve indexing. It's suggested for all kinds of products.

## Requirements

* *optional*


## Specification Details

- Add supplier identifier if it exists. It helps grouping similar products together.

## Allowed Values
- Do not add own article number, mpn or ean

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no
- Length: up to 50 characters


## Validation Error Codes

### validation_invalid_length

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                        </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:supplier_product_id>PB-832</g:supplier_product_id>
```

</td></tr>
<tr><td>

```xml
<g:supplier_product_id>1145</g:supplier_product_id>  
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example             </th></tr>
</thead>
<tbody>
<tr><td>

```csv
supplier_product_id
PB-832
```

</td></tr>
<tr><td>

```csv
supplier_product_id
1145  
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                   </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:supplier_product_id>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)</g:supplier_product_id>
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
<tr><th>Invalid example                                                                                        </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```csv
supplier_product_id
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)
```

</td><td>

```csv
validation_invalid_length
```

</td></tr>
</tbody>
</table>

