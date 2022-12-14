---
sidebar_position: 2
---

# Methods Of Delivery

There are multiple ways to get your price offerings into Prisjakt and which one you should choose depends on the size of your shop, how frequent you wan´t to update and other properties.

In general these methods can be categorized into two categories:

- **Pull based** where we fetch offers from you on regular intervals or when changes are detected
- **Push based** where you send offers to us when something changes


## Pull Based

### Single File Full Feeds

```mermaid
%%{init: {'theme':'neutral'}}%%
sequenceDiagram
    participant BC as Prisjakt Business Center
    participant A as Prisjakt Agent
    participant F as Your Web Server
    actor Y as You

    loop Periodically according to your SLA
        A->>F: Requests Feed: <Your Feed Url>
        F->>A: Responds With Feed
        A->>A: Validates Feed
        A->>BC: Publishes Validation Report
    end

    opt In case of any issues
        BC->>Y: Alerts via email
        Y->>BC: Inspects Validation Report
        Y->>F: Corrects values
    end    
```

### Delta Feeds

### Scraping

## Push Based

:::info Proposals

Push based methods are not yet supported but considered, please contact us if you are interested in these ways of delivery.

:::

### Message Based Updates

### REST Based Updates