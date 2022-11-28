# Prisjakt Feed Specification

> **Note**
> This is currently work in progress and should not be considered official until this warning have been removed.

This repository contains specifications and instructions of how to format feeds with price offerigns for ingestion into [Prisjakt](https://prisjakt.nu). The
documentation is published at https://schema.prisjakt.nu

## Contribute

Feel free to contribute if you find anything that can be improved, open a pull request against this repository with you changes.

Please not that the following content is auto generated from our internal systems in order to keep in sync with models and a fixed structure.

- field articles in `docs/fields/*`
- example files in
  - `docs/examples/_*.mdx`
  - `static/examples/*`

## Local Development

### Install Packages

```
$ yarn
```

### Run Local Server

Please note that the top right static search does not support local dev server. To test it, make a production build and then serve the page.

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.