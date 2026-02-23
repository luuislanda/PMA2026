---
theme: academic
class: 'text-center'
transition: slide-left
title: PMA2026 Session 4
mdc: true
hideInToc: true
---

# Session 4: Interactivity and States

Making your prototypes interactible

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
layout: center
---

# Course Announcements

- I will add details on how to share your Figma links to the assignment description
- Weekly _"sign up for your groups"_ notice
- How is the assignment going?


<style>
h1 {
  text-align:center;
}
p {
  text-align:center;
}
</style>

---
layout: center
---

Sceneario: Today we will build the software for our brand new pizzeria/burger place we opened.


<style>
h1 {
  text-align:center;
}
p {
  text-align:center;
}
</style>

---

# Variables

A variable is a **container** for data. And like every container in an ordered space, it should have a name tag so you know what it contains.

In JavaScript you have two options to **declare** variables, you can use `const` or `let`.
 
| Type of variable | Analogy           | The Rule                                                                           |                            |               |
|------------------|-------------------|------------------------------------------------------------------------------------|----------------------------|---------------|
| `const`            | The Menu Item.    | "A ""Margherita Pizza"" is always a "Margherita Pizza." You don't change its name. |                            |               |
| `let`              | The Status of an Order. | "It starts as "Ordered"                                                              " then changes to "Cooking"   then "Ready". |


If you have seen any online tutorials, or code written where they use `var`, you should know that these days `var` is not used!

---
level: 2
hideInToc: true
---

## Declaring variables: `const` or `let`

Here is how you write variables in JS/RN:

`const nameOfVariable = valueGivenToVariable`

Examples:

```js
const tableNumber = 4;
const nameOfWorker = "Rikke"; 
```

```js
let customerOrder = "Pizza Margherita";
let numberOfOrders = 2;
```

`const` means _constant_ and like the name implies it is for variables that will not change.

`let` is like saying _"let there be"_ before creating a variable. It is used for variables that are expected to change.

---
layout: center
---

<u>In this course 90% of the time you will likely be using </u>`const`

This is for different reasons, but it's important for you to know that this is the case.

Rule of thumb for you: If in doubt, start using `const`. If the computer gave you an error because you tried to change the value, use `let`


<style>
h1 {
  text-align:center;
}
p {
  text-align:center;
}
</style>


---
level: 2
hideInToc: true
layout: two-cols-header
---

## When to use `const` or `let`?

::left::

### Example:

Let's look at the DMI app, and focus on the top most visual part of the app:

If we ignore the icons/buttons, we see that the screen is showing us the following information

Example 1:
```js
const cityName = "Nørrebro";
let temperature = 2;
let weather = "Misty";
```

Example 2:

```js 
const cityName = "Amagerbro";
let temperature = 1;
let weather = "Rainy";
```

::right::

Example 1

<img src=./assets/imgs/var-ex1.jpg width=300>

Example 2

<img src=./assets/imgs/var-ex2.jpg width=300>


<style>
.two-cols-header {
  column-gap: 40px; /* Adjust the gap size as needed */
}
</style>

---
hideInToc: true
---

## Live Example

```js {monaco-run} {autorun:false, height: '400px'}

const tableNumber = 4;
let order = ""; //this is an empty variable!

console.log("Table Number: " + tableNumber + ". " + "Has made the order: " + order)

// Here, let's assume the customer made an order, so we type it into our system
let orderBase = "Pizza";
let orderToppings = "Champignon";

order = orderBase + " with " + orderToppings
```



---
hideInToc: true
---

# _Where_ do we use variables in our RN code?

Whenever we define variables or functions, they go in the top of our code, right after the `export default function App() {` line.

We will call this the "JS zone"

After the `return` zone, that is the JSX/RN zone.

```js
export default function App() {
  // ~~JS Zone starts here~~
  const name = "Luis"; 

  console.log(name)// No braces needed here

  return (
    // ~~JSX/RN Zone starts here~~
    <View>
      <Text>Hello {name}, nice to see you :)</Text> {/* Braces mandatory here*/}
    </View>
  );
}
```

---
hideInToc: true
layout: center
zoom: 1.2
---

