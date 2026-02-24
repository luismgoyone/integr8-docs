---
title: "Data Validation"
slug: "data-validation"
sidebar_position: 8
description: "Data validation in Integr8 helps ensure incoming traffic meets your quality standards before it's recorded or attributed. You can filter out bad or suspicious d"
---

## Data Validation filter

Data validation in Integr8 helps ensure incoming traffic meets your quality standards before it's recorded or attributed. You can filter out bad or suspicious data based on specific parameters, including Advertiser, Publisher, Offer and Sub ID. This protects your ad campaigns from invalid traffic, low quality and fraud.

 ![data validation check](https://24metrics.getoutline.com/api/attachments.redirect?id=4a3b226e-a0dd-4e69-b2f5-58d6b175cc47)

## How It Works

When the Data Validation Filter is enabled, Integr8 checks each incoming event against the conditions you've set. If a parameter value doesn't meet the allowed list or matches a rejected value, that traffic is discarded.

## Supported parameters:

* Advertiser
* Publisher
* Offer
* Sub ID

Each of these can be individually configured with:

* Allowed (whitelist) values
* Blocked (blacklist) values
* Accept or Reject empty values

## Use Cases

* Block fake or unverified sources: Instantly drop traffic from unknown advertisers or publishers.
* Limit tracking to specific campaigns: Enforce attribution rules by offer ID or sub ID.
* Prevent empty or malformed data: Ensure you don't record events missing critical values.

## Best Practices

* Use whitelisting when you want to allow only specific known values.
* Use blacklisting to block suspicious or abusive sources
* Enable Reject Empty Value for fields where missing data is unacceptable.

## Conclusion

Data Validation is your first line of defense against junk traffic and broken attribution. Use it to enforce clean, trustworthy data across your entire funnel.
