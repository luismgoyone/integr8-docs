---
title: "Affiliate Postback Setup"
slug: "affiliate-postback-setup"
sidebar_position: 3
description: "Integr8 tracking platform offers the possibility to send Postbacks to third party systems as well. When you integrate conversion screening, the system allows yo"
---

## Introduction

Integr8 tracking platform offers the possibility to send Postbacks to third party systems as well. When you integrate conversion screening, the system allows you to set and fire an affiliate postback based on conversion status (approved, rejected or both) and/or based on the specific rejection reason as well.

## Setup

The settings are user-friendly and will allow you to apply the postback on any offer/publisher or on specific offers and/or publishers only.

Start the setup with the next steps:

* Navigate to ***Postbacks*** menu
* Click ***+Create*** button
* Select the ***postback type*** to create (*by default, Conversins is pre-selected*)

 ![affiliate postback](https://24metrics.getoutline.com/api/attachments.redirect?id=aa91e22e-65f2-4542-b5c2-a92d72938a2e)

* Assign a Name for the postback
* Select to apply the postback on specific offer and publisher or apply on all by turning on the switch to ***Any***
* Map the postback URL with the requested parameters. The Affiliate CLICKID parameter should be mapped with the same parameter used in the Tracking Link. By default, Integr8 recommends to always use ***external_transaction_id*** for easier management.

 ![rejection status](https://24metrics.getoutline.com/api/attachments.redirect?id=cef22628-12b3-40ff-aff3-8e3846c8b1bd)

## URL mapping

The different affiliate [postback types](https://integr8.co/docs/postback-types/ "Types of postback settings") (*click, conversion and post-conversion events*) can be mapped with a wide range of parameters including "status" and "rejection reason", external_transaction_id, etc. The affiliate postback must always include its unique converson id (e.g. clickid) generated with the tracking link.

**Example**: If the tracking link was generated using ***&external_transaction_id=AFFILI_CLICKID*** parameter, then the postback format will be set as:

* *https://affiliate-postback.com/?**clickid={external_transaction_id}***

Additional parameters can be added as needed using the ***Add MACROS to URL*** field.

## Firing Status

There are 3 options for firing the postback:

* for any conversion (*both approved and rejected*)
* for approved conversions only (recommended)
* for rejected conversion only

 ![postback firing status](https://24metrics.getoutline.com/api/attachments.redirect?id=e250dd9d-e555-4f9c-a87b-4051e0207ceb)

## Fire by Selective Rejected Reasons

The affiliate postback can be set to fire for rejected conversions with a specific rejection reasons. For example, the postback is set to fire on Rejected status so in this case it will fire only Rejected conversions. Additionally, only specific rejections reasons can be selected to be included with the postback.

 ![postback rejection reason](https://24metrics.getoutline.com/api/attachments.redirect?id=62583820-39f9-4fbf-a45a-5c3efe38cd47)

## Postback Delay

There is also the possibility to set a delay for firing the postback while waiting for a response for fraud-check from a third party platform (Appsflyer, Internal checks, etc):

* The delay can be set as a specific number of seconds, minutes or hours with a ***minimum default time of 2 minutes***.

 ![postback firing delay](https://24metrics.getoutline.com/api/attachments.redirect?id=ac6d9f4c-4a19-4494-8e03-de79e8aec495)
