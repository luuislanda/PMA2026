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

# Course Announcements

---

# Variables

A variable is a **container** for data. 

In JavaScript you have two options to **declare** variables, you can use `const` or `let`.

| **Type of variable**          | **The Restaurant Analogy**                            | **The Rule**                                   |
|-------------------------------|----------------------------------------|--------------------------------------------|
| `const` | The table | You cannot change this value later.        |
| `let`              | The Pencil. You can erase and rewrite. | You can change this value as the app runs. |
 

If you have seen any online tutorials, or code written where they use `var`, you should know that these days `var` is not used!

---
level: 2
hideInToc: true
---

## `const` vs `var`

In React Native, and in this course 95% of the time you will be using `const`

This is for different reasons, but it's important to know that this is the case.

If you are in doubt, use `const`!



---
level: 2
hideInToc: true
layout: image-right
---

## When to use `const` or `var`?
### Example 1: General

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
let weather = "Rainy"
```

---
level: 2
hideInToc: true
layout: image-right
---

## When to use `const` or `var`?
### Example 2: RN Restaurant App

You just started working in a brand new restaurant and need to use an app to take the customers' orders. As the restaurant is new, the app is simple right now.


---

### Things to consider for variables in RN

- Define your variables before the `return` part of the functional part of the code
- To call variables, we use wrap them in `{}`
  - As we saw last week, whenever we use `{}` in RN, we create a "portal" to use JavaScript

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

Before writing any code, we need to plan ahead and _think_: 
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

## Live Example

```js {monaco-run} {autorun:false, height: '400px'}
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

- Put the variables and functions, before the `return` statement that is filled with your app's components
- When `calling` a 


---

# Control Flow / Conditionals

---
hideInToc: true
---

## Example, coffee machine

```js
function brewCoffee(cups) {
  if (cups > 12) {
    return "❌ Too many cups! Max is 12.";
  }
  else {
  return "☕ Brewing " + cups + " cups of coffee...";
  }
}

console.log(brewCoffee(4));
```

---
hideInToc: true
---

## Example React Native

HERE A SIMPLE EXAMPLE

---
hideInToc: true
---
# Break

---
hideInToc: true
---

## Brief Recap of Part 1


---
level: 2
---

## Function and Control Flow Syntax

### The Arrow Function

Last week when using `Alert.alert()`, you saw this:

`() => ` 

This is a shorter way to write `function` and most importantly, in RN, a way to tell the `onPress` prop to run a function once it's been pressedb

- Without the arrow: If you wrote `onPress={handleOrder("Pizza")}`, the function would run immediately as soon as the app starts, before anyone even touches the button!

- With the arrow: "Don't run this yet. Store this logic in a box, and only open that box when the button is actually pressed."

---
hideInToc: true
---

### The Ternary

You also saw this `?` symbol being used when you used ChatGPT to get answers for your assignment,

It's an abbreviation of an `if {} else {}` statement. 

---

# `<Pressable>`


---

# `useState`

---

# `onPress`

---
hideInToc: true
---


# How React Native "watches" variables

---

# Example


---

| Step           | React / JS Name | The Action in PizzBurg                                                        | Analogy                                                          |                                                           |
|----------------|-----------------|-------------------------------------------------------------------------------|------------------------------------------------------------------|-----------------------------------------------------------|
| 1. The Memory  | `useState`        | Creating the digital order |  Sends order to kitchen |
| 2. The Trigger | `onPress`         | The user taps the ""Order Pizza"" button.                                     | The worker placing the order at the counter.                   |                                                           |
| 3. The Logic   | `handleOrder`     | The function that decides to show ""Cooking..."" and starts a 2-second timer. |  |                                                           |
| 4. The Update  | `setCurrentOrder` | Using the setter function to change the text to ""Ready! ✅""                       | The push that changes the text on the screen  |                                                           |



---


