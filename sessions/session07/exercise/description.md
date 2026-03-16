# Exercises Session 7

These exercises use the Cat Feeding Tracker app as a starting point.

You can download the code on LearnIT or copy the content of the `.js` files by going to the [github repository]

All changes go inside the existing files you already have.

---

## Exercise 1 — ScrollView: Make HomeScreen scrollable

**Topic:** `ScrollView`

**The problem:**
Open `HomeScreen.js`. The root element is a plain `<View>`. On small phones, if more cards are added, the content will overflow and be cut off at the bottom.

**Your task:**
1. Replace the outer `<View>` in `HomeScreen.js` with a `<ScrollView>`.
2. Make sure you also import `ScrollView` from `'react-native'`.
3. Move the `flex: 1` and `backgroundColor` styles to the `ScrollView`, and add a `contentContainerStyle` prop that has `padding: 24` and `paddingBottom: 40`.

**Hint:**
`ScrollView` takes two style props:
```jsx
<ScrollView
  style={{ flex: 1, backgroundColor: '#F7F3EB' }}
  contentContainerStyle={{ padding: 24, paddingBottom: 40 }}
>
```
Remove `justifyContent: 'center'` from the container style — it doesn't work with `ScrollView`.

**Expected result:** You can scroll up and down on the Home screen.

---

## Exercise 2 — TouchableOpacity: Add a "Go to Feed Log" button on HomeScreen

**Topic:** `TouchableOpacity`

**The problem:**
The Home screen shows a summary but has no direct shortcut to log a new feeding — you always have to tap the bottom tab bar.

**Your task:**
Inside `HomeScreen.js`, add a second button below the existing "View Feeding History" button. The button should:
- Display the text `"Log a Feeding"`
- Use `TouchableOpacity` with a slightly different color (`'#1E7AB3'` is a good contrast choice)
- Navigate to the `'Feed'` tab when pressed (use the `navigation` object that's already available in this file via `useNavigation`)

**Hint — navigating to a tab from a stack screen:**
```js
navigation.navigate('Feed');   // 'Feed' is the Tab.Screen name set in App.js
```

**Hint — a minimal button pattern:**
```jsx
<TouchableOpacity
  style={styles.feedButton}
  onPress={() => { /* your navigate call */ }}
>
  <Text style={styles.feedButtonText}>Log a Feeding</Text>
</TouchableOpacity>
```
Add matching entries in the `StyleSheet` at the bottom of the file.

**Expected result:** Tapping "Log a Feeding" on the Home screen jumps directly to the Feed Log tab.

---

## Exercise 3 — useNavigation: Add a "Back to Home" button on HistoryScreen

**Topic:** `useNavigation`

**The problem:**
`HistoryScreen` is shown as a modal. Currently users close it by swiping down or using the system back gesture. Add an explicit close button inside the screen itself.

**Your task:**
1. In `HistoryScreen.js`, import `useNavigation` from `'@react-navigation/native'`.
2. Call the hook inside the component to get the `navigation` object.
3. Add a `TouchableOpacity` button at the bottom of the `ScrollView` with the label `"Close"`.
4. When pressed, call `navigation.goBack()` to dismiss the modal.

**Remember to:**
- Import `TouchableOpacity` from `'react-native'`.
- Add a style for the close button in the `StyleSheet`.

**Hint:**
```js
import { useNavigation } from '@react-navigation/native';

export default function HistoryScreen(/* ... */) {
  const navigation = useNavigation();
  // ...
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Text>Close</Text>
  </TouchableOpacity>
}
```

**Expected result:** A "Close" button appears at the bottom of the feeding history modal and dismisses it when tapped.

---

## Exercise 4 — Native Stack Navigation: Add a "Cat Stats" screen

**Topic:** `createNativeStackNavigator`, screen registration, `useNavigation`

**The problem:**
The app already has a stack inside the Home tab (`HomeStack`) with two screens: `HomeMain` and `History`. Your task is to add a third screen to this same stack.

**Your task:**

**Step 1 — Create the screen file:**
Create a new file `screens/CatStatsScreen.js` with the following content as a starting point:
```jsx
import { View, Text, StyleSheet } from 'react-native';

export default function CatStatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Cat Stats</Text>
      <Text style={styles.stat}>Average daily intake: 60 g</Text>
      <Text style={styles.stat}>Feeding streak: 5 days</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F3EB', padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '800', color: '#2C2C2C', marginBottom: 24, textAlign: 'center' },
  stat: { fontSize: 18, color: '#4A4A4A', marginBottom: 12 },
});
```

**Step 2 — Register the screen in App.js:**
In `App.js`, import `CatStatsScreen` and add a new `HomeStack.Screen` inside `HomeStackScreen`, just after the `History` screen:
```jsx
<HomeStack.Screen
  name="CatStats"
  options={{ title: 'Cat Stats', headerShown: true }}
>
  {() => <CatStatsScreen />}
</HomeStack.Screen>
```

**Step 3 — Add a button that navigates to it:**
In `HomeScreen.js`, add a third button `"View Cat Stats"` that calls:
```js
navigation.navigate('CatStats')
```

**Expected result:** Tapping "View Cat Stats" on the Home screen pushes a new screen onto the stack with a back arrow in the header.

---

## Bonus Challenge — Combine everything

Build a `FeedEntryDetailScreen` that:
- Lives inside the `HomeStack` (native stack navigation)
- Is navigated to from `HistoryScreen` when a card is tapped (`TouchableOpacity` + `useNavigation`)
- Displays full details of the selected entry passed as route params
- Has a "Close" button that calls `navigation.goBack()`
- The full list in `HistoryScreen` should be scrollable even with many entries (`ScrollView`)

> **Tip:** To pass data when navigating to a new screen, use:
> ```js
> navigation.navigate('FeedEntryDetail', { personName, amountInGrams, feedNotes });
> ```
> To read it on the other side, use the `useRoute` hook from `'@react-navigation/native'`:
> ```js
> import { useRoute } from '@react-navigation/native';
> const route = useRoute();
> const { personName, amountInGrams, feedNotes } = route.params;
> ```
