---
title: "VPN & Residential Proxy Detection"
slug: "vpn-and-residential-proxy-detection"
sidebar_position: 5
description: "This filter is designed to prevent bot traffic, block fake signups and stop geo spoofing. By identifying and blocking users hiding behind VPNs, proxies, or Tor "
---

## Introduction

This filter is designed to prevent bot traffic, block fake signups and stop geo spoofing. By identifying and blocking users hiding behind VPNs, proxies, or Tor networks, you can safeguard your platform from fraudulent activities.

 ![vpn residential proxy detection](https://24metrics.getoutline.com/api/attachments.redirect?id=bd946be7-722c-4e40-9fdf-dea7d2ab5eb4)

## Why It Matters

VPNs and proxies mask user identities, enabling fraudsters to manipulate geolocation, automate fake signups, and inflate metrics. This undermines data integrity, skews analytics, and leads to financial losses.

## How It Works

Residential proxy detection is precise, activating only when a threshold is met for a specific Offer + Publisher combination, minimizing false positives.

When enabled, the filter blocks clicks, impressions, conversions, and events originating from:

* Known VPNs and proxy IPs
* Residential proxies (optional toggle)
* Suspicious behavioral patterns (e.g., rapid IP shifts, location anomalies)

## Detection Techniques

* IP Intelligence: Cross-referencing IPs against databases of anonymizers, including VPNs, proxies, and hosting providers.
* Behavioral Analysis: Monitoring for patterns indicative of automated or spoofed activity, such as rapid IP changes or multiple access points in a short timeframe.

## Benefits

* Prevents fraudulent conversions and click fraud
* Blocks geo-spoofed traffic
* Enhances data accuracy and trustworthiness
* Protects against bot-driven fake signups
