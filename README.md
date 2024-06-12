# Prisjakt Feed Specification

This repository contains specifications and instructions of how to format feeds with price offerings for ingestion into [Prisjakt](https://prisjakt.nu). The
documentation is published at https://schema.prisjakt.nu

## Contribute

Feel free to contribute if you find anything that can be improved, open a pull request against this repository with you changes.

### Auto Generated Content

The following content is auto generated from our internal systems in order to keep in sync with models and a fixed structure, hence it´s not advisable to make changes to these files. If you find something that needs to be corrected in these areas, please open an issue and describe the changes you would like to see.

- [Field articles](https://github.com/Prisjakt/feed-specification/tree/master/docs/fields) in `docs/fields/*`
- [Example files](https://github.com/Prisjakt/feed-specification/tree/master/static/examples) in
  - `docs/examples/_*.mdx`
  - `static/examples/*`

## Local Development

This documentation is based on [Docusaurus](https://docusaurus.io/docs/markdown-features) head over to their documentation to see what features are supported.

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
1. Pick a good text editor like (e.g. [Visual Studio Code](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/3)) and open the folder you just cloned in it

### Edit Workflow


1. Run Local Server

    ```shell
    $ yarn start
    ```

     - Please note that the **search does not support local dev server**. To test it, make a production build and then serve the page.

1. Open the page http://localhost:3000 in your web browser 

1. [Create a branch](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) to hold your changes
   
   ```shell
   $ git checkout -b feature/fix-spelling-mistakes
   ```

1. Start editing the files in the `/docs` folder

1. Watch the content in the browser update automatically

1. Repeat until you are satisfied

1. [Commit](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits) your changes with a good [description](https://www.conventionalcommits.org/en/v1.0.0/)

    ```shell
    $ git add . # add all files
    $ git commit -m "Descriptive message that follows conventional commits standard"
    ```

1. [Push changes](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository)

    ```shell
    $ git push
    ```

1. [Create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request?tool=webui)
