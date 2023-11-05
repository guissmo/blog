---
title: "Lola: An App For a Song With Only Four Letter Words"
layout: "../../layouts/PostLayout.astro"
category: Projects
author: guissmo
date: 2023-11-05T22:57:37Z
draft: false
description: This blog post talks about some interesting bits I learned while writing an app that presented the lyrics of a Brett Domino song made exclusively of four letter words.
slug: lola-an-app-for-a-song-with-only-for-letter-words
tags:
  - front end
  - apps
---

I was supposed to be the playing [the Guardians of the Galaxy game](https://store.steampowered.com/app/1088850/Marvels_Guardians_of_the_Galaxy/) I bought from leboncoin this weekend but my GPU was apparently too weak so that game has to wait and I had nothing to do. So why not make a [single page app](https://guissmo.com/lola) with a YouTube embed and really test out Astro.

## Migration to Astro

Over the past few weeks, I've migrated [my blog](https://guissmo.com/blog) and [my website](https://guissmo.com) into Astro because of its ability to generate optimized static websites. Technically, I don't need a VPS anymore since I can compile everything offline and rsync somewhere. But paying for a VPS allows enough flexibility to try new things. It also doubles as a place to backup some files!

Migrating the blog was almost trivial since the last static site generator I used – [Hugo](https://gohugo.io) – also used markdown files. Migrating the CV on the website was in JSON but it took more time, mainly to decide on the new layout.

Updating the website is now as simple as an `npm run build` and an `rsync` to my server!

## Lola: A Song Containing Exclusively Four-Letter Words

Astro supposedly supports React components. To test this, I wrote a single page "app" that plays [Lola](https://www.youtube.com/watch?v=XTCnxizYs80), a song containing exclusively four-letter words.

I'm quite happy with how [the app](https://guissmo.com/lola) ended up. I even sent the to the comedian who composed the song hoping that he'll appreciate it.

### React Components in Astro

Astro was well-documented enough for my use-case that the only take-away that I thought I should note was to add:

```javascript
client: only = "react";
```

when using React components if you wanted them to be optimized for a static webpage (which I wanted). For example:

```javascript
<YoutubePlayer client:only="react" lines={lines} lrcOffset={timeAdjust} />
```

Apparently, you can mix and match components from React, Svelte, Vue, SolidJS and Preact [based on the documentation](https://docs.astro.build/en/reference/directives-reference/#clientonly). Maybe some day I will try it out!

The rest of the sections are not Astro-specific anymore but I found them nonetheless interesting while writing this project.

### Embedding a YouTube player

As I'm using a real song from a real person from Leeds, I did not (and should not) want to host an MP3 file on my website because that's bad for copyright. So, I needed to embed the YouTube video instead.

Thanks to writing Karaokle (a "Wordle" with a [NOPLP](https://fr.wikipedia.org/wiki/N%27oubliez_pas_les_paroles_!) twist), I already have experience on embedding YouTube videos. I used this [YouTube API wrapper](https://github.com/ginpei/html5-youtube.js). The last commit was six years ago, but it works for my purposes. No Typescript though. But not a blocker for my purposes. This is a one-day project so I just added `ts-ignore` when appropriate. Shouldn't be that hard to debug!

### Syncing the Lyrics

I discovered that finding a local program that creates LRC files without much fuss was almost impossible even while using [the best search engine in the world](https://kagi.com) so I had to settle for a no-fuss [online solution](https://www.megalobiz.com/lrc/maker). I entered the lyrics, one word at a time. I played the song and tapped along to every word. I'm bad at rhythm games, but the resulting LRC file was acceptable, with some adjustments on the tricky parts of the song (especially the "free jazz punk rock" part).

### Displaying the Lyrics

For Karaokle, I used an $O(n)$ algorithm for displaying the lyrics, where $n$ was the total number of lines. The code ran every time the timestamp of the YouTube video changed so this was disgustingly slow in retrospect. However, it was not so noticeable because there were like at most 30 lines in a song.

For Lola the app, however, this $O(n)$ algorithm quickly turned out to be a problem. Each "line" consisted of one word. And there can be more than two lines within one second. The slowness of the $O(n)$ algorithm definitely showed.

I thought that was the end. But I realized that I could "cheat" by using an $O(1)$ algorithm by disabling "seeking" within the video. How? It boils down to essentially a single if statement that runs every time the timestamp of the YouTube video changes.

```javascript
useEffect(() => {
  /* other code */
  if (time > startTimestampOfNextLine) setLineIndex(currentIndex + 1);
}, [time]);
```

I have some ideas (which might not even work) for making this faster but this turns out to be fast enough to keep up with the song.

As we said above, this solution for syncing the lyrics would not be enough if the user had the ability to jump from one timestamp to another. So, let's get around to making sure they can't.

### Hiding the YouTube embed

The most evident way for the user to make the timestamp jump around is the YouTube video. So, we have to hide that. We're only interested in the audio anyway!

If we hide the YouTube embed, we need a way to let the user start playing the music. Thankfully, `PLAY` is also a four letter word. So, I decided to convert the DOM element that displays the four-letter word lyrics into a button with the word `PLAY`. Can't get any simpler than that!

Once the music starts, we don't want to give the user the impression that they can click on the lyrics. With some CSS wizardry, the cursor becomes a pointer only when you hover over the element while `PLAY` is displayed, but not when you hover over the same DOM element while the lyrics are displaying.

Now that we have a `PLAY` button, we can now hide the YouTube embed. You would think that it was as simple as writing `display: none` but like me, you would be wrong. As soon as I tested it on my phone, I saw that it did not work. I didn't figure out what the cause of the problem is for now, just that there was a problem. Let me know if you know why that doesn't work! My best guess was that the phone browser didn't even bother loading the embed since it didn't need to be displayed anyway.

My hacky solution was to add `width: 1px; height: 1px`. The embed ends up being a white pixel but I honestly couldn't be bothered to dive into finding a solution that does not involve having a superfluous white pixel. Good enough.

### J'attends avec impatience

When I pressed play, I knew that the now-invisible (technically barely visible) YouTube embed was loading. Even then, I still got impatient even if the wait was less than a second on the first-world fiber Internet. Unfortunately, `LOADING` is a seven-letter word and I didn't want to make a loading UI. So the user has to put up with a less polite four-letter imperative sentence which was `WAIT`.

Instantaneously changing `PLAY` to `WAIT` tells the user that we registered their button press and nothing went wrong and to not think our app is laggy. We're just waiting for something. Good things come to those who wait.

Thanks to a friend of mine who used the app when I _soft-released_ it (look at me, using jargon from Product people) I found out that if you were too eager to press the `PLAY` button, the app bugged out. The problem was that the YouTube embed was not instantly ready to play as soon as the UI was visible. I fixed this by displaying `WAIT` while the YouTube embed had the time to [wake up and put on their makeup](https://youtu.be/kafVkPxjLYg?t=31). Once it's ready, we say a little prayer for you in the form of a `useEffect`:

```javascript
useEffect(() => {
  const handleReady = () => {
    setWord("PLAY");
  };
  if (window.player !== undefined)
    window.player.addEventListener("ready", handleReady);
  return () => {
    window.player.removeEventListener("ready", handleReady);
  };
}, []);
```

### Bonus: Custom Hook

This weekend, I also looked around what the fuss was about _custom hooks_ as I have never written one myself. Apparently, it's not _super duper_ required to use because you can get away with the ready-made ones – `useState`, `useEffect`, etc. In fact, I had already uploaded and soft-released the app without using this hook. But I guess it helps to make custom hooks so that you don't have to copy-paste a lot of logic. So here is the first ever _custom hook_ I've written:

```javascript
function useVideoPlayerTimestamp() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const handleTimeChange = () => {
      setTime(window.player.currentTime);
    };
    if (window.player !== undefined)
      window.player.addEventListener("timeupdate", handleTimeChange);
    return () => {
      window.player.removeEventListener("timeupdate", handleTimeChange);
    };
  }, []);

  return time;
}
```

I know it's not recommended to use `window` for global variables but I mean... this is a single page app written in one afternoon. We can't be putting in MobX stores for this simple project!

This hook was used exactly once in the project which kind of defeats the purpose, but hey at least I can say that I have a better [feeling](https://youtu.be/C7laFir9deo?t=36) for when I use it.
