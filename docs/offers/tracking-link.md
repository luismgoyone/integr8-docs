---
title: "Tracking Link"
slug: "tracking-link"
sidebar_position: 9
description: "Tracking affiliate links are essential for monitoring the performance of your marketing campaigns. This guide provides a comprehensive step-by-step process to g"
---

## Introduction

Tracking affiliate links are essential for monitoring the performance of your marketing campaigns. This guide provides a comprehensive step-by-step process to generate a tracking link using the Integr8 platform. By following these instructions, you can easily create and customize tracking links for your offers, ensuring accurate tracking and reporting of your campaign metrics.

## Tracking link types

* ***Standard tracking link*** - common use for all cases
* ***[JavaScript tracking link](https://integr8.co/docs/articles/user-fingerprinting-javascript/ "Why is it better?")*** - common use, it adds Fingerprinting and UUID for better screening with the fraud filters.
* ***Test Link*** - used for testing the setup before going live. It ignores any targeting or capping settings.

 ![tracking affiliate links](https://24metrics.getoutline.com/api/attachments.redirect?id=c8124e8c-c642-41ca-b787-3e9722e3cd66)

## Affiliate click_id mapping

When generating tracking affiliate links,  **Integr8** recommends to use the parameter ***&external_transacton_id*** for the affiliate unique conversion id (click_id). This value will then be used in Postback Manager to fire the affiliate postback when a conversion or event is recorded.

```
Example:
https://tracking.yourdomain.com?offer=1&publisher=1&sub_id=1&external_transaction_id=PUBLISHER_CLICKID_HERE
```

## How to Generate a Tracking Link

### 1. Generate a Tracking Link from Overview Page

* Go to the ***Offers*** page and click Generate Tracking Links available icon
* Select the ***Publisher***.
* Define a ***Sub_ID*** (optional but recommended).
* Define a ***Landing Page*** (*optional, if not selected, the default one will be used*).
* Select a ***Domain*** (*default integration domain will be used if none is selected*).
* Add the parameter ***&external_transaction_id=AFFILIATE_CLICKID***
* Add additional parameters if needed by clicking the available options.
* Copy and share the generated tracking link with the affiliate.

> **NOTE**: Using a Javascript link instead of the Standard tracking affiliate links, will allow to also collect a Fingerprint as well with each click for a more advanced fraud detection. Besideds user fingerprintg, there's no other difference between Standard and Javascript tracking link.

 ![campaign tracking](https://24metrics.getoutline.com/api/attachments.redirect?id=a800009a-643c-4f3b-acec-e72485ef9d96)

### 2. Generate a Tracking Link from Offer Settings

* Go to the ***Offers*** menu.
* Select an offer.
* Edit the ***Tracking Link Generator TAB*** by following the same steps described at step 1:
  * Select Link Type (*Standard, Javascript with Fingerprinting or Test Link*)
  * Select ***Publisher***
  * Define a ***Sub_ID***
  * Define a ***Landing Page*** (optional)
  * Select ***Domain*** (*default domain is used if none selected*)
  * Add ***&external_transaction_id=AFFILIATE_CLICKID***
  * Add additional parameters as needed.

[click fnigerprint](/api/attachments.redirect?id=7aac8c9f-1ebf-4993-8b98-ac4dda6c06db)
