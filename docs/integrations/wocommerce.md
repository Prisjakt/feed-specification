---
sidebar_position: 1
---

# Woocommerce

Prisjakt Feed Plugin User Guide

This guide provides detailed instructions on how to install and utilize our WooCommerce plugin to generate product feeds.

## Installation

1. Installation via WordPress Marketplace:
   - Navigate to your WordPress dashboard.
   - Go to Plugins > Add New.
   - Search for `Prisjakt Feed`.
   - Click `Install Now`.
   - Once installed, click `Activate`.

1. Manual Installation:
    - Download the Prisjakt Feed WooCommerce plugin package from the following [link](https://drive.google.com/file/d/1ipUSYpsvzPXeoy6oNM-wKEdlN554lVpW/view?usp=drive_link)
    - Navigate to your WordPress dashboard.
    - Go to Plugins > Add New.
    - Click on `Upload Plugin`.
    - Choose the downloaded plugin package and click `Install Now`.
    - Once installed, click `Activate`.

## Using the Plugin

### All Feeds Page

This page lists all your feeds. Remember to refresh the page in the feed list view to view the progress of feed generation.

1. Columns
    - Active: Toggle this to allow/disallow automatic feed generation via system cron.
    - Product feed name: Displays the feed title.
    - Refresh interval: Choose between 24h, 12h, and 1h for feed data generation.
    - Status: Indicates the current status of the feed.
    - Products: Number of products in the feed.
    - Progress: Displays the feed generation process percentage.
    - Generated At: Date of the feed generation completion.
    - Scheduled At: Next scheduled date for feed generation.
    - Date: Date when the feed settings were created.

1. Row Actions
    - Edit: Modify the feed settings.
    - Trash: Move the feed to the trash and disable its active status.
    - Download feed: Download the XML version of the feed.
    - Refresh feed: Manually initiate feed generation.
    - Restore: Restore a trashed feed. Remember to re-enable active status.
    - Delete Permanently: Completely remove the feed settings and the XML file.

### Adding New Feed

1. Generating Feed

   - Name: Define a name for the feed.
   - Refresh interval: Schedule feed generation for every 24h, 12h, or 1h.

1. Feed Mapping

    Map your product attributes to the Prisjakt shopping attributes.

    - Prisjakt shopping attributes: Lists the Prisjakt attributes.
    - Prefix/Suffix: Add a value before or after the actual value.
    - Value: Fetches data from product details.

    Actions

    - Add Field Mapping: Add fields from a predefined list.
    - Add Custom Field: Define custom fields.

1. Feed Filters

    Fine-tune the products you want in your feed using filters.

    - If: Select the attribute for filtering.
    - Condition: Define conditions like contains, equals, etc.
    - Value: Set the desired value for the condition.

    Actions

    - Add Filter: Introduce new conditions for filtering products.

1. Category Mapping

    Map your product categories with Google categories for better alignment.

## Settings

1. Plugin settings
   - Customize global settings of the plugin.
1. Extra fields
   - Introduce additional fields in the product edit view, like prisjakt_id. This works for both simple and variable products.
1. Plugin System Check
   - Review system requirements and make any necessary improvements to your server as per the suggestions.

## Support and Feedback

If you encounter any challenges, have questions, or wish to share insights on the WooCommerce plugin installation, don't hesitate to connect with us at `support@prisjakt.nu`.
