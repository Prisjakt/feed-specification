# item_group_id

## Description

This attribute is *optional*.
This attribute is strongly recommended for fashion and beauty segment. It helps us group variant offers and present relevant offers to the users.

## Requirements

* *optional*


## Specification Details

- Don't mix up `id` and `item_group_id`
- Make sure the combination of `item_group_id` and color/pattern/size matches the information on the product page

## Allowed Values
- Use the same value for variants of the same product
- Don't re-use the same `item_group_id` for other products

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
<tr><th>Valid example                            </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<channel/>                               
```

</td></tr>
<tr><td>

```xml
<g:item_group_id>AAA111</g:item_group_id>
```

</td></tr>
<tr><td>

```xml
<g:item_group_id>aaa111</g:item_group_id>
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
item_group_id
""                
```

</td></tr>
<tr><td>

```csv
item_group_id
AAA111                
```

</td></tr>
<tr><td>

```csv
item_group_id
aaa111                
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
<g:item_group_id>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)</g:item_group_id>
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
item_group_id
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)                  
```

</td><td>

```csv
validation_invalid_length
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324507
