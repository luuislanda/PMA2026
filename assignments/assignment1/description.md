# Assignment 1 

**Table of Contents**

- [Relation of Assignment to your Exam](#relation-of-assignment-to-your-exam)
- [Practical Information](#practical-information)
  - [Dates](#dates)
  - [How to Submit Your Assignment](#how-to-submit-your-assignment)
- [Description of Assignment](#description-of-assignment)
- [Design and Technical Requirements](#design-and-technical-requirements)
  - [Minimum Technical Requirements](#minimum-technical-requirements)
    - [Number of Screens and Description](#number-of-screens-and-description)
    - [Static Components](#static-components)
    - [Interactive Components](#interactive-components)
  - [Design Requirements](#design-requirements)
- [Examples of Prototypes with the Minimum Requirements](#examples-of-prototypes-with-the-minimum-requirements)
  - [Interaction with `<Button>`](#interaction-with-button)
  - [Interaction with `<Pressable>`](#interaction-with-pressable)
- [Template Code](#template-code)

## Relation of Assignment to your Exam
- Your exam will require you to submit a reflection on both assignments
- Each assignment reflection will be 0.5 pages, making it a total of 1 page
- Tip: keep notes on learnings and challenges when doing the three assignments

## Practical Information

- This is an individual assignment
- There will be no supervision for this assignment, only written feedback


### Dates

Introduced: 17th of February

Deadline:

### How to Submit Your Assignment

Each student must submit a `.zip` file containing a folder with the files of the app and a one-page text file (preferably .pdf or .txt) with a link to the Figma design file on which the code is based.

If you are unsure of how to make a `.zip` file, or your `.zip` file is taking too long to be made/uploaded. Please follow the <u>**[file submission guide]()**</u>

Example of what's inside the submitted `.zip` file:

```md
├── assignment1-code (folder)
│   └── App.js
│   └── app.json
│   └── assets (folder)
│   └── index.js
│   └── package_lock.json
│   └── package.json
├── figma-link.txt
```

## Description of Assignment

The goal of this assignment is for you to create a one-screen application prototype with at least one interactive component coded in React Native. It's design and style must be based on a Figma design that you have also created. 

The app is a music/podcast player. The screen you must design is the screen where the user sees what is currently playing. The protoype must look similar to this screen from the Spotify music player or other known music player apps:

<p align="center">
<img src="assets/imgs/exercise_example.png" width="400">
</p>

> OBS: Please note that "similar" is used to describe your design. It is not expected that you create a perfect copy of the design, though you can try as much as you can.  See below for some examples of how the one-screen app can look like.

## Design and Technical Requirements 

### Minimum Technical Requirements 

#### Number of Screens and Description

- 1 Screen - The screen shows what the user is currently listening to, also known as "Now Playing" screen

#### Static Components

At least one of each of these components:

- `<View>`
- `<Text>`  
- `<Image>`
- `StyleSheet`

#### Interactive Components

To make your prototype interactive, you must choose and use **one** of the following interactive components for your code. 

- `<Button />`
- `<Pressable>`

You can choose the "easier" route with `<Button />` _or_ use `<Pressable>` for more control of the design of the element that will make the interaction happen.

The interaction should do at least one of the following:
  - Change the album cover
  - Change the song title and artist/album


### Design Requirements

- The image provided is an example, you can re-design the screen as you see fit or just stick to the Spotify look. 
- If you do your own design, it should still be the design for a music player app, specifically the "Now Playing" screen
- It is perfectly fine that the React Native application doesn't look exactly like the Figma design
- The background **<u>must</u> be one solid color**
- You can ignore the `About the artist` part at the bottom of the screen
- The artist, album cover, and song don't have to be real
- If the "progress bar" is giving you trouble, skip it or design a new one

> OBS: These are the minimum technical and design requirements. If you wish, you can try do more or different things, but it to obtain a Pass for this assignment the minimum requirements must be met.


## Examples of Prototypes with the Minimum Requirements

### Interaction with `<Button>`

This prototype images an app where two songs made by cats are streamed to the users daily. The interactive component changes the current song to another. 

The interactive `<Button>` changes the following elements:
  - Album Cover 
  - Song Name


<p align="center">
<img src="assets/imgs/button_state1.png" width="400">
</p>

<p align="center">
**Presses button**
</p>

<p align="center">
<img src="assets/imgs/button_state2.png" width="400">
</p>



### Interaction with `<Pressable>`

This prototype is more like a typical music player. The interaction in this case is possible through the `<Pressable>` component, which is applied to the ⏮️ and ⏭️ buttons. 

The interaction is the same as above, it changes the song. 
The following elements change:
  - Album Cover
  - Song Name

<p align="center">
<img src="assets/imgs/pressable_state1.png" width="400">
</p>
<p align="center">
**Presses button**
</p>
<p align="center">
<img src="assets/imgs/pressable_state2.png" width="400">
</p>

## Template Code

I have prepared a template that you can use to start, it can be download on LearnIT, or [clicking here](https://github.com/luuislanda/PMA2026/blob/main/assignments/assignment1/code-template/App.js). 

Additionally, feel free to repurpose any of the code we have seen through the first 4 sessions

Good luck and if you have any questions, reach out to the teaching team!