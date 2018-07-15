---
path: "/projects/bc-votes"
date: "2017-05"
title: "BC Votes"
---

## A project to compare BC political parties, display platforms, and find candidates.

This was an design and front-end development exercise and a collaboration with my friend @Rizwan who did scraping and back-end development.

## Problem Space

Leading up to the British Columbia provincial election on May 9th, 2017 there was no easy way to find the candidates for a given riding.

This project aimed to help inquisitive citizens find that information simply and quickly.

## Ideation

Initial brainstorming had the site act as a dashboard where users could compare party platforms and candidates, view important election issues, individual candidate stances, find ridings and voting places, and add the election day to their calendar. The idea was to have an unbiased one-stop-shop to help get you up to speed on the election, inform your voting decision, and help you remember where and when to vote.

This idea came out of conversations with young voters who didn’t follow politics. Young adults are less likely to watch cable TV, and therefore local news programs, which would feature election coverage on a regular basis. These millennial voters are more likely to look online for information to help them decide who to vote for, if they have decided to do research on the parties and the relevant issues.

The scope was ambitious given the hard deadline of May 9th, election day. We assumed that a site providing pre-election research utilities would become less relevant after that date.

## Personas

Our target user is a young millennial:

* Their first (or second) provincial election
* Cordcutter (no cable TV)
* Gets news from social media, if any
* Beginning to take an interest in social issues
* Young career professional
* Renting in the suburbs

## MVP

Throughout the project we had to narrow the scope and focus on areas we could provide the most impact for our investment.

There is always a tradeoff between scope, budget, and time.

We found that our scope outweighed our budget and schedule availability. This was a side project done in the evenings and weekends on a total budget of $20 or less (domain registration and hosting cost). This means we would not be able to:

* Hire a team to implement all of the features, or
* Dedicate the hours ourselves to implement all the features we wanted.

We found that other players in the space were already doing party comparison (vote compass), and election issues with party stances (ICAN). Both of these services have been around for multiple elections and have had more time to become the valuable resources they currently are. Our user would be better off using those sites for their specific purposes, so we decided to focus on a more neglected area: the candidates over the parties.

> Our budget and time constraints dictated that we reduce the initial scope.

Prior to starting the project the only way to find a list of candidates was a PDF on the Election BC site. We thought this would be a good place to begin improving the election research experience for our users.

The minimum viable product was a list of all candidates displayed in an HTML table.

The second revision added a filtering option that allowed users to sort by riding, candidates, or political parties.

## Setbacks and Solutions

Throughout the project we tried to balance speed, simplicity and responsive design. The HTML table was an easy solution for an MVP, but proved difficult to view on mobile.

To solve the display issues, we added:

```
table {overflow:scroll;}
```

This provided a good interim solution, and a passable mobile experience, but doesn’t get to the root of the problem: the table.

At this point we were forced to make a decision: continue to add functionality to the site at the expense of the mobile experience, or redo the backend with a database that would allow for more flexible display options?

## Lessons Learned

For next time, we would change a couple of things:

1.  Delay coding until at least one round of a design sprint was completed. When the idea was pitched, we got excited and introduced technical debt by not considering how difficult it would be to create responsive tables.
2.  Do more branding research before buying the domain name. After we began building the product and hosted it on www.bcvotes.info we realized that the CBC was naming all of their BC election coverage pages “BC Votes - “. This practically ensured our project would take an SEO hit and be buried under dozens of CBC articles, effectively putting us out of contention for the front page of a Google search. Next time, we would love to collaborate with a marketing or SEO specialist to better brand the product, be more visible to the target audience, and thereby provide more people the opportunity to use the site.
