---
title: "Pari Tutorial: The Basics"
layout: "/src/layouts/PostLayout.astro"
category: Math
author: guissmo
date: 2023-01-09T08:04:51Z
draft: false
toc: true
categories:
  - Math
  - PARI
description: An overview of basic PARI/GP functions
slug: pari-tutorial-part-1-the-basics
tags:
  - PARI
  - tutorial
  - math
---

---

I am writing this for participants of the CIMPA Summer School 2023 in Manila but this post may be useful for you if you want to learn more about PARI/GP.

This page is currently work in progress so feel free to email me if you find typos and inaccuracies!

## Basics

When a `?` and a rectangle appears, that means it is time to write some code!

Let's start by breaking PARI.

### Divide by Zero

Enter the following code

```c
1/0
```

You will see an error because you're not supposed to divide by 0.

Instead of the `?` you will have `break >`.

Simply press `Ctrl + D` to go back to the normal `?` prompt.

### Long Loop

Now, we enter a function that does not finish for a long time:

```c
for( i=1, 10^100, 1+1)
```

This is a loop that computes `1+1` for a total of `10^100` times.

Once this is running, you might want to stop or pause the computation. You can pause the computation by pressing `Ctrl + C`.

You will have the `break >` prompt again. From there you can either enter nothing and let the computation continue or press `Ctrl + D` to completely cancel the computation.

### The Usual Suspects

Addition, subtraction, multiplication and division can be done using the usual `+`, `-`, `*` and `/` operators.

Parentheses can be used as well to group operations. Exponentiation is written as `^` and factorials are written as `!`.

For simplicity we will use `x`, `y`, and `z` for the variables of polynomials.

What polynomial does this code represent?

```c
(x^2 - 1)*(x^2 + 2023!/2023!)
```

You can use `a%b` to get the remainder of `a` when divided by `b` when `a` and `b` are valid inputs.

### Keeping Score

Whenever you write code that returns something (for example `1+1`), PARI responds by giving something of the form:

```c
%1 = 2
```

The number after the `%` indicates that it is the $1\text{st}$ output. And the ` = 2` means that the first output is `2`.

**TRY IT OUT:** What does `%` return?

#### Exercise: Percent

If I write this and press ENTER:

```c
5 + 6
```

What will be the output if I write this immediately after and then press ENTER?

```c
%%3
```

#### Variables

The `%n` syntax is helpful for quickly accessing past computations. But you can assign variables.

For example, writing

```c
two = 5
three = 7
3*two + 2*three
```

will give you `29`.

Make sure to name your variables in a non-confusing way, unlike the example above.

For our purposes, **NEVER** assign `x`, `y` or `z` to any number unless you know how to "unassign" it. We will be using `x`, `y`, and `z` for variables in polynomials.

### Pi

`Pi` is a variable which already has a value.

Type `Pi` and press Enter to see what PARI thinks its value is.

### Space

Like an overly attached partner, PARI does not understand the meaning of space.

```c
1            + 1
```

will give you the same result as

```c
1+1
```

### Various Other Tricks

If you press the Up and Down arrow keys, you can scroll through the previous commands that you've written. Useful if you need to modify a command that you just entered!

If you want to search for functions but have no idea what its name is, type `???"phrase"` where you replace `phrase` with some words related to your function. For example, `???"number field"` shows you functions that are associated to number fields.

If you have a function that you want to get to know further, type `??functionname` where `functionname` is of course the name of the function. This will show the full documentation of that function -- either as a PDF or on your terminal screen (depending on your computer).

Say you want to recap a function that you've used before and just want a summary -- then you can use `?functionname`. It will return a short summary that tells you how to use the function.

On some computers, you can also use `Tab` to give suggestions on how to complete what you're writing. For example, typing `nf` and double pressing `Tab` gives you all the functions which start with `nf`.

## Vectors

### Constructing Vectors

Vectors can be constructed in PARI by using square brackets:

```c
[1, 2, 3, 4, 5]
```

