---
title: "Advent of Code 2023: Day 17"
layout: "../../layouts/PostLayout.astro"
category: Advent of Code
author: guissmo
date: 2023-12-23T16:51:43+00:00
description: My solution to the Day 17 Advent of Code 2023 Problems.
slug: advent-of-code-2023-day-17
math: true
---

I've paused looking at the Advent of Code problems but I thought I should write about [Day 17](https://adventofcode.com/2023/day/17) since this was the problem that had made me use more than "three Jupyter notebooks" because I didn't bother using Git for versioning.

Here's my [Day 1](../advent-of-code-2023-day-1/), [Day 3](../advent-of-code-2023-day-3/), and [Day 5](https://adventofcode.com/2023/day/5) blog posts. I've done all the problems up to Day $20$ so far but I'm not posting every day.

As before, here's the code for my leaderboard: `1598637-22d94a1d`. You use [this link](https://adventofcode.com/2023/leaderboard/private) to add it once you're logged in. And if you wake up earlier than me (which is probably the case), you'll probably be higher up because the way they score the leaderboard is mental.

## The Graph

Surely, this was a shortest distance problem but not directly on the "most obvious" graph, which is to take the elements of the grid as the vertices.

I've used Dijkstra's algorithm (and modified it) in various programming comptetitions back in college but I went to skim its [Wikipedia page](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm) to get reacquainted. I didn't read it word-for-word because I knew I couldn't just copy-paste the algorithm. Just enough to remind me of the broad strokes.

I imagined the graph to be composed of nodes labelled with:

- the position $(i, j)$ of the crucible,
- the direction $d$ of the crucible when it entered, and
- and the number of steps $s$ it has left before being forced to turn.

The edges would be straightforward to determine, albeit long to explain.

Now, we can prepare our data structure, a dictionary this time, to keep track of which of these nodes have already been visited:

```python
def blank_dico(grid, val=None):
    ret = {}
    for i in range(len(grid)):
        for j in range(len(grid[0])):
            for d in ['up', 'down', 'left', 'right']:
                for s in range(4):
                    ret[(i, j, d, s)] = val
    return ret
```

For my big input, this means that I had to visit at most $141 \times 141 \times 4 \times 4 = 318096$ nodes and do stuff that many times potentially. It's doable even though it's a bit _scary_.

## The Messy First Draft

But before we get to doing stuff, we need to make some preparations. We could either go `right` or `down` in the beginning and we have the write to $3$ steps at that point.

The rest is just a ceremony to prepare us for the interesting part of the code...

```python
def solve_prob(grid):
    seed = [(0, 0, 'right', 3), (0, 0, 'down', 3)]
    vis = blank_dico(grid, False)
    dist = [[math.inf for c in l]for l in grid]

    max_i = len(grid)
    max_j = len(grid[0])

    to_visit = []

    for s in seed:
        to_visit.append((0, s))

    dist[0][0] = 0

    while len(to_visit) > 0:
        # stuff #

	return dist
```

...which is the inside of this `while` loop.

### The `While` Loop

There's a reason why we chose the elements of `to_visit` to be a tuple with the shortest distance on the first coordinate. It is because we want to continuously keep `to_visit` sorted.

I did that by sorting `to_visit` every time we restart the loop.

We then pop the first element out, figure out where we are in the grid ($k = (i, j, d, s)$), and mark that as the shortest distance from $(0,0)$ to $(i, j)$ by going the direction $d$ and still having $s$ steps left to continue in that direction. That's a mouthful, but this isn't the most elegant solution at this point.

That's for later when this ultimately stops being efficient for the Part $2$ problem.

```python
while len(to_visit) > 0:

        to_visit = sorted(to_visit)
        curr = to_visit.pop(0)
        x, k = curr

        i, j, d, s = k

        if x < dist[i][j]:
            dist[i][j] = x

        ### cont'd - A ###
```

