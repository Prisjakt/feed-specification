# Feeds

```mdx-code-block
import DocCardList from '@theme/DocCardList';

<DocCardList />
```

We support feeds for different types of entities that can be used to integrate with us. 

- **Offer feed** is the most common feed type, compatible with Google Merchant Feed and is the way shops provide us with prices and stock status.
- **Promotion feed** is a way for shops to automate promotion campaigns through us. Visible at [the promotions page](https://prisjakt.nu/kampanjer).
- **Product feed** is intended for manufacturers who wants to provide us with detailed product information of the products they create.

The flow of the feeds is a simple polling mechanism where you provide us with a URL to your feed and we will poll it according to your SLA.

```mermaid
%%{init: {'theme':'neutral'}}%%
sequenceDiagram
    participant A as Prisjakt Agent
    participant F as Your Web Server

    loop Periodically according to your SLA
        A->>F: Requests Feed: <Your Feed Url>
        F->>A: Responds With Feed
        A->>A: Ingests Feed Data
    end
```
