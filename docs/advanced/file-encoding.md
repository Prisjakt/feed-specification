---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# File Encoding

In order for computers to understand each other and to be able to represent the large amount of different languages characters and symbols, encodings are needed. Encodings are a way of defining a set where numbers correspond to a certain symbol.


## Supported File Encodings

We support the following encodings (and only these, see [below](#why-not-more-encodings))

- [utf-8](https://en.wikipedia.org/wiki/UTF-8)
- [utf-8-sig (or utf-8 with BOM)](https://docs.python.org/3/library/codecs.html#module-encodings.utf_8_sig)
- [ascii](https://sv.wikipedia.org/wiki/ASCII)
- [windows-1252](https://sv.wikipedia.org/wiki/Windows-1252)
- [iso-8859-1 (also called latin1)](https://sv.wikipedia.org/wiki/ISO/IEC_8859-1)


## UTF8

We **strongly** recommend you to stick to UTF-8 as this is the most common used character encoding for the web and it is also the recommended encoding in the [HTML 5 Specification](https://www.w3.org/TR/2011/WD-html5-20110405/infrastructure.html#utf-8).

:::note Learn about UTF 8

Here is a good explanation from YouTuber Alex that explains UTF-8 encoding.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/ut74oHojxqo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

:::

## In Practice

You can use multiple common tools or programming languages in order to create UTF-8 encoded files.

### Using a Text Editor

- Open your file in a good text editor like [Sublime Text](https://sublimetext.com)
- Click File in the top-left corner
- Click `Save with Encoding...`
- Click `UTF-8`

### Using Programming


<Tabs>

  <TabItem value="utf8_python" label="Python" default>

```python
from pathlib import Path
file_path.write_text(content, "utf-8")
```

  </TabItem>

  <TabItem value="utf8_csharp" label="C#" default>

```csharp
var utf8WithoutBom = new System.Text.UTF8Encoding(false);
File.WriteAllText(_fileName, content, utf8WithoutBom);
```

  </TabItem>


  <TabItem value="utf8_java" label="Java" default>

```java
try (
    FileOutputStream fos = new FileOutputStream(file);
    OutputStreamWriter osw = new OutputStreamWriter(fos, StandardCharsets.UTF_8);
    BufferedWriter writer = new BufferedWriter(osw)) {
      writer.append(line);
}
```

  </TabItem>


  <TabItem value="utf8_rust" label="Rust" default>

```rust
use std::fs::File;
let mut file = File::create(file_name)?;
file.write_all(b"content")?;
```

  </TabItem>



</Tabs>

## Why Not More Encodings?

There are multiple other encodings not listed above. We **do not** support sending us files using other encodings than the list above. This is a decision taken weighing in complexity vs benefit vs error proneness.

## References

- [RFC3629](https://www.rfc-editor.org/rfc/rfc3629)
- [Wikipedia](https://en.wikipedia.org/wiki/UTF-8)
- [HTML 5 Specification](https://www.w3.org/TR/2011/WD-html5-20110405/infrastructure.html#utf-8)