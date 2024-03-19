---
sidebar_position: 2
---
import SampleMin from './_min_sample.mdx';
import SampleFull from './_full_sample.mdx';

# Prisjakt CSV

## Description

Our CSV format has the same semantic fields and rules as our [Prisjakt XML](/feeds/offer/formats/prisjakt_xml/index.md) format. 
The only difference is that the data is separated by commas instead of XML tags. How to properly encode nested attributes in csv is described in [our section about encoding sub-attributes](/advanced/csv/#encoding-sub-attributes-and-lists-in-csv-files)

:::warning

The CSV format is not recommended as it is poorly defined and have issues when it comes to encoding and escaping. We recommend using the [Prisjakt XML](/feeds/offer/formats/prisjakt_xml/index.md) format instead if possible.

:::

## Example Files

### Minimal

[Download CSV File](pathname:///examples/offer/min-sample.csv)
<SampleMin />

### Full

[Download CSV File](pathname:///examples/offer/sample.csv)
<SampleFull />