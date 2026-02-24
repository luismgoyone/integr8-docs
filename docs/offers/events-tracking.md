---
title: "Events Tracking"
slug: "events-tracking"
sidebar_position: 7
description: "In Integr8, the events tracking is possible only if there is already a conversion recorded. In other words, if an offer has multiple events, the first must alwa"
---

## Introduction

In **Integr8**, the events tracking is possible ***only if there is already a conversion recorded***. In other words, if an offer has multiple events, the first must always be consider the Conversion and the following ones, Events.

An event must be created in the system and it will have its own Postback URL that is composed by the ***offer postback + &event_id= + &event_name=***

The ***Global Postback URL*** can also be used for events tracking as long as it includeds the parameters *&event_id=EVENT_ID and/or &event_name=EVENT_NAME*.

**Example**:

* **By Event ID**: https://your.domain.com/?secure=xxx\*\*&event_id=x\*\*&transaction_id=REPLACE
* **By Event Name**: https://your.domain.com/?secure=xxx\*\*&event_name=abc\*\*&transaction_id=REPLACE

***NOTE***\*:\*

* *Both parameters, name and ID, can be used at the same time as well.*
* *If only **&event_id=Value** is passed, then the value must match the Event ID created in Integr8 platform*
* *If only **&event_name=Value** is passed, the the value must match the Event Name created in Integr8 platform*

## Events setup

Go to ***Offers*** menu, select an offer and access the ***Revenue & Payouts TAB.*** then:

* Click on ***+Create*** button
* Define and ***Event Name*** (*Note: for Appsflyer events, use the same exact name passed by Appsflyer platform*)
* Define Revenue Type and Value
* Define Payout Type and Value
* Map the parameters for the Event Postback URL (use the parameters listed under the field)
* *Optionally, switch ON the option to Allow multiple events tracking with the same click id (when applied)*
* Click ***Create*** button to save the settings

*New Event Creation*   ![campaign events](https://24metrics.getoutline.com/api/attachments.redirect?id=7a392b56-eac1-4189-81aa-339154b5dba7)

[events tracking](/api/attachments.redirect?id=9b1ee100-1f28-40fc-b86f-06bf1a46e785)
