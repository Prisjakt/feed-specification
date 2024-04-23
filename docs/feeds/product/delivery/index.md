
# Delivery

Product feeds can be delivered to us in a the ways described below.

## Via Upload

- Create/generate a feed file
- [Request access to our API](https://anypoint.mulesoft.com/exchange/portals/schibsted-etech-1/73a598fc-e854-4cb7-bea6-a4c899c8cb73/prisjakt-feed-api/), once approved we will give your a unique identifier for your feed (feed-id)
- Use the API to upload a new version of the feed file

    ```shell
    curl -X 'POST' \                                                                                                                                                                           [17:09:11]
    'https://api.schibsted.com/prisjakt/feed-api-v4/brands/product-feeds/<your-feed-id>/upload' \
    -H 'accept: application/json' \
    -H 'Content-Type: multipart/form-data' \
    -F 'feed_file=@product-feed.xml' \
    -H 'client_id: <your-client-id>' \
    -H 'client_secret: <your-client-secret>'        
    ```    
- Benefits: 
    - You can update the feed whenever you want
    - Changes propagate fast (within minutes after upload)


## Via Our Support

- Create/generate a feed file
- Send the url to support@prisjakt.nu and we will set it up for you 
- Benefits: 
    - Simple and easy to get started
- Drawbacks: 
    - Will not auto update until you send another
    - Depending on workload of our support it can take time to set up
