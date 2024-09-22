---
title: "Syncthing"
layout: "/src/layouts/PostLayout.astro"
category: Recommendations
author: guissmo
date: 2024-03-10T23:03:46+00:00
draft: false
toc: true
description: Finally tried out Syncthing after procastinating. Here are my thoughts and instructions on how to set it up.
slug: syncthing
tags:
  - open-source
  - experience
  - story
  - recommendation
---

I have been looking at Syncthing for quite some time because I keep hearing about it. In this post, I will talk about [what I think about it](#thoughts-about-syncthing) and if you're interested, [how I set it up](#setting-up).

## Thoughts About Syncthing

### A Rant About Non Open-Source Alternatives

As more and more people are offering _cloud-based_ file syncing services, we are getting more and more dependent on our stuff being online. I have a Dropbox account I use as a _backup_ in case I suddenly need to show up with an important document at airport customs, or wherever.

For the most part, I'd like to avoid putting my data into the hands of a company which may one day just ask me to start paying _or lose it_. I used to think I was paranoid about this but this has been happening with a LOT of websites recently.

For example, Couchsurfing famously locked everyone out of their profiles during the COVID lockdown unless they pay. And Facebook has also recently given EU users an ultimatum: let us track you to serve you with ads or pay 10 euros per month and we won't track you. They'd still probably track your friends who don't pay though, and all the coincidental info they write about you.

### Why The Hassle

Just like there's no reason to trust companies like Dropbox to be forever free (or to even operate at all), we can never tell if the Syncthing developers might call it a day and move on.

So why the hassle of setting up this open-source software, then?

First, your files stay **on your machines**. So, if one day your favorite online service gets _hacked_ (or illegally taken to train AI data), you're quite sure that your sensitive files are not part of whatever leaks happen.

Moreover, if for some reason you one day want to stop using Syncthing (or any other software for that matter) for whatever reason then your files are already on your machine. You don't have to GDPR a company to give you your data (or hope they would do it if you're not in the EU).

### Buying In

It's been a long time that I've been considering Syncthing but I always had excuses because it had a lot of small steps that made it seem daunting: I didn't have a solid enough use-case for it, I didn't have anything valuable enough to sync, I'd have to spend a lot of time deciding which folders I want, and spend a lot of time setting it up.

Luckily, [Seba](https://sebastiano.tronto.net/) told me that he uses Syncthing and it works for him and that motivated me a little bit. And so this weekend, I finally had the time and mental energy to _at least_ try to get the instances up and running. Then I'd think of which folders to sync and where to sync them later

### Caveats

I have so far only used Syncthing for Linux machines, so you might be on your own if you try installing it on other operating systems. Let me know how you do if you decide to do it though!

#### Didn't Try on Windows / MacOS

Since I already have three machines, I thought I'd call it as I didn't have an immediate need to sync files on my Windows installation.

And I don't have a personal Macbook, so that's out of the question.

#### Didn't Try On Mobile

Since Syncthing doesn't host your files on a central server, I've learned that syncing files into phones is less reliable. It's not Syncthing's fault. I think it's more the fact that phones try to save battery and try to kill or at least throttle apps in the background.

I've moved to iOS a few years ago to have the smallest smartphone model I found available at that time. Some things are definitely easier on iOS, but some things are just near impossible if you don't jailbreak it. Crossing my fingers that [this project](https://smallandroidphone.com/) would actually succeed!

Anyway, the way that iOS keeps files is strange and they try to force you to buy in to iCloud, and so there are definitely some hurdles. There is a Mobius app that I haven't tried yet? But maybe I will when I get the chance.

## Setting Up

I am presenting the setup steps linearly, but not how I did it chronologically. I did some "small" test cases like installing on two machines first, putting in dummy folders, then going back and installing to a third device because if at any point I thought... this isn't worth it... then I can say I've _lost_ the least amount of time!

### Installation

I went to install Syncthing on each of my _devices_. I say _devices_ but the VPS is not technically _mine_, but whatever let's roll with it. Since they were all Linux-based, I simply had to:

```bash
sudo apt update
sudo apt install syncthing
```

Bim bam boom. It's installed on all your Linux devices!

### Running It As A Service

Now, you can run `syncthing` on each machine and access it from `localhost:8384`. Of course, closing the terminal or shutting down the computer would require you to start it up again.

What I did was to add it as a service. Which you can do by doing:

```bash
systemctl enable syncthing@username.service
```

And now Syncthing would start every time your machine turns on.

### Adding Folders via the Graphical Interface

Syncthing has a GUI that you could use straight up which is accessible by default at `localhost:8384`.

It's not the best UI in the world with its small buttons... but it's intuitive enough and it's not completely in command line either. Not here to critique the UI because I'm sure this isn't part of the devs' priority. I'm even HAPPY that there is one so I don't have to remember a bunch of commands for just this one program. Big thanks to the devs for having that idea.

To access this UI needs some magic words though, the ones used for **port forwarding**. These are the commands I use:

```
ssh -N -L 8385:localhost:8384 pi
ssh -N -L 8386:localhost:8384 guissmo
```

The `-N` flag for `ssh`, according to ChatGPT apparently tells `ssh` to not run any remote commands, and the `-L` is the magic flag for port forwarding.

The rest of the commands tell our machines to forward my machine's port `8385` (implicitly of `localhost`, I'm guessing) to the remote machine's `localhost:8384`. And the machine we are talking about is either my raspberry pi named `pi` or my VPS, whose IP addresses are written on my `/etc/hosts` file.

That way, I can access my laptop's Syncthing GUI on my laptop's port `8384`, and the other machines' Syncthing GUI on `8385` and `8386`.

### Add Devices

Once you get all of that setup, everything is quite intuitive on the GUI.

The next step is to add devices. Once you're in the GUI, this will be much more clear.

Take note of the unique ID of your instance, found on `Actions > Show ID`. Then on another machine, add the device. Maybe add a helpful machine name.

### Add Folders to Sync Two-Way

For my humble first usecase, I wanted to sync something light: like a folder full of recipes aka text files.

You could guess how to do that from the UI. Simply add a folder to your file system, write its path, and then on the sharing tab choose which device you want to share it with.

On the other device, you accept the connection and then decide which folder you want to put it in.

### Add Folders to Sync One-Way

One-way syncing is easy as well. For trying this out, I was more ambitious and used a folder full of photos and videos to _back them up_ into my VPS. I used to do this manually with `rsync` but this seems like it's about time to automate it. That way, I can concentrate on organizing my photos into folders.

The only different steps you have to do to make a one-way sync is to go to the Advanced tab on the Add Folder modal and choose "Send Only" and "Receive Only".

## Conclusion

Hope that was useful. Let me know if you've decided to try it out!
