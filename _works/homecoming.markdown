---
layout: portfolio-item
title: UBC Homecoming 2019 Microsite
description: Research, Design, Development
author: Duncan Schouten
date: 2020-01-26 00:00:00 +0000
sort-order: 2
image: '/uploads/Homecoming__Portfolio-Thumbnail.png'
tags: []

---

<style type="text/css">
  h3:not(:first-child) {
   margin-top: 1em;  
  }

  h4, h5 {
    margin-top: 0.5em;
    margin-bottom: 1rem !important;
  }
</style>

{::options parse_block_html="true" /}
<div class="callout summary bottom-margin">
## Summary
In 2019, I led redesign of the [UBC Homecoming microsite](https://homecoming.ubc.ca) as part of my employment with *alumni UBC*.

My work included **business analysis, UX design, usability testing, and front-end development.**

The **original event budget included $30,000** for external design and development resources for this project. Instead, I was able to complete it entirely in-house at **zero additional cost.**
</div>

## Project overview

### The problem
User and business stakeholder feedback indicated that previous versions of the UBC Homecoming microsite were failing to meet the needs of either group. Users expressed that they faced **difficulty finding and navigating the site's most critical content;** stakeholders reported that **the site's architecture prevented effective promotion of individual Homecoming events.**

### Our approach
In conjunction with the Homecoming project manager, I worked to **identify core business needs** and **synthesize feedback** gathered after previous years' Homecoming festivities.  

We ultimately chose to focus on **redesigning three key areas with high potential for impact:**
1. Site homepage
2. Directory of events
3. “Getting Around” page to facilitate guests’ experience on the day of the event   

Then, I worked with stakeholders to **define system features, investigated potential technical solutions, created wireframes and functional prototypes, and conducted usability testing.** Finally, working with a visual designer to provide assets, I **designed and developed the final product.**

### My role

I worked on this project as **researcher, lead designer,** and **developer** as part of my employment with *alumni UBC.*

#### Main areas of responsibility:

* Eliciting business requirements
* User and competitive research
* Feature definition
* Wireframing & prototyping
* Usability testing
* Information architecture
* User interface design
* Development (HTML, CSS, and JavaScript)

{::comment}
{::options parse_block_html="true" /}
<div class="callout left-highlight red bottom-margin top-margin">
### Challenge: resource, timeline, and technology constraints

TO BE COMPLETED.
</div>
{:/comment}

{::comment}
### Outcomes

Uhhhhhhh......
{:/comment}

## Research and Discovery
{: .portfolio-item .section-title}


### Business goals

My discovery process began with interviews of event stakeholders to elicit high-level business goals for the site. Three goals, in particular, were emphasized:

{::options parse_block_html="true" /}
<ol>
  <li>Increase ease of managing the site, particularly the event schedule</li>
  <li>Allow direct links to individual Homecoming events</li>
  <li>Increase ticket sales for paid events
    <div class="callout left-highlight list-indent red">
    Note: This goal was later determined to be out of scope for this project
    </div>
  </li>
</ol>


### User needs and pain points

Without time or resources for primary user research, I **gathered user feedback recorded by event stakeholders after previous Homecoming events.** While this data was limited, two actionable points emerged:
1. Users reported difficulty finding and navigating the site’s core content, particularly details on individual Homecoming events
2. Users sought to use the site as a tool to guide and facilitate their on-campus experience while taking part in Homecoming festivities

## Website Design
{: .portfolio-item .section-title}



### Feature definition

After defining business and user needs, I **led a workshop with stakeholders to identify and prioritize key features to be built into the new site.** Recognizing project limitations, these features were decided primarily on the basis of what might provide “quick wins” for business and users:

#### Homepage
* Action-oriented “task bar” to facilitate the completion of common user tasks and surface core areas of the site
* Promotion of key events to increase their visibility

#### Event Schedule
* Individual pages for each event, to, ideally, be implemented by way of a system that allows for easy addition of new events and automatic resorting in the event directory

#### "Getting Around"
* Interactive map showing the locations of, and directions to, events across campus -- as well as the real-time location of the free shuttle busses -- to facilitate a better “day-of” experience for users

#### Site-wide
* Improve mobile responsivity



### Wireframing

{::options parse_block_html="true" /}
<div class="callout left-highlight grey bottom-margin top-margin">
#### Constraint: Adherence to UBC brand and website standards

As part of the UBC ecosystem, several aspects of the Homecoming microsite’s design were dictated by the university’s “[Common Look and Feel](https://clf.ubc.ca/)” (CLF), a web-specific extension of institutional brand guidelines.

This was advantageous with our constrained timeline, however, as the CLF includes a brand-compliant pattern library that has been validated for usability -- providing a much-needed reduction to project scope.
</div>

After establishing system features, I **created a variety of low/medium-fidelity wireframes to explore potential layout options.**

These options were presented to stakeholders, who expressed their preferences and provided feedback. Ultimately, however, they deferred to my knowledge of UX best practices to provide direction on what layouts would likely be most effective for our use cases.

![Collage of wireframes](/uploads/Homecoming__Wireframe-Collage.png#full)
{: data-aos="fade-in"}


### Provisional designs

{::options parse_block_html="true" /}
<div class="callout left-highlight grey bottom-margin top-margin">
#### Constraint: No current content available at time of design

Scheduling necessitated that the 2019 Homecoming microsite be designed before the event details were fully defined or any supporting content was produced. This meant that the design needed to be flexible and unopinionated in order to support a range of potential content.
</div>

Once page layouts had been finalized, I **collaborated with the *alumni UBC* visual designer on provisional high-fidelity final designs,** which were then approved in consultation with project stakeholders.

![Collage of provisional designs](/uploads/Homecoming__Provisional-Designs--tall.png#full)
{: data-aos="fade-in"}


### Usability testing and design iteration

While I was reasonably confident that the provisional designs would not present any significant usability issues, I nevertheless wanted to test this assumption. To do this, **I employed a “guerrilla” approach to usability testing, presenting tasks to organizational staff, office visitors, and my friends and relatives.**

Although I was correct in my assumption that few issues emerged through testing, two feature requests were made by users that stakeholders agreed should be incorporated:
1. Ability to filter both the schedule and interactive map by event category and time of day
2. Indicate the shuttle bus’ direction of travel

![Getting Around - Interactive map after usability testing](/uploads/Homecoming__Post-Testing-Getting-Around-Map.png#full)
{: data-aos="fade-in"}


## Development
{: .portfolio-item .section-title}

### My role
{::options parse_block_html="true" /}
<div class="callout left-highlight red bottom-margin top-margin">
#### Challenge: No dedicated developer available

After completing the provisional designs and preparing materials for handoff to development, I learned that the project’s intended developer was no longer available.
</div>

Absent a dedicated developer, I agreed to take on this role. Our constrained timeline for execution, however, required that efforts be made to reduce feature complexity.

In the end, stakeholders agreed to **remove the interactive "Getting Around" map from the final site build.** The design of individual event pages, as well, was simplified to better align with the output of the CLF’s default event management plugin.


### Approach used
{::options parse_block_html="true" /}
<div class="callout left-highlight red bottom-margin top-margin">
#### Challenge: No code-level access to site

Because the Homecoming website is not a property of *alumni UBC,* we did not have code-level access to its WordPress installation.
</div>

Without the ability to create new WordPress templates or modify existing ones--and facing a tight timeline--I needed to employ a messier approach to development than is ideal.

This involved finding ways to inject HTML and CSS into pages, as well as using JavaScript and jQuery to modify the Document Object Model (DOM) output from WordPress plugins as needed.

## Outcomes
{: .portfolio-item .section-title}

<div class="callout left-highlight green">
The **original event budget included $30,000** for external design and development resources for this project. Instead, I was able to complete it entirely in-house at **zero additional cost.**
</div>
