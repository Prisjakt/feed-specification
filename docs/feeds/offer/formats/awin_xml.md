---
sidebar_position: 5
description: Awin affiliate feed format
---

# Awin XML

## Description

[Awin](https://wiki.awin.com/images/a/a0/PM-FeedColumnDescriptions.pdf) is partially supported for shops using the Awin
affiliate network for quick onboarding to Prisjakt. But to fully utilize all features we recommend
our [Prisjakt XML](./prisjakt_xml/index.md) format.

## Mapings of Awin fields to Prisjakt fields

| Awin Field                                      | Prisjakt Field                   |
|-------------------------------------------------|----------------------------------|
| merchant_product_id                             | id                               |
| product_name                                    | title                            |
| in_stock *1                                     | availability                     |
| condition                                       | condition                        |
| google_taxonomy                                 | google_product_category          |
| merchant_deep_link                              | link                             |
| product_price_old *2                            | price                            | 
| alternate_image_['one', 'two', 'three', 'four'] | additional_image_link            |
| *MISSING*                                       | adult                            |
| aw_deep_link                                    | affiliate_link                   |
| *MISSING*                                       | age_group                        |
| *MISSING*                                       | availability_date                |
| brand_name                                      | brand                            |
| colour                                          | color                            |
| description                                     | description                      |
| *MISSING*                                       | energy_efficiency_class          |
| suitable_for                                    | gender                           |
| product_gtin *3                                 | gtin                             |
| merchant_image_url *4                           | image_link                       |
| *MISSING*                                       | is_bundle                        |
| *MISSING*                                       | item_group_id                    |
| *MISSING*                                       | marketplace_retailer             |
| *MISSING*                                       | material                         |
| mpn *5                                          | mpn                              |
| *MISSING*                                       | pattern                          |
| *MISSING*                                       | product_detail:section_name,     |
| *MISSING*                                       | product_detail:attribute_name,   |
| *MISSING*                                       | product_detail:attribute_value,  |
| product_type *6                                 | product_type                     |
| *MISSING*                                       | promotion_id                     |
| display_price                                   | sale_price                       |
| *MISSING*                                       | sale_price_effective_date        |
| *MISSING*                                       | delta_command                    |
| *MISSING*                                       | shipping:country,                |
| delivery_cost                                   | shipping:price,                  |
| *MISSING*                                       | shipping:service,                |
| *MISSING*                                       | shipping:region,                 |
| *MISSING*                                       | shipping:min_transit_time,       |
| *MISSING*                                       | shipping:max_transit_time,       |
| *MISSING*                                       | shipping:min_handling_time,      |
| *MISSING*                                       | shipping:max_handling_time,      |
| *MISSING*                                       | shipping_height                  |
| *MISSING*                                       | shipping_label                   |             
| *MISSING*                                       | shipping_length                  |
| *MISSING*                                       | shipping_weight                  |
| *MISSING*                                       | shipping_width                   |
| size                                            | size                             |
| *MISSING*                                       | size_system                      |
| *MISSING*                                       | pause                            |

```md
*1 availability
- If `in_stock` field is 1, availability is "in stock"
- If `in_stock` field is missing use `stock_quantity` or `stock_status` fields to determine availability
```

```md
*2 price
- Use `dispaly_price` as price when sale_price is not defined. 
- If `sale_price` is defined, `display_price` become `sale_price` and regular price is in `product_price_old`.
```

```md
*3 gtin
- Use `product_gtin` if field is present. 
- If `product_gtin` field is missing use `isbn` or `ean` or `upc`  fields to determine `gtin`
```

```md
*4 image_link
- Use `merchant_image_url` if field is present. 
- If `merchant_image_url` field is missing use `aw_image_url` or `large_image` to determine `image_link`
```

```md
*5 mpn
- Use `mpn` if field i available. 
- If `mpn` field is missing use `model_number` to determine `mpn`
```

```md
*6 product_type
- Use `product_type` if field is present. 
- If `product_type` field is missing use `merchant_category`, `merchant_product_category_path` or `category_name`
  to determine `product_type`
```
