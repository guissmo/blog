---
title: "TKinter to Plotly"
layout: "/src/layouts/PostLayout.astro"
category: Mini Projects
author: guissmo
date: 2024-01-04T21:55:09+00:00
categories:
  - Mini Projects
description: I help a programming teacher out by transitioning code from TKinter to Plotly.
slug: tkinter-to-plotly
math: true
---

A teacher I know wanted to give an exercise to the students that involves writing some code that uses a function to draw a tree. He was inspired by this other [French teacher](http://info.sytes.free.fr/) who uses `Tkinter` for his exercises.

His exercise was simple enough. Students have to make the computer draw a given tree. The solution is straightforward. Import an external Python file (that is given) which defines a function called `dessine`, write code to represent the given tree in Python, and then use the `dessine` function with that tree as an input. The function `dessine` then uses `Tkinter` to draw the tree.

My teacher friend wrote his answer to this exercise locally and the `dessine` function works perfectly. However, when he tried answering the exercise as a student would (i.e. using the French _Education nationale_ servers), it wouldn't work.

After some debugging, we found out that it was because `Tkinter` opens a new window from a different application in order to draw the tree. This is fine if you're working locally but a security issue if you are using a browser-based app. Browser-based apps cannot (and should not be able to) open random applications in your file system.

After a quick search, we found that `plotly` seemed to be a good candidate. The advantage of `plotly` is that it was compatible of showing the drawings directly on Jupyter notebook. Unexpectedly, updating the `dessine` function from using `Tkinter` to `plotly` was easier than expected. The old `dessine` function uses some auxiliary functions to figure out the coordinates of the nodes and the line segments on the tree. Hence, it was only a matter of looking at the documenation of both libraries and translating them.

At the end of the day, everyone was happy. I learned about plotly and had a small little puzzle after dinner, my teacher friend was able to give the exercise, and I heard that there were audible "wows" in the classroom when the students saw the `plotly` graphs.

PS: Here are the codes: [old tkinter version](/assets/tkinter-to-plotly/tkinter.py) from [French teacher](http://info.sytes.free.fr/), and [my version](/assets/tkinter-to-plotly/plotly.py).
