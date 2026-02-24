---
title: "Product Feeds"
slug: "product-feeds"
sidebar_position: 17
description: "The Product Feed feature in the Integr8 Ecommerce Tracking Platform(https://integr8.co/ecommerce-partner-marketing-platform/) enables advertisers to distribute "
---

## Introduction

The Product Feed feature in the [Integr8 Ecommerce Tracking Platform](https://integr8.co/ecommerce-partner-marketing-platform/) enables advertisers to distribute structured product data to affiliates (publishers) via downloadable CSV feeds and API access. This empowers affiliates to automate product listings, build affiliate storefronts, or run targeted campaigns using accurate and up-to-date data—without scraping merchant websites.

## What is a Product Feed?

In affiliate marketing, a product feed is a file (often in XML format) containing comprehensive product information, allowing affiliates to easily display and promote products on their websites or other channels. Ecommerce Advertisers provide these feeds to affiliates, enabling them to create product listings, price comparisons, and even affiliate stores, all without having to manually scrape the data from the merchant's website.

Product feeds are essential tools for affiliates to:

* Display product listings dynamically
* Create price comparison tables
* Build affiliate e-commerce experiences
* Sync product details (titles, images, prices, etc.) programmatically

## 

 ![product feeds](https://24metrics.getoutline.com/api/attachments.redirect?id=1b4236a4-4717-428a-9e88-04f894ddee53)

## Product Feeds in Integr8

Key Concepts

**One Offer, Multiple Feeds:** You can associate multiple product feeds with a single offer.

**Access Control:** Only publishers approved to run traffic on an offer can access the associated product feeds.

**CSV Format:** Product feeds are uploaded in CSV format.

Adding a Product Feed

To create a new product feed entry:

* Product Feed Name: A descriptive label for internal tracking.
* Offer Selection: Assign the feed to a specific offer using a dropdown selector.
* Start Date & End Date (Optional): Set an availability window for the feed. Feeds outside the window are considered inactive.
* CSV Upload: Upload the product feed file in CSV format.

### 

### Backend & Storage Details

Upon upload:

* Product feed metadata is saved in the database
* The CSV file is stored in Cloud Storage
* The cloud file path is recorded in the system as file_download_url

*<integr8-product-feeds-bucket>/<integrationID>/offer_<offerIncrementalID>/product_feed_<productFeedID>.csv*

## API Access for Publishers

Publishers can programmatically access product feed data through the [Integr8 API](https://publisher-api-docs.integr8.co/#tag/PublisherOffers) in three formats:

**JSON** *curl --request GET 'https://api.app.integr8.co/api/v2/offers/<offer_id>/product-feeds/<product_feed_id>/json' \\* *--header 'API-KEY: <INSERT API KEY>' \\* *--header 'Content-Type: application/json'*

**XML** *curl --request GET 'https://api.app.integr8.co/api/v2/offers/<offer_id>/product-feeds/<product_feed_id>/xml' \\* *--header 'API-KEY: <INSERT API KEY>' \\* *--header 'Content-Type: application/xml'*

**CSV** *curl --request GET 'https://api.app.integr8.co/api/v2/offers/<offer_id>/product-feeds/<product_feed_id>/csv' \\* *--header 'API-KEY: <INSERT API KEY>' \\* *--header 'Content-Type: text/csv'*

This feature streamlines the affiliate experience by ensuring clean, accurate product data is readily available. It's a must-have for scaling e-commerce and retail offers across multiple affiliate partners with minimal friction.
