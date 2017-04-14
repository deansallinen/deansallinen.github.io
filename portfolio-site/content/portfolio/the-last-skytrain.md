+++
showonlyimage = false
draft = false
image = "img/portfolio/a4-paper.jpg"
date = "2016-11-05T18:25:22+05:30"
title = "The Last Skytrain"
weight = 1
+++

Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
<!--more-->

Brainstation Class Project

## Simplifying the late night train schedule experience
#### Rethinking data visualization

Client
Class Project

Challenges
Imagine an alternative to the official transit website that simplifies an existing multi-page workflow. Choose an appropriate taxonomy to enhance usability.

Outcome
A single page scrolling site with colour-coded and spatially related information.

### The Approach
The idea was to improve the experience of finding the time of the last Skytrain. Through research, I found that most people who need this information are searching Google on mobile and visiting the official Translink website. Unfortunately, the official website doesn't prioritize this information or make it easy to find for a first time or infrequent user (Experienced users are able to find this information through recall).

### Research

### User Personas

Key quote

#### Emily
Age: 25
Status: Tipsy
Lives in: Surrey
Currently: Downtown
Date: Friday
Time: 1:00 AM

Emily is out with friends at the Commodore Ballroom watching a live performance of local rock band Mother Mother. She's had a couple overpriced IPAs and is considering getting another. After all, she's hardly ever downtown and there's no work tomorrow morning!

After a couple of crowd-pleasing encores, the show is letting out and her group of friends are standing outside the doors. Alex and Sarah live in Yaletown and are going to walk home. A couple of others live in Kits and can catch a late night bus. Emily and her friend Katelyn need to catch the Skytrain home, but is it still running? She knows it doesn't run 24 hours, but when is the last train? She needs to find out now if she can make the train or ask Alex or Sarah to crash on their couch.

Emily pulls out her iPhone and begins her search...

#### James
Age: 29
Status: Tired
Lives in: New Westminster
Currently: Downtown
Date: Wednesday
Time: 12:45 AM

James just finished his first double shift as a concierge at his job in the Pan Pacific Hotel. He usually works the morning shift, but offered to cover for a co-worker tonight. Maybe it wasn't the greatest decision — he still has to work the morning shift tomorrow — but he knows the effect on his paycheck will be good. After 16 hours of work all he can think about right now is the sweet, pillowy softness of his bed...

After collecting his bag from his locker in the employee change room, James wonders how he's going to get home. He took the Skytrain this morning but knows from experience it doesn't run late at night. He made that mistake once and had to take an expensive cab ride from the bar to his house.

Not looking to spend the dough on a cab, James pulls out his Samsung phone and starts looking for the train schedule...

#### Experience Map

### Ideation
####Why a website and not an app?
1. Where the users are: our users James and Emily are searching for the train schedule, not an app.
2. A native app requires forethought to download. Emily doesn't take the  train very often, and wouldn't make the psychological investment in another app for her phone. James wasn't planning on staying at work this late, and wouldn't have an app for this purpose.
3. Websites are cross platform. Both our users are mobile, but if we were to develop a native app we would have to code for Android and iPhone. A website would cover their needs and provide desktop support for users who are checking this information from a larger screen (e.g. if James were to check on the concierge iMac before the end of his shift).
4. Development would be easier and faster. HTML and CSS with some Javascript is cheaper and easier than writing native applications.

#### Why a new site and not a redesign?
1. Be the change you want to see: a new site is something that can be designed, developed, and released to solve this real-world problem independently of Translink.
2. Reduced constraints: admittedly, this is a double edged sword. Without constraints of existing branding, site structure, and content it gives license for more creative solutions. However, starting from scratch means that more decisions need to be made which would already be taken care of working inside an existing framework.
3. The proposed design doesn't preclude integration into the official website.

### Process
#### Sketches
Initially the concept involved having a page for each station, organized by line, with each line visible on the home page. A user could click through from the homepage to the appropriate line, see the information they require, and click down to the station if they needed more info.

#### Wireframes
Early sketches were inspired by the "Transit" app: big colourful buttons with the time of the last train. The idea was based around **progressive disclosure** so that users looking for the departure time from the initial station had that information immediately.

#### User Testing
##### Hypotheses
1. Users will be able to find the relevant Skytrain line in the Home view
2. Users will be able to click on that line to find the Line view
3. Users will be able to use the Line view to find the departure time at their nearest station

##### Methodology


##### Results
After initial testing, I found that users would be unlikely to drill down into Station view as they either:
1. Already had the information they needed from the Line view.
2. Expected the home page to include all stations, not just terminus stations.

Another insight was that users expected a map view, or some method of viewing the spatial relationship between stations and lines.

This informed the decision to compress the site map by eliminating the station view and bring all relevant information into a line view.

##### Takeaways
The initial concept involved users learning a new taxonomy. The metaphor for the site was based on another app, which if users were not familiar with (Emily usually drives and would not use a Transit app) then it would be too time consuming.

Considering feedback from user testing and the context of our personas (fatigued and intoxicated), the site design was changed to be more compact and visual.

#### Revised Sketches
The new design was based on the map everyone sees on the Skytrain. This map is seen by every transit rider unfamiliar with the system, as they use it to navigate from their current location to their desired destination. Frequent travellers have seen this map so many times that most of them have it memorized, or are at least familiar with it's general shape and the relative location of stations.  

#### Revised Wireframes
The new design capitalizes on **recognition over recall**. The classic Skytrain map has been turned on its side to make it easier to view and scroll on mobile in portrait orientation. So while the map is no longer oriented as "north-is-up", the colouring of the lines and the progression of the stations provide enough context clues to allow users to orientate.

As users scroll down they are also scrolling through time. The farther down the page they go, the later the time of the last train. In a way, they are following the path of the last train from beginning to end.

Users who are downtown, like James and Emily, are closer to the beginning of the line. This means the train leaves earlier relative to stations further down the list. This design prioritizes those stations and minimizes scrolling for any user looking to depart from the downtown core. This assumption can be tested!

#### Prototype
This prototype was easy to create as it only involved a single scrolling page.

#### Revised Testing
##### Hypotheses
1. Users will be able to quickly find their nearest station and the time of departure.
2. Users will be able to switch directions
3. Users will be able to switch to a different line
4. The different lines on the page are distinct enough to not cause confusion

##### Methodology
In an attempt to get into the mindset of Emily, I tested users after they consumed a similar amount of alcohol.

In an attempt to get into the mindset of James, I tested users after a late night shift at work.

#####Results

### Future Directions
### Learning Outcomes
