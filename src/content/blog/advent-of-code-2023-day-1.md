---
title: "Advent of Code 2023: Day 1"
layout: "/src/layouts/PostLayout.astro"
category: Advent of Code
author: guissmo
date: 2023-12-01T23:26:19+00:00
description: My solution to the Day 1 Advent of Code 2023 Problems.
slug: advent-of-code-2023-day-1
tags:
  - code
  - regex
  - excel
  - jupyter
  - problem solving
---

Here is my solution for the [first two problems](https://adventofcode.com/2023/day/1) (i.e. Day 1) of Advent of Code 2023.

I'm not sure if I'll be able to keep up making one blog post per day, but I'm at least posting my answer for Day 1 to hype you up.

If you're interested in being "competitive" and joining a leaderboard, here's the code for mine: `1598637-22d94a1d`. You use [this link](https://adventofcode.com/2023/leaderboard/private) to add it once you're logged in.

From their [about page](https://adventofcode.com/2023/about):

> Advent of Code is an Advent calendar of small programming puzzles for a variety of skill sets and skill levels that can be solved in any programming language you like. People use them as interview prep, company training, university coursework, practice problems, a speed contest, or to challenge each other.
>
> You don't need a computer science background to participate - just a little programming knowledge and some problem solving skills will get you pretty far. Nor do you need a fancy computer; every problem has a solution that completes in at most 15 seconds on ten-year-old hardware.

Onwards!

## Part 1: Sublime Text + RegEx + Excel

For each line of input, take the first and last digit in a string and then make a two-digit number out of it.

I just used Sublime Text and regex for this. I pasted all 1000 lines of my input and then did some regex magic.

First, I deleted all `^[^0-9]+` so that the first character is a digit. That deletes all non-digits at the beginning of each line. Similarly, I deleted all matches of `[^0-9]+$`.

One small gotcha is that when after these two operations, only one digit is left, then that is technically the first and last digit of that line. Although I realize now that it was not needed, I took all matches of `^[0-9]+` and doubled it. Hence, a line with just `8` becomes `88` and so on.

Anyway, I then took all matches of `^[0-9]`, pasted it to the first column of an Excel sheet, then took all matches of `[0-9]+`, pasted it to the second column of an Excel sheet.

While auto-filling `=A1+B1` through all $1000$ rows, I realized I could have just highlighted Column A, took the sum (written on the status bar in the lower right corner) multiply it by $10$ and then highlighted Column B, took the sum.

## Part 2: When Two Become One

For this variation, numbers spelled out are considered digits!

I tried doing this again, but I preprocessed the input by replacing `one` with `1`, `two` with `2`, etc.

That did not work. I was gotcha'd by a gotcha.

Thankfully, I can look at my input in Sublime Text and there were nasty test cases like `twone`. With my method, it would have replaced `twone` with `tw1` and we lose `two`.

Finally, I gave up and opened up Jupyter to code in Python.

```python
arr = ["51591twosix4dhsxvgghxq", "425nine", "llvmhjtr8nbbhrfone", "twone"]
nums = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
```

I loaded up the list of $1000$ in an array called `arr`. Here, I just make it length $4$ since it's a bit useless to include the whole list.

For finding the first digit, I ended up with the following code.

```python
def firstDigit(st):
    for (i,s) in enumerate(st):
        if s in ['1', '2', '3', '4', '5', '6', '7', '8', '9']:
            return int(s)
        for (j,w) in enumerate(nums):
            if st[i:i+len(w)] == w:
                return j+1
```

Now, it was just a matter of going through each character `s` of each string `st`. If the character is a digit, then that's the first digit and we finish. Otherwise, we go through each spelled number, and see if that character (`st[i]`) is equal to the first letter `w[0]` of the spelled-out number `w`, and so on until the last letter of `w`. This is done by `if st[i:i+len(w)] == w`.

If we have a match, we return `j+1` because `one` is on index `0` on `nums`, etc.

For taking the last digit, I was too lazy to think and I was in a hurry because it's now past 12 midnight and I still want to solve today's Wordle.

The idea was just to copy-paste the `firstDigit` and reverse all the relevant strings thanks to the trick `[::-1]`.

```python
def lastDigit(st):
    ts = st[::-1]
    for (i,s) in enumerate(ts):
        if s in ['1', '2', '3', '4', '5', '6', '7', '8', '9']:
            return int(s)
        for (j,w) in enumerate(nums):
            if ts[i:i+len(w)] == w[::-1]:
                return j+1
```

Now that the hard part is done, we do the victory lap by:

```python
s = 0
for a in arr:
    s += firstDigit(a)*10 + lastDigit(a)
print(s)
```

And there's the answer!
