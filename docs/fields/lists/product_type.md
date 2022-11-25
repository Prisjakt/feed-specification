# product_type

## Description

This attribute is *optional*.
Please note that `product_type` is **required** if `google_product_category` is not present.

## Requirements

* *optional*

## Examples Via Include Files

> - [ ] Check A
> - [x] Check B

```xml
{{#include product_type_xml_examples.xml}}
```


```csv
{{#include product_type_csv_examples.csv}}
```


## Specification Details

- Avoid adding categories like Apple, Sale, Black Friday 2023
- Full category path helps with product categorization in our system. This means that product with good category path will be indexed faster.


## Allowed Values
- Use full category path
- Add single category
- Add category that clearly points to what type of products it is
- Use only one attribute of this type per product

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no
- Length: up to 255 characters


## Validation Error Codes

### validation_invalid_length

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                                                                                  </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:product_type></g:product_type>                                                                              
```

</td></tr>
<tr><td>

```xml
<g:product_type>Sporting Goods &gt; Athletics &gt; Figure Skating &amp; Hockey &gt; Ice Skates</g:product_type>
```

</td></tr>
<tr><td>

```xml
<g:product_type>computer_accessories</g:product_type>                                                          
```

</td></tr>
<tr><td>

```xml
<g:product_type>type 1</g:product_type>
<g:product_type>type 2</g:product_type>                                
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example                                                                 </th></tr>
</thead>
<tbody>
<tr><td>

```csv
product_type
""                                                               
```

</td></tr>
<tr><td>

```csv
product_type
Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates
```

</td></tr>
<tr><td>

```csv
product_type
computer_accessories                                             
```

</td></tr>
<tr><td>

```csv
product_type
"type 1,type 2"                                                  
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                                                                                                                                                                                                                    </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:product_type>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)</g:product_type>
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
<tr><th>Invalid example                                                                                                                                                                                                                                                                                                </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```csv
product_type
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 256 characters value)
```

</td><td>

```csv
validation_invalid_length
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324406