While writing this, I thought about the `if` statement. I think this is no longer necessary given that `to_visit` is already sorted. (Update: Removing the `if` seemed to affect the answer. Homework why. I have some intuition why but I don't want to delve into that.)

Moving on, we then skip this entry on `to_visit` if we have actually already visited it. After that check, we mark that key $(i,j,d,s)$ as visited. Classic stuff for this type of algorithm.

```python

### cont'd - A ###

if vis[k]:
	continue

vis[k] = True

### cont'd - B ###

```

### The `For` Loop Within

And now the `for` loop where the meat of the logic lies.

But first, a little commercial break. We define these constants (globally) to make our life easier.

```python
dirs = {
    'up': (-1, 0),
    'down': (1, 0),
    'left': (0, -1),
    'right': (0, 1),
}

perp = {
    'up': ['left', 'right'],
    'down': ['left', 'right'],
    'left': ['up', 'down'],
    'right': ['up', 'down'],
}
```

The `dirs` dictionary converts directions to numbers. The `perp` dictionary tells us which directions we can go to (with $3$ steps) if we turn. Surely, there would have been a high IQ way to do this than hardcoding, but we're dealing with four things so I could argue that hardcoding and not thinking about that high IQ way would be faster anyway.

While writing this post, I started commenting on the `for` loop and it seems that there are several things that seem redundant. And as we know, redundancy has to be addressed. But not now. The following code works, with all its imperfections for getting an answer to part $1$.

```python

### cont'd - B ###

## We can either turn (element in perp[d]) or continue (d).
for pdir in perp[d] + [d]:
	accu = 0
	## We can continue this many steps.

	for steps in range(1, s+1):

		## Ugly special cases for when we are at the starting point.
		if (i, j) != (0, 0) and pdir == d:
			continue
		if (i == 0 and j == 0) and pdir != d:
			continue

	  ## Our new position if we follow that new direction
		ni, nj = (i + dirs[pdir][0]*steps, j + dirs[pdir][1]*steps)

		## If statement to make sure we don't go out of bounds.
		if 0 <= ni and ni < max_i and 0 <= nj and nj < max_j:
			## Accumulate the cost of moving so far.
			accu += grid[ni][nj]

			## New k.
			new_k = (ni, nj, pdir, s - steps)

			## This code works but this should probably be outside the inner loop lol.
			if pdir != d:
				new_k = (ni, nj, pdir, 3)

			to_visit.append((x + accu, new_k))
```

After $256$ seconds (on a laptop on battery), I get my big input answer for Part 1.

## A Redemption Arc

After that very messy first draft, Part $2$ gives me a chance to redeem myself because it's different enough, but still kinda similar to Part $1$.

One thing that made my Part $1$ so slow was that I was sorting every time. With $N$ being our magic number ($141 \times 141 \times 4 \times 4 = 318096$) from above, We expect to be sorting at most $N$ times. That gives us an $O(N^2 \log N)$ algorithm, roughly. And for this problem, that algorithmic complexity is [like Michael Jackson released back in 1987](https://youtu.be/dsUXAEzaC3Q?t=74) -- bad. That means we shouldn't be needing to sort at every iteration.

And so we replace our `to_visit` with a priority queue. After some research, one implementation of this is `heapq`. Pushing into a priority queue would be equivalent to a binary search (to find its position) which would be an $O(\log N)$ operation and an insert operation ($O(N)$ in Python?). So $O(N)$ in total. Much better than $O(\log N)$. I'm probably overestimating things but at least we find that things are much better.

After that, we [draw the rest of the owl](https://knowyourmeme.com/memes/how-to-draw-an-owl):

```python
MIN_STEPS = 4
MAX_STEPS = 10

def solve_prob(grid):
    seed = [(0, 0, 'right', MAX_STEPS), (0, 0, 'down', MAX_STEPS)]
    vis = blank_dico(grid, False, MAX_STEPS)
    dist = [[math.inf for c in l]for l in grid]

    max_i = len(grid)
    max_j = len(grid[0])

    to_visit = []

    for s in seed:
        heapq.heappush(to_visit, (0, s))

    dist[0][0] = 0

    while len(to_visit) > 0:

        curr = heapq.heappop(to_visit)
        x, k = curr

        i, j, d, s = k

        if x < dist[i][j] and s <= MAX_STEPS - MIN_STEPS:
            dist[i][j] = x

        if i == max_i - 1 and j == max_j - 1:
            break

        if vis[k]:
            continue

        vis[k] = True

        for pdir in perp[d]:
            accu = 0
            for steps in range(1, MAX_STEPS + 1):
                ni, nj = (i + dirs[pdir][0]*steps, j + dirs[pdir][1]*steps)
                if 0 <= ni and ni < max_i and 0 <= nj and nj < max_j:
                    accu += grid[ni][nj]
                if steps < MIN_STEPS:
                    continue
                if 0 <= ni and ni < max_i and 0 <= nj and nj < max_j:
                    new_k = (ni, nj, pdir, MAX_STEPS - steps)
                    heapq.heappush(to_visit, (x + accu, new_k))

    return dist
```

This majestic (compared to the previous) code took some time to do but I think it's readable enough that we could understand what it does. Hopefully.
