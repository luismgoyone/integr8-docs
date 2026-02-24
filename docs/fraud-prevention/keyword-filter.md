---
title: "Keyword Filter"
slug: "keyword-filter"
sidebar_position: 12
description: "The Keyword Filter is designed to block traffic based on specific keywords passed through URL parameters, primarily used in search traffic campaigns. This featu"
---

## Introduction

The Keyword Filter is designed to block traffic based on specific keywords passed through URL parameters, primarily used in search traffic campaigns. This feature helps protect your campaigns from unwanted, low-quality, or fraudulent traffic by automatically rejecting requests containing banned terms.

## Primary Use Case

This filter is most effective for search campaigns where the incoming traffic includes a *&keyword=VALUE* parameter. You can block traffic originating from specific search terms, such as brand bidding violations, competitor names, or blacklisted keywords.

Example:

*https://yourtrackingdomain.com/click?offer_id=123&keyword=free+trial*

If ***free trial*** is on your blocked list, the click is automatically rejected.

How It Works


1. Traffic comes in with a parameter &keyword=VALUE.
2. The system checks the value against your blocked keyword list.
3. If there's a match, the click/conversion is blocked and flagged as fraud.

 ![keyword filter](https://24metrics.getoutline.com/api/attachments.redirect?id=fbfec605-9119-4e52-a895-076b4e3b23a5)

## How to Configure


1. Go to *Offers > Fraud Detection*.
2. Select a *Filter Group* where you want to configure the filter.
3. Select ***Keyword*** filter.
4. Add one or more keywords to block. You can input full or partial keyword matches (e.g., free, cheap, trial).
5. Set the maximum number of allowed duplicates before blocking.
6. Define a *Lookback Time* in hours.
7. Define the Target Level:
   * Offer: If enabled, the duplicatyes will be rejected on Offer Level.
   * Publisher: If enabled, the filter will reject duplicates on Publisher level.
   * Offer and Publisher Level: If both options are enabled, each Publisher+Offer combination will be considered in duplicate counting.
8. Click Save.

This applies only to traffic with a ***&keyword=*** parameter. If the keyword is embedded elsewhere, this filter will not perform any check.

## Best Practices

* Update regularly: Monitor and update your blacklist according to your campaign goals.
* Combine filters: Use alongside other filters (IP, geo, etc.) for better fraud prevention.

## Why Use It?

Blocking poor-quality or fraudulent search traffic saves ad budget, protects brand integrity, and improves overall ROI. If you're running paid search campaigns, keyword filtering is non-negotiable.

Need help fine-tuning your keyword list? Contact support or check related articles on advanced filtering techniques.
