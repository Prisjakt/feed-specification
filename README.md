# Prisjakt Feed Specification

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

### First Time Setup

Here is a first time setup guide.

1. Install [git](https://git-scm.com/downloads)
   
1. Install [nodejs](https://nodejs.org/en/download/)
   
   - Installation might require a restart of your terminal/apps to pick up the commands on path

1. Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

    ```shell
    $ npm install --global yarn
    ```
1. Clone the repository to your computer
   
    ```shell
    git clone https://github.com/Prisjakt/feed-specification.git
    ```

1. In the folder you checked out, install the packages with yarn

    ```shell
    $ yarn
    ```
1. Pick a good text editor like (eg. [Visual Studio Code](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/3)) and open the folder you just cloned in it

### Edit Workflow


1. Run Local Server

    ```shell
    $ yarn start
    ```

     - Please note that the **search does not support local dev server**. To test it, make a production build and then serve the page.

1. Open the page http://localhost:3000 in your web browser 

1. Start editing the files in the `/docs` folder

1. Watch the content in the browser update automatically
