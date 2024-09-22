---
title: "Advent of Code 2023: Day 3"
layout: "/src/layouts/PostLayout.astro"
category: Code
author: guissmo
date: 2023-12-03T12:15:38+00:00
description: My solution to the Day 3 Advent of Code 2023 Problems.
slug: advent-of-code-2023-day-3
tags:
  - code
  - python
  - problem solving
  - advent of code
---

Here are the [Day 3](https://adventofcode.com/2023/day/3) puzzles for [Advent of Code 2023](https://adventofcode.com).

Here's my [Day 1](../advent-of-code-2023-day-1/) blog post. Day 2 was not so remarkable so I didn't bother posting about it. While this one isn't much better, at least we could flex a bit some of our padding tricks, knowledge of classes, never-before-used(-by-me) regex functions, and a bonus section on mutability.

As before, here's the code for my leaderboard: `1598637-22d94a1d`. You use [this link](https://adventofcode.com/2023/leaderboard/private) to add it once you're logged in. And if you wake up earlier than me (which is probably the case), you'll probably be higher up because the way they score the leaderboard is mental.

In the code below, `sample_input` is the array of lines that appear in the sample input.

## One of the Oldest Tricks in The Book

With problems involving grid and adjacency, it's always great to pad your grids. That's exactly the first things I did.

```python
def padded_grid(inp):
    pad = '.'*(len(inp[0])+2)
    mid = [f'.{i}.' for i in inp]
    return([pad] + mid + [pad])

def print_grid(inp):
    for i in inp:
        print(i)
```

Printing the grid...

```python
print_grid(padded_grid(sample_input))
```

...we see a beautiful border around the input grid.

```
    ............
    .467..114...
    ....*.......
    ...35..633..
    .......#....
    .617*.......
    ......+.58..
    ...592......
    .......755..
    ....$.*.....
    ..664.598...
    ............
```

This is not completely necessary but this will save us from the many headaches of handling literal edge cases later.

## Class Time

We `class`-ify our previous code... or should I say [yassify](https://en.wiktionary.org/wiki/yassify) our previous code... into this neat `Grid` class...

```python
class Grid():

    def __init__(self, inp):
        self.grid = padded_grid(inp)

    def __str__(self):
        ret = ""
        for l in self.grid:
            ret += l
            ret += '\n'
        return ret
```

For my solution, we need to keep track of the values and the position. So it made sense to just add another straightforward `Number` class.

```python
class Number():

    def __init__(self, num, i, j0, j1):
        self.value = int(num)
        self.i = i
        self.j0 = j0
        self.j1 = j1

    def __str__(self):
        return f'number {self.value} at row {self.i} spanning columns {self.j0} to {self.j1}'
```

And let's make a new Symbol class while we're at it.

```python
class Symbol():

    def __init__(self, num, i, j):
        self.value = num
        self.i = i
        self.j = j

    def __str__(self):
        return f'symbol {self.value} at row {self.i} and column {self.j}'
```

## On pars(e)

I didn't bother writing about the [Day 2](https://adventofcode.com/2023/day/3) puzzles because it was mostly parsing and less problem solving.

This was a bit like that too, but at least this had something to teach me about regex. Apparently, `re` has this `finditer` function that I never really needed before. But it's handy for this problem so I'll take that excuse to use it.

```python
import re

class Grid():

    def __init__(self, inp):
        # ... #
        self.numbers = self.detect_numbers()

    #...#

    def detect_numbers(self):
        ret = []
        for i,l in enumerate(self.grid):
            for m in re.finditer(r'[0-9]+', l):
                (j0, j1) = m.span()
                ret.append(Number(m[0], i, j0, j1-1))
        return ret
```

This code works, but I got burned by an off-by-one error today because I previously didn't put a `-1` on `j1` in `Number(m[0], i, j0, j1-1)`.

I then copy-pasted `detect_numbers` and wrote `detect_symbols`. If you're asking why I didn't refactor this reused code, it is summarized in [this concise explanation](https://www.youtube.com/watch?v=bFEoMO0pc7k&t=10s). Of course, if I had to maintain this codebase in the future, maybe I would have.

## Part 1

All that's left to finish part 1 of the problem is to detect adjacent symbols -- which boils down to figuring out if any of the given symbols is in the "padded rectangle" around a `Number`.

```python
class Grid():

    #...#

    def detect_adjacent_symbols(self, num):
        ret = []
        for s in self.symbols:
            if num.i-1 <= s.i and s.i <= num.i+1 and num.j0-1 <= s.j and s.j <= num.j1+1:
                ret.append(s)
        return ret

    def sum_of_part_numbers(self):
        ret = 0
        for n in self.numbers:
            if len(self.detect_adjacent_symbols(n)) > 0:
                ret += n.value
        return ret
```

Once we have that function, we simply add all numbers with at least one adjacent symbol to the sum. And voila, we have:

```python
grid = Grid(sample_input)
print(grid.sum_of_part_numbers())
```

And get:

    4361

## Part 2

I didn't know what Part 2 of this problem would be a priori but since we've structured our code nicely, we just needed to add a few more functions to finish it off.

```python

class Grid():

    # ... #

    def find_gear_ratio(self):
        dic = {}
        for n in self.numbers:
            adjacent_symbols = self.detect_adjacent_symbols(n)
            for s in adjacent_symbols:
                if s.value != '*':
                    continue
                k = f'{s.i},{s.j}'
                if k not in dic:
                    dic[k] = []
                dic[k].append(n)

        ret = 0
        for k in dic:
            l = dic[k]
            if len(l) == 2:
                ret += l[0].value*l[1].value
        return ret

grid = Grid(sample_input)
grid.find_gear_ratio()
```

    467835

## I Just Want Your Extra Time and Your (Immutable) Keys

While writing this blog post, I noticed how artificial this line was:

```python
k = f'{s.i},{s.j}'
```

I vaguely remember from "Python school" (i.e. watching video tutorials) that you can use any immutable object in Python as a dictionary key. I tried that while coding, but ended up with an error. It turns out that the error was something else, and it is perfectly safe to just use `tuples` as keys.

```python
k = (s.i, s.j)
```

A `list` can't be a key though! Their value can be changed via a `.append` -- a reminder that they are mutable.

## Contact

Feel free to [contact me](../../) to let me know how you did!
