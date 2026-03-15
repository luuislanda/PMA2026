# Assignment 2 

**Table of Contents**


## Relation of Assignment to your Exam
- Your exam will require you to submit a reflection on both assignments
- The reflections can be about:
  - The translation from Figma design to React Native code
  - The progression in complexity from having one screen to multiple screens
  - The implementation of accesibility as a requirement for your assignment/exam
- Each assignment's reflection will be 0.5 pages, making it a total of 1 page in the exam
- **Tip**: keep notes on learnings and challenges when doing the two assignments

## Practical Information

- This is a <u>group</u> assignment
- You feedback for this assignment will be in the form of a supervision meeting
    - During this supervision we will discuss your submission, but it will also be mainly targeted towards the exam
    - If you have submitted alone because you are already experienced with React Native, the supervision/meeting can be about any other topic that interests you in relation to mobile applications and the exam. 
- This assignment is meant to get you coding the base of what will become your exam, however, it is not a requirement that your exam is the same theme as your assignment #2.


### Dates

Introduced: 17th of March

Deadline: 10th of April

### How to Submit Your Assignment

Each group must submit a `.zip` file containing a folder with the files of the app and a one-page text file (preferably .pdf or .txt) with a link to the Figma design file on which the code is based.

If you are unsure of how to make a `.zip` file, or your `.zip` file is taking too long to be made/uploaded. Please follow the <u>**[file submission guide](https://github.com/luuislanda/PMA2026/tree/main/guides/submission-guide)**</u>

To obtain a link to your figma design, you can follow the guide [here.](https://help.figma.com/hc/en-us/articles/360040531773-Share-files-and-prototypes)


### File Submission Checklist

Here is the checklist for the files that must be submitted for this assignment:

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
- [ ] text file (.txt or .pdf) with links to Figma files

## Description of Assignment

The goal of this assignment is for you to create a prototype with at least four (4) screens. Like the previous assignment, the UI and styling must be based on a Figma design file which you will also submit. 

Similar to the previous assignment, it is not expected that your prototype will look _exactly_ like the Figma design you've shared. However, there should be a clear similarity between them.

As for the theme of the app/prototype, you have two options.

### Option 1: Open theme
If you choose option 1, the app/prototype can be (almost) anything. It just has to be a prototype of an "app" and conform to the minimal requirements set below. 

In practice, this means this can be a health care app, a podcast app, a journal app, a dictionary, pretty much anything.

Though it is open, you have a few restrictions. This is mainly because if you choose any of the choices below, it will be technically unfeasible for you, given what we have seen so far in the course.

You are not allowed to make:
- Games or anything that requires some advanced backend processing
- Any app that requires "real time" collaboration
- Apps for media (audio,photo,video) editing

> **‼️OBS: If you go for an open theme, it's entirely up to you how much time you spend in the ideation/conceptualisation part of your prototype. The course and the ILOs clearly state this is a course about hands-on programming of mobile applications. You will not be evaluated on the concept of your app‼️**

### Option 2: Select a theme from the list below

If you find the open theme intimidating, pick one of the apps themes below for your assignment:

- Podcast/Music Player
- Local sports club
- Journal 
- To-do / task organiser

## Design, Accesibility and Technical Requirements 

### Design Requirements

You must make a design file that contains all screens in Figma.

The design should take into consideration the 

### Minimum Technical Requirements 

#### Minimum Number of Screens

- 4 Screens
  - You must use a `BottomTabNavigator` as the main navigation of your prototype
  - If you wish you can also use Stack navigation, though it is optional

#### Static Components

At least one of each of these components:

- `<View>`
- `<Text>`  
- `<Image>`
- `StyleSheet`

#### Interactive Components


At least one of each of these components and functions:

- `useState`
- `<Pressable>`
- `<TouchableOpacity>`
- `<TextInput>`
- `<Navigator>` from React Navigation
- `<Screen>` from React Navigation

Your prototype must be able to share data across at least two screens. For example, if your application has a screen for settings where the user is able to input their name, the name must appear in the homescreen. See the example below for more details.

## Examples of Prototypes with the Minimum Requirements

### Example 1: Open Theme Prototype


### Example 2: Journal Prototype


## Template Code

I have prepared a template that you can use to start, it already has the routing for 4 screens and a `BottomTabNavigator`, it can be download on LearnIT, or [clicking here](). 

Feel free to repurporse any code you've written or seen in the course so far.

Good luck and if you have any questions, reach out to me via email or during class.