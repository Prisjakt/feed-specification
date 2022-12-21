---
sidebar_position: 5
---
# Best Practices

## Numbers and Sizes

### Small Feeds < 250 000 Offers

For small and medium businesses we recommend using a [single file feed](/types-of-feeds/pull/feed.md) and adding it in our self-service portal [Prisjakt Business Center](https://support.prisjakt.nu/sv/collections/3088260-prisjakt-business-center).

### Large Feeds > 250 000 Offers

For larger feeds and higher update frequencies please look into using a [delta feed](/types-of-feeds/pull/delta-feeds.md) setup. In some cases we're also able to prepare custom integrations for larger enterprise clients. For more information please contact our support at support@prisjakt.nu.

## Format

If possible, then use [XML](/types-of-feeds/file-formats/xml.md) over CSV. This is because xml is:

- More well defined than csv
- Have better tools to handle [escaping and encoding](/docs/advanced) 
- Is easier to read and deal with, especially when it comes to more complex list fields like [shipping](/fields/shipping.md)

## Data

- Ensure that you [escape and encode](/docs/advanced) your data correctly or use [CDATA](/types-of-feeds/file-formats/xml.md#use-cdata). Titles, descriptions and other fields with free text information can otherwise easily cause parsing issues
- Check your datas health by looking at the validation reports in [Prisjakt Business Center](https://support.prisjakt.nu/sv/collections/3088260-prisjakt-business-center) and try to fix all warnings in order to get the most out of our services
- Ensure that all your urls are properly formated and encoded

## Server Configuration

- **Configure [gzip compression](https://en.wikipedia.org/wiki/HTTP_compression) and send a correct gzip header**, this will reduce the amount of data sent and improve handling time as well
- Ensure that you **send a correct [content-length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length) header**, this makes it easier for us to ensure that we have ingested your whole feed and not gotten aborted by any network issues or anything similar
- **Disable bot protection** for our [user agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent): `feed-ingestion-service`, some bot protection systems will cause issues for us when we read your feed. If possible, then allow requests from our user agent to come through. Unfortunately we cannot provide you with fixed ip´s for our agents since they are created dynamically
- **Send a proper [etag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header** this will save both us and you since we can then detect if there is any changes to your feed or not without having to download it