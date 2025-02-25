---
sidebar_position: 1
description: CSV For local Product Data Specification
---
import SampleMin from './_csv_min.mdx';
import SampleFull from './_csv_full.mdx';

# Prisjakt Local Inventory CSV

## Description

Our feed format is an extension of the [Google Merchant Local Product Data Specification](https://support.google.com/merchants/answer/14779112?hl=en&ref_topic=15149063&sjid=11693024350990084211-EU), and as such these fields will be usable for other systems that support Google Local Product Data Feeds.

:::info Field Requirements

We require full offer information and do not accept local offer updates on single fields, **always supply the full offer.**

:::

## Example Files

### Minimal

[Download CSV File](pathname:///examples/local-offer/min.csv)
<SampleMin />

### Full

[Download CSV File](pathname:///examples/local-offer/full.csv)
<SampleFull />