# Exercise 4

## Part 1: Control Flow (The "JS Zone")
### 1.1: Access Validator
**Scenario**: Bouncer App. You are coding a bouncer app for a club. The app needs to check a user's age and decide if they are allowed to enter.

Instructions:
- Define a variable for userAge in the JS Zone.
- Use an if/else statement to check if the age is 18 or older.
- Store the result ("Access Granted" or "Access Denied") in a message variable.

Expected Result: The screen displays different text depending on whether the age variable is set above or below 18.

Tip: Logic goes in the JS Zone. You can display the variable in the RN Zone using {} inside a <Text> component.

## Part 2: Functions (The "Recipes")
### 2.1: Currency Converter
Scenario: Travel Assistant. Your user is traveling from Denmark to Germany and needs to quickly see how much their DKK is worth in Euros.

Instructions:

- In the JS Zone, define a function convertToEuro(dkk).
- The function should multiply the input by 0.13 and return the result as a string with "EUR" at the end.
- Call this function inside a <Text> component in your JSX.

Expected Result: The screen shows a converted price (e.g., "13.00 EUR") based on the DKK value you passed into the function.

### 2.2: Inventory Checker
Scenario: Warehouse Manager. You are building a tool for a warehouse worker to log incoming stock. The system has a safety limit of **50** items per bin.

Instructions:
- Write a function checkStock(item, quantity).
- Inside the function, use an if statement: if the quantity is over 50, return an error message. Otherwise, return a success message.
- Call the function twice in your components with different numbers to test both outcomes.

Expected Result: The screen displays two separate lines of text: one showing a success message and one showing a limit error.

## Part 3: Interactivity (State & Pressables)
### 3.1: Basic Counter
Scenario: Tally Counter. You are creating a simple app for a museum staff member to count how many people enter the building.

Instructions:

- Initialize a count state at 0 using useState.

- Create a `<Pressable>` that acts as a button.

- Use the onPress prop to trigger the setter function and increase the count by 1.

Expected Result: Every time the button is pressed, the number displayed on the screen increases instantly.

Template Code:

```js
import { useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

export default function App() {
  // 1. Define your state here (starting at 0)
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      
      </Text>

      {/* 2. Add an onPress that increments the count */}
      <Pressable style={styles.button} onPress={() => { /* logic here */ }}>

    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
  button: { backgroundColor: 'blue', padding: 15, borderRadius: 10 },
  buttonText: { color: 'white' }
});
```

### 3.2: String State Switcher
Scenario: Dark/Light Mode. You joined the developing team for a smart home app. You are tasked with implementing the "Light Mode" or "Dark Mode" switch.

Instructions:

- Create a state called selection initialized to "None."

- Create a handling function handlePress(choice) that calls your state setter.

- Create two `<Pressable>` components. Each one should pass a different string into the handling function when tapped.

Expected Result: The "Selection:" text at the top of the app updates to match whichever button was last pressed.

Code Template:

```js
import { useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

export default function App() {
  // 1. Define selection state here
  const [selection, setSelection] = useState("None");

  // 2. Complete this function to update state
  const handlePress = (mode) => {
    // setter logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Active Mode: {selection}</Text>

      <Pressable style={styles.button} onPress={() => handlePress("Light Mode")}>
        <Text>Switch to Light Mode</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => handlePress("Dark Mode")}>
        <Text>Switch to Dark Mode</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 30 },
  button: { backgroundColor: '#ddd', padding: 15, margin: 10, width: 200, alignItems: 'center' }
});
```


### 3.3: Toggle Boolean with Conditional Styling
Scenario: Security System. You are building the dashboard for a home alarm system. It needs a clear visual indicator of whether the alarm is active or inactive.

Instructions:
- Create a boolean state isActive (true/false).
- Create a function to toggle the state (set it to the opposite of its current value).
- Use a Ternary Operator in the style prop of your main <View> to change the background color (e.g., green when active, red when inactive).

Expected Result: Tapping the button flips the entire screen color between red and green and changes the status text.

Template Code:

```js
import { useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

export default function App() {
  // 1. Define boolean state (isActive)
  const [isActive, setIsActive] = useState(false);

  const toggleAlarm = () => {
    // 2. Logic to flip the boolean (true to false, false to true)
  };

  return (
    // 3. Use a ternary operator in the style array to change backgroundColor
    <View style={[styles.container, { backgroundColor: 'gray' }]}>
      
      <Text style={styles.statusText}>
        {/* 4. Use a ternary here to show "ALARM ACTIVE" or "ALARM INACTIVE" */}
        Status
      </Text>

      <Pressable style={styles.toggleButton} onPress={toggleAlarm}>
        <Text>Toggle System</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  statusText: { fontSize: 28, color: 'white', fontWeight: 'bold', marginBottom: 20 },
  toggleButton: { backgroundColor: 'white', padding: 20, borderRadius: 50 }
});
```