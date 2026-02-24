---
title: "Conversion Rejection Threshold"
slug: "conversion-rejection-threshold"
sidebar_position: 11
description: "The Conversion Rejection Threshold filter in Integr8 automatically blocks clicks at the SubID level when the percentage of rejected conversions surpasses a defi"
---

## Introduction

The Conversion Rejection Threshold filter in Integr8 automatically blocks clicks at the SubID level when the percentage of rejected conversions surpasses a defined limit. This mechanism is crucial for maintaining traffic quality and preventing fraudulent activities.

## Key Configuration Parameters:

* Maximum Rejection Percentage: Specifies the highest allowable percentage of rejected conversions within a set timeframe.
* Minimum Conversions: Establishes a baseline number of conversions required before the filter activates, reducing the risk of false positives.
* Lookback Time: Determines the duration over which conversion data is analyzed to apply the filter effectively.

## Example Scenario:

If a SubID records 300 conversions with an 80% rejection rate due to issues like duplicate IPs or VPN usage, the system will block further clicks from that SubID, preventing them from reaching the advertiser.

 ![conversion rejection filter](https://24metrics.getoutline.com/api/attachments.redirect?id=d56432a9-c486-41a2-8340-7dfef7fb76a0)

## Implementation Steps:

* **Access Filter Settings**:
  * Navigate to the filter configuration section within the Integr8 platform.
* **Activate** **Filter**:
  * Activate the filter to enforce the defined thresholds, ensuring only quality traffic is forwarded to advertisers.
* **Set Rejection Threshold Percentage**:
  * The rejection percentage is calculated with *1 - ((total conversions - total rejected conversions) / total conversions) \* 100*
* **Set Parameters**:
  * Define the Maximum Rejection Percentage, Minimum Conversions Count, and Lookback Time according to your campaign requirements.

By configuring these parameters thoughtfully, you can enhance the integrity of your traffic and protect against fraudulent conversion activities.
