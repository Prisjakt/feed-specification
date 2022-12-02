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

### validation_invalid_format
### validation_missing_value

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                                                                                                                                      </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:sale_price>11.50 SEK</g:sale_price>                                                                                                                             
```

</td></tr>
<tr><td>

```xml
<g:sale_price_effective_date>2016-02-24/2016-02-26</g:sale_price_effective_date>
<g:sale_price>11.50 SEK</g:sale_price>                                            
```

</td></tr>
<tr><td>

```xml
<g:sale_price_effective_date>2016-02-24T13:00:00.000000-08:00/2016-02-29T15:30:00.000000+02:00</g:sale_price_effective_date>
<g:sale_price>11.50 SEK</g:sale_price>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example                                                                                                   </th></tr>
</thead>
<tbody>
<tr><td>

```csv
sale_price_effective_date,sale_price
,11.50 SEK                                                                 
```

</td></tr>
<tr><td>

```csv
sale_price_effective_date,sale_price
2016-02-24/2016-02-26,11.50 SEK                                            
```

</td></tr>
<tr><td>

```csv
sale_price_effective_date,sale_price
2016-02-24T13:00:00.000000-08:00/2016-02-29T15:30:00.000000+02:00,11.50 SEK
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                        </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:sale_price_effective_date>2018/2016-02-29</g:sale_price_effective_date>                                             
```

</td><td>

```xml
validation_invalid_format
```

</td></tr>
<tr><td>

```xml
<g:sale_price_effective_date>2016-02-29T15:30-0800</g:sale_price_effective_date>
<g:sale_price>11.50 GBP</g:sale_price>
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
<tr><th>Invalid example                                                     </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```csv
sale_price_effective_date,sale_price
2018/2016-02-29,               
```

</td><td>

```csv
validation_invalid_format
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
