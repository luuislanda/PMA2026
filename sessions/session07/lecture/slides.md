---
theme: academic
class: 'text-center'
transition: slide-left
title: PMA2026 Session X
mdc: true
hideInToc: true
---

# Session 7: Stack Navigation, and Custom Components

Adding stack navigation to your prototype, making a custom component, and Assignment #2

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

<Toc maxDepth="1"></Toc>


---

# Course Announcements

- The cheatsheet has been updated, check it out on LearnIT
- Guides have been updated so all commands use SDK 54
- I am a bit busy with another project for the DASYA Lab until the 29th, so I ask for a bit of patience for your feedback for Assignment #1
- What I seen so far looks good though!
- Also I have noticed that some people have used ChatGPT/Claude/LLMs to write parts of the code, that is ok, just bear in mind of ITU guidelines when using it for the exam

---
layout: center
---


# Assignment #2

The assignment is now on LearnIT, but before we take a look at it, let me explain to you why Assignment 2 is important.

<style>
  h1 {
    text-align: center;
  }
</style>

---
hideInToc: true
layout: center
zoom: 1.1
---

# Assignment #2 and your Exam


- You can think of Assignment #2 as a "mini exam"
- Assignment #2's is a group assignment that can be used as base for your exam submission.
- This is specially true of the code!
- The technical requirements of the exam will not be much more complex than Assignment #2.
- You will get a chance to get one-on-one feedback regarding your submission for Assignment #2. Use this opportunity to ask questions about the exam as well

---
hideInToc: true
layout: center
---

# Assignment #2

Let's go through the assignment together

<style>
  h1 {
    text-align: center;
  }
</style>

---
hideInToc: true
layout: center
---

Question time

<style>
  p {
    text-align: center;
  }
</style>

---
layout: center
---

# Back to the Cat Feeder App

Let's continue on the application we built last week. To this code with 2 screens I want to add the following:

- A screen where the user can add data every time they have fed their cat
- A screen where all the data is shown, and the user can click and see the information about that specific time the cat was fed

The code I am about to modify is called `Session 7 - Starting Code`. You can download it on LearnIT or you can copy the code from the `.js` files [from the github repository](*)

The `starting code` already has a new _static_ page for the feeding function. Let's take a quick look

<style>
  h1 {
    text-align: center;
  }
</style>

---
layout: center
---


I want add screen where all the feedings appear to my Home screen. Because I want it to be part of my Home screen, I need to use `StackNavigation`. 


---
layout: image-right
image: https://media.geeksforgeeks.org/wp-content/uploads/20250708173723170760/push232.webp
backgroundSize: 120%
---

# Stack Navigation

- The `NativeStackNavigator` is initialised inside the `App.js` file
- Though it is initialised there, the screens inside the `NativeStack`can only be acceses within the base screen
- This is different from `BottomTabNavigator` which exists _across_ all our screens
- Because of this, it's recommended that stack navigation generally follows the logic of the screen in which it has been initialised


---

# Stack Navigation

In our case, our _stack_ for the Home screen will look like this:



---
layout: center
---

Like last time, let's begin by first planning and coding the new screen. 

---
layout: image-right
image: https://habrastorage.org/getpro/habr/upload_files/3ec/d4e/912/3ecd4e9126604c45ea40093a1f3e376d.gif
backgroundSize: 50%
---


# `<ScrollView>`

To showcase the history of the times the cat was fed, we will need something that can be scrolled. For this we can use the `<ScrollView>` component.

Like the name implies, `<ScrollView>` functions exactly the same as a `<View>` but adding the ability to scroll.

It is good for <u>**prototypes**</u> and for when you want to showcase a non-huge number of data/options.  

Let's see how to use it!



---
layout: center
---

Now let's add a button to our normal homescreen, so we can navigate to this new screen.


---
layout: image-right
image: https://www.codevscolor.com/ca6485d991adff26ddb8e5db68e481d3/react-native-touchablehighlight.gif
backgroundSize: 50%
---


# `<TouchableOpacity>`

`<TouchableOppacity>` is extremely similar to `<Pressable>`, with the main added benefit that it includes an animation every time the user presses the component.

- It is particularly useful for buttons, and any other actions that the user should get feedback on
- It makes the styling of the feedback easier than `<Pressable>` and `<Button>`


---
layout: center
---

Break, see you in 15 minutes :)


---

And this is what the code will look like for our home stack (as a static page)

```js {1|3|5,22|6,12|6-10|12-21|all}
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ title: 'Home', headerShown: false }}
      />

      <HomeStack.Screen
        name="History"
        component={HistoryScreen}
        options={{ 
          title: 'Feeding History', 
          headerShown: true, 
          presentation: "modal", 
          animation: "slide_from_bottom"
        }}
      />
    </HomeStack.Navigator>
  );
}
```
---

Once the `HomeStack` function is made, we can now pass it to the `BottomTabNavigator` and tell it to render the stack of screens instead of a single screen.

```js
export default function App() {

  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Home" 
            component={HomeStackScreen} // Before the Stack this was component={HomeScreen}
            options={{ title: 'Home', tabBarIcon: () => <Text>🏠</Text> }}
          />
          <Tab.Screen 
            name="Feed" 
            component={FeedScreen}
            options={{ title: 'Feed Log', tabBarIcon: () => <Text>📝</Text> }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileScreen}
            options={{ title: 'Profile', tabBarIcon: () => <Text>🐈</Text> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
```

---
layout: center
---

Now this will look different when we add dynamic elements, and when we want variables to be shared across screens

But the example above is mainly to show you that a `Stack` is used in the same way a `Screen` is used. Think of it as a slightly more complicated screen.



