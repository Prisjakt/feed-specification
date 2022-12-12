---
sidebar_position: 2
---

# Formats

At Prisjakt we're able to accept product feeds in two formats. Brief introduction to both formats is presented below. We strongly recommend using XML as it has much offers much better strucutre and it's less error prone comparing to CSV.

## XML

[XML](https://en.wikipedia.org/wiki/XML) stands for e**X**tensinble **M**arkup **L**anguage. It is very similar to HTML except it doesn't have any predefined tags. In a way it's a meta languge that allows to create own markup language which then can be used to store and share data.

### Use CDATA

Using [CDATA](https://www.w3.org/TR/REC-xml/#sec-cdata-sect) is recommended as it makes easier to extract data from XML feeds. 

## CSV

[CSV](https://en.wikipedia.org/wiki/Comma-separated_values) stands for **c**omma **s**eparated **v**alues. It is a simple format very similar to spreadsheet. It should contain header and delimiter that is unique character not used anywhere in the feed content. CSV format is not fully standarized. This create all sorts of issues when working with product feeds. 
