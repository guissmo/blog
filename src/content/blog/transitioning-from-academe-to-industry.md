---
title: "Transitioning From Academia Math to Industry"
layout: "../../layouts/PostLayout.astro"
category: Life
author: guissmo
date: 2023-03-22T22:20:31+01:00
draft: false
toc: true
categories:
  - Work
description: My experiences as a recent PhD graduate looking for a job in the industry.
slug: transitioning-from-academe-to-industry
tags:
  - industry
  - academe
  - tips
---

I have had a couple of friends and acquaintances who are thinking to move from a research position to a tech industry job. I ironically had to do **a lot of research** while doing this transition, so I guess the four years of doing research helped!

I know such a _big decision_ can be paralysing to the point that you continuously procrastinate and so I write this down so you could have something to start with.

## The Resumé / Industry CV

### A Modular CV

One of the things that surprisingly took a lot of time was the resumé. Good news, you can use LaTeX to write it!

Like theses chapters, I organized each section in partial files and so my main `tex` file looked like this:

```
\input{EN/section-intro}
\input{EN/section-skills}
\input{EN/section-projects}
\input{EN/section-work-experience}
\input{EN/section-volunteer-experience}
\input{EN/section-education}
\input{EN/section-languages}
```

Having each section be represented by "one line of code" makes it easy to reorder them.

I heard that the order of the section matters. In the same way that you would read the first few paragraphs of a paper and then leave it open with your hundred other open tabs, you could expect that the hiring manager will do something similar.

I looked around online and in some books as to what would be the sensible way to order the sections. I ended up with skills and personal projects on top, work experience in the middle and education below.

Another advantage of this modular CV is that you can have different variants of sections the different sections depending on the job you're applying for.

### Education

In my first drafts of this CV, under Education, I tried to explain how I studied elliptic curves, prime numbers, abelian varieties and such.

After reflecting on it, I realized whoever's reading it will probably not know or care about principally polarized abelian varieties. On the other hand, I can't NOT write it down because hey, that was a huge chunk of my professional life!

I ended up with a "rule" where I just write at most **one line** to describe what I did by using as many "industry" words I possibly can but at the same time making sure I was not lying.

### Work Experience

Most of my work experience was in a university as a student. I had to think long and hard as to what to write in the space below each work experience.

I realized that whatever is in the resumé does NOT have to have greatly contributed to writing the thesis but it had to show that I somehow had some experience in programming, algorithms and coding.

I've heard some applicants came from very non-technical backgrounds and get accepted after following a bootcamp or too. I feel that any amount of coding or programming you've _voluntary_ did would put you at the same level, if not better, than these other applicants.

Maybe you did a computer-assisted calculation for one part of your thesis, or you used Git to keep versions of your thesis. You have to search deep down!

### Skills

I luckily had some tech skills due to my interest when I was doing my bachelors but most of them were "old" technologies. In the end, I still had to study to actually have something written down in this section of the CV.

And so I did.

## Adding Skills

Because I did not have such a huge network outside of academe, open postdoc positions came straight to my mailbox but not open tech positions in the industry.

### What Skills To Add

I don't have much to say but I basically looked in LinkedIn and a bunch of other websites where there are open positions for a job that I thought I liked. At that time, I was quite open and searched for data science jobs, back-end jobs, front-end jobs, scientific engineer jobs and looked at the requirements.

The only requirement I satisfied "with proof" was to have an education and so there was a long list of things that I had to study.

Don't let the dozens of different technologies scare you away. If you can satisfy a third or a half of what they want, go apply for the job. You can learn the rest on the job, or while doing the interviews. You're a PhD student, you can teach yourself and you can learn fast.

### Why Having a PhD Helps You Learn Faster

Everyone will have a different way of teaching themselves so I will not go into specifics. In the end, this section sounds more like a "motivational" speech which I admittedly needed a lot of during my job hunt.

Now that you know which requirements are the most "in-demand", now it's time to learn them.

Academics know how to ask questions and are not so ashamed to ask them.

We've done the whole "this is what I read, I tried this and that but I still don't understand what is happening" that it seems like the only way people ask questions. But this _attitude_ is something that I thought developped in me during a PhD.

The PhD would have also trained you to have more courage to ask "stupid" questions. You had to. Otherwise, you would never finish your thesis. This comes in handy as you would be able to "unstuck" yourself faster.

Not a lot of jobs "train" you to ask "stupid" questions. Some environments might even discourage it implicitly.

### Make Personal Projects

Anyone can write "taught myself X and Y" on their CV and it's not really verifiable. To have something verifiable, you either need to have a certificate from some reputable bootcamp or you need to have publicly available personal projects.

I personally don't have a lot to say about bootcamps, not because I don't like them but I haven't had any experience with them. I personally did not go to any of those because (1) I did not have a lot of money at that time, (2) I did not have a lot X months to spare because my student visa was expiring soon among other things and (3) a good friend told me I would stand out more if I actually have some _personal projects_ in my "portfolio".

It would show that I had the technical skills, the ability to teach myself, the organizational skills to plan and excute a project, and the determination to finish a project until the end. That's a lot of skills showcased in a couple of lines in the CV! But of course, I think it is more difficult and more scary than simply taking a bootcamp.

On the other hand, you have a fun new project to write on your CV. I also feel having personal projects can also help convince. It gives potential employers a real peek into your skills that a piece of paper cannot.

Another unexpected benefit that the personal projects did for me was that I was so happy about how it turned out that I posted a link to my project on social media. Friends and family commented on it, and eventually it reached people that had suggestions on how to proceed!

It was definitely better than simply making a post "looking for a job here's my CV" on Facebook.

Here's a link to [the personal project I'm talking about](https://hotornot.guissmo.com).

My fingers are sore from typing now but I hope that this somehow helped or motivated you if you were planning to transition from academe to the industry.

Let me know if this helped you. Maybe I could even write a second post based on the questions and comments you have.
