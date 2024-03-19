---
sidebar_position: 2
---

# Deprecation Policy

While we do our best to keep these specifications and behaviours as stable as possible one cannot ignore the fact that the world is constantly changing. We are are adding new features and sometimes we do need to change how we receive parameters.

Whenever we do changes, we note these changes in the [changelog of each individual field](/feeds/offer/fields/availability.md#changelog), we follow the format of [keep a changelog](https://keepachangelog.com/en/1.0.0/) and the notation contains the following types of changes:

- <span class={`cl-pill cl-added`}>added</span> for new features.
- <span class={`cl-pill cl-changed`}>changed</span> for changes in existing functionality.
- <span class={`cl-pill cl-deprecated`}>deprecated</span> for soon-to-be removed features.
- <span class={`cl-pill cl-removed`}>removed</span> for now removed features.
- <span class={`cl-pill cl-fixed`}>fixed</span> for any bug fixes.
- <span class={`cl-pill cl-security`}>security</span> in case of vulnerabilities.

## Communication Time

- When we change or remove existing functionality we will mark this change as deprecated in the field changelog **1 month in advance**
- After **1 month** we will release the changes and they will have effect on your data at the next ingestion run