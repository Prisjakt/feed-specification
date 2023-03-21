---
sidebar_position: 3
---
# Validation Severity Levels


## Offers

And offer as whole may be in **three** states


:::tip Accepted

All *supplied* fields are valid.

:::

:::caution Partially Accepted

The **offer** was accepted but *some* fields were omitted due to them being invalid. The
effect of an omitted field is different depending on which field it is.

:::

:::danger Rejected

We have a minimal set of required fields in order to show an offer on Prisjakt. If a required field
is missing, the **whole** offer will be omitted from Prisjakt.

:::

## Fields

A field is either valid, invalid or omitted. Invalid field data is always **omitted** when entering Prisjakt's datastore.

:::tip Valid

A *field* is valid if it fulfills the validation rules of the field.

:::

:::danger Invalid

A *field* is invalid if it does not fulfills the validation rules of the field.

:::

:::tip Omitted

A *field* is omitted if it is not present in offer or it is empty.

:::

### Nested Fields

Nested fields and lists may contain partially correct information, a nested field as whole:

* is considered *valid* if it fulfills the minimum requirements of the field as given by the validation rules
* is considered *invalid* if it does not fulfill the minimum requirements of the field as given by the validation rules
* is considered *omitted* if it is not present or it is empty


### Optional Fields and Severity Levels

An optional field may still be valid or invalid. If an optional field is submitted but the value is invalid, it will
be noted in the validation report and the value would be omitted. It would have the same effect as not sending the offer
at all.
