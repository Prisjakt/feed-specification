# http/https

Serving your feed via HTTPS and an URL that is accessible for our agents is the preferred method of delivery. Please see our article regarding [web server configuration](/infrastructure/web-server-configuration.md) in order to setup your server to get the best possible experience when integrating with our system.

## Use HTTPS

You should serve your feed over a https connection in order to improve security and minimize [man in the middle attacks](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) with changes to your feed. 

:::info Use valid certificates

We always validate certificates for a https connection, an invalid certificate is considered an error and will cause the ingestion to be aborted.

:::

## References

- [Wikipedia: HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
- [Wikipedia: MITM Attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack)