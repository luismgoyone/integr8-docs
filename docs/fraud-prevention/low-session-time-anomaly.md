---
title: "Low Session Time Anomaly"
slug: "low-session-time-anomaly"
sidebar_position: 17
description: "This Low Session Time Anomaly filter helps prevent fraud by blocking conversions that occur too quickly after a click."
---

## Introduction

This Low Session Time Anomaly filter helps prevent fraud by blocking conversions that occur too quickly after a click.

These fast conversions - referred to as having a "short session time" - are often indicators of suspicious, incentivized traffic or non-human activity.

The system uses a dynamic threshold to decide when to start rejecting such conversions.

 ![low session time anomaly](https://24metrics.getoutline.com/api/attachments.redirect?id=5f807d71-f3a3-4599-9ae0-d5184fd60b46)

## How It Works

When enabled, the filter continuously monitors traffic for patterns of unusually fast conversions. Once a certain level of this behavior is detected across your traffic, the filter begins to automatically block conversions that fall below an acceptable session time.

The filter adapts over time by analyzing recent traffic patterns and adjusting its sensitivity accordingly. It evaluates this behavior at a granular level, such as per Sub ID, to ensure accuracy and fairness.

## User Controls

You can enable or disable this filter. When enabled, the system handles all threshold calculations and session time evaluations in the background, no manual tuning is required. The goal is to give you better protection against short-session fraud with minimal effort.
