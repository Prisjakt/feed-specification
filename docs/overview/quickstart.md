---
sidebar_position: 3
---

# Quickstart

In this section we will walk you through setting up delivery of some offers to us in a simplified manner. This is intended to get you aquainted with terminology and our process.

:::info Quickstart is not best practice

This is one of the simplest and quickest ways to get results from our feeds, but it´s not the way we [recommend](/overview/best-practices) you to do it!
:::
## Steps

1. Right click  [this link](pathname:///examples/min-sample.csv) and choose **Save Link As** to get the minimal CSV file example

2. [Import](https://support.google.com/docs/answer/40608?hl=en&co=GENIE.Platform%3DDesktop) into a Google Spreadsheet by uploading the CSV file you just downloaded
   
   ![Import into Google SpreadSheet](@site/docs/assets/guides/quickstart/google-spreadsheet-import.png)
   
3. Add your [offers](/terminology/terms#term_offer) on new rows

   ![Add offers](@site/docs/assets/guides/quickstart/google-spreadsheet-add-products.png)


4. [Make the spreadsheet accessible for everyone](https://support.google.com/docs/answer/183965?hl=en&co=GENIE.Platform%3DDesktop) the **public** URL of the spreadsheet

    ![Make the spreadsheet accessible for everyone](@site/docs/assets/guides/quickstart/google-spreadsheet-share.png)

   You now have a publically hosted spreadsheet with your offers!

5. Get a **CSV export of your spreadsheet** by changing the spreadsheet URL

   Copy your spreadsheet URL, it should look similar to this
   
   ```
   https://docs.google.com/spreadsheets/d/1sny8zoEuBKCdUkn88ay6kB3gjvH0RBQZo6fGXnS542c/
   ```

   Append the following to the end of your url to create a csv export URL
   
   ```
   gviz/tq?tqx=out:csv
   ``` 

   Result

   ```
   https://docs.google.com/spreadsheets/d/1sny8zoEuBKCdUkn88ay6kB3gjvH0RBQZo6fGXnS542c/gviz/tq?tqx=out:csv
   ```

6. **Add the resulting URL** from step 5 to [Business Center](https://support.prisjakt.nu/en/articles/6175300-manage-product-feeds-in-business-center) and use it as feed url
7. **Wait** until an ingestion run have taken place (usually a couple of minutes)
8. **Done**, your offers will be available on https://prisjakt.nu shortly!
