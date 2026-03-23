# Programming Mobile Application 2026

# Exam Brief - Draft 1 for Session 8 

**Table of Contents**


- [Exam Brief - Draft 1 for Session 8](#exam-brief---draft-1-for-session-8)
  - [Practical Information](#practical-information)
    - [How to Submit Your Exam](#how-to-submit-your-exam)
      - [How to Submit your Exam via LearnIT](#how-to-submit-your-exam-via-learnit)
      - [File Submission](#file-submission)
  - [Checklist for Submission](#checklist-for-submission)
    - [Code File Submission Checklist](#code-file-submission-checklist)
    - [Written Report Submission Checklist](#written-report-submission-checklist)
  - [Generative AI Use](#generative-ai-use)
  - [Description of Exam](#description-of-exam)
    - [What is a "prototype" in this exam?](#what-is-a-prototype-in-this-exam)
  - [Theme of the Application/Prototype](#theme-of-the-applicationprototype)
    - [Theme Option 1: Open theme](#theme-option-1-open-theme)
    - [Theme Option 2: Select a theme from the list below](#theme-option-2-select-a-theme-from-the-list-below)
  - [Design, Accesibility and Technical Requirements](#design-accesibility-and-technical-requirements)
    - [Minimum Pass Criteria](#minimum-pass-criteria)
    - [Minimum Design Requirements](#minimum-design-requirements)
    - [Minimum Technical Requirements](#minimum-technical-requirements)
      - [Minimum Number of Screens](#minimum-number-of-screens)
        - [App Screens](#app-screens)
        - [Onboardings Screens](#onboardings-screens)
      - [React Native Components and Functions](#react-native-components-and-functions)
    - [Minimum Accessibility Requirements](#minimum-accessibility-requirements)
      - [Accesibility Implementation Refrence](#accesibility-implementation-refrence)
  - [Examples of Prototypes with the Minimum Requirements](#examples-of-prototypes-with-the-minimum-requirements)
    - [Example](#example)
  - [Written Report](#written-report)
    - [Practical Information about Written Report](#practical-information-about-written-report)
    - [Written Report Structure](#written-report-structure)
      - [Collaborative Sections (7 pages)](#collaborative-sections-7-pages)
      - [Individual Sections (one section per student) (1-2 pages per student)](#individual-sections-one-section-per-student-1-2-pages-per-student)
      - [Individual Assignment Reflections (1 page per student)](#individual-assignment-reflections-1-page-per-student)
    - [References](#references)
    - [Sample Table of Contents](#sample-table-of-contents)
      - [Example of a Group Submission](#example-of-a-group-submission)
      - [Example TOC for an Individual Submission](#example-toc-for-an-individual-submission)
    - [Advice for the Written Report](#advice-for-the-written-report)
  - [Template Starting Code](#template-starting-code)


## Practical Information

- **Exam type:** Pass / Fail
- **Group or individual:** This is a <u>group</u> exam (2–4 students) with an additional <u>individual</u> component. You may also work individually.
- **What you submit:** A `.zip` file containing your code folder + written report as PDF
- **Written Report length:** 
  - Individual (solo) submission: 8 pages
  - Group submission: 11 pages for the collaborative + individual contribution sections
  - Additionally, each student must submit a 1-page individual assignment reflection. This page is not included in the page count above.
- **Can I reuse my Assignment 2 code?** Yes, you are welcome to build on it. However, it is not a requirement.
- **Is the concept/idea of my app evaluated?** No. You are evaluated on the minimal requirements set below and your reflection on the process.
- **Screens required:** 5 app screens + 3 onboarding screens (8 total)



### How to Submit Your Exam

#### How to Submit your Exam via LearnIT

> This will be updated, once I hear back from ITU about their new WISEflow system. In theory it should be the same as previous assignments but we'll see


#### File Submission

Each group/student must submit a `.zip` file containing a folder with the files of the app and the written report as a PDF file. The written report should include a link to the Figma design file on which the code is based.

If you are unsure of how to make a `.zip` file, or your `.zip` file is taking too long to be made/uploaded. Please follow the <u>**[file submission guide](https://github.com/luuislanda/PMA2026/tree/main/guides/submission-guide)**</u>

To obtain a link to your figma design, you can follow the guide [here.](https://help.figma.com/hc/en-us/articles/360040531773-Share-files-and-prototypes)

## Checklist for Submission

### Code File Submission Checklist

Here is the checklist for the files that must be submitted for this exam:

- [ ] The folder with your working code
  - [ ] App.js
  - [ ] app.json
  - [ ] assets (folder)
    - [ ] any assets you've added
  - [ ] index.js
  - [ ] package_lock.json
  - [ ] package.json
  - [ ] screens (folder)
    - [ ] all your screen `.js` files

### Written Report Submission Checklist

- [ ] Written report as a PDF file
  - [ ] Cover page
    - [ ] Title of prototype/app
    - [ ] Group member names
    - [ ] One-line summary of each member's main contribution
  - [ ] Introduction
  - [ ] Background and Ideation
  - [ ] Design Rationale and Guidelines
  - [ ] Link to Figma design file 
  - [ ] Technical Implementation Overview
  - [ ] Evaluation, Decisions, and Reflection
  - [ ] Individual section per student
    - [ ] Name and individual contribution
    - [ ] Component(s)/screens coded with code snippets
  - [ ] References (optional)
  - [ ] Individual assignment reflection per student
    - [ ] ½ page reflection on Assignment 1
    - [ ] ½ page reflection on Assignment 2


## Generative AI Use

If you use any generative AI tools (such as ChatGPT, Claude, or similar LLMs) in your project, you **must clearly mark** where and how they were used. This includes:
- Specific prompts you provided
- Outcomes generated
- How you integrated and modified the output into your project
- Reflections on the use of these tools 

Failing to clearly mark generative AI usage can result in failing the exam on grounds of plagiarism or fraud. For more information, please refer to the [Generative AI Guidelines for Students at ITU](https://itustudent.itu.dk/-/media/ITU-Student/Study-Administration/GAI/Generative-AI-guidelines-for-students-Spring-2026-pdf.pdf)

## Description of Exam

The exam requires you to demonstrate hands-on mobile app prototyping through React Native, supported by a written report that documents your technical work, design approach, and key reflections.

Your prototype must include multiple screens, sharing of data across at least 2 of them, and be supported by a Figma design file. The UI and styling of your prototype must be based on this Figma design file, and your code must be compliant with the WCAG 2.2 A level guidelines for accessibility outlined below.

It is **not** expected that your prototype will look _exactly_ like the Figma design you've created. However, there should be a clear correspondence between them, and any differences must be reflected upon and explained in your written report.

### What is a "prototype" in this exam?

A prototype is a **working**, functional mobile app built with React Native that demonstrates your ability to translate design ideas into actual code. The user should be able to interact with buttons, enter data, and see that data in different parts of the app. Additionally, a prototype is a demonstration of your app's core idea and concept. It transforms the abstract concept in your head into something tangible that users can experience and understand.

A prototype doesn't need to be a fully-featured app. You can have simplified features or incomplete functionality, but you should explain those choices in the written report. The course emphasizes hands-on programming for prototypes rather than design polish or concept perfection, and the exam follows that same emphasis.

## Theme of the Application/Prototype

> _The course and the ILOs clearly state this is a course about **hands-on programming of mobile applications.** You will _not_ be evaluated on the concept of your app/prototype‼️_

For your exam, you have two options for choosing a theme. You may also build upon the work you completed for Assignment 2 if you wish, but this is optional. You are also free to start fresh with a different concept.

### Theme Option 1: Open theme
If you choose option 1, the app/prototype can be (almost) anything. It just has to be a prototype of an "app" and conform to the minimal requirements set below. 

In practice, this means this can be a health care app, a podcast app, a journal app, a dictionary, pretty much anything.

Though it is open, you have a few restrictions.

These restrictions apply to possible apps that are entirely driven by complex architechtures/backends that are hard to prototype without at least a bit of functionality in topics we did not cover in class.

For example, You are not allowed to make:
- Games or anything that requires some advanced backend logic
    - To demo a full game would require part of the game logic to exist, that is beyond the curriculum
- Any app that requires "real time" collaboration
- Apps for media (audio,photo,video) editing
- A cat/pet feeding app which we built in class

If you are unsure whether your app is feasible, you can always contact the course manager.

> _**OBS**: If you go for an open theme, it's entirely up to you how much time you spend in the ideation/conceptualisation part of your prototype._



### Theme Option 2: Select a theme from the list below

If you find the open theme intimidating, pick one of the app themes below for your exam:

- Podcast/Music Player
- Local sports club
- Journal 
- To-do / task organiser

## Design, Accesibility and Technical Requirements 


### Minimum Pass Criteria

To pass the exam, you must complete **all** of the following requirements:
- All minimum design requirements listed below
- All minimum technical requirements listed below
- All accessibility requirements listed below
- A written report following the structure described in the "Written Report" section
- The prototype must work


### Minimum Design Requirements

You must make a design file that contains all screens in Figma.

Additionally, across the screens the following requirements are set:
- Have three interactive components with variants (Introduced in Session 3)
- These interactive components and their variants must also be coded in React Native
    - In case you weren't succesful in coding them, explain what was challenging about translating the Figma interactivity to React Native.


### Minimum Technical Requirements 

#### Minimum Number of Screens

##### App Screens

- 5 Screens
  - You must use a `BottomTabNavigator` as the main navigation of your prototype
  - One of your screens must also have `NativeStackNavigation`
  - If working in a group, each person must program a minimum of 2 components/screens

##### Onboardings Screens

- 3 Screens
  - Your onboarding screens should appear the first time the app is run (Introduced in Session 10)
  - They must explain to a new user, the logic of the app and how to use it

#### React Native Components and Functions

At least one of each of these components/functions:

- `<View>`
- `<Text>`  
- `<Image>`
- `StyleSheet`
- `useState`
- `useNavigation`
- `<Pressable>`
- `<TouchableOpacity>`
- `<TextInput>`
- `createBottomTabNavigator` from React Navigation
- `createNativeStackNavigator` from React Navigation

Your prototype _must_ be able to share data/variables across at least two screens.


### Minimum Accessibility Requirements

The prototype must attempt to be compliant with WCAG 2.2 Level A. In practical terms, this means:

- Provide meaningful alt text for all meaningful images.
- Do not rely on color alone to communicate information.
  - Any status or indicator shown with color must also include text and/or a symbol.
- Use clear page titles and headings so users can understand where they are in the app.
- Maintain a clear heading hierarchy across screens.
- Ensure sufficient color contrast for text (recommended from Level AA, required in this exam).

#### Accesibility Implementation Refrence

Use these accessibility props in your code:

| Element | Required accessibility props |
|---|---|
| `<Image>` | `accessibilityLabel` |
| Main page header `<View>` or `<Text>` | `accessibilityRole="header"` |
| Any visual/status row that uses color cues | `accessibilityLabel` describing the full meaning |
| `<TouchableOpacity>` / `<Pressable>` | `accessibilityRole="button"` + `accessibilityHint` |
| `<TextInput>` | `accessibilityLabel` + `accessibilityHint` |
| `<Tab.Screen>` in BottomTabNavigator | `tabBarAccessibilityLabel` |



## Examples of Prototypes with the Minimum Requirements

### Example

I will put a finished example after Session 8 :)


## Written Report

As part of the exam submission, you must include a written report (minimum 8-11 pages depending on group size) that reflects on your process and technical work.

### Practical Information about Written Report

- The report must be submitted as a PDF file
- Generative AI guidelines also apply to the written content of the report

### Written Report Structure


### Sample Table of Contents

#### Example of a Group Submission

```text
Cover Page

1. Introduction
2. Background and Ideation
3. Design Rationale and Guidelines
4. Technical Implementation Overview
5. Evaluation, Decisions, and Reflection

6. Individual Contribution: Student A
7. Individual Contribution: Student B
8. Individual Contribution: Student C
9. Individual Contribution: Student D

10. Individual Assignment Reflection: Student A
11. Individual Assignment Reflection: Student B
12. Individual Assignment Reflection: Student C
13. Individual Assignment Reflection: Student D

References (optional)
Appendix (optional)
```

#### Example TOC for an Individual Submission

```text
Cover Page

1. Introduction
2. Background and Ideation
3. Design Rationale and Guidelines
4. Technical Implementation Overview
5. Evaluation, Decisions, and Reflection
6. Individual Assignment Reflection

References (optional)
Appendix (optional)
```

#### Collaborative Sections (7 pages)

**Cover** (does not count as a page)
- **Question this section answers:** Who made this project, and what is each person's main contribution?
- Title of prototype/app
- Group member names
- One-line summary of each member's main contribution

**1. Introduction** 
- **Question this section answers:** What is your app, who is it for, and what is the prototype meant to demonstrate?
- What app you built
- Theme/concept and intended users
- What the prototype is meant to demonstrate

**2. Background and Ideation** 
- **Question this section answers:** Where did the idea come from, and how did it develop into a concrete prototype concept?
- Initial app idea and motivation
- Existing apps or references that informed your concept
- How you moved from early sketches to a concrete Figma structure

**3. Design Rationale and Guidelines** 
- **Question this section answers:** Which design decisions did you make, and which guidelines or principles informed them?
- Which design guidelines from the course (Sessions 1 and 10) you used
- How/If those guidelines influenced your key UI/UX choices
- Any deliberate design trade-offs you made in the pursuit of your vision

**4. Technical Implementation Overview** 
- **Question this section answers:** How is the prototype built, and how does it work in practice?
- How the app is structured in React Native (screens, navigation, key components)
- What interactive flow are you showing:
  - Example: add entry -> save -> see it in history -> open details
- How data is shared across screens
- How design was translated from Figma into code

**5. Collective Reflection** 
- **Question this section answers:** What did you learn from the process, what challenges did you face, and how would you improve the prototype further?
- What did you learn through this process of making a prototype for your app?
- Feedback received and what you changed based on it
- Main technical challenges and how you approached them
- Current limitations and realistic future improvements

#### Individual Sections (one section per student) (1-2 pages per student)

Each student should include a section with their **name and individual contribution** to the app development. Each person should include:

- **Question this section answers:** What did you personally contribute to the project, and why does that contribution matter?

- Which component(s)/screens you implemented and how they function
- Key React Native choices you made and any challenges you faced
- How your part connects to the rest of the app
- Other contributions (if any), such as conceptual ideation, Figma/UI work or collaborative coding
- At least one code screenshot with explanation of what it does and why it matters for the overall app

#### Individual Assignment Reflections (1 page per student)

In addition to the report above, each student must include a **1-page individual reflection** on the two course assignments. This page is submitted in addition to the report and is **not included** in the report page count. The page is structured as follows:

- **Question this section answers:** What did you learn from Assignments 1 and 2, and how did those assignments prepare you for the exam?

- **½ page — Reflection on Assignment 1:** What did you learn from this assignment? What would you do differently? How did it inform your work on the exam?
- **½ page — Reflection on Assignment 2:** What did you learn from this assignment? How did it build your skills for the exam? Do you think you would do something different?

### References

**Question this section answers:** Which sources, course materials, or external references informed your work?

You can include references to the academic papers introduced in the course and links to online resources provided throughout the course. However, **since this is a report focused mainly on the code and what you did in this project, references are optional.**


### Advice for the Written Report

- **Start documenting early:** Keep notes as you work so writing the final report is easier.
- **Avoid repetition:** Each section should answer a different question (idea, design decisions, implementation, evaluation).
- **GenAI transparency:** Clearly mark any AI-generated text/code and explain how you used and adapted it.
- **Focus on process and reasoning:** Explain not only what you built, but why you made those decisions.

## Template Starting Code

If you wish, you can use the template that was given to you for Assignment #2 that includes a `BottomTabNavigator` and 4 screens. You can find it on LearnIT.

Feel free to repurpose any code you've written or seen in the course so far.
