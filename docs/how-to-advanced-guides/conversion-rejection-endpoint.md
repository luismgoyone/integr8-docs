---
title: "Conversion Rejection Endpoint"
slug: "conversion-rejection-endpoint"
sidebar_position: 2
description: "The Third Party Conversion Rejection Endpoint allows advertisers to programmatically reject previously approved conversions or update the rejection reason using"
---

## Introduction

The ***Third Party Conversion Rejection Endpoint*** allows advertisers to programmatically reject previously approved conversions or update the rejection reason using a secure server-to-server (S2S) postback. This is typically used when advertisers detect fraudulent activity or invalid conversions either in real-time or through post-attribution analysis.

https://id.domain.com?new_rejected_reason=REPLACE_WITH_REJECTION_REASON&transaction_id=REPLACE

| Parameter | Required | Description |
|-----------|----------|-------------|
| transaction_id | Yes      | Unique ID of the conversion provided during the initial postback. |
| new_rejected_reason | Yes      | Reason provided by the advertiser for rejecting the conversion (e.g., "bot_traffic", "duplicate", "chargeback", etc.).transaction_id Unique ID of the conversion provided during the initial postback. |

## Rejection Endpoint URL

There are two types of S2S postback URLs (rejection endpoints) you can use: Global and Offer-level.

 ![conversion rejection endpoint](https://24metrics.getoutline.com/api/attachments.redirect?id=7e82326d-dd2d-4523-9dd3-d2a63e801dc3) **Offer-Level Rejection URL**


1. Navigate to the specific Offer.
2. Go to *Conversion Tracking → Rejection tab*.
3. Copy the provided URL.
4. Share this URL with the advertiser.

> ***Note***\*: This URL is valid only for the selected offer. You must generate and share a separate URL for each offer.\*

**Global Rejection URL**


1. Navigate to *Offers → Tracking Links & Postbacks → Rejection tab*.
2. Copy the global rejection URL.
3. Share this URL with the advertiser.

> ***Note***\*: This URL is valid for all offers, so there's no need to create separate URLs for each one.\*

## Behavior:

* If the conversion is currently Approved, the status will change to Rejected with the provided ***new_rejected_reason***.
* If the conversion is already Rejected, the rejection reason will be updated to the newly supplied one.
* Only conversions that were successfully tracked and attributed by the Integr8 platform can be updated using this endpoint.
* No action is taken if the ***transaction_id*** is invalid or not found.

## Use Cases:

* Fraud detection tools flag conversions after the fact (e.g., affiliate sends fake traffic).
* Payment processors report chargebacks post-conversion.
* Behavioral anomalies are detected requiring rejection.

## Security best practice:

Only share the endpoint with trusted advertisers. Ensure all traffic to the endpoint uses HTTPS. Rate-limit and log access for monitoring misuse.
