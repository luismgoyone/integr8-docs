---
title: "Notifications and Alerts"
slug: "notifications-and-alerts"
sidebar_position: 2
description: "The best way to stay in control is by using a tool that automates part of the work for you. With Integr8, you can set up customized alerts and notifications to "
---

## Introduction

The best way to stay in control is by using a tool that automates part of the work for you. With Integr8, you can set up customized alerts and notifications to be automatically sent via email or a Slack channel.

## Notifications and Alerts Channel Setup

Before configuring any alert, you need to define one or more notification channels:


1. Navigate to the Alert Management menu.
2. Go to the Notification Channels tab.
3. Click +Create.
4. Define the Name and the Type.
5. Add the Email Recipient or the Slack Webhook URL, as applicable.
6. Click the Save button.

[notification channel creation](/api/attachments.redirect?id=1371b8f8-0a98-4fb1-a800-53836f20a35a)

## Steps to Set Up an Alert

### 1. Alert Type

Once notification channels are set, go to the Alerts tab and click +Create to start the setup wizard. Alerts are available for Clicks and Conversions, but each can only be set one at a time.

Available alert types include:

* High Rejection Rate
* Total Country
* Traffic Decrease
* Traffic Increase

[notifications and alerts](/api/attachments.redirect?id=3c19d9ba-5169-47d1-a08b-4f34b43afc2b)

### 2. General Settings

* Alert Name: Define the name of the alert and select the notification channel.
* Skip Resolved Notifications: Disable this option if you don't want to be notified when a previously triggered alert threshold is resolved.
* Repeat Firing Notifications: Notifications will always be sent if the evaluation threshold condition is met at every check interval. Disable this if alerts are too frequent.
* Activated: Temporarily deactivate this alert to stop sending notifications.

### 3. Alert Conditions

Configure the specific conditions for monitoring activity and triggering notifications:

* Target: Select the integration to reference for the alert (useful when multiple integrations are set).
* Offer Filters: Add Offer IDs to evaluate. If left empty, all offers will be evaluated.
* Publisher Filters: Add Publisher IDs to evaluate. If left empty, all publishers will be evaluated.
