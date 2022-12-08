# availability_date

## Description

This attribute is *optional*.
It should be used to indicate either a preorder date or release date.

## Requirements

* *optional*


## Specification Details

- Use ISO 8601 formatted datetime
- If time is missing, release will be set to 12:00 AM CET

## Allowed Values
- Standard: ISO 8601

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no


## Validation Error Codes

### validation_invalid_format
### validation_invalid_value
### validation_missing_field

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                                                                                        </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>preorder</g:availability>                      
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-12-22T03:12:58.019077+00:00</g:availability_date>
<g:availability>preorder</g:availability>
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example                                                           </th></tr>
</thead>
<tbody>
<tr><td>

```csv
availability_date,availability
2021-03-21,preorder                      
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-12-22T03:12:58.019077+00:00,preorder
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                  </th><th>Resulting error code     </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:availability_date>2021/12/22/12:23:00</g:availability_date>                                                   
```

</td><td>

```xml
validation_invalid_format
```

</td></tr>
<tr><td>

```xml
<g:availability_date>today</g:availability_date>                                                                 
```

</td><td>

```xml
validation_invalid_format
```

</td></tr>
<tr><td>

```xml
<g:availability>preorder</g:availability>                                                                        
```

</td><td>

```xml
validation_missing_field 
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>in_stock</g:availability>                  
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>out_of_stock</g:availability>              
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>pickup</g:availability>                    
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>download</g:availability>                  
```

</td><td>

```xml
validation_invalid_value 
```

</td></tr>
<tr><td>

```xml
<g:availability_date>2021-03-21</g:availability_date>
<g:availability>not_available_for_purchase</g:availability>
```

</td><td>

```xml
validation_invalid_value 
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
availability_date
2021/12/22/12:23:00                               
```

</td><td>

```csv
validation_invalid_format
```

</td></tr>
<tr><td>

```csv
availability_date
today                                             
```

</td><td>

```csv
validation_invalid_format
```

</td></tr>
<tr><td>

```csv
availability_date,availability
,preorder                            
```

</td><td>

```csv
validation_missing_field 
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-03-21,in_stock                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-03-21,out_of_stock              
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-03-21,pickup                    
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-03-21,download                  
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
<tr><td>

```csv
availability_date,availability
2021-03-21,not_available_for_purchase
```

</td><td>

```csv
validation_invalid_value 
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324470
