---
sidebar_position: 1
---
import SampleMin from './_min_sample.mdx';
import SampleFull from './_full_sample.mdx';

# Prisjakt Promotion XML

## Description

Most fields in use in our feed are also part of the [Google Promotions Feed Specification](https://support.google.com/merchants/answer/2906014?hl=en), and as such these fields will be usable for other systems that support Google Product feeds.

## Prisjakt Specific Feeds

In order to be able to provide you with extra functionality we sometimes add extra fields that can be used for an even better experience at Prisjakt for your customers.

Currently, our Prisjakt specific fields are:

- [promotion_page_link](/fields/promotion/promotion_page_link.md)

The fields are also defined in [our promotions feeds xml namespace](/types-of-feeds/file-formats/xml.md#namespaces-1)

## Promotion Required Fields

There are some fields, we *simply cannot be without* when ingestion your promotion. If any of these fields are missing, your **whole promotion** will be omitted.

The following fields are required for us to correctly index your promotion and assign it to offers.

- [Promotion Id](/fields/promotion/promotion_id.md)
- [Long title](/fields/promotion/long_title.md)
- [Coupon value type](/fields/promotion/coupon_value_type.md)
- [Promotion effective dates](/fields/promotion/promotion_effective_dates.md)

## Example Files

### Minimal

[Download XML File](pathname:///examples/offer/min-sample.xml)
<SampleMin />

### Full

[Download XML File](pathname:///examples/offer/sample.xml)
<SampleFull />