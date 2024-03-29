---
sidebar_position: 1
---

import Definition from '@site/src/components/definition';
import Field from '@site/docs/partials/_field.mdx';

# Terminology

## Prisjakt

<Definition id="shop" title="Shop">
    A shop is an e-commerce retailer that is selling the products defined in its Product Feed; the inventory. A shop has a primary market, typically associated with an Internet domain (e.g. amazon.se is Amazon Sweden).
</Definition>

<Definition id="feed" title="Feed">
    Feed is a structured representation of inventory information and updates. Most often represented as one or more xml or csv files.
</Definition>

<Definition id="feed" title="Promotion Feed">
    Promotion Feed is a structured representation of promotion.
</Definition>

<Definition id="offer" title="Offer">
    Offer is a set of data containing all information about product. It contains information about product itself, its price, shipping cost and delivery method.
</Definition>

<Definition id="promotion" title="Promotion">
    Promotion is a set of data containing all information about promotion.
</Definition>

<Definition id="field" title="Field">
    Field (or attribute) is a single datapoint describing one of offer's property like price, name, size etc.
</Definition>

<Definition id="price" title="Price">
    Price is the cost of the product including VAT. 
</Definition>



## Ingestion


<Definition id="nested" title="Nested">

Fields like <Field name="shipping" dir="offer" /> have more complex structure to accommodate all data required to describe them. In this case field contain internal fields that's why it's referred as nested field (or attribute).
    
</Definition>


<Definition id="repeatable" title="Repeatable">
    In some cases it's possible to repeat the same field for a single product. Each field has this defined along with maximum number of repetitions. 
</Definition>

<Definition id="agent" title="Agent">
    Agent is internal prisjakt service that integrates the data with Prisjakt comparison engine.
</Definition>


<Definition id="validation_rule" title="Validation  Rule">
    Validation rule defines what type of offers are accepted by Prisjakt Agent.
</Definition>


<Definition id="ingestion_run" title="Ingestion Run">
    Ingestion run is an event when Prisjakt's Agent processes the data.
</Definition>


<Definition id="severity" title="Severity">

Please see [validation severity levels](/reference/validation-severity-levels.md)

</Definition>

## Technical

<Definition id="case_sensitive" title="Case Sensitive">
    When a comparison between strings consider capital vs small letters to be not equal.
</Definition>
