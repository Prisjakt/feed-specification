---
sidebar_position: 2
---

# CSV

:::caution Recommendation

While CSV is lightweight and easy to use, [XML](./xml.md) is more well defined and have better support for handling complex data encodings and strctures. We recommend using XML over CSV.

:::

[CSV](https://en.wikipedia.org/wiki/Comma-separated_values) stands for **c**omma **s**eparated **v**alues. It is a simple format very similar to having data organized in a spreadsheet. The CSV format is not fully standarized even if a proposed [RFC4180](https://datatracker.ietf.org/doc/html/rfc4180.html) exists and different software often interprets the structures differently.

## Format

We expect the following structure (following  [RFC4180](https://datatracker.ietf.org/doc/html/rfc4180.html)) on CSV files, for a full example please see the [CSV tab on our full example](/examples/offer/all.mdx)

- First row is a header row

   **Example:**
   ```csv
   column_header_one,column_header_two,column_header_three
   value_1,value_2,value_3
   ```

- Columns are separated by commas `,`
- Rows are separated by newlines `\n`
- Cells that contains newlines or commas **must** be quoted using double qoutes `"`
   
   **Example:**
   ```csv
   aaa,"my title, which contains a comma",ccc
   ```

- If double-quotes are used to enclose fields, then a double-quote appearing inside a field must be escaped by preceding it with another double quote.

   **Example:**
   ```csv
   "aaa","b""bb","ccc"
   ```

## Escaping

Escaping values in CSV can be tricky, see [our section about escaping](/advanced/escaping/escape-csv.md) for more details

## Encoding sub-attributes and lists in CSV files
While the XML format is well suited for sub-attributes (child elements) and lists (repeated elements), the CSV format is not so. 

In the CSV format, sub-attributes are added to an attribute as a list inside parentheses. The list of sub-attributes is separated by colon (`:`). For example, to specify sub-attributes to the shipping attribute:

```csv
othercol1,shipping(country:service:price),othercol2
otherval1,SE:standard:10.99 SEK,otherval2
```

In the CSV format, lists are simply defined as repeated columns with the same name. Here are two shipping services:

```csv
othercol1,shipping(country:service:price),shipping(country:service:price),othercol2
otherval1,SE:standard:10.99 SEK,NO:standard:10.99 SEK,otherval2
```

## References

- [RFC4180](https://datatracker.ietf.org/doc/html/rfc4180.html)