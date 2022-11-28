# promotion_id

## Description

This attribute is *optional*.
Promotion_id allows mapping your inventory to promotion defined in Business Center.

## Requirements

* *optional*


## Specification Details

- Use this attribute if you want to highlight offers included in your current promotion campaigns.

## Allowed Values
- Choose your own values for promotion_id based on your inventory

## Format

- Type: List[String]
- Encoding: UTF-8
- Repeatable: yes, up to 10
- Length: up to 50 characters


## Validation Error Codes

### validation_invalid_length

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                               </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:promotion_id>super promo</g:promotion_id>
```

</td></tr>
<tr><td>

```xml
<g:promotion_id>10-year-anniversary-promo</g:promotion_id>
<g:promotion_id>mega deals</g:promotion_id>                                             
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
promotion_id
super promo                
```

</td></tr>
<tr><td>

```csv
promotion_id
"10-year-anniversary-promo,mega deals"                
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                     </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:promotion_id>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)</g:promotion_id>
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
promotion_id
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
* https://support.google.com/merchants/answer/7050148
