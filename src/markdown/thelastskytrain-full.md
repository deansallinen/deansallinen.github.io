---
path: '/projects/the-last-skytrain'
date: '2017-03'
title: 'The Last Skytrain'
tags: ['UX', 'UI', 'Class Project']
toc: false
thumb: '../img/thelastskytrain/thelastskytrain-mockup2.png'
---

## Simplifying the late night train schedule experience.

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTKBguKbmOa1pL2NKYCAIuSxccFqrzEGRIKFhE1Swz2cUDizma1A4IGniRa-3CujzJuzJfvKFwrq6hv/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Rethinking data visualization as part of a Brainstation Class Project. My challenge was to imagine an alternative to the official transit website that simplifies an existing multi-page workflow while choosing an appropriate taxonomy to enhance usability.

## Outcome

A single page scrolling site with colour-coded and spatially related information.

## The Problem

The idea was to improve the experience of finding the time of the last Skytrain.

Through research, I found that most people who need this information are searching Google on mobile and visiting the official Translink website.

Unfortunately, the official website doesn’t prioritize this information or make it easy to find for a first time or infrequent user (Experienced users are able to find this information through recall).

## Research

I began this project by researching the current process of finding the time of the last Skytrain.

Official Website
existing steps

Even with prior knowledge of the click path to get to the time of the last train, the small text size and poor information architecture make this process difficult on mobile.

For a first time or occasional user the process is not immediately obvious.

Google Maps
"Power users" often used Google Maps to find the time of the last available transit. This works well for those that know about the feature, and are looking for the latest time to head home.

However, this only shows the last couple methods to arrive at your destination, most of which are late night busses. For example, in the video I recorded here, we can see that the train isn't even listed as an option.

This doesn't help the user looking for the last Skytrain home.
Almost a hidden feature, and still doesn't answer our question: "When is the last Skytrain?"
User Personas
To better understand the target user, a couple of personas were created.

Emily Chambers
girl drinking a beer
Age: 25
Status: 🍺 🍺 🍺
Lives in: Surrey
Currently: Downtown
Day: Friday
Time: 1:00 AM

Key Quote
"lmao once i missed the last skytrain and i had to wander around downtown at 2am looking for a night bus home! not fun!"
User Story
Emily is out with friends at the Commodore Ballroom watching a live performance of local rock band Mother Mother. She's had a couple overpriced IPAs and is considering getting another. After all, she's hardly ever downtown and there's no work tomorrow morning!

After a couple of crowd-pleasing encores, the show is letting out and her group of friends are standing outside the doors. Alex and Sarah live in Yaletown and are going to walk home. A couple of others live in Kits and can catch a late night bus. Emily and her friend Katelyn need to catch the Skytrain home, but is it still running? She knows it doesn't run 24 hours, but when is the last train? She needs to find out now if she can make the train or ask Alex or Sarah to crash on their couch.

Emily pulls out her iPhone and begins her search...

James Eldrich
sharply dressed man
Age: 29
Status: 😴 💤
Lives in: New Westminster
Currently: Downtown
Day: Wednesday
Time: 12:45 AM

Key Quote
"Last time I read the Translink schedule incorrectly I missed the last helicopter out of Saigon. Not looking forward to another cab ride!"
User Story
James just finished his first double shift as a concierge at his job in the Pan Pacific Hotel. He usually works the morning shift, but offered to cover for a co-worker tonight. Maybe it wasn't the greatest decision — he still has to work the morning shift tomorrow — but he knows the effect on his paycheck will be good. After 16 hours of work all he can think about right now is the sweet, pillowy softness of his bed...

After collecting his bag from his locker in the employee change room, James wonders how he's going to get home. He took the Skytrain this morning but knows from experience it doesn't run late at night. He made that mistake once and had to take an expensive cab ride from the bar to his house.

Not looking to spend the dough on a cab, James pulls out his beloved Samsung S8 and starts looking for the train schedule...

## Experience Map

The experience map was created for a step by step analysis on what a user, in this case James, would feel as they tried to find the time of the last train home.

experience map

## Ideation

I began by considering the options available. We could either:

Improve the official website. Make it easier for users to navigate and find the information they require. This would be an ideal solution, but would mean I could only provide an unsolicited redesign and our users will still have their needs unmet.
Improve the Google maps option and simplify the process for less-technical users. This would require a redesign of the Google maps app to better advertise transit options, and is not an easy undertaking.
Create a new website. This would allow for a tailor-made experience that solves the user’s problem directly.
For this project I decided to move forward with option 3 and create and new website.

## Why a website and not an app?

Where the users are: our users James and Emily are searching for the train schedule, not an app.

A native app requires forethought to download. Emily doesn’t take the train very often, and wouldn’t make the psychological investment in another app for her phone. James wasn’t planning on staying at work this late, and wouldn’t have an app for this purpose.

Websites are cross platform. Both our users are mobile, but if we were to develop a native app we would have to code for Android and iPhone. A website would cover their needs and provide desktop support for users who are checking this information from a larger screen (e.g. if James were to check on the concierge iMac before the end of his shift).

