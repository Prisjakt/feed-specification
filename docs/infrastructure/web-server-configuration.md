---
sidebar_position: 1
---

# Web Server Configuration

For optimal results it is preferable if you host your feeds with the support for the following features and configuration, please see your web server/cloud provider documentation of how to set them up.

## Features


- **Use [gzip compression](https://en.wikipedia.org/wiki/HTTP_compression) or [brotli compression](https://en.wikipedia.org/wiki/Brotli) and send a correct compression header**, this will reduce the amount of data sent and improve handling time as well
- Ensure that you **send a correct [content-length](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length) header**, this makes it easier for us to ensure that we have ingested your whole feed and not gotten aborted by any network issues or anything similar, our retry policies will also behave better
- **Disable bot protection** for our [user agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent): `prisjakt-feed-ingestion-service`, some bot protection systems will cause issues for us when we read your feed. If possible, then allow requests from our user agent to come through

  :::info We use dynamically assigned ip´s
  We do not support a configuration where you disable bot protection for specific ip addresses. Our agents are cloud based and spin up and change after load, hence they get dynamically assigned ip addresses that vary.
  :::

- **Send a proper [etag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) header** this will save both us and you work and costs of data transfer since we can then detect if there is any changes to your feed or not without having to download it
- Use **https** with a valid certificate as transport protocol
- **Allow resuming downloads** of files by supporting the [accept-ranges](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Ranges) header

## Feed Generation

### Do

#### Controlled Generation

We recommend that you generate the files on your backend in a matter **you control**, either scheduled or upon changes to your data. Then host the resulting files via your server for us to fetch.

#### Atomic Updates

 You should update your feed in an atomic operation. This means you *should not overwrite your current feed while your are generating* as there is a small chance that we are currently reading it. You should **generate to a new file and then switch them out**.

Do this 
```bash
feed.xml
generate new feed to .new_feed.xml
mv -f .new_feed.xml feed.xml # atomic operation
```

instead of

```bash
feed.xml
generate new feed to feed.xml
```

the latter can cause problems as seen here

![Atomic Update Fail](@site/docs/assets/atomic-update-fail.png)


### Do Not

We **do not** recommend that you dynamically generate your feed on a per request basis.

The reasons for this is that:

- Over time your inventory might grow and this generation time increases
- Your system will vurnerable to DDoS attacks since it would be easy to send multiple requests to this feed generation URL
- We have a timeout of `120s`, if we do not recieve the first byte within this time period, we will abort the attempt

## Non Public Feeds

If you wan´t to avoid to publish your feeds public we do support various [authentication methods](/infrastructure/auth) in order to protect your feeds.
