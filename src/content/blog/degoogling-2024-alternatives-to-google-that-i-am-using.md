---
title: "DeGoogling 2024: Alternatives to Google That I'm using"
layout: "/src/layouts/PostLayout.astro"
category: Stuff I Use
author: guissmo
date: 2024-06-09T09:18:14+00:00
description: I list down good not-so-expensive paid services such as Kagi, Immich, and Mailbox.org, that I use to make my life less dependent on Google.
slug: degoogling-2024-alternatives-to-google-that-i-am-using
math: true
tags:
  - google
  - degoogle
  - productivity
  - privacy
  - use
  - experience
  - story
  - immich
  - mailbox.org
  - kagi
  - open-source
---

Moving away from Google services has been a long-term goal of mine and it has been a slow and steady process doing so.

Having most of my online services with one and only one company who has since decided that _Don't be evil_ shouldn't be their motto anymore seemed like a bad idea. However, the problem is that I have had emails, photos, and even maps data that has accumulated throughout the years which makes switching out completely nontrivial.

I have been slowly moving from one service to another to replace most of the Google services I depend on. I have done extensive research and I chose based on:

- cost, given that most of these services will be subscription-based,
- ease of transitioning in and ease of transitioning out, in case that the company tries to change their terms of service, and
- overall feel of the company or organization offering the service.

## Photos (Immich)

