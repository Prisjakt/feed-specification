---
sidebar_position: 1
---
import SampleMin from '../_xml_min.mdx';
import SampleFull from '../_xml_full.mdx';

# Google Manufacturer XML

## Description

The [Google Manufacturer Product Data Specification](https://support.google.com/manufacturers/answer/6124116?hl=en&ref_topic=7663870,&visit_id=638095616516154262-3704335796&rd=1) is currently our primary way of ingesting product data from manufacturers.

Use the [product_detail](/feeds/product/fields/product_detail.md) field to send your properties/attributes in a structured format. We will continuously add mappings for the different attributes to our internal taxonomy so add as much information as possible.

## Required Fields

The following fields are required for an product to ingest successfully:

- [Id](/feeds/product/fields/id.md)
- [GTIN](/feeds/product/fields/gtin.md)
- [Title](/feeds/product/fields/title.md)
- [Brand](/feeds/product/fields/brand.md)
- [Description](/feeds/product/fields/description.md)
- [Image Link](/feeds/product/fields/image_link.md)

## Example Files

### Minimal

[Download XML File](pathname:///examples/offer/min.xml)
<SampleMin />

### Full

[Download XML File](pathname:///examples/offer/full.xml)
<SampleFull />