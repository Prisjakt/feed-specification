---
sidebar_position: 1
---
import SampleMin from '../_xml_min.mdx';
import SampleFull from '../_xml_full.mdx';

# Prisjakt Promotion XML

## Description

Most fields in use in our feed are also part of the [Google Promotions Feed Specification](https://support.google.com/merchants/answer/2906014?hl=en), and as such these fields will be usable for other systems that support Google Product feeds.

## Prisjakt Specific Feeds

In order to be able to provide you with extra functionality we sometimes add extra fields that can be used for an even better experience at Prisjakt for your customers.

Currently, our Prisjakt specific fields are:

- [promotion_page_link](/feeds/promotion/fields/promotion_page_link.md)

The fields are also defined in [our promotions feeds xml namespace](/advanced/xml/index.md#namespaces)

## Promotion Required Fields

There are some fields, we *simply cannot be without* when ingestion your promotion. If any of these fields are missing, your **whole promotion** will be omitted.

The following fields are required for us to correctly index your promotion and assign it to offers.

- [Promotion Id](/feeds/promotion/fields/promotion_id.md)
- [Long title](/feeds/promotion/fields/long_title.md)
- [Coupon value type](/feeds/promotion/fields/coupon_value_type.md)
- [Promotion effective dates](/feeds/promotion/fields/promotion_effective_dates.md)

## Example Files

### Minimal

[Download XML File](pathname:///examples/promotion/min.xml)
<SampleMin />

### Full

[Download XML File](pathname:///examples/promotion/full.xml)
<SampleFull />