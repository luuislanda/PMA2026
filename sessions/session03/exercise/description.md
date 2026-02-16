# Exercise 3

## Part 1 `<Button />`

Time to practice what we learned in the lecture.

Take this code as a starting point:

```js
<Button 
  title="Press Meeee" 
  onPress={() => Alert.alert("Hi :)")} 
/>
```

### 1.1: The Basics

On a newly created project, create a `<Button />` with the title "Click Me."

Make it trigger an Alert with a Title and a Message when pressed.

Add the `color` prop to the button and change it.

### 1.2: Styling

Try to add `style={{ marginTop: 50 }}` directly to your `<Button />` you just made.

What does it do? Probably nothing.

Remember that we cannot style `<Button />` directly, to do it we need to wrap the `<Button />` in a `<View>`.

Apply the following styles to the `<View>` to make your button a bit nicer:
- marginTop 
- padding
- backgroundColor


### 1.3 Many Buttons

Create three buttons: "Option A", "Option B", and "Option C".

Give each one a different color prop.

Make each button trigger a different Alert message (e.g., "You chose A!").


### 1.4 Reading the Documentation

Go to the documentation for `<Button />` and find the  prop that disables the button.

Add the propr to one of the buttons you did above.

### OPTIONAL: 1.5 For the interested

**OBS: This is not part of the course syllabus it's just for fun**

Read up on this documentation page:

https://reactnative.dev/docs/linking

Make one of your buttons do the following:

- A website
- Call a phone number
- Write an SMS

Don't forget to import the `Linking` function at the top!

## Part 2 - Work on your assignment

Use the time to work on your Assignment #1 and ask questions