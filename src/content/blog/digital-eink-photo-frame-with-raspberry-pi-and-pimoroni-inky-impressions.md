---
title: "DIY Digital eInk Photo Frame with Pimoroni Inky Impressions"
layout: "/src/layouts/PostLayout.astro"
category: Mini Projects
author: guissmo
date: 2024-04-13T11:33:21+00:00
categories:
  - Mini Projects
description: I setup my own digital photo eInk photo frame.
slug: digital-eink-photo-frame-with-raspberry-pi-and-pimoroni-inky-impressions
tags:
  - raspberry pi
  - inky impressions
  - python
  - project
  - experience
  - story
---

I have a lot of my digital photos in one folder, which is backed up in several other places thanks to [Syncthing](./syncthing/).

I want to have a _physical_ copy for display purposes. Should I just print all of them? Well, this folder contains 7300+ photos -- roughly as many Philippines islands there are -- and I can't afford to have all of that printed. Not to mention the whole effort of collecting all the _good_ photos, putting everything in a USB, walking to a physical photoshop, giving the files, and then come back and get the photos in a few days.

So I opted for a digital photo frame instead. Buying a digital photo frame seems to be wasteful and they are [expensive](https://auraframes.fr/digital-frames/color/pebble?country_set=FR) AF. Plus you're tied to some random mobile app. Maybe that's great for the average consumer who wouldn't want to take the time to set it up themselves. As someone who likes to tinker with this type of stuff, I like to avoid third-party apps if I can help it. And in this _war_ against third-party apps this specific _battle_ is one I choose to fight.

In the end I chose to make it a "DIY" project and use an eInk screen. Unlike digital photo frames but similar to eReaders, you don't need to power it all day to have it display something. You only need power when you want to _change_ the display.

My initial plan was to have it display a different photo every day, changing and refreshing at midnight. But that turned out too ambitious for the free time and bandwidth I had. So for now, I opted on just manually choosing and making it display a photo.

## Things You Need

This was the most time-consuming part because I am not a hardware person and I had to research the hardware one-by-one. Upon further research, I did not believe that all of these devices are available in my city. So I had to buy several of them online and wait for most of them to ship.

### A Pimoroni Inky Impressions Screen

It's an eInk screen that has like seven colors. This is currently the best eInk can do for now, according to my research. Unlike LED screens, once an image is displayed it doesn't need power anymore unless you want to change it. I had this shipped in August.

### A Raspberry Pi Zero

I watched [this video](https://www.youtube.com/watch?v=daO46JaVHOs) to take note of the things I need and said that the project could be done with a Raspberry Pi Zero. So I went ahead and [got one](https://www.kubii.com/en/nano-computers/3455-raspberry-pi-zero-2-w-5056561800004.html) for 20 euros.

However, this turned out to be the wrong model for this project as I didn't have the pins soldered. In the end, I had to get the [Pi Zero with the pins presoldered](https://www.kubii.com/en/nano-computers/2076-raspberry-pi-zero-wh-3272496009394.html). Thankfully someone was selling it in leboncoin!

When I received it, it fit perfectly well on the slot at the bank of the Inky Impressions.

### A Power Source

Any power source which could connect to the Pi via a micro-USB would be ideal. I used an old phone charger and a USB-A to micro-USB wire.

### A 32 GB SD Card

My FlyingBlue miles were used to get this. I wasn't going to accumulate enough miles to get upgrades or free flights so I would take a _free_ SD card. They had a VERY LONG shipping time. Like one month for an SD card. It eventually arrived one day after I decided to buy one from the supermarket. And now I have a surplus of SD cards.

## The Software Part

### Writing the Pi OS To The SD Card

Doing this was simple. Just go to the official [Raspberry Pi website](https://www.raspberrypi.com/software/) and download the imager.

Once downloaded, pop in the SD card and:

- fill in your wifi details, and
- enable SSH

This way, you can SSH into the Pi Zero, removing the need for any display.

### SSH Into The Pi

I didn't have the steps to setup a static IP on this one (but I should eventually do it) so I ended up using `nmap` to list the devices connected on the subnet I'm in.

```bash
nmap -sn 192.168.1.0/24
```

Shoutout to Pierre and the fact that he is teaching NSI this year. We discovered together what the `/24` means. It's a subnet mask shorthand (assuming I learned it correctly)!

I eventually found the local IP address of my pi and we can now `ssh` into it!

### Testing It Out

I basically followed the instructions [on this page](https://learn.pimoroni.com/article/getting-started-with-inky-what) despite the fact that this was for another one of their smaller models.

Just in case that page is unavailable, you just needed to download and execute the script:

```bash
curl https://get.pimoroni.com/inky | bash
```

Note that this is generally dangerous if you don't read what you're executing. But since I was doing this on a memory card which you can eventually nuke, I didn't think it was worth it to do it the "right" and "secure" way. Of course, I would be more careful in a different context.

Once it's installed, I followed some of the examples on that page.

The documentation is on another model with a smaller screen and so I had to do a bit of digging to figure out how to adapt their Python code to _my_ specific model.

```python
from inky import Inky_Impressions_7
from PIL import Image, ImageFont, ImageDraw

inky_display = Inky_Impressions_7()

img = Image.new("P", (inky_display.WIDTH, inky_display.HEIGHT))
draw = ImageDraw.Draw(img)

img = Image.open("/home/guissmo/photo.jpg")
inky_display.set_image(img)
inky_display.show()
```

And voila! We now have a home-made eInk digital picture frame.

## To-Dos

Here are eventual to-dos rougly ordered in increasing complexity.

### Automatically Resize Images and Adjust Brightness

The above code only works if the dimensions of the image is exactly that of your screen. That means I have to manually resize each photos. I should eventually add more code to automate this process.

For future me's reference, here is how I did it semi-automatically

```
mogrify -resize 800x480^ -gravity center -extent 800x480 /tmp/image.jpg
```

### Make an actual frame for it and add an external power source

Perhaps 3D print a frame or add an external power source in the form of a battery or a power bank? I don't know. Hardware is not my forte so if anyone can chime in that would greatly be appreciated!

### Change the photo every midnight

The constant power source issue is blocking this otherwise easy cron job task. Plus the fact that I haven't chosen which photos I want to cycle yet.

It would be great if it had some sort of awareness of the date. For example, showing a photo that was taken on that date in another year.
