---
title: "Third Party Rejection"
slug: "third-party-rejection"
sidebar_position: 15
description: "The Third Party Rejection feature in Integr8 allows advertisers to automatically reject conversions flagged by external systems (e.g., fraud detection tools, CR"
---

## Introduction

The Third Party Rejection feature in Integr8 allows advertisers to automatically reject conversions flagged by external systems (e.g., fraud detection tools, CRMs, or internal QA processes). By integrating rejection feedback directly into your tracking workflow, you can ensure cleaner data, better partner accountability, and more effective fraud prevention.

## How It Works

When an advertiser or third-party system identifies a conversion as invalid, due to reasons like bot traffic, duplicate installs, or emulated devices, they can pass that rejection reason back to Integr8 via the postback URL. Integr8 then automatically marks the conversion as rejected and logs the specific reason for transparency and reporting.

## Setup Instructions

### Step 1: Add the Rejection Parameter to the Postback URL

 ![third party rejection](https://24metrics.getoutline.com/api/attachments.redirect?id=3c487090-9c6e-4b23-9e27-e890051fded3)

In your Offer or [Global Postback URL](https://integr8.co/docs/articles/conversion-tracking/), include the following parameter:

> *&third_party_rejected_reason=REJECTION_REASON_MACRO*

Replace REJECTION_REASON_MACRO with the appropriate macro from your third-party system that returns the rejection reason. For example, if your system uses {rejection_reason}, the parameter would be:

> *&third_party_rejected_reason={rejection_reason}*

This setup ensures that any rejection reason provided by the third party is captured and processed by Integr8.

### Step 2: Configure the Filter Settings in Integr8

 ![advertiser rejection filter](https://24metrics.getoutline.com/api/attachments.redirect?id=dbd7b43b-0f18-4f70-a0d0-4fd173ca8ff5)

* Navigate to the *Offers* > *Fraud Detection Groups* section in your Integr8 dashboard.
* Select the specific Filter Group you want to configure.
* Go to the Conversion tab within the filter group settings settings.
* Enable the *Third Party Rejection* filter.

This configuration ensures that Integr8 processes the third_party_rejected_reason parameter and appropriately flags conversions as rejected based on the provided reason.

## Best Practices

Standardize Rejection Reasons:

* Work with your third-party systems to ensure consistent naming conventions for rejection reasons. This standardization facilitates easier reporting and analysis.

Monitor Rejection Trends:

* Regularly review rejection reasons to identify patterns, such as specific publishers or traffic sources contributing to high rejection rates.

Integrate with [Alerts](https://integr8.co/docs/articles/notification-alerts/):

* Utilize Integr8's [Rejection Rate Alert](https://integr8.co/docs/articles/rejection-rate-alert/) feature to receive notifications when rejection rates exceed predefined thresholds, allowing for proactive management.

## Conclusion

Implementing the Third Party Rejection feature in Integr8 enhances your ability to maintain data integrity and optimize affiliate performance. By automating the rejection process and integrating feedback from external systems, you can more effectively manage traffic quality and protect your marketing investments. For further assistance or to explore advanced configurations, refer to the Integr8 Documentation or contact the support team.
