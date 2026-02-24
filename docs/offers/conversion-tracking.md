---
title: "Conversion Tracking"
slug: "conversion-tracking"
sidebar_position: 8
description: "When a user clicks on an advertisement, a unique transactionid is generated. This identifier is crucial for conversion tracking, allowing a conversion in Integr"
---

## Introduction

When a user clicks on an advertisement, a unique ***transaction_id*** is generated. This identifier is crucial for conversion tracking, allowing a conversion in Integr8 to be accurately linked to the originating click through a matching ***transaction_id***\*.\*

## S2S Postback URL

This method enables real-time tracking of conversions by sending server-to-server requests. It is ideal for tracking conversions that result from direct interactions on your website or app. [Read our Server Sided Tracking Guide.](https://integr8.co/knowledge/server-sided-tracking-explained)

When configuring this method, the following parameters can be included in the Postback URL to ensure comprehensive conversion data capture:

* **&secure**= *Unique security token included with the postback.*
* **&transaction_id**= *Unique id generated on click and passed via the Postback URL when a conversion is completed.*

> *Postback example:*\n***https://mef3dfl.attribution.integr8.co/?secure=zjjHkaxxxxxN95&transaction_id=REPLACE***

Additional parameters can also be included with the Postback URL as needed.

 ![conversion tracking](https://24metrics.getoutline.com/api/attachments.redirect?id=19e97a85-7164-4ba7-a874-366575263928)

## Where is the Postback URL in Integr8

There are two options available that can be used to track the conversions:


1. Global Postback URL
2. Offer level Postback URL

### 1. Global Postback URL

The Global Postback URL, unlike the Offer Postback, can be used globally with all offers. This is usually the preferd method. Follow the next steps to generate a Global Postback URL:

* From the main Menu, navigate to ***Offers*** > ***Tracking Links & Postbacks***
* Copy the URL from the section ***Conversion Global Postback***

Additionally, the URL can be configured to include additional parameters as needed.

### 2. Offer Postback URL

The URL is available in each individual offer settings under the **General TAB**. The URL will work only with that specific offer as the *&secure=xxxx* parameter is associated with each offer individually.

In order to generate an Offer Postback URL, follow the next steps:

* Navigate to ***Offers*** overview page
* Select the Offer
* In ***General TAB***, scroll down to ***Conversion Tracking*** section
* Copy the ***Postback URL*** and share it with the Advertiser

Optionally, you may add additional parameters, depending on the case.

## Clickless Conversion Postback

The Clickless Conversion Tracking Postback URL caters to scenarios where conversions occur without a directly associated click.  This flexibility ensures that conversions are accurately tracked even in the absence of a traditional click-through path. This method allows for the tracking of such conversions via a server-to-server postback, including essential parameters like:

* ```
  
  ```

&publisher=

```
* ```
&sub_id=
```

* ```
  
  ```

&session_time=

```
* ```
&conversion_ip=
```

* ```
  
  ```

&user_agent=

```
* ```
&revenue=
```

* ```
  
  ```

&payout=

```
* ```
&adv_sub_id=
```

* ```
  
  ```

&adv_sub_id_2=

```
* ```
&adv_sub_id_3=
```

* ```
  
  ```

&adv_sub_id_4=

```
* ```
&purchase_value=
```

* ```
  
  ```

&external_transaction_id=

```
* ```
&user_email=
```

* ```
  
  ```

&device_id=

```

[![clickless conversion tracking](https://24metrics.getoutline.com/api/attachments.redirect?id=a57ece20-7def-42bf-b548-708c798f2632)](https://integr8.co/wp-content/uploads/2024/08/Clickless-Postback.png)



### Image Pixel

A method that employs a small, transparent image embedded on a webpage or in an email, triggering a conversion tracking event when loaded. It required a custom tracking domain to be previously set.

[![image pixel conversion](https://24metrics.getoutline.com/api/attachments.redirect?id=191a5175-efa7-4f49-9b51-45aaabd6e950)](https://integr8.co/wp-content/uploads/2024/08/Image-Pixel-Tracking.png)



## Rejection Endpoint Postback

The endpoint ca be used by Advertisers to pass an updated status for a conversion that was already generate (*fired*). This endpoint (*postback url*), when fired, will allow the Integr8 platform to update the status of a conversion in order to match the Advertiser's data.

Example:

1. A conversion was fired as ***Approved*** and is being recorded in Integr8 platform
2. After a certain amount of time, the Advertiser invalidates the conversion and fires the ***Rejection Postback***
3. Integr8 platform will update the Status of the conversion to ***Rejected*** and will also show the advertiser's ***Rejection Reason***

![third party rejection url](https://24metrics.getoutline.com/api/attachments.redirect?id=4c73ba09-4ebe-4371-bf9e-ad8a40b71e1e)
```
