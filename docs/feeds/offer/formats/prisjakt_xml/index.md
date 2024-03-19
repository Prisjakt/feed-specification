---
sidebar_position: 1
---
import SampleMin from './_min_sample.mdx';
import SampleFull from './_full_sample.mdx';

# Prisjakt XML

## Description

Our feed format is an extension of the [Google Merchant Product Data Specification](https://support.google.com/merchants/answer/7052112?hl=en), and as such these fields will be usable for other systems that support Google Product feeds.

## Prisjakt Specific Fields

In order to be able to provide you with extra functionality we sometimes add extra fields that can be used for an even better experience at Prisjakt for your customers. 

These fields are all specified in the [Prisjakt namespace](/advanced/xml/#namespaces) and are not part of the Google Merchant Product Data Specification.

Currently, our Prisjakt specific fields are:

- [prisjakt_id](/feeds/offer/fields/prisjakt_id.md)
- [member_price](/feeds/offer/fields/member_price.md)

## Required Fields

There are some fields, we *simply cannot be without* such as a link to your offer, a price and an title. If any of these fields are missing, your **whole offer** will be omitted.

The following fields are required for an offer to show, you can see an example of the minimal required fields in action [here](/feeds/offer/formats/prisjakt_xml/#minimal)

- [Availability](/feeds/offer/fields/availability.md)
- [Condition](/feeds/offer/fields/condition.md)
- [Id](/feeds/offer/fields/id.md)
- [Link](/feeds/offer/fields/link.md)
- [Price](/feeds/offer/fields/price.md)
- [Title](/feeds/offer/fields/title.md)

## Example Files

### Minimal

[Download XML File](pathname:///examples/offer/min-sample.xml)
<SampleMin />

### Full

[Download XML File](pathname:///examples/offer/sample.xml)
<SampleFull />