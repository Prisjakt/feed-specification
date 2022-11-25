# sale_price_effective_date

## Description

This attribute is *optional*.
Datetime range indicating when `sale_price` is active. If you don't submit this attribute [`sale_price`](sale_price.md) always applies.

## Requirements

* *optional*


## Specification Details

- This attribute requires start date and stop date to work properly
- If you don't include time, start time default to 12 AM CET (midnight) of start day and stop time is set to 23:59:59 of stop day
- Start datetime shall be earlier than stop datetime

## Allowed Values
- Standard: ISO 8601
- Up to 51 characters
- Two dates separated with "/" (ISO 8601)

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no


## Validation Error Codes

### validation_invalid_length
### validation_missing_value

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                                                                                                                </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:sale_price>11.50 GBP</g:sale_price>
<g:sale_price_effective_date>2016-02-24T13:00-0800/2016-02-29T15:30-0800</g:sale_price_effective_date>
```

</td></tr>
<tr><td>

```xml
<g:sale_price>11.50 GBP</g:sale_price>
<g:sale_price_effective_date></g:sale_price_effective_date>                                           
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example                                                                             </th></tr>
</thead>
<tbody>
<tr><td>

```csv
sale_price_effective_date,sale_price
2016-02-24T13:00-0800/2016-02-29T15:30-0800,11.50 GBP
```

</td></tr>
<tr><td>

```csv
sale_price_effective_date,sale_price
,11.50 GBP                                           
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                     </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:sale_price></g:sale_price>
<g:sale_price_effective_date>2016-02-24T13:00-0800/2016-02-29T15:30-0800</g:sale_price_effective_date>
```

</td><td>

```xml
validation_invalid_length
```

</td></tr>
<tr><td>

```xml
<g:sale_price>11.50 GBP</g:sale_price>
<g:sale_price_effective_date>2016-02-29T15:30-0800</g:sale_price_effective_date>             
```

</td><td>

```xml
validation_missing_value 
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example                                                                  </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```csv
sale_price_effective_date,sale_price
2016-02-24T13:00-0800/2016-02-29T15:30-0800,
```

</td><td>

```csv
validation_invalid_length
```

</td></tr>
<tr><td>

```csv
sale_price_effective_date,sale_price
2016-02-29T15:30-0800,11.50 GBP             
```

</td><td>

```csv
validation_missing_value 
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324460
