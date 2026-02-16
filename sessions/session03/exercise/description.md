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

## OPTIONAL: A sneek peak into State using `<Button />`

In React Native, components are usually static. If you want a component to "do" and "remember" an interaction—like a color change or a score update—you must use State.

I say "remember" here, because when you use `<Button />` and give `Alert` to the `onPress` prop, you only "do" things, the app doesn't remember something has been pressed!

State is a specialized way of storing data that tells React Native to re-render (re-draw) the screen whenever the data changes.

1. useState
To use state, we must import a "Hook" called useState. It is a built-in tool that creates a piece of memory for your component.

2. How to declare it
When we declare state, we create two things at once using JavaScript:

- The Variable: The current value (e.g., the current color). You use this inside your components to display information. In the example below this is called `btnColor`

- The "Setter Function": The only tool allowed to update that value. By convention, if your variable is color, your setter is named `setColor`.

Syntax:

```js
const [btnColor, setBtnColor] = useState('blue');
```

Use `btnColor` to read the value (e.g., color={btnColor}).

Use `setVariable` to change the value (e.g., setBtnColor('red')).

3. The Update Flow
You cannot change state by just re-assigning a variable (e.g., btnColor = 'red' will not work). 

You have use a "Setter Function". When this function runs, React Native notices the change and automatically refreshes the UI to show the new color.

### Template code

**In a new project**, copy this template to your `App.js` file and try it out:

```js
import React, { useState } from 'react'; 
import { View, Button, StyleSheet, Text } from 'react-native';

export default function App() {
  /* Step 1: Create the state.
     'btnColor' is the variable holding the current value.
     'setBtnColor' is the function we use to change that value.
     useState('blue') sets the starting value to blue.
  */
  const [btnColor, setBtnColor] = useState('blue');

  return (
    <View style={styles.container}>
      
      {/* Step 2: Use the variable.
         We wrap btnColor in curly braces so the code knows 
         to look for the variable instead of the word "btnColor".
      */}
      <Text style={styles.status}>The color is currently: {btnColor}</Text>
      
      <Button 
        title="Change My Color" 
        color={btnColor} 
        onPress={() => {
          /* Step 3: Trigger the change.
             We call setBtnColor and give it the new value 'red'.
             This tells the app to re-draw the button immediately.
          */
          setBtnColor('red'); 
        }} 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#ffffff',
  },
  status: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    color: '#333333',
    fontWeight: '600',
  }
});
```


### Optional Exercise instructions

1. Change the string inside the setter function. Choose a color you like or give it a hex value
2. Try making it work with more colors
3. Add logic, so the button can return to it's original state
The states are as follows:

State 1 - Red
State 2 - Blue

Hint: you'll have to use `if` and `else` statements.