---
title: "Making an animated gradient border using CSS"
layout: "../../layouts/PostLayout.astro"
category: Front End
author: guissmo
date: 2024-02-14T21:12:04+00:00
draft: false
toc: true
markup: "mmark"
categories:
  - Frontend
  - CSS
slug: animated-gradient-border-using-css
tags:
  - css
---

Recently, I had the need to make a button that:

- had rounded borders,
- had text inside,
- had borders which was an animated gradient

So basically this:

<!--raw html-->
<div class="gradient-border polyfill-gradient-animation">
  <button class="button">
  PRESS ME!
  </button>
</div>

And this is possible using the following HTML code and a dash of CSS magic.

```html
<div class="gradient-border">
  <button class="button">PRESS ME!</button>
</div>
```

# Setting Up

After some online searches, I didn't find out how to have borders in CSS with gradients. And so, for my workaround, we will need to layer two elements on top of each other, one slightly smaller, to emulate a bordered element.

<!--raw html-->
<div style="max-width: 90%; overflow: hidden;">
<div class="pretend-border">
  ME PRETENDING TO BE A BORDER
  <button class="needs-border">
  I NEED A FAKE BORDER
  </button>
</div>
</div>

To achieve that, we have the following CSS code:

```css
.outside {
  /* relevant stuff*/
  position: relative;
}

.inside {
  /* relevant stuff*/
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
}
```

The inner element (green) needs to be positioned relative to the outer element (cyan). To do this, we set `absolute` as the `position` value for the inner element, and `relative` for the outer element.

