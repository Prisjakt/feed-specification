# shipping_label

## Description

This attribute is *optional*.
Shipping label allows mapping your inventory to specific shipping service.

## Requirements

* *optional*


## Specification Details

- Suggested types of products that should get own shipping_label: oversized products (i.e. white goods), perishable products (i.e. groceries)

## Allowed Values
- Choose your own values for shipping labels based on your inventory
- Add up to 10 shipping labels separated by slash

## Format

- Type: List[String]
- Encoding: UTF-8
- Repeatable: yes, up to 10


## Validation Error Codes

### validation_too_many_repetitions

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:shipping_label>bulky</g:shipping_label>   
```

</td></tr>
<tr><td>

```xml
<g:shipping_label>dhl/free</g:shipping_label>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example          </th></tr>
</thead>
<tbody>
<tr><td>

```csv
shipping_label
bulky   
```

</td></tr>
<tr><td>

```csv
shipping_label
dhl/free
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                           </th><th>Resulting error code           </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:shipping_label>a/b/c/d/e/f/g/h/i/j/k</g:shipping_label>
```

</td><td>

```xml
validation_too_many_repetitions
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example                     </th><th>Resulting error code           </th></tr>
</thead>
<tbody>
<tr><td>

```csv
shipping_label
a/b/c/d/e/f/g/h/i/j/k
```

</td><td>

```csv
validation_too_many_repetitions
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324504
