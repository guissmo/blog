---
title: "Bypassing Overflow Hidden Rule in CSS"
layout: "../../layouts/PostLayout.astro"
category: Code
author: guissmo
date: 2023-05-30T01:00:54+02:00
draft: false
toc: true
markup: "mmark"
categories:
  - Frontend
  - CSS
slug: bypassing-overflow-hidden-rule-in-css
tags:
  - css
---

I used to go to [stackexchange](https://stackexchange.com) for figuring out how to position things in CSS. In particular, how to use the `position` property. Until March this year, where I finally looked around and taught myself how each position arguments differ.

There are five non-global values that you can put in `position`. In this post, we discuss the `static`, `relative`, and `absolute` values and how they work together to override an `overflow: hidden` rule.

A solution to do this was posted by user parliament on [stackexchange](https://stackoverflow.com/a/29687454) back in $2015$.

They did not write in detail why it worked and so I needed to fill in the blanks to make sure I understand what was happening.

The other two properties -- `fixed` and `sticky` are interesting in their own right but they are not necessary for bypassing the `overflow: hidden` rule.

## `position: static`

If you don't assign a value to `position`, it defaults to `static`. With `static`, the `top`, `left`, `bottom`, `right` and `z-index` properties are ignored. Thankfully, I learned this before wasting more time wondering why `top` and `left` aren't doing anything!

## `position: relative`

Assigning an element the `position: relative` style will position it as if it were static.

But now, the `top`, `left`, `bottom`, `right` and `z-index` properties have an effect.

Positive values for `top` and `left` will _displace_ the element downwards and rightwards. And negative values will _displace_ it towards the opposite direction.

Positive values for `bottom` and `right` work like `top` and `left` respectively, but multiply the values by $-1$! That's interesting.

At this point, you'd be like "so why do we need _two_ values doing the same thing"? What is the difference between `static` and `relative`? The answer lies by how _their children_ position themselves. More info on that later! But now an interesting detour I made while writing this article...

## Detour: precedence

This has nothing to do with our main question but: what if you put `top` and `bottom` values in the same element?

```css
el {
  position: relative;
  top: 50px;
  bottom: 50px;
}
```

The element ignores the value for `bottom` and _displace_ itself downwards by 50 pixels.

This shows that `top` and `bottom` don't add up.

Switching the order of the properties like so

```css
el {
  position: relative;
  bottom: 50px;
  top: 50px;
}
```

results in the same thing.

Much like some people in online dating apps, CSS has a preference for `top`.

A similar thing happens for `left` and `right`.

For some reason, this favoritism even trumps specificity.

Having this as css:

```css
.moved {
  position: relative;
  left: 5px;
}

#moved2 {
  position: relative;
  right: 5px;
}
```

will still move the element $5$ pixels rightwards. Meaning it favors the `left`. Before we get more political, lets move to the next section.

## `position: absolute`

`position: absolute` removes the element from the flow of the document.

What exactly is the `flow`? Depending on your element's `display` property, the browser determines the position of the elements using some special algorithm.

Using `position: absolute` on an element exempts it from this algorithm if it is accompanied by one of the directional properties: `left`, `right`, `top` or `bottom`.

It positions itself relative to its **closest positioned ancestor** -- meaning, anything that's not static. This is the key difference between `position: static` and `position: relative`.

This code:

```html
<div style="position: relative; background: white; padding: 50px;">
  <div style="width: 30px; background: black; padding: 50px;">
    <div
      style="position: absolute; background: blue; width: 5px; padding: 5px; z-index: 0"
    ></div>
    <div
      style="position: absolute; background: yellow; width: 5px; padding: 5px; top: 0px"
    ></div>
    <div
      style="position: absolute; background: red; width: 5px; padding: 5px; left: 0px"
    ></div>
  </div>
</div>
```

outputs this sad version of a [Piet Mondrian](https://fr.wikipedia.org/wiki/Piet_Mondrian) painting.

<!-- raw html -->
<div style="position: relative; background: white; padding: 50px;">
  <div style="width: 30px; background: black; padding: 50px;">
    <div style="position: absolute; background: blue; width: 5px; padding: 5px; z-index: 0"></div>
    <div style="position: absolute; background: yellow; width: 5px; padding: 5px; top: 0px"></div>
    <div style="position: absolute; background: red; width: 5px; padding: 5px; left: 0px"></div>
  </div>
</div>
      
Notice that not putting `top` or `left`, as in the case of the blue `div`, did not take the element out of the flow -- which is something I did not expect based on the wording in the documentation.

## How to bypass `overflow: hidden`

One consequence of the fact that `position: absolute` is drawn with respect to its closest positioned ancestor, we could selectively choose which divs respect `overflow: hidden`.

This is done by having a positioned `div`, wrapped around a non-positioned `div` with `overflow: hidden` which itself is wrapped around:

- a `div` with `position: absolute`, if we want overflow to be _bypassed_, or
- a `div` with `position: relative`, otherwise

The code would look like this:

```html
<div style="position: relative; background: white;">
  <div style="width: 10px; background: black; padding: 50px; overflow: hidden;">
    <div
      style="position: absolute; background: blue; width: 100px; padding: 5px; top: 0px;"
    ></div>
    <div
      style="position: relative; background: magenta; width: 100px; padding: 5px; top: 0px;"
    ></div>
  </div>
</div>
```

and the `html` would look like this:

<!-- raw html -->
<div style="position: relative; background: white;">
  <div style="width: 10px; background: black; padding: 50px; overflow: hidden;">
    <div style="position: absolute; background: blue; width: 100px; padding: 5px; top: 0px;"></div>
    <div style="position: relative; background: magenta; width: 100px; padding: 5px; top: 0px;"></div>
  </div>
</div>

Then you can put anything you want in this overflowing `div`!
