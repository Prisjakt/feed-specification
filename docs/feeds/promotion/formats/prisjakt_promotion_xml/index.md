---
sidebar_position: 1
---
import SampleMin from '../_xml_min.mdx';
import SampleFull from '../_xml_full.mdx';

# Prisjakt Promotion XML

## Description

Most fields in use in our feed are also part of the [Google Promotions Feed Specification](https://support.google.com/merchants/answer/2906014?hl=en), and as such these fields will be usable for other systems that support Google Product feeds.

:::info
The promotion feed is designed primarily for system integrations, enabling automated processes to handle promotions efficiently. 
For tasks that require manual intervention, we recommend using the [BC UI](https://app.business.prisjakt.nu/), 
which is specifically invented for human interaction and it's easy of use. 
Mixing the promotion feed with manual processes in the [BC UI](https://app.business.prisjakt.nu/) can lead to confusion and misconfiguration, 
so it's best to keep their usage separate to maintain clarity and streamline operations.
:::

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

## Promotion Optional Fields
- [Description](/feeds/promotion/fields/description.md)
- [Item id](/feeds/promotion/fields/item_id.md)
- [Image link](/feeds/promotion/fields/image_link.md)
- [Promotion page link](/feeds/promotion/fields/promotion_page_link.md)

## Example Files

### Minimal

[Download XML File](pathname:///examples/promotion/min.xml)
<SampleMin />

### Full

[Download XML File](pathname:///examples/promotion/full.xml)
<SampleFull />
