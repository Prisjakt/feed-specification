---
sidebar_position: 7
description: Tradedoubler affiliate feed format
---

# Tradedoubler XML

## Description
[Tradedoubler](https://dev.tradedoubler.com/products/publisher/#XML_response) is partially supported for shops using the Tradadoubler affiliate network for quick onboarding to Prisjakt. But to fully utilize all features we recommend our [Prisjakt XML](./prisjakt_xml/index.md) format.

## Important Information

### Condition Field

- If `condition` field is not included in your feed, then it will be automatically set it to `new`. However, it is highly recommended to include this field in your feed for better accuracy and completeness.

- Including the `condition` field helps ensure that the product information is up-to-date and provides a better experience for users. It allows for more precise categorization and improves the overall quality of the data.

- By setting the `condition` field to `new` when it is not provided, you can maintain a consistent standard, but including the actual condition of the product is always the best practice.


## Mappings

| Tradedoubler Field                       | Prisjakt Field                  |
|------------------------------------------|---------------------------------|
| offers:offer:id                          | id                              |
| name                                     | title                           |
| offers:offer:availability                | availability                    |
| offers:offer:condition                   | condition                       |
| fields:field:condition                   | condition                       |
| fields:field:google_product_category     | google_product_category         |
| offers:offer:sourceProductUrl            | link                            |
| offers:offer:priceHistory:price          | price                           |
| fields:field:additional_image_link_[1-9] | additional_image_link           |
| *MISSING*                                | adult                           |
| offers:offer:productUrl                  | affiliate_link                  |
| *MISSING*                                | age_group                       |
| *MISSING*                                | availability_date               |
| brand                                    | brand                           |
| *MISSING*                                | color                           |
| description                              | description                     |
| *MISSING*                                | energy_efficiency_class         |
| *MISSING*                                | gender                          |
| fields:field:gtin                        | gtin                            |
| ean                                      | gtin                            |
| productImage                             | image_link                      |
| *MISSING*                                | is_bundle                       |
| *MISSING*                                | item_group_id                   |
| *MISSING*                                | marketplace_retailer            |
| *MISSING*                                | material                        |
| sku                                      | mpn                             |
| *MISSING*                                | pattern                         |
| *MISSING*                                | product_detail:section_name,    |
| *MISSING*                                | product_detail:attribute_name,  |
| *MISSING*                                | product_detail:attribute_value, |
| categories:category                      | product_type                    |
| *MISSING*                                | promotion_id                    |
| *MISSING*                                | sale_price                      |
| *MISSING*                                | sale_price_effective_date       |
| *MISSING*                                | delta_command                   |
| fields:shipping_country                  | shipping:country,               |
| fields:shipping_price                    | shipping:price,                 |
| *MISSING*                                | shipping:service,               |
| *MISSING*                                | shipping:region,                |
| *MISSING*                                | shipping:min_transit_time,      |
| *MISSING*                                | shipping:max_transit_time,      |
| *MISSING*                                | shipping:min_handling_time,     |
| offers:offer:deliveryTime                | shipping:max_handling_time,     |
| *MISSING*                                | shipping_height                 |
| *MISSING*                                | shipping_label                  |             
| *MISSING*                                | shipping_length                 |
| *MISSING*                                | shipping_weight                 |
| *MISSING*                                | shipping_width                  |
| *MISSING*                                | size                            |
| *MISSING*                                | size_system                     |
| *MISSING*                                | pause                           |

