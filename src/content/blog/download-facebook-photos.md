---
title: Download Facebook Photos
layout: "/src/layouts/PostLayout.astro"
category: Code
author: guissmo
date: 2024-01-07T16:48:22+00:00
draft: false
categories:
  - Javascript
  - Productivity
description: Step-by-step guide on how to automatically download Facebook photos.
slug: download-all-facebook-photos-from-messenger-conversation
tags:
  - facebook
  - tutorial
  - privacy
  - productivity
  - script
  - javascript
---

Here is a quick script that lets you download Facebook Messenger photos if you are on a desktop browser.

You might want to change the value of `maxIterations` depending on the number of photos you need to download. Or just leave it at $100$ and then delete the photos you don't want.

Special thanks to ChatGPT for making my two-line code become a function to help me skip all the boring stuff!

# Step-by-Step

1. Click the first photo you want to download. The script will download that photo, click next and then download the next, and so on. Until it has done it `maxIterations` times.
2. Open the Developer Tools by pressing F12 on the keyboard and go to the Console tab if you're not there yet.
3. Copy and paste the following code:

```javascript
var iteration = 0;
var maxIterations = 100;

function performIteration() {
  // Click on "Next photo"
  document.querySelector('div[aria-label="Next photo"]').click();

  // Click on "Download"
  document.querySelector('a[aria-label="Download"]').click();

  // Increment the iteration counter
  iteration++;

  // Check if we've reached the maximum iterations
  if (iteration < maxIterations) {
    // Set a timeout for the next iteration after 400ms
    setTimeout(performIteration, 400);
  }
}

// Start the loop
performIteration();
```
