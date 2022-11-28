# Prisjakt Feed Specification

> **Note**
> This is currently work in progress and **should not be considered official and live** until this note is removed

This repository contains specifications and instructions of how to format feeds with price offerigns for ingestion into [Prisjakt](https://prisjakt.nu). The
documentation is published at https://schema.prisjakt.nu

## Contribute

Feel free to contribute if you find anything that can be improved, open a pull request against this repository with you changes.

### Auto Generated Content

The following content is auto generated from our internal systems in order to keep in sync with models and a fixed structure, hence it´s not advicable to make changes to these files. If you find something that needs to be corrected in these areas, please open an issue and describe the changes you would like to see.

- [Field articles](https://github.com/Prisjakt/feed-specification/tree/master/docs/fields) in `docs/fields/*`
- [Example files](https://github.com/Prisjakt/feed-specification/tree/master/static/examples) in
  - `docs/examples/_*.mdx`
  - `static/examples/*`

## Local Development

### Install Packages

```shell
$ yarn
```

### Run Local Server

Please note that the top right static search does not support local dev server. To test it, make a production build and then serve the page.

```shell
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```shell
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.