Development would be easier and faster. HTML and CSS with some Javascript is cheaper and easier than writing native applications.

train lines
Nope.
timeline view
Nope.
low fidelity mockup
Yep.
Why a new site and not a redesign of the official site?
Be the change you want to see: a new site is something that can be designed, developed, and released to solve this real-world problem independently of Translink. This will allow us to build a product that takes a concept and implements a solution. Ideally, Translink would consider the UX of their site. In the meantime, we can help these users ourselves.

Reduced constraints: admittedly, this is a double edged sword. Without constraints of existing branding, site structure, and content it gives license for more creative solutions. However, starting from scratch means that more difficult decisions need to be made which would have already be taken care of by working inside an existing framework.

The proposed design doesn’t preclude integration into the official website. If Translink likes the solution, the unofficial website could be folded in to the official one. As long as the user’s needs are being met!

## Process

## Inspiration

Early sketches were inspired by the "Transit" app, another valuable resource for any commuter.

There would be a list of train lines with big colourful buttons including the time of the last train.

Transit app inspiration
Transit app, available on iOS and Android.
Initial Sketches
Initially the concept involved having a page for each station, organized by line, with each line visible on the home page.

A user could click through from the homepage to the appropriate line, see the information they require, and click down to the station if they needed more info.

train lines
Main page with colour-coded service lines.
timeline view
Line view with station name and departure time.
low fidelity mockup
Station view with all lines and associated departure times.
Initial Wireframes
Early feedback indicated that the station view was redundant. Once a user entered the line view, their questions had already been answered.

low fidelity mockup
V1 - Tapping on a train line would take the user to the line view.
The idea was based around progressive disclosure so that users looking for the departure time from the initial station had that information immediately.

medium fidelity mockup
V2 - Better affordances on the buttons should allow for easier discoverability.
Prototype
User Testing
Hypotheses
Users should be able to find the relevant Skytrain line in the Home view
Users should be able to click on that line to find the Line view
Users should be able to use the Line view to find the departure time at their nearest station
Methodology
The first test was conducted in an interview style. Participants were asked to imagine themselves at a certain station, eg. Granville, and navigate to their home station, eg. Lougheed.

They were asked to verbally walk through their thought process throughout the experiment.

## Results

After initial testing, I found that users were unlikely to drill down into Station view as they either:

Already had the information they needed from the Line view.
Expected the home page to include all stations, not just terminus stations.
Another insight was that users looked for a map view. They expected some method of viewing the spatial relationship between stations and lines.

## Takeaways

The initial concept involved users learning a new taxonomy. The metaphor for the site was based on another app, which if users were not familiar with (Emily usually drives and would not use a Transit app) then it would be too time consuming.

Considering feedback from user testing and the context of our personas (fatigued and intoxicated), the site design should be more compact and more visual.

## Round Two

## Revised Ideation

Initial research helped inform the decision to reduce the site footprint, eliminate the station view, and bring all relevant information into a line view.

To accomplish this goal, a new design based on the familiar Skytrain route map was considered.

skytrain map
Transit map as seen onboard a Skytrain
Frequent travellers have seen this map so many times that most of them have it memorized, or are at least familiar with it’s general shape and the relative location of stations.

This map is also seen by every transit rider unfamiliar with the system, as they use it to navigate from their current location to their desired destination.

## Revised Sketches

The new design was based on the map everyone sees on the Skytrain, but rotated to better accomodate mobile screen length.

new sketch
Station view with all lines and associated departure times.
Revised Wireframes
The new design capitalizes on recognition over recall. The classic Skytrain map has been turned on its side to make it easier to view and scroll on mobile in portrait orientation.

So while the map is no longer oriented as “north-is-up”, the colouring of the lines and the progression of the stations should provide enough context clues to allow users to orientate.

As users scroll down they are also scrolling through time. The farther down the page they go, the later the time of the last train. In a way, they are following the path of the last train from beginning to end.

Users who are downtown, like James and Emily, are closer to the beginning of the line. This means the train leaves earlier relative to stations further down the list. This design prioritizes those stations and minimizes scrolling for any user looking to depart from the downtown core. This assumption can be tested!

## Prototype

The second prototype:

Hmm... looks like a lot of scrolling...
Future Directions
Revised Testing
Users should be able to quickly find their nearest station and the time of departure.
Users should be able to switch directions of the line
Users should be able to switch to a different line
The different lines on the page should be distinct enough to not cause confusion
Methodology
In an attempt to get into the mindset of Emily, I will be testing users after they consumed a similar amount of alcohol.

In an attempt to get into the mindset of James, I will be testing users after a late night shift at work.

## Results

Hopefully the new design will outperform the previous design.

If not, then elements of the two can be combined to create a hybrid design with the best of both.

## Learning Outcomes

This project has been instrumental in teaching the value of testing designs with users early and often. The faster you can get a design idea in front of real users, the less time you waste on creating something that doesn’t solve the problem at hand. -
