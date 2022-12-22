# ftp

We support usage of the [file transfer protocol (ftp)](https://en.wikipedia.org/wiki/File_Transfer_Protocol) for legacy compitability. We **do not** support any of the secure versions of ftp such as SFTP, FTPS etc. Instead we recommend you to use [HTTPS](http.md#use-https). We also have limited support to use [ftp credentials](/infrastructure/auth/ftp-credentials.md).

:::caution Deprecated

Ftp is limited in functionality and we support it only for legacy reasons, please use https since it enables us to use more features as mentioned on our [web server configuration page](/infrastructure/web-server-configuration.md)

:::

## References

- [RFC959 - File Transfer Protocol (FTP)](https://datatracker.ietf.org/doc/html/rfc959)