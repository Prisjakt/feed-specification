---
sidebar_position: 1
---

import Definition from '@site/src/components/definition';

# Terms

## Prisjakt

<Definition id="term_shop" title="Shop">
    A shop is an e-commerce retailer that is selling the products defined in its Product Feed; the inventory. A shop has a primary market, typically associated with an Internet domain (e.g. amazon.se is Amazon Sweden).
</Definition>

<Definition id="term_feed" title="Feed">
    Feed is a structured representation of inventory information and updates. Most often represented as one or more xml or csv files.
</Definition>

<Definition id="term_offer" title="Offer">
    Offer is a set of data containing all information about product. It contains information about product itself, its price, shipping cost and delivery method.
</Definition>

<Definition id="term_field" title="Field">
    Field (or attribute) is a single datapoint describing one of offer's property like price, name, size etc.
</Definition>

<Definition id="term_price" title="Price">
    Price is the cost of the product including VAT. 
</Definition>



## Ingestion


<Definition id="term_nested" title="Nested">

Fields like [`shipping`](/fields/shipping.md) have more complex structure to accomodate all data required to descibe them. In this case field contain internal fields that's why it's reffered as nested field (or attribute).
    
</Definition>


<Definition id="term_repeatable" title="Repeatable">
    In some cases it's possible to repeat the same field for a single product. Each field has this defined along with maximum number of repetitions. 
</Definition>

<Definition id="term_agent" title="Agent">
    Agent is internal prisjakt service that integrates the data with Prisjakt comparison engine.
</Definition>


<Definition id="term_validation_rule" title="Validation  Rule">
    Validation rule defines what type of offers are accepted by Prisjakt Agent.
</Definition>


<Definition id="term_ingestion_run" title="Ingestion Run">
    Ingestion run is an event when Prisjakt's Agent processes the data.
</Definition>


<Definition id="term_severity" title="Severity">

Please see [validation severity levels](/terminology/severity-levels.md)

</Definition>

## Technical

<Definition id="term_case_sensitive" title="Case Sensitive">
    When a comparison between strings consider capital vs small letters to be not equal.
</Definition>
