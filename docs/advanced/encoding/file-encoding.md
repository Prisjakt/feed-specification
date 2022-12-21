import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# File Encoding (UTF-8)

In order for computers to understand each other and to be able to represent the large amount of different languages characters and symbols, encodings are needed. Encodings are a way of defining a set where numbers correspond to a certain symbol.


## UTF8

We support  [UTF-8](https://en.wikipedia.org/wiki/UTF-8) (and *only* UTF-8, see [below](#why-not-more-encodings)) which is the most common used character encoding for the web and it is also the recommended encoding in the [HTML 5 Specification](https://www.w3.org/TR/2011/WD-html5-20110405/infrastructure.html#utf-8).

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

There are multiple other common encodings such as `iso-8859-1` or `windows-1252`. We **do not** support sending us files using these encodings and the reason for that is that as soon as we start accepting multiple encodings we have to use heuristics in order to detect the encoding before parsing. This is an *error prone* and *uncertain* task and only adds the risk of creating errors to no real benefit, hence we have opted to only support UTF-8.

## References

- [RFC3629](https://www.rfc-editor.org/rfc/rfc3629)
- [Wikipedia](https://en.wikipedia.org/wiki/UTF-8)
- [HTML 5 Specification](https://www.w3.org/TR/2011/WD-html5-20110405/infrastructure.html#utf-8)