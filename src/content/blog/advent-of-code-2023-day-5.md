---
title: "Advent of Code 2023: Day 5"
layout: "/src/layouts/PostLayout.astro"
category: Code
author: guissmo
date: 2023-12-05T18:13:33+00:00
description: My solution to the Day 5 Advent of Code 2023 Problems.
slug: advent-of-code-2023-day-5
tags:
  - code
  - python
  - optimization
  - problem solving
  - advent of code
---

This year, the first problem that I think is not brute-forceable (if you're impatient) is [Day 5](https://adventofcode.com/2023/day/5). I've asked a colleague when the difficulty ramps up and I guess I should be more careful what I wish for.

Today, I finally managed to use `zip`, managed to do some basic complexity analysis, and some intuition for a claim that I don't have a proof of, but it works.

Here's my [Day 1](../advent-of-code-2023-day-1/) and [Day 3](../advent-of-code-2023-day-3/) blog posts. I've done all the problems so far but I'm not posting each of them since that's too much work.

As before, here's the code for my leaderboard: `1598637-22d94a1d`. You use [this link](https://adventofcode.com/2023/leaderboard/private) to add it once you're logged in. And if you wake up earlier than me (which is probably the case), you'll probably be higher up because the way they score the leaderboard is mental.

# Problem 1

Problem $1$ is brute-forceable. You simply take the $20$ (or $4$ for the sample input) seeds and run them through the maps which are essentially piecewise functions.

Despite knowing that Problem 2 will ramp this up, I played along and wrote a solution that has been made obsolete by Problem 2.

# Problem 2

Now, instead of $4$ seeds, you are tasked to go through $27$ seeds instead.

The _real input_ for problem $1$ asked to compute the answer for $20$ seeds. On my _real input_ for problem 2, I was asked to look through almost $2$ billion seeds -- $1994747387$ to be precise. I would reckon everyone else had to do the same.

## Interval Training

The first insight you may have would be like... hey... there might be almost $2$ billion seeds to deal with, but I only need to deal with $5$ intervals. So let's convert all the maps to take intervals instead of numbers. And they will also output intervals. That doesn't seem too bad -- but you'd have to account for the _pieces_ in the piecewise function. For example, the seeds-to-soil maps is essentially the following piecewise function:

$
f(x) = \begin{cases}
x - 48 &\text{ if }98 \leq x \leq 99,\\
x + 2 &\text{ if }50 \leq x \leq 97,\\
x &\text{ otherwise}.
\end{cases}
$

But of course, the number of pieces makes things more complicated. For example, here, we have $3$ pieces. And so, one interval input can output at most $4$ intervals.

The rest of the maps in the sample input have $3$ to $5$ pieces which, while tedious, is still manageable.

Looking at the real input, however, you have some maps having $50$ pieces -- almost double if you want to count contiguous pieces because of the "otherwise" piece. Multiplying the pieces of each of the $7$ maps, we find that we can potentially end up with billions of intervals in the final step. We don't want to be checking the minimum of these billions of intervals.

There are a lot of implementation details that need to be discussed but I'll let the code do the talking for today.

# `Range` class + tests

```python

class Range:

    def __init__(self, b = 0, l = math.inf):
        self.begin = b
        if l == math.inf:
            self.end = math.inf
        else:
            self.end = b + l - 1

    def intersects(self, other):
        if self.intersection(other):
            return True
        return False

    def intersection(self, other):
        b = max(self.begin, other.begin)
        e = min(self.end, other.end)
        if e < b:
            return None
        return Range(b, e - b + 1)

    def __lt__(self, other):
        if self.begin != other.begin:
            return self.begin - other.begin < 0
        return self.end - other.end < 0

    def __repr__(self):
        return f'{self.begin} - {self.end}'

print(Range(98, 2).intersection(Range(98, 3)))
```

# `Ranges` class + tests

```python
import copy

class Ranges:

    def __init__(self, ranges = []):
        self.ranges = copy.deepcopy(ranges)

    def add(self, new_range):
        self.ranges.append(new_range)

    def compress(self):
        return self.ranges
        self.ranges = [s for s in self.ranges if s != None]
        self.ranges.sort()
        if len(self.ranges) == 0:
            return
        ret = [self.ranges[0]]
        i = 1
        while True:
            if i >= len(self.ranges):
                break
            if ret[-1].intersects(self.ranges[i]):
                ret[-1].end = self.ranges[i].end
            else:
                ret.append(self.ranges[i])
            i += 1
        self.ranges = ret

    def __repr__(self):
        ret = "[\n"
        for r in self.ranges:
            ret += '  '
            ret += str(r)
            ret += ',\n'
        ret += "]"
        return ret


rs = Ranges()
rs.add(Range(20, 10))
rs.add(Range(25, 10))
rs.add(Range(1234, 10))
rs.add(Range(5, 10))
rs.add(Range(7, 10))
print(rs)
rs.compress()
print(rs)
```

# `get_range_from_endpoints`

Because this is bound to introduce an off-by-one error somewhere! Better do this now than later.

```python
def get_range_from_endpoints(b, e):
    if e < b:
        return None
    return Range(b, e-b+1)

print(get_range_from_endpoints(97, 100))
print(Range(98, 2).intersection(get_range_from_endpoints(97, 100)))
```

# `Map` class + tests

```python
class Map:

    def __init__(self, d, s, r):
        self.to_add = d - s
        self.range = range(s, s+r)
        self.Range = Range(s, r)
        self.s = s
        self.d = d
        self.r = r

    def apply_to_element(self, x):
        if x in self.range:
            return x + self.to_add
        else:
            return x

    def apply_to_range(self, ran):
        intersection = ran.intersection(self.Range)
        if not intersection:
            return Ranges()
        ranges = []
        ranges.append( get_range_from_endpoints(intersection.begin, intersection.end) )
        ret = Ranges([ get_range_from_endpoints(self.apply_to_element(r.begin), self.apply_to_element(r.end)) for r in ranges if r != None])
        ret.compress()
        return ret

    def untouched_ranges_from_range(self, ran):
        intersection = ran.intersection(self.Range)
        if not intersection:
            return Ranges([ ran ])
        ranges = []
        ranges.append( get_range_from_endpoints(ran.begin, intersection.begin-1) )
        ranges.append( get_range_from_endpoints(intersection.end+1, ran.end) )
        return Ranges(ranges)

    def apply_to_ranges(self, rans):
        ret = []
        for ran in rans.ranges:
            ret = ret + self.apply_to_range(ran).ranges
        return Ranges(ret)

    def untouched_ranges(self, rans):
        ret = []
        for ran in rans.ranges:
            ret = ret + self.untouched_ranges_from_range(ran).ranges
        return Ranges(ret)

    def __repr__(self):
        return f'{self.s}...{self.s+self.r-1} |-> {self.d}...{self.d+self.r-1} || {self.d} {self.s} {self.r} '

print(Map(50, 98, 2).apply_to_element(49)) #49
print(Map(50, 98, 2).apply_to_element(98)) #50
print(Map(50, 98, 2).apply_to_element(99)) #51
print(Map(50, 98, 2).apply_to_element(100)) #100

a1 = Map(50, 98, 2).apply_to_range(get_range_from_endpoints(97, 100))
a2 = Map(50, 98, 2).apply_to_range(get_range_from_endpoints(1000, 2000))
a3 = Map(52, 40, 48).apply_to_ranges( Ranges([Range(79, 14), Range(55, 13)]) )

print(a1)
print(a2)
print(a3)
```

# `parse_input`

```python
def parse_input(inp):
    seed_ranges = []
    maps = []
    for l in inp:
        if "seeds" in l:
            seed_nums = l.split(":")[1]
            seeds = [int(sn.strip()) for sn in seed_nums.split(" ") if len(sn.strip()) > 0]
            seed_ranges_raw = zip(seeds[0::2], seeds[1::2])
            seed_ranges = Ranges([Range(a, b) for (a, b) in seed_ranges_raw])
            continue
        if l == "":
            continue
        if "map" in l:
            maps.append([])
            continue
        [d, s, r] = [int(m.strip()) for m in l.split(" ") if len(m.strip()) > 0]
        maps[-1].append(Map(d, s, r))
    return {
        "seed_ranges": seed_ranges,
        "maps": maps
    }
```

# The "main" Method

I haven't thought about it much but what I did to go around the problem of having the "otherwise" piece is keeping track of the untouched intervals.

Each map would _not_ touch some part of the interval we're inputting (i.e. it would just act as the identity function). But that's not saying a different _map_ in the set would change its value later.

I opted for just keeping all the untouched ranges per map, and then filter them later to see which of them were really touched.

I'm a bit tired now and feeling poorly but if you'd want an expanded explanation for this, let me know and I'll try my best!

```python
parsed_input = parse_input(sample_input)

seed_ranges = parsed_input['seed_ranges']
maps = parsed_input['maps']

source_ranges = None

for (i,map_set) in enumerate(maps):
    if i == 0:
        source_ranges = seed_ranges
    destination_ranges = Ranges()
    untouched_ranges = []
    for j in map_set:
        new_ranges = m.apply_to_ranges(source_ranges)
        untouched_ranges = untouched_ranges + m.untouched_ranges(source_ranges).ranges
        new_ranges.compress()
        destination_ranges = Ranges(destination_ranges.ranges + copy.deepcopy(new_ranges).ranges)
        destination_ranges.compress()

    really_untouched_ranges = []
    for ur in untouched_ranges:
        touched = False
        if ur == None:
            continue
        for m in map_set:
            if ur.intersects(m.Range):
                touched = True
        if not touched:
            really_untouched_ranges.append(ur)
    cleaned_really_untouched = Ranges(really_untouched_ranges)
    cleaned_really_untouched.compress()

    source_ranges = Ranges(cleaned_really_untouched.ranges + destination_ranges.ranges)
    source_ranges.compress()

print(source_ranges)
```
