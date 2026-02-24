---
title: "Smart Link"
slug: "smart-link"
sidebar_position: 15
description: "Smart Links allow you to dynamically route traffic to multiple offers(https://integr8.co/docs/articles/offer-setup/) based on a defined strategy. This guide wal"
---

## Introduction

Smart Links allow you to dynamically route traffic to multiple [offers](https://integr8.co/docs/articles/offer-setup/) based on a defined strategy. This guide walks you through creating, configuring, and managing SmartLinks via the Integr8 Tracking Platform.

## How to create a Smart Link

Navigate to the dedicated section to start setting up your first SmartLink:

* *Offers* > *Smart Links* > click **+Create** button

You'll be guided through a 3-step wizard:

### 1. General Settings

 ![smart link](https://24metrics.getoutline.com/api/attachments.redirect?id=0bd828e3-c41d-4449-9eb1-5e39b82a2da9)

* **Name**: insert a name for the link.
* **Description**: Add an optional note or identifier.
* **Tracking** **Domain**: Select the domain that will be used for the Smart Link. If not selected, the default domain will be used.
* **Publisher** **Access** and **Visibility**:
  * Public: Accessible to all publishers.
  * Private: Only visible to publishers who have access to the associated offers.
* **Activation** **Toggle**: Enable/disable the Smart Link without deleting it.
* **Tags**: Optional metadata to organize or quickly search Smart Links later.

### 2. Redirect Strategy

 ![smart link offer order](https://24metrics.getoutline.com/api/attachments.redirect?id=6d8914f8-2e4b-4813-ae7a-0ed186967790)

Choose how traffic will be distributed among the selected offers:

* **Weight**: Allocate traffic as a percentage per offer. Useful for traffic balancing and A/B testing.
* **Priority**: Rank offers by priority. The system attempts to redirect to the top offer first, then the next one if conditions aren't met (e.g., cap reached, targeting filters, [fraud rejection](https://www.24metrics.com/)).
* Click ***Select Offers*** to add multiple offers.
* Click ***Next*** to continue to step 3.

### 3. Fallback Offer (Optional but Recommended)

Since Fraud Detection, Capping, and Targeting can be set for each Offer, the system may block the click without a redirect. To handle this, you can choose an Offer without traffic restrictions as a fallback.

*Important: The fallback offer should have no restrictions to ensure a 100% redirect when needed.*   ![smartlink fallback](https://24metrics.getoutline.com/api/attachments.redirect?id=4e5658ea-c59e-41bc-9f5f-f23ac8822258)

### After Creation

Once created, the Link can be distributed to publishers. Visibility rules (Public/Private) and offer access permissions will control who can actually use it. Stats can be tracked using the dedicated report.

## General Usage & Best Practices

### What is a Smart Link?

A SmartLink is a multi-offer container URL. Instead of giving publishers multiple links for different offers, you provide a single dynamic link that routes traffic based on your chosen strategy.

Use Cases:

* Auto-optimization across high-performing offers.
* Fallback routing for fraud/cap rejections.
* Centralized link for affiliates to push multiple offers with one URL.
* Seasonal or campaign-specific clusters of offers.

Key Logic Notes:

* Offers within the SmartLink must be compatible with the publisher's permissions (esp. for Private SmartLinks).
* Redirection respects fraud rules, caps, geo/device targeting.
* If no offer is eligible for a click and no fallback is set, the click is lost.
* Smart Links are not replacements for precise targeting; they work best when all included offers can handle the same or similar traffic types.

Common pitfalls to avoid

| **Issue** | **Impact** | **Fix** |
|-------|--------|-----|
| No fallback set | Lost traffic | Always assign a fallback offer with zero restrictions. |
| Wrong redirect strategy | Sub-optimal performance | Use Weight when testing offers, Priority when you have a clear winner. |
| Private Smart Link with wrong offer permissions | Publishers see errors | Verify that publishers have access to all offers in the Smart Link. |

### Recommended Config for Most Users

* Redirect Strategy: Start with Weight for testing, move to Priority for scaling.
* Fallback: Always set one.
* Visibility: Use Private unless you're offering a general Smart Link to all publishers.
