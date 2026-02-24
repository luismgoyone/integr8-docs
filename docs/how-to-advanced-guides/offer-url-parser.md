---
title: "Offer URL Parser"
slug: "offer-url-parser"
sidebar_position: 3
description: "The Offer URL Parser in Integr8 automates the extraction and mapping of parameters from advertiser URLs, streamlining offer setup and ensuring accurate tracking"
---

## Introduction

The Offer URL Parser in Integr8 automates the extraction and mapping of parameters from advertiser URLs, streamlining offer setup and ensuring accurate tracking.

## Key Features

* Automated Parameter Extraction: Automatically identifies and maps parameters from advertiser URLs.
* Custom Parameter Mapping: Allows manual mapping of parameters to suit specific tracking needs.
* Fallback URL Configuration (optional): Enables setting up fallback URLs for rejected clicks.

## Setup Instructions

* Access *Offers* page
* Navigate to the *Offers* section.
* Click on *+Create* or select an existing offer to edit.

 ![offer urls parser](https://24metrics.getoutline.com/api/attachments.redirect?id=1135a90d-3c89-4736-b09c-b6e321820d2f)

Redirect Link Tab (or Landing Pages when editing existing offer):

* Set up the Preview URL.
* Insert the advertiser's Redirect URL.
* Ensure the URL includes the transaction_id parameter, e.g., &clickid={transaction_id}.

## Parameter Parsing and Mapping:

* Use the parser to automatically extract parameters from the advertiser's URL.
* Manually map any additional parameters as needed.
* After completing the setup, click Save to apply the changes

 ![tracking parameter mapping](https://24metrics.getoutline.com/api/attachments.redirect?id=5aa3d02a-ae4a-4240-97bf-7bad8f6fd136)

## Best Practices

Consistent Parameter Naming: Maintain consistent naming conventions for parameters to ensure accurate tracking. Test URLs: Use the Test Link feature to validate the tracking setup before going live.
