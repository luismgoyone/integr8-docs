---
title: "Offer Setup"
slug: "offer-setup"
sidebar_position: 3
description: "To start with the offer setup, follow the next steps:"
---

## Introduction

To start with the offer setup, follow the next steps:

* Navigate to the ***Offers*** section from the main menu.
* Click on the "***+ Create***" button.

## General Tab


1. Fill in the Name field.
2. Select the Advertiser related to the offer from the dropdown menu
3. Enter a description (optional)
4. Select the default domain, if available (optional)
5. Select or create TAGs related to the offer (recommended)

 ![offer setup](https://24metrics.getoutline.com/api/attachments.redirect?id=84a95912-7a29-4fab-8f67-da5865ab235d)

## Redirect Link

* Set up the Preview URL
* Insert and map the offer redirect URL with the necessary parameters. The ***transaction_id*** parameter setup is mandatory - *example: &clickid={transaction_id}*
* Define and map a fallback URL where rejected cicks can be redirected (optional).

 ![offer url parameters](https://24metrics.getoutline.com/api/attachments.redirect?id=c7ddc47f-d030-4c00-ae9e-ee3339aa34b7)

## Offer Revenue and Payout (Conversion/Install)

* **Initial Conversion Name**: Define a name for the Conversion (*example: install or signup*). It's optional unless you need to track Conversions based on event name, for example, for Appsflyer mobile offers.
* **Currency**: Select Currency
* **Payout** **and** **Revenue**: Define the payout and revenue type and value
* **Allow Multiple Conversions**: this option will allow multiple Conversions with the same Transaction_ID to be recorded. If disabled, only the first Conversion will be recorded, any additional conversions with the same ID will be blocked and not recorded in the system.
* **Manually Accept Conversions**: If enabled, the conversions will be marked as Pending and will have to be manually approved in the Reports page.

 ![revenue payout](https://24metrics.getoutline.com/api/attachments.redirect?id=9008243f-bf1e-4f92-af06-9e05dc114225)

## Additional settings

**Publisher Access and Visibility**


1. **Public**: Offer can be used by all Publishers
2. **Private**: Offer can only be used by selected Publishers
3. **Public + Requires Approval**: Publicly visible but Publishers must request access to this Offer

**Enable Terms & Conditions**

* If set, the Publisher must agree to the T&C before he can use this Offer

**Enable Deep Linking**

* When enabled, Publishers can override the Offer redirect URL with redirect_url parameter.

**Enabled View Through Impression Tracking**

* If enabled, Impressions will be used as the first option for creating attributed conversions.

**Enable Impression Forwarding**

* If enabled, each Impression will trigger a server side call to the Impression Forwarding URL

 ![offer visibility setup](https://24metrics.getoutline.com/api/attachments.redirect?id=0a9a0476-55df-4242-b42d-2a1b1122e6f1)

Once the offer setup is complete and saved, you may define the [Targeting](https://integr8.co/docs/articles/offer-targeting/) and [Cappings](https://integr8.co/docs/articles/offer-cappings/). Any offer setup can be edited at any given moment.
