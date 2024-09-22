---
title: "QBasic Poker"
layout: "/src/layouts/PostLayout.astro"
category: Projects
author: guissmo
date: 2023-12-19T17:47:15+00:00
draft: false
description: This blog post talks about a high school project wherein I used QBasic to make a Poker game.
slug: qbasic-poker
tags:
  - qbasic
  - experience
  - story
  - game
  - poker
---

At some point in time closer to when I was born than the present, I submitted a school project to my high school computer teacher. It was a poker game written in the ancient language [QBasic](https://en.wikipedia.org/wiki/QBasic).

It's a language so old that:

> Starting with Windows 2000, Microsoft no longer includes QBasic with their operating systems.

There's a Yo Momma joke there somewhere.

<img src="/assets/qbasic-poker/poker-screenshot.png" width="400" alt="Screenshot of Game"/>

If you still don't realize how old it is, here is a [17-year-old YouTube video singing about my life back then](https://www.youtube.com/watch?v=Mal6XbN5cEg).

Anyway, I recently found the code while digging around my email. It was sent as a ZIP file.

Now it's in a [Git repo](https://github.com/guissmo/qbasic-poker) whose first commit is one year before Github existed.

## Dusting It Off

It's 2023. I cannot find a Windows 98 computer anymore. How do I even run this program?

After a quick [Kagi](https://kagi.com) search, there is this [QB64](https://github.com/QB64Team/qb64) project that compiles QBasic. Perfect.

Following the installation instructions was a breeze, and I was quickly ready to play my old poker game.

But then, tragedy. Some sprites (or graphics) did not appear.

## Fixing the Sprites

The code to load the sprites was thankfully in the first few lines of my code. It involved opening a text file with comma separated numbers.

```
CLS
SCREEN 13

OPEN "****.TXT" FOR INPUT AS #1
FOR y = 1 TO 200
  FOR x = 1 TO 301
    INPUT #1, c
    PSET (x, y), c
  NEXT
NEXT
CLOSE

DO WHILE INKEY$ = ""
LOOP
```

As a very mature $14$ year old, I used profanity for the filename of what would be the image which appears as soon as you load up the game.

Yes, the "image" is a TXT file, not an image file. Because in QBASIC, we don't do images, we use PSETS. Pixel sets. The first few characters of the first few lines of `****.TXT` should look like:

```
    02,    02,    02,    02,    02,    02,    02,    02,    02,
    02,    02,    02,    02,    02,    02,    02,    02,    02,
```

This sequence of `02`s dictate the color of each PIXEL of our Welcome Image. In QBASIC, there are only 16 colors, and colors are represented by numbers. And `02` was green, representing the green upper-left corner of our Welcome Image.

The problem was that for some reason that only young me might know, some of the spaces were tabs. And that rendered the whole file invalid. Because of this, some images did not load at all.

After replacing all tabs with spaces, we were back in business:

<img src="/assets/qbasic-poker/poker-jacks-or-better.png" width="400" alt="Screenshot of Welcome Screen"/>

If you're interested in how to draw the fifteen other colors, I gotchu. Well, more like [Quora gotchu](https://www.quora.com/What-is-the-syntax-for-the-COLOR-Command-in-QBasic).

```
00 - BLACK
01 - BLUE
02 - GREEN
03 - CYAN
04 - RED
05 - PURPLE
06 - BROWN / ORANGE
07 - LIGHT GREY
08 - DARK GREY
09 - LIGHT BLUE
10 - LIGHT GREEN
11 - CYAN
12 - LIGHT RED
13 - LIGHT PURPLE
14 - YELLOW / LIGHT ORANGE
15 - WHITE
```

The first 280+ lines of the `BAS` file consisted simply of `for` loops going through each `TXT` file (which represents an image). This loads the sprites for the game -- the welcome image, the cards, the backdrop of the main screen.

## Game Logic

The game goes as follows:

- You bet 1 - 5 monies. (I did not bother using a currency, that way it's more international! How inclusive of young me.)
- You get dealt five random cards from a deck of $52$.
- You choose which cards to hold.
- The cards you don't hold get replaced.

The first thing you have to do is to type a number from $1$ to $5$ and press `Enter`. It should accept your bet.

At around line $408$, the code makes $10$ random integers from $1$ to $52$. The first five represent the five cards. The bottom five represent the replacement cards, should you decide not to hold some of the cards.

```
5
''''' randomizer '''''
c1 = INT(RND * 52) + 1
c2 = INT(RND * 52) + 1
c3 = INT(RND * 52) + 1
c4 = INT(RND * 52) + 1
c5 = INT(RND * 52) + 1
c6 = INT(RND * 52) + 1
c7 = INT(RND * 52) + 1
c8 = INT(RND * 52) + 1
c9 = INT(RND * 52) + 1
c0 = INT(RND * 52) + 1
```

I knew how to do loops back then, but I don't think I bothered to _Ask Jeeves_ how to do that in QBasic. So, we have verbose code to make sure all of these cards are distinct.

```

'''anti-duplicate'''
IF c1 = c2 OR c1 = c3 OR c1 = c4 OR c1 = c5 OR c1 = c6 OR c1 = c7 OR c1 = c8 OR c1 = c9 OR c1 = c0 OR c2 = c3 OR c2 = c4 OR c2 = c5 OR c2 = c6 OR c2 = c7 OR c2 = c8 OR c2 = c9 OR c2 = c0 OR c3 = c4 OR c3 = c5 OR c3 = c6 OR c3 = c7 OR c3 = c8 OR c3 = _
 c9 OR c3 = c0 OR c4 = c5 OR c4 = c6 OR c4 = c7 OR c4 = c8 OR c4 = c9 OR c4 = c0 OR c5 = c6 OR c5 = c7 OR c5 = c8 OR c5 = c9 OR c5 = c0 OR c6 = c7 OR c6 = c8 OR c6 = c9 OR c6 = c0 OR c7 = c8 OR c7 = c9 OR c7 = c0 OR c8 = c9 OR c8 = c0 OR c9 = c0  _
THEN
  GOTO 5
END IF
```

Don't ask me why I used the label `5` because I don't remember anymore.

From that point, I take each `cX` and reduce it `MOD 13`.

```

r1 = c1 MOD 13
r2 = c2 MOD 13
r3 = c3 MOD 13
r4 = c4 MOD 13
r5 = c5 MOD 13
r6 = c6 MOD 13
r7 = c7 MOD 13
r8 = c8 MOD 13
r9 = c9 MOD 13
r0 = c0 MOD 13
```

To detect straights later on, I decided that the rank must be $1$ to $13$ and adjusted accordingly.

I then use a temporary variable `cXt` and get the suit.

```
c1t = c1
'''''suit getter'''''
DO WHILE c1t > 13
  c1t = c1t - 13
  s1 = s1 + 1
LOOP
```

## Drawing the Cards: In More Ways Than One

Now that we have the rank and the suit of each card, it's time to draw them! Draw them from where? The virtual deck which doesn't really exist. Draw them to where? These coordinates apparently:

```
x1 = 72 - 26
x2 = 72 + 47 - 26
x3 = 72 + 94 - 26
x4 = 72 + 49 + 92 - 26
x5 = 72 + 188 - 26
y = 127
```

Drawing the cards on-screen is then simply a matter of using a `switch` statement, which in the olden times was called `SELECT`.

```
SELECT CASE s1
  CASE 1
    PUT (x1, y + 25), spade
  CASE 2
    PUT (x1, y + 25), diamond
  CASE 3
    PUT (x1, y + 25), club
  CASE 4
    PUT (x1, y + 25), heart
END SELECT
SELECT CASE r1
  CASE 1
    PUT (x1, y), ace
  ...
  CASE 13
    PUT (x1, y), king
END SELECT
SOUND 300, 5
SOUND 400, 5
SOUND 500, 5
SLEEP 2
```

And why not add some cute beeping sounds to make it seem like it wasn't coded by a $14$ year old?

## Keyboard Shortcuts

Once the cards have been dealt, you could use `C`, `V`, `B`, `N`, `M` to decide which cards to keep before getting one final deal.

At around line `811`, the code reminded me how mature I was back then. Some things might never change.

```
GOTO hell
```

There used to be a `b`-word after `hell` but it's $2023$ and I don't want to get cancelled so let's not.

Now, what the heck does `hell` do? Well, it listens to keypresses `C`, `V`, `B`, `N`, `M`. These keys correspond to you telling the program to hold the card it corresponds to.

```
hell:
  SELECT CASE UCASE$(INKEY$)
    CASE "C"
      SELECT CASE h1
        CASE 0
          h1 = 1
          SOUND 300, 1
          PUT (x1, y + 38), hold, PSET
        CASE 1
          h1 = 0
          GOTO uno
      END SELECT
    ...
    CASE CHR$(13)
      GOTO redeal
  END SELECT

GOTO hell
```

Once you've held the cards you want to keep, simply Press `Enter` and get redealt the other cards!

## Checking for Combos

According to the code, if all the ranks of the cards are different, then go to `stfu`. Otherwise, `wtf`.

```
IF rA <> rB AND rA <> rC AND rA <> rD AND rA <> rE AND rB <> rC AND rB <> rD AND rB <> rE AND rC <> rD AND rC <> rE AND rD <> rE THEN
  GOTO stfu
ELSE
  GOTO wtf
END IF
```

Upon reading the code in `stfu`, it (expectedly) checks if there is a straight, a flush, or a straight (or royal flush).

On the other hand `wtf`, counts each rank to determine if we have full houses, two pairs, trios, etc.

I also found and corrected a 16-year-old bug. The logic for three-of-a-kind and four-of-a-kind was wrong. Now it should work!

## Conclusion

My past self would never have expected that the next time I would ever be running this _game_ again and that I would be doing it in a place $10000$ kilometers away from the last place I ran it in a city I've never even heard of then.

<img src="/assets/qbasic-poker/poker-gif.gif" width="400" alt="GIF Recording of Game"/>

Overall, I'm quite happy that my school project stood the test of time and still works. There are some minor bugs if you start pressing keys when you're not supposed to. File an issue and maybe I'd fix it within the next dozen years.

Keep in touch! Feel free to [contact me](https://guissmo.com) if you have any questions, comments, or suggestions.
