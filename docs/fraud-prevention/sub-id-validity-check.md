---
title: "Sub ID Validity Check"
slug: "sub-id-validity-check"
sidebar_position: 19
description: "The Sub ID Validity Check filter will block clicks with an invalid Sub ID (sub source) and it can be set for both clicks and conversions. The values for what yo"
---

## Introduction

The Sub ID Validity Check filter will block clicks with an invalid Sub ID (sub source) and it can be set for both clicks and conversions. The values for what you consider as valid Sub ID can be configured in the filter settings.

 ![sub id validity check](https://24metrics.getoutline.com/api/attachments.redirect?id=6450625b-6e8a-4a1a-8055-d748524adb31)

## Setup

\*\*Accept Only Numbers:\*\*Switch ON if you only want to accept numbers as sub-id.

**Minimum Length:** The minimum numbers of characters that a Sub ID should have to be accepted.

**Maximum Length:** The maximum number of characters that a Sub ID should have to be accepted.

**Max. SubIDs:** In Reports, if the number of unique sub ID has been reached, the succeeding sub IDs will be renamed as "TOO_MANY_UNIQUE_SUB_ID" and the real sub ID will be under invalid_sub_id. Set it to 0 to disable unique sub ID check.

**Unified Sub ID Name:** Clicks that have been rejected due to failed Max SubIDs number will be sent to the advertiser under a new unified SubID value defined in this field.

> NOTE: This filter is also available for conversions.
