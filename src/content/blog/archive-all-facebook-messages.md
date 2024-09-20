---
title: Archive All Facebook Messages
layout: "/src/layouts/PostLayout.astro"
category: Code
author: guissmo
date: 2022-12-28T23:36:13+01:00
draft: false
categories:
  - Javascript
  - Productivity
description: Step-by-step guide on how to automatically archive all Facebook messages.
slug: archive-all-facebook-messages
tags:
  - facebook
  - javascript
---

## Why Archive Messenger Conversations

I've been using my email inbox as one place where I can get ideas on what needs to be done.

To keep the inbox clean, I've started archiving emails as soon as I think that I am not going to read them in the near future.

I quite appreciated the clean email inbox so I thought I should do it with Facebook messenger.

## How To Archive Messenger Conversations

I found [this Github discussion](https://gist.github.com/tedmiston/c7ac401da96b55022aaf?permalink_comment_id=3712135#gistcomment-3712135) and found it quite useful.

A quick glance on the comment does not really give you an idea on what to do with the code they posted. And the code was not even formatted properly (probably because the commenter had better things to do).

Here's the complete recipe that I use.

1. Go to https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js. Copy all the contents of the entire file.
2. Open a tab and go to [Facebook Messenger](https://messenger.com). Be sure to log-in to see your messages.
3. Open the Developer Tools by pressing F12 on the keyboard and go to the Console tab if you're not there yet.
4. Paste the code you got from Step 1 and press Enter. The console should display `true`.
5. Copy and paste the following code:

```
(
    function run() {
        let all = document.querySelectorAll('div[aria-label="Menu"]');
        if (all.length == 0) return;
        let a = all[0];
        a.click();
        setTimeout(() => {
            document.querySelectorAll('div[role=menuitem]').forEach(act => {
                if (act.innerText.match(/Archive/)) act.click();
            });
            run();
        }, 500);
    }
)();
```

6. Wait a few seconds and watch your browser automatically archive all your messages one-by-one.

## Troubleshooting

When your browser is too zoomed in, you don't even get a preview of the messages.

The above script in Step 5 wont work so you should try zooming out by pressing `Ctrl + Minus`.

I thought about how I could skip step 1 and make this a one-step script. However, the functions that allow us to fetch and import scripts on the browser via the Developer Tools console is disabled for security reasons.

I hope this little trick helps you and [let me know](mailto:blog@guissmo.com) if you found it useful or if you have any requests.