Photos was a huge difficult one for me, being someone who likes to preserve them as much as possible (especially just after my [2024 Eurotrip](https://guissmo.com/blog/eurotrip-2024-part-1-planning-planes-trains-and-hotels/)).

Google Photos offers me everything I want -- except one thing: privacy. When they rolled out face recognition on my photos, I thought great! It was easier to search through it. But I am not sure if they are using the faces of my friends and family in order to train whatever AI model that they will eventually charge for.

Plus the fact that there is some degree of difficulty to migrate out of it and the fact that they don't keep filenames and that they could charge higher at any time.

### Cost

After asking [Tildes](https://tildes.net) for suggestions based on the features I was looking for, the thread ended up recommending **[Immich](https://immich.app/)**, an open-source photo management software.

I have tried Immich before on my laptop just to see how well it works. I thought to try it on my Raspberry Pi 3. I quickly realized however, that I needed a beefier server to run it because my biggest requested feature is face recognition. And since I want that to be **as private as possible**, I need to host it myself.

So, from my small IONOS VPS with 2 cores and 2 GB RAM would not be able to host this website and do face recognitions at the same time. So, I had to upgrade to a large [IONOS VPS](https://www.ionos.fr/serveurs/vps) with 4 cores, 8 GB RAM and 240 GB storage to be able to install **Immich**. 8 GB RAM is indeed above its minimum requirements, but I have a lot of photos and migrating takes some time and effort, so let's go for it now.

From approximately $5$ euros per month, I think the new price will be **15 euros per month**. Which is a huge ask. But given that this server basically hosts my whole online presence: my website, the [Hot or Not game](https://hotornot.guissmo.com/) that my former manager liked a lot, plus a bunch of other stuff.

I am effectively adding $10$ euros per month to host Immich on a paid VPS. It might be a bit expensive for a solution based on open-source software but the fact that the RAM of my server is higher now means that I can now bring back the highly unoptimized resource-heavy [Own A Prime](https://primecert.guissmo.com) app that I temporarily disabled because [the PARI/GP installation](https://guissmo.com/blog/installing-pari-gp-2023/) via Docker crashes on the 2 GB RAM VPS.

### Features

Here are some features that convinced me to go for Immich.

- **Face recognition!** I already talked about face recognition. There's not much more to be said other than it does work well!

- **Keep your files where they are!** While I understand why some photo management software rename and modify your files, I hate it. And so, one big selling point for me was that Immich had this feature (called _External Library_) where it just scans your file system to import the photos _without the need of reorganizing the folders_.

The second one is especially huge for me since I have my organized my photos by folders, by date and event chronologically before starting Immich. This way, if for some reason I would have to stop using Immich, I at least still have my photos organized and searchable, albeit in an arguably less efficient way.

### Surprise Bonus Features

While the above features were the biggest selling points for me, there were also some great ones that I discovered after installing it.

- **Contextual Search!** I can search for "dog" or "pub" and it does return me photos of what look like dogs or pubs. It's not perfect but it's a great way to filter photos!

- **Map!** If your photos have metadata on them (which most photos direct from your camera would have, but most photos from WhatsApp or Messenger would not), then they get pinned onto this lovely world map!

## Search (Kagi)

Searching has become more difficult these days with all the AI-generated garbage websites. Most of them steal content from other smaller websites, and most of them are not that useful anyway. What they are good at, however, is gaming SEO. And this is why search quality has gone for the worse. Plus, of course, Google wants you to click on their sponsored results.

### Search Quality

While the technology to intelligently block which websites are useful and which websites are trash isn't there yet, **[Kagi](https://kagi.com)**'s way of tackling this problem is not that far from a workable solution. For starters, [sites with a lot of trackers are penalized](https://help.kagi.com/kagi/search-details/search-quality.html).

And if their way of ranking still leaves some annoying websites, then you can simply **block** a website from ever appearing on search results again. I have blocked websites which have annoyed me and wasted my time (I'm looking at you Pinterest) promising something that they don't have or something that they have paywalled. I think I have also blocked Amazon for good measure. That way, it will always be my last resort when I buy something in the same way that Google will be my last resort if I can't find something.

### Cost

For **10 euros** per month (before taxes) for unlimited search, it is personally a huge timesaver for me who needs to use search a lot. I know a paid search engine is not for everyone but if that interests you go ahead and try it out.

### Surprise Bonus Features

The value proposition of personalized search was enough to get me in but there have been some features I discovered as a subscriber that made me stay.

- **Quick Answers!** On top of search, they have some sort of ChatGPT-like assistant that summarizes the search results for you. As with all LLMs, it might hallucinate every now and then so you should still take a look at the websites it claims to have gotten the information from but this is also a huge timesaver for non-critical stuff like "when is The Boys season 4 release date". A lot of trashy websites would claim to have a release date and then end up saying we don't know. Well, I don't have to sift through them anymore!

- **Universal Summarizer!** I started using the universal summarizer when I feel like I have a website that has the info I need but a lot more other info for my attention span at the time of encountering it. Not only does it summarize text pages, it also summarizes YouTube videos and terms and conditions. Again, using AI. Which is not 100% accurate. But like the flag of Switzerland, it's still a huge plus.

Based on how much time it saves me every day, paying for what amounts to a couple of cents a day for no-frills search is a worthy investment.

## Mail (Mailbox.org)

As far as my high school self remembers, Gmail was supposed to be increasing their storage space indefinitely. However, these days, I think it's already capped at 15 GB.

I have been receiving emails to _upgrade_ my plan to get more storage, which was the last push I needed to move to a different mail provider suggested by [Seba](https://sebastiano.tronto.net/) which was **[Mailbox.org](https://mailbox.org)**.

### Cost

Before locking myself in to Mailbox.org, I saw reviews online where people were complaining that the web interface was not the best. And that's true. For **3 euros per month**, it seemed fair that it wouldn't be perfect. And so I had to prepare to accept this limitation. I use Thunderbird for the desktop and the default Mail app for my iPhone. You have to take some time to set it up but it is quite doable.

### Surprise Bonus Features

No problems so far, and it even had features that were not _must-haves_ for me but definitely helped me feel better about paying the $3$ euros per month:

- **Disposable emails!** While [temp mail](https://temp-mail.org/fr/) does offer this for free, a lot of sites have since blocked their domains. Having an alternative like mailbox.org is a great option!

- **Support for multiple domains!** I have been window shopping for the longest time for a secondary domain after guissmo.com and it is super cool that they have this feature. I have yet to try it and I will report back if I have problems.

- **Cloud storage!** While I don't necessarily need it, it has helped send huge files every now and then.

Plus the fact that they are in Europe means that their pricing is not dependent on exchange rates!

If you _really_ need one last push, wait around for Christmas where they usually have a promo.
