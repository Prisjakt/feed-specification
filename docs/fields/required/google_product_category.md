# google_product_category

## Description

This attribute is *optional*.
It should contain full category path from Google taxonomy or respective category id. If you don't know or have Google product category submit `product_type` instead.

## Requirements

* *optional*


## Specification Details

- Use the most nested category possible, avoid using root categories
- This information helps us to make the products searchable for the users
- Use full category path or respective category id from the [list](https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt)

## Allowed Values
- Use only one attribute of this type per product

## Format

- Type: String
- Encoding: UTF-8
- Repeatable: no


## Validation Error Codes

### validation_category_not_found
### validation_invalid_length

## Valid XML Examples

<table>
<thead>
<tr><th>Valid example                                                                                                                            </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:google_product_category></g:google_product_category>                                                                                  
```

</td></tr>
<tr><td>

```xml
<g:google_product_category>1</g:google_product_category>                                                                                 
```

</td></tr>
<tr><td>

```xml
<g:google_product_category>1144</g:google_product_category>                                                                              
```

</td></tr>
<tr><td>

```xml
<g:google_product_category>1157</g:google_product_category>                                                                              
```

</td></tr>
<tr><td>

```xml
<g:google_product_category>Animals &amp; Pet Supplies &gt; Pet Supplies &gt; Reptile &amp; Amphibian Supplies</g:google_product_category>
```

</td></tr>
<tr><td>

```xml
<g:google_product_category>Dyr og tilbehør til kæledyr &gt; Tilbehør til kæledyr &gt; Tilbehør til hunde</g:google_product_category>     
```

</td></tr>
<tr><td>

```xml
<g:google_product_category>Sporting Goods &gt; Athletics &gt; Figure Skating &amp; Hockey &gt; Ice Skates</g:google_product_category>    
```

</td></tr>
</tbody>
</table>

## Valid CSV Examples

<table>
<thead>
<tr><th>Valid example                                                                                  </th></tr>
</thead>
<tbody>
<tr><td>

```csv
google_product_category
""                                                                     
```

</td></tr>
<tr><td>

```csv
google_product_category
1                                                                      
```

</td></tr>
<tr><td>

```csv
google_product_category
1144                                                                   
```

</td></tr>
<tr><td>

```csv
google_product_category
1157                                                                   
```

</td></tr>
<tr><td>

```csv
google_product_category
Animals & Pet Supplies > Pet Supplies > Reptile & Amphibian Supplies   
```

</td></tr>
<tr><td>

```csv
google_product_category
Dyr og tilbehør til kæledyr > Tilbehør til kæledyr > Tilbehør til hunde
```

</td></tr>
<tr><td>

```csv
google_product_category
Sporting Goods > Athletics > Figure Skating & Hockey > Ice Skates      
```

</td></tr>
</tbody>
</table>

## Invalid XML Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </th><th>Resulting error code         </th></tr>
</thead>
<tbody>
<tr><td>

```xml
<g:google_product_category>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 1000 characters value)</g:google_product_category>
```

</td><td>

```xml
validation_invalid_length    
```

</td></tr>
<tr><td>

```xml
<g:google_product_category>144</g:google_product_category>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
```

</td><td>

```xml
validation_category_not_found
```

</td></tr>
<tr><td>

```xml
<g:google_product_category>Divers sports &gt; Water polo</g:google_product_category>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
```

</td><td>

```xml
validation_category_not_found
```

</td></tr>
<tr><td>

```xml
<g:google_product_category>toys &amp; puzzle</g:google_product_category>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
```

</td><td>

```xml
validation_category_not_found
```

</td></tr>
</tbody>
</table>

## Invalid CSV Examples

<table>
<thead>
<tr><th>Invalid example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </th><th>Resulting error code         </th></tr>
</thead>
<tbody>
<tr><td>

```csv
google_product_category
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa (more than 1000 characters value)
```

</td><td>

```csv
validation_invalid_length    
```

</td></tr>
<tr><td>

```csv
google_product_category
144                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
```

</td><td>

```csv
validation_category_not_found
```

</td></tr>
<tr><td>

```csv
google_product_category
Divers sports > Water polo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
```

</td><td>

```csv
validation_category_not_found
```

</td></tr>
<tr><td>

```csv
google_product_category
toys & puzzle                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
```

</td><td>

```csv
validation_category_not_found
```

</td></tr>
</tbody>
</table>

## References
* https://support.google.com/merchants/answer/6324436
