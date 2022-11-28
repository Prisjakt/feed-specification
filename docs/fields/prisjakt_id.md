# prisjakt_id

## Description

This attribute is *optional*.
Add this information if you know to which Prisjakt product we should match your product. Prisjakt XML namespace definition is available at `https://storage.googleapis.com/prisjakt-namespace/ns`

## Requirements

* *optional*


## Specification Details

- Adding this will give you control over indexing process

## Allowed Values
- Only digits are allowed

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no
- Length: up to 50 characters


## Validation Error Codes

### validation_invalid_length
### validation_not_integer

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                       </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<pj:prisjakt_id>1</pj:prisjakt_id>  
```

</td></tr>
<tr><td>

```xml
<pj:prisjakt_id>123</pj:prisjakt_id>
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
prisjakt_id
1                
```

</td></tr>
<tr><td>

```csv
prisjakt_id
123                
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
<pj:prisjakt_id>foo</pj:prisjakt_id>                                                                                
```

</td><td>

```xml
validation_not_integer   
```

</td></tr>
<tr><td>

```xml
<pj:prisjakt_id>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)</pj:prisjakt_id>
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
prisjakt_id
foo                  
```

</td><td>

```csv
validation_not_integer   
```

</td></tr>
<tr><td>

```csv
prisjakt_id
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 50 characters value)                  
```

</td><td>

```csv
validation_invalid_length
```

</td></tr>
</tbody>
</table>

