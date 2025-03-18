---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Real-time HTTP Updates

## Description

If you want to send updates on individual offers as fast as possible you can send us HTTP requests as soon as changes occur. Updates to our system will be newar real-time (within seconds) in the normal case. The end user will se changes in about ~15 minutes after our frontend caches expires.

:::info Create Integrations

Using this API you can integrate your inventory updates with us in the fastest possible way. E.g. making a plugin or setup a webhook in your e-commerce system to notify us on all changes.

:::

## API

### Endpoints

- `POST https://api.prisjakt.nu/ingest/shops/:shop_id/offers/`
- `DELETE https://api.prisjakt.nu/ingest/shops/:shop_id/offers/:offer_id`

### Credentials

In order to obtain access to this API please send an email to ingestion@prisjakt.nu with the name of your company. We will respond with credentials and your shop identifier.

### Rate Limits

- 10 calls/s

### Data Model 

The fields used are the same as in [our offer feeds](/feeds/offer/fields). Our API is compatible with the layout of [Google Merchant API](https://developers.google.com/merchant/api/reference/rest/products_v1beta/accounts.products).

Fields marked `not-used-by-prisjakt` are only included for API compability with the Google Merchant API and are not used by Prisjakt.

:::warning Send Complete Offers

Always send as complete offer information as possible (eg. even if you only update the price, send the full offer information) or else we will consider fields not sent as empty.

:::

## Example: Offers

### Adding Or Updating

```shell
curl -X 'POST' \
  'https://api.prisjakt.nu/ingest/shops/:shop_id/offers' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'client_id: YOUR_ID_HERE' \
  -H 'client_secret: YOUR_SECRET_HERE' \
  -d '{
  "name": "Vanish Sole White flytande tvättmedel 2,88L",
  "channel": "not-used-by-prisjakt",
  "offerId": "12345",
  "contentLanguage": "en",
  "feedLabel": "not-used-by-prisjakt",
  "attributes": {
    "title": "Vanish Sole White flytande tvättmedel 2,88L",
    "link": "https://yourdomain.se/vitvaror/vanish-sole-white-flytande-tvattmedel-288l",
    "price": {
      "amountMicros": 189000000,
      "currency": "SEK"
    },
    "availability": "in_stock",
    "condition": "new",
    "conditionGrade": null,
    "additionalImageLinks": null,
    "adult": false,
    "ageGroup": null,
    "availabilityDate": null,
    "brand": "Vanish",
    "color": null,
    "description": "Sole White 2-in-1 är speciellt utvecklad för vittvätt",
    "energyEfficiencyClass": null,
    "gender": null,
    "googleProductCategory": "4973",
    "gtin": [
      "5714970008281"
    ],
    "imageLink": "https://yourdomain.se/vanish_600x600_w_g.jpg",
    "isBundle": false,
    "itemGroupId": null,
    "marketplaceRetailer": "not-used-by-prisjakt",
    "material": null,
    "mpn": "3296009",
    "pattern": null,
    "productDetail": [
      {
        "sectionName": "scent",
        "attributeName": "scent",
        "attributeValue": "flower"
      }
    ],
    "productType": [
      "tvattmedel"
    ],
    "promotionId": null,
    "salePrice": null,
    "salePriceEffectiveDate": null,
    "shipping": [
      {
        "price": {
          "amountMicros": 49000000,
          "currency": "SEK"
        },
        "country": "se",
        "region": null,
        "service": "Standard frakt",
        "minHandlingTime": 1,
        "maxHandlingTime": 1,
        "minTransitTime": 1,
        "maxTransitTime": 3
      }
    ],
    "shippingLabel": null,
    "shippingLength": {
      "value": 1,
      "unit": "cm"
    },
    "shippingWidth": {
      "value": 1,
      "unit": "cm"
    },
    "shippingHeight": {
      "value": 1,
      "unit": "cm"
    },
    "shippingWeight": {
      "value": 1,
      "unit": "g"
    },
    "size": null,
    "sizeSystem": null,
    "pause": null
  },
  "customAttributes": null
}'
```

### Removing

```shell
curl -X 'DELETE' \
  'https://api.prisjakt.nu/ingest/shops/:shop_id/offers/:offer_id' \
  -H 'client_id: YOUR_ID_HERE' \
  -H 'client_secret: YOUR_SECRET_HERE'
```

## References

- [Google Merchant API](https://developers.google.com/merchant/api)
- [REST Resource: accounts.products](https://developers.google.com/merchant/api/reference/rest/products_v1beta/accounts.products)