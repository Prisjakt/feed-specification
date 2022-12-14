---
sidebar_position: 2
---

# Methods Of Delivery

There are multiple ways to get your price offerings into Prisjakt and which one you should choose depends on the size of your shop, how frequent you wan´t to update and other properties.

In general these methods can be categorized into two categories:

- **Pull based** where we fetch offers from you on regular intervals or when changes are detected
- **Push based** where you send offers to us when something changes


## Pull Based

### Feeds

A feed is a file containing the *full inventory* of your shop in it´s current state. It´s read by our agents periodically based on you SLA agreement.

#### Advantages

- Simple to setup

#### Disadvantages

- Full inventory every time
- Lots of extra unnecessary work
- Slow average time for price update (depends on SLA schedule, but in the magnitude of of hours)
- Not suitable for large volumes (> millions)

#### Flow

```mermaid
%%{init: {'theme':'neutral'}}%%
sequenceDiagram
    participant A as Prisjakt Agent
    participant F as Your Web Server

    loop Periodically according to your SLA
        A->>F: Requests Feed: <Your Feed Url>
        F->>A: Responds With Feed
        A->>A: Ingests Feed
    end
```

### Delta Feeds

Delta feeds is a way of splitting up your inventory to a base feed and then periodically supplying small files with only the changes. This improves the amount of offers and the average time for offer updates by just sending the information changed.

Delta files can be read at a higher frequency and contains offers + an `action field` for each offer that specifies if the offer should be `added/updated/removed`.

#### Advantages

- Can handle large volumes (> millions of offers)
- Average time for price update is low (< 10min)

#### Disadvantages

- Complex for to setup (requires work on webserver to produce delta files)

#### Flow

```mermaid
%%{init: {'theme':'neutral'}}%%
sequenceDiagram
    participant A as Prisjakt Agent
    participant S as Delta Scheduler
    participant F as Your Web Server

    S->>F: Requests feed list every 5 minutes: <Your Delta Base Url>
    F->>S: Responds with a list of urls 
    note over F,S: List contains multiple base urls and deltas per category. 
    note over F,S: May change between requests (delta feeds added)

    loop For each segment/main category
        alt If full read should be done
            note over S,A: Full read happens first time + every week
            S->>A: Initiates ingestion
            A->>F: Requests Feed From Base Url: <Category Base Url>
            F->>A: Responds With Feed
            A->>A: Ingests Feed
        else If delta read should be done
            S->>A: Initiates ingestion
            A->>A: Retrieves last stored delta number and timestamp
            A->>F: Requests next delta feed
            F->>A: Responds with delta feed
            A->>A: Ingests delta feed
            A->>A: Stores last ingested delta number and timestamp
            note over A: We also store a ingestion run for the delta run
        end
    end
```

### Scraping

## Push Based

:::info Proposals

Push based methods are not yet supported but are being considered, please contact us if you are interested in these ways of delivery and would like to be a pilot.

:::

### Message Based

In this approach you would send a message to us via a queue system on each change of your offers.

#### Advantages

- Direct updates of offers
- Efficient data handling (less data processed, better compression on protocols)

#### Disadvantages

- Would require deep integration with your shops system

### REST Based

In this approach you would send a REST request to us on each change of your offers.

#### Advantages

- Direct updates of offers

#### Disadvantages

- Would require deep integration with your shops system