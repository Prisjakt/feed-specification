---
sidebar_position: 2
---

# CSV

[CSV](https://en.wikipedia.org/wiki/Comma-separated_values) stands for **c**omma **s**eparated **v**alues. It is a simple format very similar to spreadsheet. It should contain header and delimiter that is unique character not used anywhere in the feed content. 

While CSV is simple and lightweight, the CSV format is not fully standarize. This creates all sorts of issues when when it comes to encoding and escaping special characters. Hence we recommend using XML.

## Encoding sub-attributes and lists in CSV files
While the XML format is well suited for sub-attributes (child elements) and lists (repeated elements), the CSV format is not so. 

In the CSV format, sub-attributes are added to an attribute as a list inside parentheses. The list of sub-attributes is separated by colon (`:`). For example, to specify sub-attributes to the shipping attribute:

```csv
shipping(country:service:price)
SE:standard:10.99 SEK
```

In the CSV format, lists are simply defined as repeated columns with the same name. Here are two shipping services:

```csv
shipping(country:service:price),shipping(country:service:price)
SE:standard:10.99 SEK”,“NO:standard:10.99 SEK
```

## References

- [RFC4180](https://datatracker.ietf.org/doc/html/rfc4180.html)