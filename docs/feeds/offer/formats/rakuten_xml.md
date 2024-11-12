---
sidebar_position: 6
description: Rakuten affiliate feed format
---

# Rakuten XML

## Description

[Rakuten](https://rakutenadvertising.com/product-feed-specification/) is partially supported for shops using the Rakuten affiliate network for quick onboarding to Prisjakt. But to fully utilize all features we recommend our [Prisjakt XML](./prisjakt_xml/index.md) format.

## Mapings of Rakuten fields to Prisjakt fields

```md
 Important Info:
 For every rakuten offer we have 3 different prefixes [ new, refurbished, used ]. Further this prefix will be used to create mapping
 and will be shown as {prefix} in the table below.
```

| Rakuten Field         | Prisjakt Field                  |
|-----------------------|---------------------------------|
| productid             | id                              |
| designation           | title                           |
| availability          | availability                    |
| {prefix}              | condition                       |
| *MISSING*             | google_product_category         |
| url_{prefix}          | link                            |
| {prefix}bestprice     | price                           |
| *MISSING*             | additional_image_link           |
| *MISSING*             | adult                           |
| url_{prefix}          | affiliate_link                  |
| *MISSING*             | age_group                       |
| *MISSING*             | availability_date               |
| manufacturer          | brand                           |
| *MISSING*             | color                           |
| *MISSING*             | description                     |
| *MISSING*             | energy_efficiency_class         |
| *MISSING*             | gender                          |
| ean                   | gtin                            |
| urlimg                | image_link                      |
| *MISSING*             | is_bundle                       |
| *MISSING*             | item_group_id                   |
| *MISSING*             | marketplace_retailer            |
| *MISSING*             | material                        |
| mpn                   | mpn                             |
| *MISSING*             | pattern                         |
| *MISSING*             | product_detail:section_name,    |
| *MISSING*             | product_detail:attribute_name,  |
| *MISSING*             | product_detail:attribute_value, |
| categories            | product_type                    |
| *MISSING*             | promotion_id                    |
| *MISSING*             | sale_price                      |
| *MISSING*             | sale_price_effective_date       |
| *MISSING*             | delta_command                   |
| *MISSING*             | shipping:country,               |
| shippingcost_{prefix} | shipping:price,                 |
| *MISSING*             | shipping:service,               |
| *MISSING*             | shipping:region,                |
| *MISSING*             | shipping:min_transit_time,      |
| *MISSING*             | shipping:max_transit_time,      |
| *MISSING*             | shipping:min_handling_time,     |
| *MISSING*             | shipping:max_handling_time,     |
| *MISSING*             | shipping_height                 |
| *MISSING*             | shipping_label                  |             
| *MISSING*             | shipping_length                 |
| *MISSING*             | shipping_weight                 |
| *MISSING*             | shipping_width                  |
| *MISSING*             | size                            |
| *MISSING*             | size_system                     |
| *MISSING*             | pause                           |
