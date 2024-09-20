---
title: "Installing Pari/GP 2023"
layout: "/src/layouts/PostLayout.astro"
category: Math
author: guissmo
date: 2023-01-05T23:05:49Z
draft: false
toc: true
categories:
  - Math
  - PARI
description: Step-by-step guide on how to install PARI/GP on Windows, Mac, and Linux.
slug: installing-pari-gp-2023
tags:
  - installing
  - PARI
---

I am writing this for participants of the CIMPA Summer School 2023 in Manila but this post may be useful for you if you need step-by-step instructions for installing PARI/GP.

## Windows

### Installing PARI

Click the link in the [Download page](https://pari.math.u-bordeaux.fr/download.html) under the Windows (Binary Distribution section). This will tell your browser to download PARI. Try downloading the 64-bit version first and follow the steps below. If that doesn't work, use the 32-bit download instead.

Oh no! Windows is trying to protect you from spending hours and hours of fun doing algorithmic computations with PARI! Whatever shall you do? Click **More Info** then press **Run anyway**.

An installer will appear. Since you are so excited to open PARI, click the **Next** button repeatedly until PARI is installed.

### Starting PARI

As soon as the installer closes, Windows will open a folder with a file called **gp** inside. Double click it. That is how you open PARI!

Alternatively, You can also go to your Start menu by clicking the Windows key and type GP!

When opening PARI, Windows will again try to make you miss out on the countless number theory computations that you can do! It will open another dialog box asking if you want to open the program. Click **Yes**.

## Mac

Macs prevent unverified software to be installed. Having your software verified costs money for the developer. PARI doesn't charge money so it wont be really fair to ask the developers to pay for it. So, it's not as straightforward as getting PARI from the App Store.

### Installing PARI

Download the dmg file under MacOS (Binary Distributions section) from the [Download page](https://pari.math.u-bordeaux.fr/download.html). How do you choose which version?

If your Mac is relatively new, use the ARM-pthread version. If you like a slower version because you like spending time with PARI, download the non-multithreaded: the ARM one without the pthread.

If the ARM version doesn't work or you really believe that your Mac is so old, take Intel.

There are two types: Basic and Full.

If you are reading this before the session and have time to download 95MB using the blazing fast internet connection of the Philippines, take the Full version.

If you are in a hurry because you did not read this before the session and Dr. Campagna is already in front talking, then you should probably use the Basic version then download the Full version later.

Open the dmg file you just downloaded. A window should appear with an icon for PARI. Drag the icon to a folder of your choice. Right click the file and click open. Close the warning dialog.

You can always compile from source but it will take some time and it is not in the scope of this tutorial.

### Starting PARI

To start PARI, simply navigate to the folder you chose in step 3 and right click the file and click Open then Open.

## Linux

I am mostly following [these slides](https://pari.math.u-bordeaux.fr/Events/PARI2022b/talks/sources.pdf) by Bill Allombert so if you can follow them by yourself go ahead!

Since you are a Linux user, we will need to do everything using the terminal. Do Ctrl+Alt+T to open one.

### Installing dependencies

According to the PDF I linked, you should do the following commands if you use Debian/Ubuntu:

```bash
sudo apt-get build-dep pari
sudo apt-get install libreadline-dev libgmp-dev
```

and

```bash
sudo dnf install readline-devel gmp-devel
```

if you use Fedora.

### Installing PARI

Go to the [Download page](https://pari.math.u-bordeaux.fr/download.html) and under Source Distributions, download the linked `.tar.gz` file. Save it in `~` or in `/home/your-username`.

Back in the terminal, write the following commands to unpack it:

```bash
tar xf pari-2.15.2.tar.gz
```

Replace `pari-2.15.2.tar.gz` with the filename of the file you just downloaded. Then navigate to the newly created directory:

```bash
cd pari-2.15.2
```

Again, this directory may vary depending on the current version (i.e. the version you downloaded).

Prepare the necessary files for installation by running:

```bash
./Configure --prefix=. --mt=pthread
```

Then, run

```bash
make -j4 gp
```

and if that doesn't work, remove the `-j4` and try again.

Finally, enter the following two commands:

```bash
make doc
make install
```

### Starting PARI

Start a terminal by pressing Ctrl+Alt+T and navigating to the directory you installed PARI in. If you followed the above instructions step-by-step the command you're looking for is

```bash
cd pari-2.15.2
```

Then open PARI by writing

```bash
./gp
```

If that doesn't work, try

```bash
chmod +x gp
./gp
```

## Android

If all the other things above fail and you have an Android phone, you can download the Android version!

Go to Google Play Store and search for PariDroid. Download it like you would a normal app.

This is the easiest way to get PARI but as you can imagine, a phone is not as powerful as a laptop. And phone keyboards aren't usually convenient for typing code.
