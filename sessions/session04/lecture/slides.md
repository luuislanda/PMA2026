---
theme: academic
class: 'text-center'
transition: slide-left
title: PMA2026 Session X
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
layout: center
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

# Functions

A function, is like a <u>recipe</u>.

- It's a set of instructions we can follow to obtain the same results.
- Like a recipe, it can be re-used and depending on what you are cooking, there can be many steps in it.
- This is how a function is written in JavaScript and React Native

```js
function sayHello(greeting) {
  console.log(greeting, + "how are you?")
}

const danishGreeting = "Godmorgen"

sayHello(danishGreeting)
```


---

```ts {monaco-run}
function distance(x: number, y: number) {
  return Math.sqrt(x ** 2 + y ** 2)
}
console.log(distance(3, 4))
```


---

## Anatomy of a Function
### Coffe Machine Function

| Part       | Name            | What it does                                                             | Analogy                        |
|------------|-----------------|--------------------------------------------------------------------------|-------------------------------------------|
| Keyword    | function        | Signals to JavaScript that you are starting a new definition of a function.            |        |
| Input      | Parameters      | Variables listed in the definition that act as placeholders for data.    | The part where you insert raw materials like coffee beans or water. |
| Output     | return          | Sends a value back to where the function was called and stops execution. | The finished dish/product, in our case, a pot of coffee.            |



---
level: 2
hideInToc: true
---

## Function Syntax and Parts


---


---

# JavaScript Syntax


---

# How React Native "watches" variables


---

# `useState` and `onPress`


---


