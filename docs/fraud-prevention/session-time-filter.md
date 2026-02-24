---
title: "Session Time Filter"
slug: "session-time-filter"
sidebar_position: 13
description: "The Session Time Filter in Integr8 is a critical fraud prevention tool designed to block conversions that occur either too quickly or too slowly after a click—b"
---

## Introduction

The Session Time Filter in Integr8 is a critical fraud prevention tool designed to block conversions that occur either too quickly or too slowly after a click—both of which can indicate fraudulent activity.

## What Is Session Time?

Session time refers to the duration between a user's click on an ad and the subsequent conversion (e.g., app install or purchase). Unusually short or long session times can be red flags for fraudulent behavior, such as bots generating fake clicks or delayed conversions from cookie stuffing.

## How It Works

The Session Time Filter allows you to set thresholds to automatically reject conversions that fall outside expected timeframes.

 ![session time filter](https://24metrics.getoutline.com/api/attachments.redirect?id=2f85311a-40d8-4ffe-b56e-429873916d20)

### Configurable Parameters:

* **Minimum Session Time**: The shortest acceptable duration between click and conversion.
* **Maximum Session Time**: The longest acceptable duration between click and conversion.

Both thresholds can be defined in days, hours, minutes, and seconds, providing flexibility to tailor the filter to your specific campaign needs.

### Use Cases

* Preventing Click Injection: Block conversions that occur almost instantly after a click, which may indicate automated or fraudulent activity.
* Avoiding Cookie Stuffing: Reject conversions that happen long after the initial click, a tactic often used in cookie stuffing schemes.

### 

### Important Notes

* This filter applies only to conversions, as session time is relevant in the context of a completed action following a click.
* Ensure that your minimum and maximum session time thresholds are set based on realistic user behavior patterns to avoid false positives.

By implementing the Session Time Filter, you can enhance the integrity of your conversion data, ensuring that only legitimate user actions are recorded and rewarded. For more advanced fraud detection, consider using the [Low Session Time Anomaly](https://integr8.co/docs/articles/low-session-time-anomaly/) and/or [Click Spam](https://integr8.co/docs/articles/click-spam/) filter to analyze patterns across traffic sources and identify suspicious behavior at scale.
