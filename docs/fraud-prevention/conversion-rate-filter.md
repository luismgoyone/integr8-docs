---
title: "Conversion Rate Filter"
slug: "conversion-rate-filter"
sidebar_position: 14
description: "The Conversion Rate Filter is a fraud prevention tool that automatically rejects conversions when a publisher's conversion rate falls outside defined thresholds"
---

## Introduction

The Conversion Rate Filter is a fraud prevention tool that automatically rejects conversions when a publisher's conversion rate falls outside defined thresholds. It operates across multiple time intervals and can block further traffic from sources exhibiting suspicious behavior.

 ![conversion rate filter](https://24metrics.getoutline.com/api/attachments.redirect?id=b0501e6e-00db-4981-b0e0-1c1f1be33ca1)

## Key Features

* Thresholds: Set minimum and maximum conversion rate limits (as percentages). Conversions outside these limits are rejected.
* Minimum Clicks: Specify the least number of clicks required before the filter evaluates conversion rates.
* Minimum Conversions: Define the minimum number of conversions needed for the filter to activate.
* Time Intervals: Apply the filter over Hourly, Daily, Weekly, or Monthly periods.
* SubID Evaluation: Optionally assess conversion rates at the SubID level for more granular control.
* Click Blocking: Automatically block clicks from publishers or specific SubIDs that breach set thresholds.

## Configuration Steps

**Access the Filter Settings**:

* Navigate to the Conversion Rate Filter section within your Integr8 dashboard.

**Define Thresholds**:

* Select the time frame for the checks: Hourly, Daily, Weekly or/and Monthly
* Low CR / High CR: Input the minimum and maximum acceptable conversion rates.
* Min. Clicks: Set the minimum number of clicks required for evaluation.
* Min. Conversions: Determine the minimum number of conversions needed to trigger the filter.

**Set Evaluation Scope**:

* Check by SubID: Enable this to evaluate conversion rates for each SubID under a publisher.

**Enable Click Blocking**:

* Block Clicks: Activate to prevent further clicks from sources that exceed defined thresholds.

### 

### Example Scenario

If you set a Low CR of 1% and a High CR of 5%, with Min. Clicks at 100 and Min. Conversions at 2:

* A publisher with 150 clicks and 1 conversion (0.67% CR) will have their conversions rejected.
* A publisher with 200 clicks and 12 conversions (6% CR) will also be rejected.
* A publisher with 120 clicks and 3 conversions (2.5% CR) will pass the filter.

### Best Practices

* Regularly review and adjust thresholds based on campaign performance and historical data.
* Use SubID evaluation to pinpoint specific traffic sources causing anomalies.
* Combine this filter with other fraud detection tools like [Session Time](https://integr8.co/docs/articles/session-time-filter/) and [Device ID](https://integr8.co/docs/articles/device-id-check/) checks for comprehensive protection.
