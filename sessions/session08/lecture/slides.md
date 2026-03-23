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

- All groups that were called numbers have been renamed, check them out
- Draft 1 of the exam brief is now available on LearnIT and in the repository
- 

---

# Exam Showcase

Let's look at the first draft of the exam brief.

You can find it on LearnIT and in the repository:

[Exam Draft 1](https://github.com/luuislanda/PMA2026/blob/main/assignments/exam/first_draft.md)

---

## Demo 1: App that has minimum requirements for Exam

---

## Demo 2: App that has minimum requirements for Exam but nicer

---
layout: center
---

They both pass! 

---
hideInToc: true
---

# Why do they both pass?

- Because the exam is not grading originality of the app idea
- Because both prototypes communicate a clear concept
- Because both can demonstrate the required interaction and navigation
- Because both can be documented and reflected on in the report

In other words, they meet the minimum requirements set by the exam document.

---
hideInToc: true
---

# Alignment of Expectations: Exam

Do you think it's fair? Take 5 minutes and discuss it with your neighbour

We'll then discuss it in class

---
hideInToc: true
---

If you are reading this from home (or dont want to participate in class), you can leave your feedback in this Menti also vailable on LearnIT. 

I will review all feedback before presenting the final version of the exam next session. 

---
hideInToc: true
---

# What the exam is really asking from you

- Build a working mobile prototype in React Native
- Show that the prototype communicates a clear app idea
- Demonstrate the minimum technical requirements
- Demonstrate the minimum accessibility requirements
- Document your process, decisions, and limitations in the report


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
hideInToc: true
---

# Planning the development of a mobile application

- How to move from idea -> screens -> components -> code
- How to scope an app so it matches the exam requirements
- How to split work in a group without creating chaos
- How to decide what is core and what is optional polish

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
---

# Ideas for apps that are too hard for the exam

These are examples of ideas that do not match the scope of the course well:

- Games or anything that depends on advanced game logic
- Apps that require real-time collaboration
- Audio, photo, or video editing apps
- Concepts that only make sense with a complex backend
- Re-making the cat feeding app from class as your exam app

Good exam ideas are usually simple, screen-based, and easy to prototype with local state and clear navigation.

---
hideInToc: true
---

# Good prototype ideation from the brief

- Your concept is not what is being graded
- The prototype must be working and interactive
- It should show the core idea clearly, not every possible feature
- It is okay to simplify features if you explain the choice in the report
- A smaller idea implemented clearly is better than a big idea that does not meet the minimum requirements

---
hideInToc: true
---

# A convincing prototype does not need everything

- Your prototype does not need every feature from the final imagined app
- It needs enough working interaction to make the idea understandable
- The user should quickly understand what the app is for, who it is for, and how it would be used
- Think of it as proving the concept, not finishing the product

---

# How to make an prototype feel convincing

- Make the core user flow work from start to finish
- Use realistic screen titles, labels, and example content
- Show cause and effect: input something here, see the result somewhere else
- Keep the visual language consistent so the app feels like one product
- Make the most important actions obvious and easy to test

---
hideInToc: true
---


# Focus on one interaction, the rest is decoration

- It is better to have one feature working clearly than five fake features
- Even better if the feature is related to the concept of the app!
- Static screens are fine if they support the story of the app
- But at least one central interaction should feel real
- For example: add entry -> save -> see it in history -> open details

This is what makes the prototype persuasive.

---
hideInToc: true
---

# Use design to communicate the missing parts

- A good onboarding flow can explain the purpose of the app
- Clear empty states can show what will happen once the app has more data
- Thoughtful placeholder content can suggest future use without pretending it already exists
- A consistent Figma design helps the prototype feel more complete than the code alone
    - It also reassures me that you have vision for the app

---
hideInToc: true
---

# Things you might want to mention in the written report

- Which parts of the concept are fully implemented
- Which parts are simplified
- Which parts are intentionally left out
- Why those choices still communicate the core value of the app
- What you would build next if you had more time


---
layout: center
---

Break


---

# Aligning Expectations: The second part of the course

From now on, the course changes pace. Next week, we will see our last  "new" concept, onboarding screens. And finalise our cat feeder app to deal with more than one data point.

This means, that you will have:

- More time to refine your prototype
- More time to align your work with the exam brief

It also means that we have a few sessiong that we can dedicate to new topics or to revise some old topics.

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

Menti time

---

# Re-cap of React Native

We begin with a `View`, which is important because it contains everything we want to display.

Our function must always return some form of UI, and in practice that usually means a main `View` containing the rest of the screen.

- `View` gives structure
- `Text` gives readable content
- `Image` gives visual communication
- Together, these form the visible layer of the prototype

---
hideInToc: true
---

# The three parts of your file

By now, every one of you has seen the same structure many times:

- Imports at the top
- The function in the middle
- The `StyleSheet` at the bottom

This matters because your app is never just visuals.

It is always a combination of tools, logic, and design.

---
hideInToc: true
---

# UI and logic are not the same thing

There is a difference between the UI and the logic behind the app.

- The UI is what the user sees: `View`, `Text`, `Image`, buttons, inputs
- The logic is what makes the UI react: variables, functions, hooks, navigation
- React Native mixes them in one file, but they still play different roles

One of the most important examples of this is `useState`.

---
hideInToc: true
---

# The visible building blocks

- `View`: the frame or container
- `Text`: all written content must live inside `Text`
- `Image`: visual assets, local or online
- `ScrollView`: use it when the content is taller than the screen

If these are organised well, the app already starts to feel understandable.

---
hideInToc: true
---

# Styling is what turns blocks into a screen

- `StyleSheet` keeps styling separate from the JSX structure
- Flexbox controls layout and spacing
- `flexDirection`, `justifyContent`, and `alignItems` are the main tools
- This is the React Native version of structuring frames in Figma

A prototype becomes much more convincing when spacing and layout are consistent.

---
hideInToc: true
---

# Interaction starts with touch

- `Pressable` is a flexible interactive wrapper
- `TouchableOpacity` is similar, but gives built-in visual feedback
- `Button` is useful for quick actions, but less flexible visually
- `Alert` is not a component, it is a function for quick system feedback

These are what make the app feel alive instead of static.

---
hideInToc: true
---

# Inputs make the prototype feel real

- `TextInput` lets the user contribute data
- Once the user can type, choose, or press something, the prototype becomes interactive
- A lot of convincing prototypes are built from simple interactions, not complex systems

For many exam apps, one strong input flow is enough:

`TextInput` -> button press -> saved state -> shown somewhere else

---
hideInToc: true
---

# useState gives the app memory

- `useState` stores changing values
- It lives in the JS part of the component, before the `return`
- When the state changes, React Native re-renders the UI

This is how the app moves from "drawn screen" to "working prototype".

Example idea:

- The user types in a `TextInput`
- The setter updates the variable
- A `Text` component shows the new value on screen

---
hideInToc: true
---

# Components interact to tell one story

A prototype is convincing when components are not isolated.

- `TextInput` collects data
- `TouchableOpacity` or `Pressable` triggers an action
- `useState` stores the result
- `Text`, `View`, or `ScrollView` display the updated result

So the user can understand: "When I do this, the app responds like that."

---
hideInToc: true
---

# Navigation turns screens into an app

- `createBottomTabNavigator` gives the main structure
- `createNativeStackNavigator` gives drill-down flows inside that structure
- `useNavigation` lets interactive elements move the user between screens

Without navigation, you mostly have separate pages.

With navigation, you start having a prototype.

---
hideInToc: true
---

# Data sharing is part of the story

- It is not enough that screens exist next to each other
- Often they should influence each other
- One screen collects information
- Another screen displays or uses that information

That is why `useState`, props, and navigation start to work together.

---
hideInToc: true
---

# A prototype is screens plus relationships

What makes an app feel like an app is not just having 5 screens.

It is that the screens relate to each other:

- one screen leads to another
- one action changes something elsewhere
- the navigation makes sense
- the same visual language continues across screens

That is why data sharing and navigation matter so much.

---
hideInToc: true
---

# Accessibility is part of the prototype

Accessibility is not an extra layer you add at the end.

- Meaningful images need `accessibilityLabel`
- Buttons should expose `accessibilityRole="button"`
- Inputs need `accessibilityLabel` and often `accessibilityHint`
- Headings should be clearly structured
- Color should never be the only way to communicate meaning

If the prototype only works visually for some users, then the prototype is incomplete.

---
hideInToc: true
---

# Accessibility also helps the design itself

- Clear labels improve comprehension for everyone
- Better contrast improves readability for everyone
- Better headings improve orientation for everyone
- Better feedback improves confidence for everyone

Accessible design is usually just better design.

---
hideInToc: true
---

# How all of this builds a prototype

One possible chain looks like this:

- `View` creates structure
- `Text` and `Image` communicate the idea
- `StyleSheet` and Flexbox make it readable
- `TextInput` and touch components create interaction
- `useState` stores what changes
- Navigation connects the screens
- Accessibility makes the experience understandable to more users

This is already enough to build a convincing prototype.

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