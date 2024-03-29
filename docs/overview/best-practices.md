---
sidebar_position: 3
---
# Best Practices

## Inventory Size

### Small Feeds < 250 000 Offers

For small and medium businesses we recommend using a single file feed and adding it in our self-service portal [Prisjakt Business Center](https://support.prisjakt.nu/sv/collections/3088260-prisjakt-business-center).

### Large Feeds > 250 000 Offers

For larger feeds and higher update frequencies please look into using a delta feed setup. In some cases we're also able to prepare custom integrations for larger enterprise clients. For more information please contact our support at support@prisjakt.nu.

## Format

If possible, then use [XML](/advanced/xml/index.md) over CSV. This is because:

- XML is more well defined than csv
- XML have better tools to handle [escaping and encoding](/advanced) 
- XML is easier to read and deal with, especially when it comes to more complex list fields like [shipping](/feeds/offer/fields/shipping)
- CSVs have no end marker while an XML file have an end tag, it's therefore harder to know if a CSV have been read to the end or aborted due to network problems

## Data

- Ensure that you [escape and encode](/advanced) your data correctly or use [CDATA](/advanced/xml/index.md#use-cdata). Titles, descriptions and other fields with free text information can otherwise easily cause parsing issues
- Check your datas health by looking at the validation reports in [Prisjakt Business Center](https://support.prisjakt.nu/sv/collections/3088260-prisjakt-business-center) and try to fix all warnings in order to get the most out of our services
- Ensure that all your urls are [properly formated and encoded](/advanced/url-encode.md)

:::caution Do not enter invalid urls

If you enter wrong or invalid urls, our agents will try to retrieve your feed but eventually they will give up. Your feed will then be [automatically disabled](/policies/auto-disabling-feeds.md) and no further attempts will be made to retrieve it until you re-activate it in our [Business Center](https://support.prisjakt.nu/sv/collections/3088260-prisjakt-business-center).

:::

## Server Configuration

See our section of [web server configuration](/infrastructure/web-server-configuration.md) to properly setup your hosting for an optimal experience