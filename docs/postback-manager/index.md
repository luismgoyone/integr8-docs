---
title: "Postback Manager"
slug: "postback-manager/index"
sidebar_position: 1
description: "affiliate postbacks(/api/attachments.redirect?id=468b06ce-a93c-4b0f-b732-d9df51ebabcf)"
---

# Using postbacks to track results

[affiliate postbacks](/api/attachments.redirect?id=468b06ce-a93c-4b0f-b732-d9df51ebabcf)

Integrating postback URLs into your affiliate marketing strategy is essential for accurate tracking and data synchronization. Here's a quick guide on postback types, setting up affiliate postbacks, utilizing postback logs, and connecting conversion data with your CRM.

## Understanding Postback Types

[Postback](https://integr8.co/docs/articles/postback-types/ "All postback types here") URLs are server-to-server requests that notify tracking platforms of specific user actions, such as:

* Impressions: When an ad is viewed.
* Clicks: When an ad is clicked.
* Conversions: When a desired action (e.g., purchase) is completed.
* Events: Subsequent actions post-conversion.

Each postback includes parameters like transaction IDs to ensure precise tracking.

## Setting Up Affiliate Postbacks

To [configure affiliate postbacks](https://integr8.co/docs/articles/affiliate-postback-setup/ "How to set an affiliate postback?"):

* Select Postback Type: Choose from click, impression, conversion, or event.
* Assign a Name: Label your postback for easy identification.
* Determine Scope: Apply the postback to specific or all offers/publishers.
* Map Parameters: Include necessary parameters, such as {external_transaction_id}.
* Set Firing Conditions: Define whether the postback fires on approved, rejected, or all conversions.
* Specify Rejection Reasons: Optionally, trigger postbacks based on specific rejection reasons.
* Configure Delay: Introduce a delay if awaiting third-party fraud checks.

For example, if using ***&external_transaction_id=AFFILI_CLICKID*** in your tracking link, the postback URL should be:

> ```
> https://affiliate-postback.com/?clickid={external_transaction_id}
> ```

## Utilizing Postback Logs

[Postback logs](https://integr8.co/docs/articles/postback-logs/ "Detailed postback logs guide") are vital for analyzing affiliate postback data. They provide:

* Firing Time: When the postback was triggered.
* Transaction ID: Unique identifier for each transaction.
* Status Codes: HTTP response codes indicating success or failure.
* Error Responses: Details on any errors encountered.

These logs can be filtered by various parameters, aiding in precise analysis and troubleshooting.

## Connecting Conversion Data with Your CRM

To [synchronize conversion with a CRM](https://integr8.co/docs/articles/connect-conversion-data-with-your-crm/ "More details") system:

* Access Postback Manager: Navigate to the Postback Manager in your platform.
* Create a New Postback: Configure it to apply to any offer or publisher.
* Enter CRM API Endpoint: Input your CRM's API URL to push relevant data.
* Map Parameters: Ensure all necessary data fields are correctly mapped.
* Test the Integration: Verify that data flows seamlessly into your CRM.

This setup ensures that leads, sales, and customer interactions are accurately tracked within your CRM, facilitating informed business decisions.

By meticulously configuring postbacks and integrating them with your CRM, you enhance the precision of your affiliate marketing efforts and streamline data management across platforms.
