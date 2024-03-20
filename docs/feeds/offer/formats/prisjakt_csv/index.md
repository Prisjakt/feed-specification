---
sidebar_position: 2
description: Our own format as CSV, legacy support only
---
import SampleMin from '../_csv_min.mdx';
import SampleFull from '../_csv_full.mdx';

# Prisjakt CSV

## Description

Our CSV format has the same semantic fields and rules as our [Prisjakt XML](/feeds/offer/formats/prisjakt_xml/index.md) format. 
The only difference is that the data is separated by commas instead of XML tags. How to properly encode nested attributes in csv is described in [our section about encoding sub-attributes](/advanced/csv/#encoding-sub-attributes-and-lists-in-csv-files)

:::warning

The CSV format is not recommended as it is poorly defined and have issues when it comes to encoding and escaping. We recommend using the [Prisjakt XML](/feeds/offer/formats/prisjakt_xml/index.md) format instead if possible.

:::

## Example Files

### Minimal

[Download CSV File](pathname:///examples/offer/min.csv)
<SampleMin />

### Full

[Download CSV File](pathname:///examples/offer/full.csv)
<SampleFull />