### Things to consider for variables and functions in RN

- **Define** your variables in the "JS zone", this is considered best practice.
- Remember that giving them good names can save you some headaches down the road
- It's good practice to use `camelCase` when naming variables and functions
- To call variables or functions inside our RN code, consider the following:
  - Are you in the "JS" zone"? Then just called them using their assigned name
  - Are you in the "JSX/RN zone"?, wrap them in `{}`!



---
level: 2
hideInToc: true
layout: image-right
image: ./assets/imgs/var-RN-ex.png
backgroundSize: 50%
---

## When to use `const` or `let`?
### Example 2: RN Restaurant App

You just started working in a brand new restaurant and need to use an app to take the customers' orders. As the restaurant is new, the app is simple right now.

Let's go to VSCode and do some live coding.

We'll start a new project

On LearnIT, this is the code inside the _"variables-example"_ folder.


---

# Functions

A function, is like a <u>recipe</u>.

- It's a set of instructions we can follow to obtain the same results
  - When we create a function we call it _"defining a function"_
  - When we use it, we call that _"calling a function"_
- Like a recipe, it can be re-used and depending on what you are cooking, there can be many steps in it.
  - Also like a recipe, it can be a small part of a larger dish. 
  - For example, the recipe for the dressing of a salad.
- This is how a function is written in JavaScript and React Native

```js
function sayHello(greeting) {
  return greeting + " how are you?"
}
```

---
hideInToc: true
---

## Syntax and Anatomy of a `function`

### Step 0: Planning what your function will do

Before writing any code, we need to plan ahead and _think_ : 
  - What will your function do?
    - This is the logic steps needed and also makes you think about the end result
    - Tip: Write it in "normal" language first, just a like a recipe would be
  - What it will need to do that?
    - These are the "ingredients" or what you will need for your final 
  - What will the final result look like?
  - Is the function a "stand-alone" or will it be part of other functions?

All of these questions will help you to both:
- Define your function
- Use your function later on


---
layout: two-cols
hideInToc: true
---

### Step 1: Defining a Function

1. To define a function, you first write:
    - `function sayHello() {}`
2. Then then you can fill in the following:
    - parameters go inside the `()`
    - the logic of the function goes in the `{}`
3. Finally define the return, or what will the end result be
    - To do so, you add `return` and then the final variable of what will be returned


::right::

````md magic-move
```js
function sayHello() {
}
```

```js
function sayHello(greeting) {
}
```

```js
function sayHello(greeting) {
  return greeting + " how are you?"
}
```

```js
function sayHello(greeting) {
  return greeting + " how are you?"
}
```
````

---
layout: two-cols
hideInToc: true
---

### Step 2: Calling your function

1. Once your function is ready to be used, we need to call it.
    - If you don't do it, your function will not actually _do_ anything
2. To call your function, just write the name you gave it
    - If it needs any parameters, make sure to include the variable you want to give in inside the `()`
3. Finally think about what you want to do with the result
    - Will you just print it out?
    - Will you use it for other recipes/functions?

::right::

````md magic-move
```js
function sayHello(greeting) {
  return greeting + " how are you?"
}
```

```js
function sayHello(greeting) {
  return greeting + " how are you?"
}

sayHello()
```

```js
function sayHello(greeting) {
  return greeting + " how are you?"
}

sayHello(myGreeting)
```

```js
function sayHello(greeting) {
  return greeting + " how are you?"
}

const myGreeting = "Hej"

sayHello(myGreeting)
```

```js
function sayHello(greeting) {
  return greeting + " how are you?"
}

const myGreeting = "Hej"

sayHello(myGreeting)
```

````

---
hideInToc: true
---

## Live Example - JavaScript

```js {monaco-run} {autorun:false, height: '400px'}
//if you are reading the slides, this code wont immediately work because the functions returns to us a string that we are not displaying

function sayHello(greeting) {
  return greeting + " how are you?"
}

const danishGreeting = "Godmorgen"

sayHello(danishGreeting)
```


---
hideInToc: true
---

## Anatomy of a Function
### Coffe Machine Function

