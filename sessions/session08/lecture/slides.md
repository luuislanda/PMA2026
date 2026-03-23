---
theme: academic
class: 'text-center'
transition: slide-left
title: PMA2026 Session 8
mdc: true
hideInToc: true
---

# Session 8: Alignment of Expectations


Exam draft and aligning our expectations for the rest of the semester


<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/luuislanda/PMA2026" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>


---
layout: default
hideInToc: true
---

# Table of Contents

<Toc maxDepth="2"></Toc>



---

# Course Announcements

- I am 1/3 in checking your assignment #1, expect to be done by friday next week
- All groups that were called numbers have been renamed, check them out
- 
- Draft 1 of the exam brief is now available on LearnIT and in the repository

---
layout: center
---

# Exam Showcase

Let's look at the first draft of the exam brief.

You can find it on LearnIT and in the repository:

[Direct Link Here](https://github.com/luuislanda/PMA2026/blob/main/assignments/exam/first_draft.md)

<style>
h1 {
    text-align: center;
}
p {
    text-align: center;
}
</style>

---
layout: center
---


## Demo 1: App that has minimum requirements for Exam



---
layout: center
---


## Demo 2: App that has minimum requirements for Exam,  but nicer



---
layout: center
---

They both obtain the same grade: pass.

---
hideInToc: true
---

# Alignment of Expectations: Exam

Do you think it's fair? Take 5 minutes and discuss it with your neighbour

We'll then discuss it in class


---
hideInToc: true
---

If you are reading this from home (or dont want to participate in class), you can leave your feedback in this Mentimeter also vailable on LearnIT. 

I will review all feedback before presenting the final version of the exam next session. 

---
hideInToc: true
---

# Why do they both pass?

- Because the exam is not grading originality of the app idea
- Because both prototypes communicate a clear concept, despite differences in "polish" and features
- Because both can demonstrate the required interaction and navigation

In other words, they meet the minimum requirements set by the exam document.

---
hideInToc: true
layout: two-cols-header
---

## How are these two examples different?

Beyond the fancy features and design differences, the apps take two approaches. But fundamentally, they are the same

::left::

1st Example:
- Mainly showcases the App
- Language/text of App is as if it was the "real" app
- Does not acknowledge it's a prototype

::right::

2nd Example:
- Explicitly says its a prototype
- Uses UX/Navigation to show the user through the prototype/app
- Populates the screens with "fake" features



---

# Prototype Ideation and Reality Check

You can go for almost any idea you can think of, as long as it fits the actual exam brief.

Here is one practical way to go from idea to prototype:

1. Idea
2. Sketch all the screens you think you need
3. Think about how the user will move between those screens
4. Break each screen into React Native components
5. Make sure you meet all minimum requirements
6. Write your report
7. If you want, continue polishing the app after the minimum version works


---
layout: center
---

Let's do this live, suggest an idea 

---

## An example of how to build your app from an idea

Example: a journal / mood tracking app

1. Core idea: Let a user log moods and short notes
2. Pen and paper/whiteboard: sketch all main screens before coding
3. Decide what the core user flow is
4. Minimum screen plan:
  - Home
  - Add entry
  - Entry history
  - Entry details
  - Profile / settings
5. Add the required 3 onboarding screens
6. Use `BottomTabNavigator` as main navigation
7. Add `NativeStackNavigator` inside one tab for History -> Details
8. Share data across at least 2 screens

The point is not to have the best idea. The point is to choose an idea that lets you clearly demonstrate the requirements.


---
hideInToc: true
---

## A reality check based on your exam requirements

Before committing to an app idea, check this:

- Can I realistically design 5 app screens and 3 onboarding screens?
- Can I use bottom tabs as my main navigation?
- Can one screen flow become a stack navigation?
- Can I let the user input data and see that data in another screen?
- Can I make a Figma file for all screens?
- Can I document the work in the written report?
- Can I meet the accessibility requirements with my chosen interface?

If the answer is "no" to several of these, the idea is probably too ambitious or not a good fit for this course.


---
hideInToc: true
layout: two-cols-header
zoom: 0.9
---

# Is my app idea "not allowed"?

Some people have asked me if their idea of an would be too complicated and therefore not allowed for this exam.

The answer is simple: can you demo your app idea via the UI/UX alone?

If not, then your app is too complicated and indeed not allowed
If yes, then your idea is perfectly suited for the exam!

::left::

Example 1: Card (non-alcoholic) drinking game

To demo such an app, you would have to code a big part of the game. Meaning you would have to handle:
- Game logic
- Graphics
- Multiple states

Veridict: _Very_ hard to prototype

::right::

Example 2: Social media for 3D cats

To demo such an app, you do not have to have a fully rendering 3D function. Some images can replace the 3D cats. You can:
- Make a screen for the profile, home, feed, one for a non-functional 3D cat scanner
- Show how users "make" points in the feed via `<View>`s and `<Text>`s

Veridict: Easy to prototype


---
layout: center
---

Ok but what if I _really_ _really_ want to code my prototype of a complicated app?

Then just be strategic, so long as you meet the minimum requirements you will pass!


---
hideInToc: true
layout: image-right
image: https://www.pragmaticcoders.com/wp-content/uploads/2024/10/Projekt-bez-nazwy-11-min.jpg.webp
backgroundSize: 100%
---

# Good prototype ideation

- Your concept is not what is being graded
- The prototype must be working and interactive
- It should show the core idea clearly, not every possible feature
- It is okay to simplify features if you explain the choice in the report
- A smaller idea implemented clearly is better than a big idea that does not meet the minimum requirements

---
hideInToc: true
layout: image-right
image: https://brightspotcdn.byu.edu/dims4/default/0a05f77/2147483647/strip/true/crop/4256x2832+0+0/resize/800x532!/quality/90/?url=https%3A%2F%2Fbrigham-young-brightspot-us-east-2.s3.us-east-2.amazonaws.com%2Fdf%2F10%2F91a10875fc217246f49fe8ae04b5%2Four-town-156.JPG
backgroundSize: 100%
---

# A convincing prototype does not need everything

- Your prototype does not need every feature from the final imagined app
- It needs enough working interaction to make the idea understandable
- The user should quickly understand what the app is for, who it is for, and how it would be used
- Think of it as proving the concept, not finishing the product

---
layout: image-left
image: https://d3h2k7ug3o5pb3.cloudfront.net/image/2021-10-04/77e7e650-24c0-11ec-b1a1-2f17757ade0b.gif
zoom: 0.9
---

# How to make an prototype feel convincing

- Make the core user flow work from start to finish
    - Take advantage of the onboarding screens to guide the user to do what you want them to do
- Use realistic screen titles, labels, and example content
- Show cause and effect: input something here, see the result somewhere else
- Keep the visual language consistent so the app feels like one product
- Make the most important actions obvious and easy to test

---
hideInToc: true
layout: center
---


# Focus on one interaction

- You have limited resources to code your app
- It is better to have one feature working clearly than five fake features
- Even better if the feature is directly related to the concept of the app!
- Static screens are fine if they support the story of the app
- But at least one central interaction should feel real
- For example: add entry -> save -> see it in history -> open details

This is what makes the prototype persuasive.

---
hideInToc: true
layout: center
---

# Communicate the missing parts

- A good onboarding flow can explain the purpose of the app
- As you saw in the example, **sometimes** acknowledging this is a prototype can be convincing
- Thoughtful placeholder content can suggest future use without pretending it already exists
- A consistent Figma design helps the prototype feel more complete than the code alone
- It also reassures me and others that you have vision for the app


---
layout: center
---

Break
See you in 15 minutes


---

# Aligning Expectations: The second part of the course

From now on, the course changes pace. Next week, we will see our last  "new" concept, onboarding screens. And finalise our cat feeder app to deal with more than one data point.

This means, that you will have:

- More time to refine your prototype
- More time to align your work with the exam brief

It also means that we have a few sessions that we can dedicate to new topics or to revise some old topics.

In total we have 2 sessions available, which can be divided into four 45 minute sessions.

---

# Possible topics for the second part of the course

- Planning the development of a mobile application
- Using AI to program mobile applications
- Figma clickable prototypes
- How to showcase your prototype in your portfolio
- Next steps if mobile app development interests you
- Recap of anything related to React Native



---
hideInToc: true
---

# Planning the development of a mobile application

- How to go from idea -> screens -> components -> code
- How to scope your app so it fits the exam
- How to split work in a group without overlapping too much
- How to decide what is core functionality and what is optional polish

---
hideInToc: true
---

# Using AI tools to program mobile applications

- How to use AI as support instead of as a replacement for understanding
- How to document AI usage correctly for the exam
- How to evaluate generated code before trusting it
- How to reflect critically on AI use in your report

---
hideInToc: true
---

# Figma clickable prototypes

- How to turn static screens into a simple clickable flow
- How to test navigation logic before coding
- How to use Figma to communicate your idea clearly
- How the design file supports both the prototype and the written report

---
hideInToc: true
---

# How to showcase your prototype in your portfolio

- How to present the concept, process, and final prototype clearly
- How to show both design thinking and technical implementation
- How to document decisions, trade-offs, and learnings
- How to make the project useful beyond this course

---
hideInToc: true
---

# Next steps if mobile app development interests you

- What to learn after this course
- What kinds of mobile projects are good practice next
- How React Native connects to broader frontend development
- How to keep building a portfolio after the exam

---
hideInToc: true
---

# Recap of anything related to React Native

- Components
- Styling and layout
- Inputs and interactivity
- State and data flow
- Navigation
- Accessibility

This is the part of the course where we can slow down and revisit what you need most.


---

Let's open menti again and vote!

---
hideInToc: true
---

# Final thought for the exam

- You do not need the world's most original app idea
- You do need a prototype that is clear, interactive, and understandable
- If the user can see the idea, navigate the app, and understand the main interaction, then the prototype is doing its job

That is what we have been building towards the whole semester.

---

# Exercises

### App ideation exercise and breaking things into components. 

For this session, we will not ask you to program but instead we will follow an exercise on how to plan an app and break it into react native components.


---

# Next Session

- Next week it's holidays!
- So we begin again on the 7th of April
- Session 9 was supposed to be a guest lecture, but so far no one confirmed :/
- I will most like do the contents of session 10 in session 9
- That means we'll look at the Onboarding Screens