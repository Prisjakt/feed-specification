---
sidebar_position: 1
---

import Definition from '@site/src/components/definition';

# Terms

## Prisjakt Specific

<Definition id="term_feed" title="Feed">
    Feed is a structured file containing information about products.
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

## Ingestion Specific


<Definition id="term_nested" title="Nested">
    Fields like shipping have more complex structure to accomodate all data required to descibe them. In this case field contain internal fields that's why it's reffered as nested field (or attribute).
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

    Please see [validation severity levels](/docs/terminology/severity-levels)

</Definition>

## Technical

<Definition id="term_case_sensitive" title="Case Sensitive">
    This is the definition of the first term.
</Definition>