The `position: relative` for the outer element is important [as we have previously discovered](/blog/bypassing-overflow-hidden-rule-in-css/#position-absolute). If we don't do that, the inner element would be positioned relative to the closest positioned ancestor, which can be anything!

For this example, we want there to be borders on all directions. Therefore, our inner element needs to be "centered". To do that, simply displace it by the desired with of your border using the `top` and `left` properties, and then use the calculate function to compute the width and height values which will "center" this element.

# Animating Conic Gradients

But of course, we are not here for solid borders. We want gradients. After a quick search, we get the following code:

```css
.gradient {
  --angle: 1turn;
  border-radius: 15px;
  background: black conic-gradient(
    rgb(255, 255, 255, 0) 0rad,
    rgb(255, 255, 255, 0.6) 1rad,
    rgb(255, 255, 255, 0) 3rad
  );
}
```

And hence we will have something like this:

<!--raw html-->
<div class="gradient-border no-animation">
</div>

To animate it, however, we use `keyframes` and `properties` as shown in [this page](https://www.bram.us/2021/01/29/animating-a-css-gradient-border/):

```css
@keyframes rotate {
  from {
    --angle: 0turn;
  }
  to {
    --angle: 1turn;
  }
}

@property --angle {
  syntax: '<angle>';
  initial-value: 0turn;
  inherits: false;
}
```

and of course we adapt our gradient class accordingly

```css
.gradient {
  --angle: 1turn;
  animation: 2s rotate linear infinite;
  border-radius: 15px;
  background: black conic-gradient(
    rgb(255, 255, 255, 0) calc(0rad + var(--angle)),
    rgb(255, 255, 255, 0.6) calc(1rad + var(--angle)),
    rgb(255, 255, 255, 0) calc(3rad + var(--angle))
  );
}
```

to get this:

<!--raw html-->
<div class="bad-animation polyfill-gradient-animation">
</div>

As you can see, it has an ugly discontinuity. So we still have to fix it.

# Fixing the Discontinuity

We actually discovered a limitation of conic-gradient. Everything beyond 360 degrees (i.e. `1turn` in our code) is ignored. The conic gradient doesn't wrap around nicely as if we were in a trigonometry course.

I fixed this by simulating a "second" conic gradient behind the first one, which is just one turn late. This way, as soon as one part of the gradient goes beyond $360$ degrees, the exact gradient "comes out" of $0$ degrees. This $0$ and $360$ degree angle is the point of discontinuity we saw earlier.

```css
.gradient-border {
  --angle: 1turn;
  animation: 2s rotate linear infinite;
  border-radius: 15px;
  background: black conic-gradient(
    rgb(255, 255, 255, 0) calc(-1turn + 0rad + var(--angle)),
    rgb(255, 255, 255, 0.6) calc(-1turn + 1rad + var(--angle)),
    rgb(255, 255, 255, 0) calc(-1turn + 3rad + var(--angle)),
    rgb(255, 255, 255, 0) calc(0rad + var(--angle)),
    rgb(255, 255, 255, 0.6) calc(1rad + var(--angle)),
    rgb(255, 255, 255, 0) calc(3rad + var(--angle))
  );
}
```

And here is what it now looks like:

<!--raw html-->
<div class="gradient-border polyfill-gradient-animation">
</div>

Bringing back our "inner layer", we get this:

<!--raw html-->
<div class="gradient-border polyfill-gradient-animation">
  <button class="button">YAY!</button>
</div>

# Javascript Fallback

If you're using Safari or some other lame browser, the animation might not have been working this whole time. This is because not all browsers implement this properly. I can't understand why because everything seems to be supported according to [caniuseit](https://caniuse.com/), so I must be missing something.

In any case, we don't have a pure CSS solution yet as of time of writing. So we add the following:

To work around that we add a `setInterval` script.

```javascript
const startTime = Date.now();
setInterval(() => {
        const DURATION = 2000;
        const NEW_VALUE = `${((Date.now() - startTime) % DURATION) / DURATION}turn`;
        const COMPONENT = Array.from(document.getElementsByClassName("gradient-border")).forEach( (component) => {
        component.style.setProperty('--angle', NEW_VALUE);
      })
    }, 20)
```

Every $20$ milliseconds, it changes the value of `--angle` depending on the difference between the `startTime` (i.e. when the script was loaded) and `Date.now()` which gives the current "date" (the number of milliseconds after 1 January 1970). Taking this modulo the intended duration ($2000$ ms in this case) and dividing by the same number gives a number from $0$ to $1$ -- which represents the progress of the animation at any given time.

Doing this is needlessly complicated and perhaps at some point in the future, everything will be supported.

# Conclusion

So to conclude, if you have a lame browser, this probably wont work:

<!--raw html-->
<div class="gradient-border">
  <button class="button">MAYBE?</button>
</div>

But adding the Javascript polyfill, this one should:

<!--raw html-->
<div class="gradient-border polyfill-gradient-animation">
  <button class="button">IT WORKS!</button>
</div>

It's a great puzzle that I enjoyed doing.

One _open problem_ would be to use math to change the speed of the animation, so you would feel like the "gradient" snake doesn't speed up on the edges.

Feel free to get in touch if you have any questions, or comments. Or if you have anything to add! That would greatly be appreciated.

<script>

const startTime = Date.now();

setInterval(() => {
      const DURATION = 2000;
      const NEW_VALUE = `${((Date.now() - startTime) % DURATION) / DURATION}turn`;
      const COMPONENT = Array.from(document.getElementsByClassName("polyfill-gradient-animation")).forEach( (component) => {
        component.style.setProperty('--angle', NEW_VALUE);
      })
  }, 20)

</script>

<style>

.no-animation {
  animation: unset!important;
}


.pretend-border {
  position: relative;
  width: fit-content;
  overflow: hidden;
  height: 50px;
  background: cyan;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
}

@keyframes reveal {
  0% {
    transform: translateX(0%);
  }
  25% {
    transform: translateX(120%);
  }
  50% {
    transform: translateX(120%);
  }
  75% {
    transform: translateX(0%);
  }
}

.needs-border {
  position: absolute;
  top: 5px;
  left: 5px;
  border-radius: 0;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  animation: 5s reveal linear infinite;
  
  background: lightgreen;
  color: black;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes rotate {
  from {
    --angle: 0turn;
  }
  to {
    --angle: 1turn;
  }
}

@property --angle {
  syntax: '<angle>'; /* this one is important */
  initial-value: 0turn;
  inherits: false;
}

.gradient-border {
  --angle: 0turn;
  animation: 2s rotate linear infinite;
  /* padding: 2px; */
  border-radius: 15px;
  background: black conic-gradient(
                  rgb(255, 255, 255, 0) calc(-1turn + 0rad + var(--angle)),
                  rgb(255, 255, 255, 0.6) calc(-1turn + 1rad + var(--angle)),
                  rgb(255, 255, 255, 0) calc(-1turn + 3rad + var(--angle)),
                  rgb(255, 255, 255, 0) calc(0rad + var(--angle)),
                  rgb(255, 255, 255, 0.6) calc(1rad + var(--angle)),
                  rgb(255, 255, 255, 0) calc(3rad + var(--angle))
  );

  position: relative;
  width: min(300px, 95vw);
  height: 50px;
}

.bad-animation {
  --angle: 0.8turn;
  animation: 2s rotate linear infinite;
  /* padding: 2px; */
  border-radius: 15px;
  background: black conic-gradient(
                  /* rgb(255, 255, 255, 0) calc(-1turn + 0rad + var(--angle)),
                  rgb(255, 255, 255, 0.6) calc(-1turn + 1rad + var(--angle)),
                  rgb(255, 255, 255, 0) calc(-1turn + 3rad + var(--angle)), */
                  rgb(255, 255, 255, 0) calc(0rad + var(--angle)),
                  rgb(255, 255, 255, 0.6) calc(1rad + var(--angle)),
                  rgb(255, 255, 255, 0) calc(3rad + var(--angle))
  );

  position: relative;
  width: min(300px, 95vw);
  height: 50px;
  pointer-events: none;
}

.button {
  
  position: absolute;
  cursor: pointer;
  z-index: 10;
  
  font-size: 20px;

  background: black;
  color: white;

  width: calc(100% - 10px);
  height: calc(100% - 10px);
  top: 5px;
  left: 5px;

  border-radius: 15px;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

}


</style>
