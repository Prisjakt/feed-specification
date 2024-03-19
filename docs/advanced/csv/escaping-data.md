# Escaping Data

If you need to use commas `,` within the value of your offers (for example in a title or a description) then we expect the csv cell to be enclosed in quotes `"` according to [RFC4180](https://datatracker.ietf.org/doc/html/rfc4180.html#section-2). For more information about our CSV support see our [CSV file format article](/advanced/csv/index.md).

> Fields containing line breaks (CRLF), double quotes, and commas should be enclosed in double-quotes.

**Example**:

```csv
"aaa","b CRLF
bb","ccc" CRLF
zzz,yyy,xxx
```

:::caution Don´t escape using backslash

We **do not** support dialects where escaping characters is done by putting a backslash `\` before the value.

:::