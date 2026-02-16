# Assignment 1 

## Practical Information

- This is an individual assignment
- There will be no supervision for this assignment, only written feedback

### Dates

Introduced: 17th of February

Deadline:

### How to submit

Each student should submit a `.zip` folder with all the files of the app and a one-page text file (preferably pdf or .txt) with a link to the Figma design file that contains the designs.



## Description

The goal of this assignment is for you to create a one-screen application prototype with at least one interactive component coded in React Native. It's design and style must be based on a Figma design that you have also created. 

The app is a music/podcast player. The screen you must design is the screen where the user sees what is currently playing. The protoype must look similar to this screen from the Spotify music player:

<p align="center">
<img src="assets/imgs/exercise_example.png" width="400">
</p>

> OBS: Please note that "similar" is used to describe your design. It is not expected that you create a perfect copy of the design, though you can try as much as you can.  See below for some examples of how the one-screen app can look like.

## Design and Technical Requirements 

### Minimum Technical Requirements 

#### Number of Screens and Description

- 1 Screen that shows what the user is currently listening to, also known as "Now Playing" screen

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

You can choose the "easier" route with `<Button />` or use `<Pressable>` for more control of the design of the element that will make the interaction happen.

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

This prototype images an app where two songs are streamed to the users daily. The interactive component changes the current song to another. 

The interactive `<Button>` changes the following elements:
  - Album Cover 
  - Song Name


<p align="center">
<img src="assets/imgs/button_state1.png" width="400">
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
<img src="assets/imgs/pressable_state2.png" width="400">
</p>

## Template Code

I have prepared a template that you can use to start, it can be download on LearnIT, or [clicking here](linkkkkk)


