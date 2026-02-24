---
title: "Device Anomaly Detection"
slug: "device-anomaly-detection"
sidebar_position: 3
description: "The Device Anomaly Detection feature of the Integr8 Platform is designed to identify and block outdated devices to prevent fraudulent clicks and conversions. Th"
---

## Introduction

The Device Anomaly Detection feature of the Integr8 Platform is designed to identify and block outdated devices to prevent fraudulent clicks and conversions. This guide will walk you through configuring this feature effectively.

[device anomaly detection](/api/attachments.redirect?id=543a1843-406c-4079-be90-5b8f27d4e24d)

## Why Device Anomaly Detection is Important

Fraudulent clicks and conversions from outdated devices can skew your metrics and lead to inaccurate data analysis. By implementing device anomaly detection, you can enhance the integrity of your data and improve your overall fraud prevention strategy.

## Configuration Options Explained

### Threshold Percentage

Set a threshold percentage to determine at what point old devices should be blocked. This percentage represents the proportion of your total traffic that, when exceeded, triggers the blocking mechanism.

### Minimum Click Count

Define the minimum number of clicks that must be reached before the system begins rejecting clicks from outdated devices. This helps to avoid false positives and ensures that only significant traffic patterns trigger the blocking.

### Lookback Time

The lookback time parameter allows you to specify the period over which traffic is evaluated for the presence of old devices. This can be adjusted to suit the typical behavior patterns of your traffic.

### Check on SubID Level

Enable this option to conduct threshold checks at the SubID level, providing a more granular analysis of traffic sources and allowing for more precise blocking of fraudulent clicks.

### Filter by OS and Browser

Define what constitutes an outdated device by setting minimum operating system and browser versions. Traffic from devices that do not meet these minimum requirements will be considered for blocking.

 ![device fraud checks](https://24metrics.getoutline.com/api/attachments.redirect?id=656ea21c-8227-4167-95d0-c554f825458f)

## Step-by-Step Configuration

* Access Device Anomaly Detection Settings: Navigate to the settings section of the AdSecurity Platform.
* Set Threshold Percentage: Input the desired threshold percentage.
* Define Minimum Click Count: Specify the minimum number of clicks.
* Configure Lookback Time: Adjust the lookback period as needed.
* Enable SubID Level Check: Toggle the option to check at the SubID level.
* Set Minimum OS and Browser Versions: Input the minimum versions for operating systems and browsers.

## Benefits of Device Anomaly Detection

* Improved Data Accuracy: By filtering out fraudulent clicks from outdated devices, your data reflects more accurate user interactions.
* Enhanced Fraud Prevention: Proactively block fraudulent activity, reducing the risk of skewed analytics.
* Better Resource Allocation: Focus your resources on genuine traffic, improving the efficiency of your marketing efforts.

## Conclusion

Implementing device anomaly detection is a crucial step in maintaining the integrity of your data and protecting your advertising investments. By following the configuration steps outlined in this guide, you can effectively block outdated devices and prevent fraudulent clicks and conversions.
