---
sidebar_position: 12
---

import Anchor from "@site/src/components/anchor"

# General Exceptions

If there is any problem with your feed, a general exception is logged and the process will be aborted. This page clarifies what the error codes mean and some common things to investigate in order to try to fix the problem.

:::danger <Anchor id="request_error" title="request_error" />

This error code is thrown when we get a wrong http response from your web server such as

- Invalid [response code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)
- Timeouts (we have timeout limits configured so time to first byte cannot bee too long, see [web server configuration](http://localhost:3000/infrastructure/web-server-configuration#do-not))
- Other errors occuring when we make http requests to your server

:::

:::danger <Anchor id="incomplete_read_error" title="incomplete_read_error" />

Our agent was aborted while reading the feed from your web server. Please see our [web server configuration](/infrastructure/web-server-configuration) section for recommendations.
Potential things to investigate if the error is recurring is:

- Web server timeout settings
- Web server logs
- Cache configuratins
- Anti bot systems

:::

:::danger <Anchor id="run_already_started" title="run_already_started" />

This ingestion run is already running. This error might happen due to retry policies trying to start a run multiple times and you should wait for the run to complete.

:::

:::danger <Anchor id="invalid_feed_format" title="invalid_feed_format" />

The format of the feed does not match the supported format (eg. you cannot configure a feed to use our Prisjakt XML but then send a Prisjakt CSV).

:::

:::danger <Anchor id="invalid_encoding" title="invalid_encoding" />

If the encoding of the file is anything else than our [supported encodings](/advanced/encoding/file-encoding#supported-file-encodings) this error is thrown. Please see our [encoding section](/advanced/encoding/file-encoding) for details.

:::

:::danger <Anchor id="process_encoding_error" title="process_encoding_error" />

We process your feed in chunks, this error is thrown mid-processing if we are unable to decode the next chunk.

:::


:::danger <Anchor id="sample_decode_error" title="sample_decode_error" />

When reading your feed we sample some initial bytes in order to detect file encoding and csv format. If we are unable to detect the csv format during this sampling this error occurs.

:::


:::danger <Anchor id="invalid_csv_delimiter" title="invalid_csv_delimiter" />

Please refer to our [section regarding CSV files](/types-of-feeds/pull/file-formats/csv) and [escaping in CSV](/advanced/escaping/escape-csv) in order to properly construct your CSV files.

:::

:::danger <Anchor id="malformed_affiliate_link_template" title="malformed_affiliate_link_template" />

The feed configuration for affiliate link template is malformed and we are unable to render links from it. Adjust the template and re-run.

:::

:::danger <Anchor id="zero_offers_processed" title="zero_offers_processed" />

If your feed contains only contains items cannot be read, then it serves no purpose and this error is thrown. A feed must contain at least one accepted offer to be useful.

:::

:::danger <Anchor id="all_offers_rejected" title="all_offers_rejected" />

If your feed contains only rejected offers, then it serves no purpose and this error is thrown. A feed must contain at least one accepted offer to be useful.

:::

:::danger <Anchor id="invalid_xml_structure" title="invalid_xml_structure" />

We only accept valid XML syntasx, please see our [section about XML](/types-of-feeds/pull/file-formats/xml) and ensure that you are seding a correctly formated XML file. You can use different tools to validate this.

Possible things to investigate

- Is there a valiud XML header tag to start with
- Are all XML elements properly closed
- Are all XML elements properly encoded
- Are namespaces used correctly

:::

:::danger <Anchor id="offers_to_remove_above_threshold_error" title="offers_to_remove_above_threshold_error" />

This error is caused by our safeguard. To make it harder to delete the full inventory of a feed we have a safeguard setting that can be adjusted on a per feed basis. If our agent detects that it would remove more offers than this threshold then the process is aborted and this error is thrown.

:::

:::danger <Anchor id="unexpected_error" title="unexpected_error" />

If this error ever happens, please report it to support as this means we have a case that is not known by us.

:::

:::danger <Anchor id="internal_error" title="internal_error" />

An internal error code have been thrown, you do not need to do anything. We see this and we are investigating the case.

:::