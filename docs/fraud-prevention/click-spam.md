---
title: "Click Spam"
slug: "click-spam"
sidebar_position: 18
description: "The Click Spam filter detects and rejects conversions when the majority of the traffic has long session times. Often also known as Cookie Dropping. Useful when "
---

## Introduction

The Click Spam filter detects and rejects conversions when the majority of the traffic has long session times. Often also known as Cookie Dropping. Useful when running eCommerce campaigns or Mobile App installs.  The long tail can be identified automatically when a majority of the purchases / users have a clear Click to Conversion Time outlier.

 ![Cookie Dropping Detection explained](https://24metrics.getoutline.com/api/attachments.redirect?id=8bb23552-92db-44c4-a309-d02fad4db538)

## Setup / Configuration.

Detected conversions from sources with higher than normal Click to Conversion times will be blocked once they exceed the on the following settings:

 ![click spam](https://24metrics.getoutline.com/api/attachments.redirect?id=9e37856d-6543-4a29-a8ec-ac07a9795bc2)

To prevent any false flaggings we apply minimum thresholds and we have configuration presets for Ecommerce / Mobile App Installs.

* Threshold percentage (%)
* Minimum conversion count
* Maximum session time allowed in hours
* Lookback Time from 12 hours up to 30 days

The checks can be applied by Sub_ID as well. The filter allows different setup combinations that can be defined by additional rules.
