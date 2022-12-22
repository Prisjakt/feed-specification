# Ftp Credentials

For legacy we support supplying credentials for ftp in the following format:

```
ftp://username:password@ftp.yourserver.com/your-feed.xml
```

:::danger Insecure

The ftp protocol is insecure in itself (even if extensions exist) and we only support supplying credentials directly in the URI. This should not be considered secure but a bere way of preventing bots and other public traffic. For better security use [https](/infrastructure/protocols/http.md) in combination with any of the [authentication methods](/infrastructure/auth) suitable for https.

:::