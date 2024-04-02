---
sidebar_position: 1
---
import SampleMin from '../_xml_min.mdx';
import SampleFull from '../_xml_full.mdx';

# Prisjakt Manufacturer XML

## Description

The Prisjakt Manufacturer XML is based upon [Google Manufacturer Product Data Specification](https://support.google.com/manufacturers/answer/6124116?hl=en&ref_topic=7663870,&visit_id=638095616516154262-3704335796&rd=1) and then extended. This is currently our primary way of ingesting product data from manufacturers.

:::info

- Use the [product_detail](/feeds/product/fields/product_detail.md) field to send your properties/attributes in a structured format
- Use the [Attribute Mapper](/feeds/product/formats/prisjakt_manufacturer_xml/attribute_mapper.md) to assist you in finding mappings for your properties/attributes to Prisjakts equivalent

::: 

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