| Part       | Name in JS/RN           | What it does                                                             | Analogy                        |
|------------|-----------------|--------------------------------------------------------------------------|-------------------------------------------|
| Syntax/Start    | `function`        | Signals to JavaScript that you are starting a new definition of a function.            |        |
| Input      | Parameters `()`     | Variables listed in the definition that act as placeholders for data.    | The part where you insert raw materials like coffee beans or water. |
| Output     | `return`          | Sends a value back to where the function was called and stops execution. | The finished dish/product, in our case, a pot of coffee.            |


---
hideInToc: true
---

## Functions in React Native

They behave the same as in JS. Here is some advice:

- Define your functions in the "JS Zone", before the `return` statement that is filled with your app's components
- When _calling_ a function inside the "JSX/RN Zone", wrap it in `{}`
  - If you are _calling_ a function inside the "JS Zone" you don't need to do this
- Remember that **most of the time** the output of your function will either be: a <u>**return**</u>, or an <u>**action**</u>.


---

# Control Flow / Conditionals

In programming, _Control Flow_ is using `if` statements to tell the computer to skip certain lines of code or run others based on a condition.

These are also generally called conditions or conditionals.

The results of all control flows are always either a `true` or `false`

#### Syntax

```js
const weather = "snowing";

if (weather == "raining") {
  takePublicTransport("Bus"); 
} else if (weather == "snowing") {
  takePublicTransport("Metro");
} else {
  bikeToWork();
}
```

---
hideInToc: true
---

## Example, coffee machine

```js {monaco-run}{autorun:false, height: '400px'}
function brewCoffee(cups) {
  const maxCups = 8
  
  if (cups > maxCups) {
    return "Too many cups! Max is " + maxCups;
  }
  else {
  return "☕ Brewing " + cups + " cups of coffee...";
  }
}

console.log(brewCoffee(50));
```

---
hideInToc: true
---

## Conditionals in React Native

In the "JS Zone", same as above!

It is considered best practice to do all the logic for conditionals in the "JS Zone"

In the "JSX Zone", we have a different syntax! 

```js
<Text>
  {cups > 8 
    ? "Too many cups! Max is 8" 
    : "☕ Brewing " + cups + " cups of coffee..."
  }
</Text>
```

However, since it's not best practice, we usually only execute the result of the logic that is in the JS Zone.

---
hideInToc: true
---


## Example React Native: Best Practices


```js
export default function CoffeeApp() {
  const cups = 50;
  const maxCups = 8;
  
  let message = ""; //empty variable to be filled soon!

  if (cups > maxCups) {
    message = "🚫 Too many cups! Max is " + maxCups;
  } else {
    message = "☕ Brewing " + cups + " cups...";
  }

  return (
    <View>
      <Text>
        {message}
      </Text>
    </View>
  );
}
```

---
hideInToc: true
---

## Example React Native JSX Zone only

```js 
export default function CoffeeApp() {
  const cups = 50;
  const maxCups = 8;

  return (
    <View>
      {/* THE JSX Conditionals Syntax */}
      <Text>
        {cups > maxCups 
          ? "🚫 Too many cups! Max is " + maxCups 
          : "☕ Brewing " + cups + " cups..." 
        }
      </Text>
  </View>
)}
```


---
layout: two-cols-header
hideInToc: true
---

## Side by side comparison

::left::

#### JSX only Syntax

```js 
export default function CoffeeApp() {
  const cups = 50;
  const maxCups = 8;

  return (
    <View>
      {/* THE JSX Conditionals Syntax */}
      <Text>
        {cups > maxCups 
          ? "🚫 Too many cups! Max is " + maxCups 
          : "☕ Brewing " + cups + " cups..." 
        }
      </Text>
  </View>
)}
```

::right::

#### Best Practices


```js
export default function CoffeeApp() {
  const cups = 50;
  const maxCups = 8;
  
  let message = ""; //empty variable to be filled soon!

  if (cups > maxCups) {
    message = "🚫 Too many cups! Max is " + maxCups;
  } else {
    message = "☕ Brewing " + cups + " cups...";
  }

  return (
    <View>
      <Text>
        {message}
      </Text>
    </View>
  );
}
```

