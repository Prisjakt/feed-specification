# availability

## Description

This attribute is **required**.
Use the availability attribute to display your stock status.

## Requirements

* **required**


## Specification Details

- Use up-to-date stock info
- Don't use out of stock when the shop is temporarily down
- Don't use out of stock when you want to remove the product from the listing
- Don't use out of stock for products that are discontinued

## Allowed Values
- download
- in_stock
- not_available_for_purchase
- out_of_stock
- pickup
- preorder

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
<tr><th>Valid example                                                                                  </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:availability>in_stock</g:availability>                                                      
```

</td></tr>
<tr><td>

```xml
<g:availability>out_of_stock</g:availability>                                                  
```

</td></tr>
<tr><td>

```xml
<g:availability>pickup</g:availability>                                                        
```

</td></tr>
<tr><td>

```xml
<g:availability>download</g:availability>                                                      
```

</td></tr>
<tr><td>

```xml
<g:availability>not_available_for_purchase</g:availability>                                    
```

</td></tr>
<tr><td>

```xml
<g:availability>preorder</g:availability>
<g:availability_date>2021-03-21</g:availability_date>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example                                     </th></tr>
</thead>
<tbody>
<tr><td>

```csv
availability
in_stock                             
```

</td></tr>
<tr><td>

```csv
availability
out_of_stock                         
```

</td></tr>
<tr><td>

```csv
availability
pickup                               
```

</td></tr>
<tr><td>

```csv
availability
download                             
```

</td></tr>
<tr><td>

```csv
availability
not_available_for_purchase           
```

</td></tr>
<tr><td>

```csv
availability,availability_date
preorder,2021-03-21
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                         </th><th>Resulting error code    </th></tr>
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
<g:availability>unknown</g:availability>
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
<tr><th>Invalid example     </th><th>Resulting error code    </th></tr>
</thead>
<tbody>
<tr><td>

```csv
availability
""     
```

</td><td>

```csv
validation_missing_value
```

</td></tr>
<tr><td>

```csv
availability
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
* https://support.google.com/merchants/answer/6324448
