---
title: "Bash Commands"
layout: "../../layouts/PostLayout.astro"
author: guissmo
date: 2023-08-13T22:51:12+02:00
draft: false
toc: true
categories:
  - Quick References
slug: bash-commands
tags:
  - bash
  - commands
---

## Make a new user

- `adduser username`

## Add to sudoers file

- `usermod -aG sudo username`

## Install ssh public key

- `cat ~/.ssh/id_rsa.pub | ssh user@IP_ADDRESS "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"`

## Change hostname

```
sudo nano /etc/hostname
sudo nano /etc/hosts
```
