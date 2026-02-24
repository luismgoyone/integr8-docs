---
title: "Duplicate User Detection"
slug: "duplicate-user-detection"
sidebar_position: 2
description: "Duplicate User Detection is crucial for maintaining data integrity and preventing fraud in digital marketing. This fraud filter helps identify and block repeate"
---

## Introduction

Duplicate User Detection is crucial for maintaining data integrity and preventing fraud in digital marketing. This fraud filter helps identify and block repeated clicks and/or from the same user, ensuring accurate tracking and reporting and optimizing the ad spend.

[duplicate user detection](/api/attachments.redirect?id=7b701033-4da5-4f43-a0d4-a4819081a4a9)

## Duplicate User Detection Key Features

### Allowed Duplicates

Defines the maximum number of clicks permitted from the same user within a specified period.

### Lookback Time

Establishes the timeframe for monitoring duplicate clicks, typically ranging from a few minutes to several hours.

### Detection Levels

* Offer Level: Limits duplicates per specific offer.
* Publisher Level: Controls duplicates on a publisher basis.

[duplicate click filter](/api/attachments.redirect?id=205bdbc4-dd2a-496c-8e5e-9dd88e4ef822)

### Detection Mechanisms and Data Points

The system utilizes various data points to detect duplicates:

* IP Addresses: Both IPv4 and IPv6 are tracked.
* UUIDs: Unique user identifiers are monitored.
* Device IDs: Ensures clicks are coming from unique devices.
* User-Agent: Detects the browser and operating system used.
* Fingerprinting: Creates a [unique identifier](https://integr8.co/docs/articles/user-fingerprinting-javascript/ "Fingerprint tracking") based on multiple data points.

[  ![dedup filter](https://24metrics.getoutline.com/api/attachments.redirect?id=3f7413e0-f542-4879-b4bf-ea3fc9c26f10)](https://integr8.co/wp-content/uploads/2024/07/Dedup-Checks.png)

## Configuration Rules

* Users can define specific rules to tailor the duplicate detection process:
* Rule Creation: Custom rules can be set based on chosen data points.
* Application Levels: Rules can be applied at different levels (Offer, Publisher) to provide granular control.

## Practical Application: setting up

* Navigate to the Duplicate User Detection filter settings.
* Define the allowed number of duplicates and the lookback time.
* Select the data points to be used for detection (IP, UUID, etc.).

## Conclusion

Effective Duplicate User Detection is essential for any digital marketing strategy, especailly CPC campaigns, to maintain accuracy and prevent fraudulent activities. By leveraging comprehensive detection mechanisms and configurable rules, any can ensure reliable data and optimize their campaigns effectively.
