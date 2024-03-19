---
sidebar_position: 2
---
# Url Encoding

[![What Is An Url?](@site/docs/assets/url.png)](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

URLs are complex datatypes that carry a lot of information and can be a bit hard to handle sometimes. In this article we will try to explain how to deal with some tricky but not uncommon cases. All fields that are of type URL such as the [link](/feeds/offer/fields/link) field have both [valid examples](/feeds/offer/fields/link#example-values) and [invalid examples](/feeds/offer/fields/link#error-codes) of URLs in their respective sections.

The image above is borrowed from Mozilla MDN[^1].

## Rules

Before we explain how to encode URLs, here is what we expect regarding urls:

- They **must** follow RFC3986[^2]
- They **must** be absolute (we do not accept relative urls)
- They **must** have a `scheme` (http/https)
- They **must** have an `authority` (your domain usually)
- They **must** have a `path` (a single product or image are never placed in the root of a domain)
- They *may* have `parameters` but the parameters values **must** be properly URL encoded
- They *may* have `anchors` (also called fragment) but the anchors **must** be properly URL encoded

## Encoding

In order to make a long RFC specification short, do this when passing urls to us: 

:::info TIP: Use an encoding tool

In order to test conversion and encoding you can use one of the many available online tools, one such example is [Coder´s Toolbox](https://coderstoolbox.net/string/#!encoding=url&action=encode&charset=utf_8) for encoding URL values and the [Internationalized Domain Name (IDN) Conversion Tool](https://www.verisign.com/en_US/channel-resources/domain-registry-products/idn/idn-conversion-tool/index.xhtml) for converting domain names.

:::

- Ensure that `domain` contain only ascii characters, unicode characters should be encoded[^3]
- Ensure that all `path` *sections* contain only ascii characters, unicode characters should be encoded[^4]
- Ensure that all `parameter` *keys* contain only ascii characters, unicode characters should be encoded[^4]
- Ensure that all `parameter` *values* contain only ascii characters, unicode characters should be encoded[^4]
- Ensure that all `anchor` *values* contain only ascii characters, unicode characters should be encoded[^4]



## Example

If we look at a product url like this

```
https://mittföretag.com/categories/överlevnadsutrustning/super ficklampa?strength=extra-bright!#buy—now
```

We would expect it in the format of

```
https://xn--mittfretag-icb.com/categories/%C3%B6verlevnadsutrustning/super%20ficklampa?strength=extra-bright!#buy%E2%80%94now
```


### Breakdown

In the example above the following encodings have taken place.

#### Domain name

`mittföretag.com` to `xn--mittfretag-icb.com` According to IDN[^3]

#### Path

`/categories/överlevnadsutrustning/super ficklampa` to `/categories/%C3%B6verlevnadsutrustning/super%20ficklampa` according to percent encoding[^4]

#### Parameter values

`extra-bright!` to `extra-bright!` since here is nothing to do, all characters are already plain [ascii](https://en.wikipedia.org/wiki/ASCII)

##### Do not encode parameter separators

If a questionmark `?` or an ampersand `&` are meant to separate parameters, then they should **not** be encoded. But if they are a part of the value or the parameter name, then they should be encoded. Please compare:

```
?movietitle=Godfather&rating=5 

# should be unchanged when encoded

?movietitle=Godfather&rating=5 
```

vs

```
?movietitle=Tom & Jerry&rating=5

# the ampersand in Tom & Jerry should be encoded, but not the ampersand separating the rating parameter

?movietitle=Tom%20%26%20Jerry&rating=5 
```

It is a **common mistake** to simply *encode the whole* query parameter string. Instead you should encode the *parameter names and parameter values* separately before combining them.

#### Anchor

`buy—now` to `buy%E2%80%94now` according to percent encoding, the dash is a unicode character `U+2014` called *emdash*[^4]

:::caution Invisible characters and dashes are hard
Unicode contains a lot of different representations of whitespaces, dashes and other hard-to-see-the-difference characters. But if you do url encoding programatically of everything you will ensure that things work properly.

If you suspect that any of these characters exist in your url then paste it in an encoding tool like [Coder´s Toolbox](https://coderstoolbox.net/string/#!encoding=url&action=encode&charset=utf_8) and see if it will be percent encoded.
:::

## Why So Strict?

The URLs passed in for your products will be sent to a lot of systems (ours, partners, customer devices). Some of these systems are more liberal than others in accepting unicode characters and other symbols directly (browsers are very liberal), but some are not (for example older phones). We don´t want to break the experience for any customer who is using our product in order to find your products and make a purchase. Hence we require well formed URLs that will work across the broadest range of devices and systems.

## References

[^1]: [What is an url?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL) by Mozilla Contributors is licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/)
[^2]: [RFC3986](https://www.rfc-editor.org/rfc/rfc3986)
[^3]: [Internationalizing Domain Names In Applications](https://en.wikipedia.org/wiki/Internationalized_domain_name#Internationalizing_Domain_Names_in_Applications)
[^4]: [WikiPedia: Percent Encoding](https://en.wikipedia.org/wiki/Percent-encoding)

