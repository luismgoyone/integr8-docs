---
title: "Compliance Checks"
slug: "compliance-checks"
sidebar_position: 4
description: "The Compliance Checks feature helps you automatically reject traffic from sensitive or unwanted sources. It uses AI-powered domain crawlers and keyword filters "
---

## Compliance Checks

The Compliance Checks feature helps you automatically reject traffic from sensitive or unwanted sources. It uses AI-powered domain crawlers and keyword filters to inspect referring domains and URLs for content or patterns that violate your advertising standards.

This is especially useful for blocking traffic that could damage brand reputation, violate partner requirements, or fail to comply with legal and ethical guidelines.

## What is this filter for?

Our AI-enabled crawler scans the referrer URL in real time. It checks for:

* Blacklisted content categories (e.g., adult, illegal, hate speech, P2P)
* Keyword matches in the URL
* Specific domains you want to block

This ensures your traffic comes only from approved, compliant sources.

## Block by Referrer Categories

Reject traffic based on the categorized nature of the referring domain. Our ***AI crawler*** analyzes domain content and labels it into categories.

 ![compliance checks categories](https://24metrics.getoutline.com/api/attachments.redirect?id=ec119755-d6e0-4a8d-8105-e8bf4dbf5a0a)

Categories you can block include:

* Fraud
* Drugs
* P2P/Streaming
* Hate Speech
* Adult

Once enabled, any traffic from domains matching these categories will be automatically rejected.

## Block by matching keywords

You can block traffic from specific referrer URLs by defining keywords. If any of the defined keywords are found in the referring domain's URL, the traffic is blocked.

 ![referer fraud check](https://24metrics.getoutline.com/api/attachments.redirect?id=eba0d229-2f58-4a93-875e-930338d1df04)

Example:

* Adding torrent will block traffic from https://mytorrentdomain.com
* Adding casino will block https://free-casino-games.net

***You can define up to 100 keywords in this filter.***

## Block by matching keywords groups

For large-scale blocking and easier management, use Keyword Groups:

* ***A Keyword Group is a collection of keywords (up to 10,000 entries)*** that can be managed centrally and applied across multiple filters.
* A TXT format can be uploaded containing one keyword per each line
* Maximym 10 groups can be created and used simultaneously

This is ideal if you're handling many campaigns, geos, or verticals and want unified keyword control.

 ![compliance fraud groups](https://24metrics.getoutline.com/api/attachments.redirect?id=81f0a2a5-79b1-4b05-af95-af645d2ba46a)

## Use Cases

* Prevent brand damage from non-compliant publishers
* Block fraud rings or illegal streaming traffic
* Avoid legal risks from high-risk traffic sources
* Keep affiliate traffic aligned with campaign rules

## Best Practices

* Regularly update your keyword lists and groups
* Use both category and keyword filters for maximum coverage
* Review blocked domains to fine-tune your filters
* Combine with other fraud detection features for a full protection stack
