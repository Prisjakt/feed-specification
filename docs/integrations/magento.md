---
sidebar_position: 2
---

# Magento 2

## Installation

1. Manual Installation:
    - Download the Prisjakt Feed Magento plugin package from the following [link](https://drive.google.com/file/d/1c14NVUL6Mit4H7yJw1A6W3H7oxx8TksW/view?usp=sharing)
    - If you encounter any issues or require assistance during the installation, please reach out to our support team at `support@prisjakt.nu`.

## Prisjakt Feed Module User Guide

This guide will walk you through creating and managing product feeds in accordance with Google's guidelines using the Prisjakt module for Magento 2.

### Features

- Automatic and manual feed generation
- Overwrite Google’s automatic categorization
- Configurable products support
- Multistore support
- Multi Source Inventory support

### 1. Accessing the Prisjakt Module

Navigate to the admin panel menu to find the Prisjakt menu. Here, you can:

- Create new feeds
- Set up category mappings
- View existing feeds and mappings

### 2. Setting Up Category Mappings

#### 2.1. Purpose of Category Mappings

These mappings help assign specific categories to the [google_product_category] attribute, allowing you to overwrite Google’s automatic categorization. [More about Google categories](https://support.google.com/merchants/answer/6324436).

#### 2.2. Creating a Category Mapping

- Navigate to Prisjakt → Create Category Mapping.
- Scope selection: Choose the store view for which the mapping is intended.
- General information: Provide a name for your mapping.
- Category mapping: Use the displayed tree to map existing categories to Google’s categories. Autocompletion aids this process.

#### 2.3. Managing Category Mappings

- Go to Prisjakt → Category Mapping List.
- View all your mappings in a grid.
- Use the “Select” button under the “Action” column to edit or delete mappings.

### 3. Generating Product Feeds

#### 3.1. Starting a New Feed

Navigate to Prisjakt → Add New Feed.

#### 3.2. Steps to Create a Product Feed

- Scope selection: Define the store view for your feed.
  
  - **Step 1: General settings:** Name your feed.
  - **Step 2: Generation settings:** Decide the frequency for feed regeneration (options: 1, 12, 24 hours).
  - **Step 3: Attribute mapping:** This step is divided into 3 areas and here you can map product attributes (3rd column) to Google attributes (1st column). You can also add prefixes and suffixes to the values of product attributes.
    - First column - contains all available Google attributes
    - Prefix - text added before product attribute value
    - Value - Magento product attributes
    - Suffix - text added after product attribute value

    In the first area there are all attributes required by Google. They will be automatically mapped to Magento attributes. They can not be removed but their mapping can be changed.

    Second area allows you to map additional product attributes to Google attributes. Some of them will be mapped automatically based on product attribute code and Google attribute code. New attributes can be added by clicking on the “Add Record” button.

    Third area allows you to add custom attributes.

- **Step 4: Category mapping** Here you can select previously created category mapping. List is filtered based on chosen store view.
- **Step 5: Filters** Last step is used to filter out products from the generated feed. They can be filtered by category, manufacturer, price and stock status.

#### Product feeds management

Created products feeds can be found in Prisjakt → Feed List. Here you can check statuses
of your created feeds. Available actions for product feeds:

- Edit - edit product feed
- Refresh - refresh feed without waiting for the next generation date
- Open - opens generated feed in a new window
- Download - downloads generated feed
- Delete - completely removes product feed and it’s generated file

### Support and Feedback

If you encounter any challenges, have questions, or wish to share insights on the WooCommerce plugin installation, don't hesitate to connect with us at `support@prisjakt.nu`.
