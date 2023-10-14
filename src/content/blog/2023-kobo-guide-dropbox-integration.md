---
title: "2023 Kobo Guide - Dropbox Integration"
layout: "../../layouts/PostLayout.astro"
category: Personal Tech
author: guissmo
date: 2023-04-30T15:34:52+02:00
draft: false
toc: true
categories:
  - Kobo
description: How to unlock Kobo Dropbox integration.
slug: 2023-kobo-guide-dropbox-integration
tags:
  - kobo
  - dropbox
  - tips
---

I bought a Kobo Clara 2E and it is the sweet spot for price and features if you’re willing to be a hackermans.

## Changing firmware

I looked around online and eventually found out that delivery times take around a week. In the end, the fastest way for me to buy the Kobo was through the French store FNAC.

However, they install "Made by FNAC versions" of the Kobo. I never dared try this version, but I think the main difference is that they have a virtual bookstore different from Rakuten's default.

To change the firmware, I downloaded the appropriate firmware from [this website](https://pgaskin.net/KoboStuff/kobofirmware.html) and followed the instructions in the [MobileRead Wiki](https://wiki.mobileread.com/wiki/Kobo_Firmware) under **Sideload a Firmware**.

## Bypassing Registration and Login

Like most propreitary devices, Kobo asks you to make an account with them in order to remember your purchases.

If you don't plan to purchase books from them, you could might as well bypass the registration step and not get an account. Unfortunately, this is not as straightforward as it sounds because there is no way to skip this step without hacker skillz.

Well, not hacker skillz. Just reading comprehension skills. [Linux Magazine](https://www.linux-magazine.com/Online/Features/Basic-Hacks-for-Kobo-E-Readers) has a step-by-step way on how to do it, under **Bypassing Registration and Login**.

## Transferring Files Into The Kobo

I considered several ways to do it but I settled for simply using the Kobo Clara 2E's hidden Dropbox integration feature.

To do this, you have to install Nickelmenu, again from [pgaskin.net](https://pgaskin.net/KoboStuff/kobofirmware.html) and follow the [MobileRead Wiki](https://wiki.mobileread.com/wiki/Kobo_HowTo:_Install_a_plugin) to install the plugin.

From there, you add the following entry to the Nickelmenu:

```
menu_item:main:dropbox:nickel_open:library:dropbox
```

as written in [this post from the-ebook-reader.com](https://blog.the-ebook-reader.com/2022/06/23/how-to-add-dropbox-support-to-kobo-ereaders/).

Once that's done, access the **dropbox** entry in Nickelmenu and login with your account.

Some disadvantages of this method that I decided to live with:

1. **This method is incompatible with the Bypass Login method.** After several minutes of wondering why the Dropbox integration wont work, I finally gave in and associated my Kobo account to the device. After doing so, the Dropbox integration started working.
1. **You can't choose a folder to sync with.** It has to be this Apps/Kobo folder and I don't see an easy way to change this.
1. **It's a one-way _sync_.** I can live with that. What happens in the Kobo stays in the Kobo. I can't be bothered to seriously back everything up.

### Other ways to transfer ebooks

Of course, the most straightforward way is to simply connect the USB-C included in the box. But that's quite cumbersome.

I found two other ways to do it but I think the built-in Dropbox integration would be the most "stable" moving forward since this feature came from Kobo itself.

I did not test these but I'm including these in case the above procedure stops working in the future.

One way is via [KoboCloud](https://github.com/fsantini/KoboCloud), which supports other cloud services apart from Dropbox.

The other way is quite interesting. It uses Kobo's built-in browser. It's called [Send to Kobo/Kindle](https://send.djazz.se/) and I have not tried it. Seems reliable, although maybe a bit cumbersome but I believe it does the trick.

## Other Links

Here are some other links and references I stumbled into while looking for this solution.

- Lee Yingtong Li's blog contains several hacks beyond [bypassing login](https://www.yingtongli.me/blog/2018/07/30/kobo-rego.html).

- Some reddit threads that helped me find some of the references I found.
  - [Reddit thread 1](https://old.reddit.com/r/ereader/comments/zq4xkr/how_to_connect_to_dropbox_with_kobo_clara_2e/)
  - [Reddit thread 2](https://www.reddit.com/r/kobo/comments/txhkfa/how_to_access_native_dropbox_integration_on_all/)