<style>
.two-cols-header {
  column-gap: 40px; /* Adjust the gap size as needed */
}
</style>



---
layout: image-right
image: ./assets/imgs/func-RN-ex.png
backgroundSize: 50%
hideInToc: true
---

## Example: Functions in RN

Let's go to VSCode and do some live coding.

We'll start a new project, but you can also replace the contents of the `App.js` file with the ones of the functions example

On LearnIT, this is the code inside the _"functions-example"_ folder.

---
hideInToc: true
layout: center
---
# Break

---
hideInToc: true
layout: image-right
image: https://miro.medium.com/v2/resize:fit:1400/1*caQFEviemh9rbE6UXHWgeg.png
backgroundSize: 90%
---

## Brief Recap of Part 1

- Variables are like boxes or our ingredients
- If/Else conditions, allow us to write decisions in our code for when certain conditions
  - For example, if we have more than 200g of coffee we can make X amount of cups
  - All conditions are evaluated to `true` or `false`
- Functions are like recipes that use variables to make the dish we want
  - Functions can:
    - Return a value or data
    - Perform an action


---
layout: center
---

## Function and Control Flow Syntax


---
level: 2
hideInToc: true
---


### `() =>` a.k.a. The Arrow Function

Last week when using `Alert.alert()` in `<Button />`, you saw this:

```js
onPress={() => Alert.alert('Hello!')} 
```

We know that `onPress` is a prop that expects a function. Here is why it's written this way:

- Most importantly, in RN, the `()=>` tells the `onPress` prop to ONLY run the function once the user presses on the button.

  - In other words, the `() =>` is a way to tell your code: "Don't run this yet. Only run when the button is actually pressed."

- If you had written: `onPress={Alert.alert('Hi')}` without the `() =>` the Alert would appear the moment the app opened.
  - For the curious: This is because here we are passing the _result_ of the function, instead of a _function itself_

---
hideInToc: true
---

### `() =>` a.k.a. The Arrow Function


- `() =>` is also a shorter way to write a whole `function`. This means that instead of writing all of this:

```js
function sayHello() {
  Alert.alert("Hello");
}
```

You can write it like this:

```js
() => Alert.alert("Hello")
```

They are the exactly the same. You can think of it as _disposable_, one-time-use functions.

You will use them a lot when defining _handling_ functions.


---
hideInToc: true
---

# How React Native "Watches" Your Code

React Native is "reactive." It doesn't watch all your code; it only watches your `State`. 


1. The Event: A user taps a `<Pressable>` or `<Button />` with a `onPress` prop.

2. The onPress triggers a "_Setter Function_" (like Alert.alert("Hello")).

3. React notices the setter was called. It quickly re-reads your entire code and "re-paints" the screen with the new data.

---

# `<Pressable>`

As you saw last week, `<Button />` is quite simple and hard to style.

`<Pressable>` is much more flexible, you can treat it like a `<View>` for adding interaction to the different elements in your prototype.

Since `<Pressable>` is more like a view, all of its children, will be pressable

It's flexibility allows us to give interactions to many things like Images, Text, Icons, etc.

If there's time we'll do a live demo, otherwise, there is a `pressable-example` folder inside the zip file uploaded to LearnIT.

---
hideInToc: true
---

## `<Pressable>` props and tips

0. Remember to import it!
1. Pressable is **NOT** self-closing. Meaning it can have children

| Prop        | Purpose                                             | Requirement | Expects                |
|-------------|-----------------------------------------------------|-------------|------------------------|
| onPress     | Called immediately when the user taps the element.  | Required    | Function: () => {}     |
| style       | Controls layout and visuals (just like a View).     | Optional    | Object: styles.name    |
| onLongPress | Triggers logic if the user holds the press.         | Optional    | Function               |

---
hideInToc: true
---

