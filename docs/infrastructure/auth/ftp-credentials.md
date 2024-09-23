# Ftp Credentials

For legacy we support ftp authentication. Credentials can be set in [Business Center](https://business.prisjakt.nu).

:::danger Insecure

The ftp protocol is insecure in itself (even if extensions exist). This should not be considered secure but a bere way of preventing bots and other public traffic. For better security use [https](/infrastructure/protocols/http.md) in combination with any of the [authentication methods](/infrastructure/auth) suitable for https.

:::