is a vector.

### Example: Divisors Function

The `divisors` function returns a vector of the divisors of the input in ascending order.

For example:

```c
divisors(2023)
```

returns

```c
[1, 7, 17, 119, 289, 2023]
```

### Example: Number field discriminant

Number fields are represented in PARI by a vector containing relevant information.

To get a representation of the number field

$K = \mathbb{Q}(z) = \mathbb{Q}[X]/(z^2+1)$

in PARI, we use `nfinit`:

```c
K = nfinit(z^2 + 1)
```

The code above assigns to `K` a vector representing $K$.

According to the documentation, `nfinit` returns a vector whose 3rd component is the discriminant of the number field it represents.

To access the third component of the vector `K`, we use brackets:

```c
K[3]
```

**SURPRISE QUIZ:** What would the above code return?

**ONLY FOR PROS:** Find a way to return the field discriminant without needing to remember its position in the vector.

## Matrices

### Example: Factor matrix

When given a positive integer $n$, the `factor` function gives a matrix whose first column contain the prime factors of $n$ and the second column contains their corresponding exponents.

For example

```c
factor(5!)
```

gives you the matrix

```c
[2 3]
[3 1]
[5 1]
```

showing that

$
5! = 2^3 \cdot 3 \cdot 5.
$

### Accessing elements of a matrix

Just like vectors, you can access elements of a matrix by using brackets.

For example:

```c
M = factor(5!)
M[3,1]
```

gives you `5`, the entry on the third row and first column of the matrix `M`.

**TRY IT OUT:** What happens when you omit one of the two numbers? Say you put `M[3,]` or `M[,1]`?

**GUESS AND CHECK:** What do you think a `~` after a vector represents?

**SURPRISE QUIZ:** Make PARI return a vector containing the prime factors of $10^{50} + 2023$.

## Writing Functions in PARI/GP

### Example: Sum of Squares

In PARI, a function $f(x, y) = x^2 + y^2$ can be written as:

```c
sumOfSquares(x, y) = {
    return(x^2 + y^2)
}
```

Hence,

```c
sumOfSquares(3, 4)
```

will return `25`.

### Detour: Boolean expressions

In PARI (and in most languages), mathematical expressions involving inequalities get replaced with `1` if the statement is true and `0` otherwise.

And so expressions such as `2-1 < 3*2`, `3 <= 2`, and `1 > 2` will be either `0` or `1`.

For asking whether two things are equal, we use `==`. For example, `1 + 1 == 2` will return `1` (meaning true) but `1 + 1 = 2` will result in an error.

We can't use only one `=` symbol because the `=` symbol already stands for "assign this expression on the right to the variable on the left".

### Detour: `if` function

In PARI, the `if` function returns the second argument if the first argument is true and returns the third argument otherwise.

**SURPRISE QUIZ:** What would the following code return?

```c
if( 230-220 / 2 == 5! , 5 , 120)
```

**TRY IT OUT:** What would happen if you omit the second and third arguments in an `if` statement?

### Example: isEven

Here is a function which takes as input a non-negative integer less than 4 and returns the integer `0` if it is odd and `1` if it is even.

```c
isEven(n) = {
	if(n==0, return(1));
	if(n==1, return(0));
	if(n==2, return(1));
	if(n==3, return(0));
}
```

In the above function, we see the `if` function for the first time.

**SURPRISE QUIZ:** Find a partner and together write an improved `isEven` function, which works for any integer less than 10. Feel free to copy parts of the code!

**SURPRISE QUIZ:** Given two (horizontal) vectors `x` and `y` of equal length, write a function that returns their dot product.

## Importing Files

## Exercises

1. Write a function that, given an irreducible polynomial $f$ over the integers, computes the Minkowski bound of the number field defined by $f$.
2. Write a function that takes as input a negative integer $D$ and a rational prime $p$ and outputs whether $1$ if $p$ splits in $\mathbb{Q}(\sqrt{-|D|})$ and $0$ otherwise.