```js
export default function App() {
  return (
    <View style={styles.container}>
      {/* Example 1: Pressable Image */}
      <Pressable 
        onPress={() => Alert.alert("You clicked the Image!")}
      >
        <Image 
          source={{ uri: 'https://picsum.photos/200' }} 
          style={styles.image} 
        />
      </Pressable>
      {/* Example 2: Pressable "Button" */}
      <Pressable 
        style={styles.button} 
        onPress={() => Alert.alert("You clicked the Box!")}
      >
        <Text style={styles.buttonText}>Click the Box</Text>
      </Pressable>
      {/* Example 3: Pressable Text */}
      <Pressable onPress={() => Alert.alert("You clicked the Text!")}>
        <Text style={styles.simpleText}>Click this plain text</Text>
      </Pressable>
    </View>
  );
}
```


---

# `useState`

- `useState` is a special function that gives your app a 'memory' and signals the screen to re-paint whenever you use the _setter_ function.

It's written like this:

```js
const [state, setState] = useState(initialState)

```

- It always returns two items:
  1. A value. Known as the current value, assigned to `state` 
      - Think of this as what is currently on the screen
  2. A function. Known as the "setter" function. Assigned to  `setState`
      - Think of this as the tool that allows us to change what is on the screen
      - This function will be used by you in your own **handling** functions.

- It does not require any parameters, but it is highly recommended to give it the `initialState` or at least an empty string `""`


---
hideInToc: true
---

## Step by Step using `useState`

0. Import it at the top using

```js
import { useState } from "react";
```

1. In the JS Zone. Define `useState` by assigning it's two returns to variables wrapped in `[]`. Also add an initial value after the `()`

```js
const [currentOrder, setCurrentOrder] = useState("No orders yet...");
```

Let's do a quick demo!


---

## Step by Step using `useState`

0. Import it at the top using

```js
import { useState } from "react";
```

1. In the JS Zone. Define `useState` by assigning it's two returns to variables wrapped in `[]`. Also add an initial value after the `()`

```js
const [currentOrder, setCurrentOrder] = useState("No orders yet...");
```

2. Define a _"handling"_ function. This function, will _handle_ the event of a user clicking, telling the _setter_ function to activate.

```js
const handleOrder = (dish, emoji) => {
  setCurrentOrder("Cooking " + dish + " " + emoji); 
};
```

---
hideInToc: true
---

# Example

`useState` is always defined in the JS Zone. 

```js
export default function App() {
  const restaurantName = "PizzBurg 🌃";
  const workerName = "Luis";

  // Defining our state using useState
  const [currentOrder, setCurrentOrder] = useState("No orders yet...");

  // Setter Function
  const handleOrder = (dish, emoji) => {
    setCurrentOrder("Sending order to kitchen: \n" + dish + " " + emoji);
  };
```

---
hideInToc: true
---

## Anatomy of a Handling Function

```js
const handleOrder = (dish, emoji) => {
  setCurrentOrder("Sending order to kitchen: \n" + dish + " " + emoji)
};
```

`const`: Ensures the result is not changed elsewhere

`handleOrder`: The name you give the handling function.

`(dish, emoji)`: The Parameters of the function.

`=>`: The Arrow. The short way to write the function

`The Action`: We call the **setter** function, to change the status and change the screen.

---

## Doing resets

After changing the state, sometimes you will want to go back to the _default_ state. For that, you can:

Write another handling function

```js
const clearBoard = () => {
    setCurrentOrder("No orders yet...");
  };
```

or directly activating the setter function

```js
<Button
  onPress={() => setCurrentOrder("No orders yet...")}
/>
```

In this case it's really a matter of preference/elegance. The best practices is to have a handlerfunction, but IMO sometimes it's unnecessary for just resetting the state

---
layout: center
---

# Live Code

On LearnIT, the code is in the folder _"state-example"_


<style>
h1 {
  text-align:center;
}

</style>

---
layout: center
---

# Next Week

Next week we will take a break from coding, and look at accesibility for React Native.

We'll talk about design, adding accesibility tags to our code/projects, and more generally about digital accesibility.

We will come back to State throughout the course, but we wont add any more complexity!


<style>
h1 {
  text-align:center;
}

</style>

---
layout: center
---


# Exercise 4

- For the exercises today, you will have a few chances to practice:
  - Conditionals
  - Functions
  - State, setterFunctions and Pressable

- You can use the rest of the time to finish your Assignment #1


<style>
h1 {
  text-align:center;
}
p {
  text-align:center;
}
</style>
