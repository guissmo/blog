---
title: "A Quick Pari Script Enumerating Class Groups"
layout: "../../layouts/PostLayout.astro"
category: Math
author: guissmo
date: 2023-03-16T23:44:55+01:00
categories:
  - Math
  - PARI
description: An overview of basic PARI/GP functions
slug: a-quick-pari-script-enumerating-class-groups
tags:
  - basics
  - PARI
math: true
---

Back in the Manila CIMPA 2023, I thought it would have made a great PARI/GP exercise to

> Print the class groups of $\mathbb{Q}(\sqrt{p}, \sqrt{q}, \sqrt{r})$ for triples $(p, q, r)$ such that $p, q, r$ are primes $1 \mod 4$ and any pair between these three primes have a Legendre symbol of $1$.

Why this particular problem? Because I wrote a solution to this exercise when Peter Koymans went into my office and asked for it.

After printing some of the class groups, he was quite pleased since it did verify one of the results he was working on, which eventually ended up to be Theorem 1.1 in [this article he wrote with Carlo Pagano](https://arxiv.org/pdf/1909.13871) where the 15 minutes I took to code was generously acknowledged.

I couldn't find the code anymore and so I rewrote it so that I know the "answer" to the exercise which I was supposed to give, but never had the time.

Here is the PARI/GP code in all its glory.

```c
{
MAX = 100;
forprime(p=2, MAX,
   if(p%4 != 1, next());
   forprime(q=p+1, MAX,
      if(q%4 != 1, next());
      if(kronecker(p,q) != 1, next());
      forprime(r=q+1, MAX,
        if(r%4 != 1, next());
        if(kronecker(p,r) != 1, next());
        if(kronecker(q,r) != 1, next());
        pPol = x^2 - p;
        qPol = x^2 - q;
        rPol = x^2 - r;
        bigPol = polcompositum(pPol, polcompositum(qPol, rPol)[1])[1];
        print(p," ",q," ",r," ",bnrinit(bnfinit(bigPol, 1),[1,[1,1,1,1,1,1,1,1]]).cyc);
      )
   )
)
}
```
