---
sidebar_position: 1
---
# What Is a Feed?

A product feed is a way for you as a shop to give Prisjakt structured information about your inventory so that we can present you products in the best possible way on our site. Most often, a feed consists of a [single file](/types-of-feeds/pull/feed.md) in either [XML or CSV format](/types-of-feeds/pull/file-formats/index.md). But depending on the size of your inventory, the speed of updates and other more advanced features a feed can also be constructed in [other more suitable ways](/types-of-feeds/index.md).

```mermaid
%%{init: {'theme':'neutral'}}%%

flowchart LR
    s["Shop"]
    p["Prisjakt"]

    s -- feed containing inventory updates --> p
```

Please see our [quickstart](./quickstart.md) and [minimal examples](/examples/minimal.mdx) in order to create a small feed which you can add to your shop in [Business Center](https://support.prisjakt.nu/sv/collections/3088260-prisjakt-business-center).
