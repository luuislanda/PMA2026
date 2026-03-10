# Session 6 Exercise
## `<TextInput>` and Navigation

These exercises will help you practice TextInput, React state, and navigation between screens in React Native.

### Set Up

For this exercise, we will build on the code we did in class. Download the code for session 6 from LearnIT.

### Step 0

The example is based on an app for cats, but could be for any pet. So feel free to spend some time changing the image and styling to something that speaks more to you (:


### 6.1 — Adding more datapoints
#### 6.1.1 Add a TextInput for your username
The goal here is to allow the user type their own name/username.

Steps:

1. In `App.js`, create a state variable using useState: 

```js
const [userName, setUserName] = useState("")
```

2. Give the variable  to `ProfileScreen` the same way `catName` is passed.
3. Add a new `<TextInput/>` in `ProfileScreen.js`

End result is a new `<TextInput>` field for username in the Profile screen.


#### 6.1.2 Add a TextInput for your cat’s weight
The goal with this is to let the user type the cat’s weight (e.g., 4.2 kg).

Steps:

In `App.js`, start a new State:

```js
const [catWeight, setCatWeight] = useState("")
```


1. Give the variables `catWeight` + `setCatWeight` to `ProfileScreen`.
2. Add a <TextInput/> with the prop `keyboardType` set to "decimal-pad".



#### 6.1.3 Pass the variables to the Home screen
Goal: Take what you did in the two steps, and make sure it works across your entire prototype. This exercise is meant to make your code display username + weight on the Home screen.

Steps:

In `App.js`, pass values as props to the `HomeScreen`:

```js
<HomeScreen catName={catName} userName={userName} catWeight={catWeight}/>
```

In `HomeScreen.js`, display the values for `userName` and `catWeight`.

Expected Result:
Home updates automatically based on Profile input.


### 6.2 — Add an “About” Screen

Create a brand‑new screen where you describe your cat or pet through a poem.


#### 6.2.1 Add a new screen called “About”
Task: Create a new screen describing your cat or pet.

Steps:

1. Create a new file inside the "screens" folder called `AboutScreen.js`
2. Add a simple layout for a title and text.
3. Write a poem about your cat/pet
4. Add the screen to the tab navigator in `App.js`
4.1 You can simply copy paste the other tabs and change names, make sure the new tab points to the right file!

By the end, you should see a new tab for the About screen and you should be able to navigate to it and read the poem

#### 6.2.2 Use your pet's name dynamically
Make the About page use the cat’s actual name — or a default text if no name is provided.


Steps:

1. Pass catName to `<AboutScreen />`
2. Find places in the poem where you put the pet's name or where it would fit


Expected Result:
Content reads naturally:

For example the title could read:
“About Michi”
where "Michi" is the name of your pet

### Optional

#### 6.3 — Rework “Food Today” into Portion Tracking
##### 6.3.1 Add a screen for “Portions Today”

Create a new screen where the user manages the number of portions the cat has eaten.

The logic of the screen is as follows:
Every time the user gives food to their pet, they can go to that screen and press a button that increases the count of the number of times the pet has been fed.

The counter can go up or down, the total number of times the pet has been fed must appear in the Home screen.

**End result:**
You now have a small feeding tracker!

1. The user clicks “Add Portion”
2. The count goes up
3. Home shows the total portions for the day
