# Cheatsheet

Over the course of the semester, this page will be updated with tips and tricks of things you will use a lot. If you would like to contribute feel free to send a pull request!

## Project Set Up

### Setting Up a New Project

Here's how I recommend you go about starting your projects.

0. Open VSCode and click on `Open`
1. Using that navigator, create a folder for this project, we'll call it "Session 2"
2. Click on `Open` and then say you trust the authors
3. On the top menu, go to `Terminal` and then click on `New Terminal`
4. Once it's open, we can run the commands from the guide in exercise 1

`npx create-expo-app@latest --template blank .`

5. After a minute or so, everything is set up. Now, run the final command:

`npm start`

6. Scan the QR code with your phone (if you haven't yet download the Expo Go App for your phone)

7. If connecting your phone to the computer is giving you trouble, [you can follow this troubleshooting guide](https://github.com/luuislanda/PMA2026/tree/main/troubleshooting)

## React Native Components

React Native components always start with a Capital Letter.

### `<View>`

The View is the most fundamental building block. It acts as a container or wrapper, similar to a "Frame" in Figma. It is used to group other components together, apply layout settings via Flexbox, and provide visual styling like background colors and borders.

`<View>` can have children!

#### Syntax

```js
<View style={styles.container}>
{/* Other components go here */}
</View> //Important to close the tag!
```

#### Props

| Prop          | Purpose                                   | Requirement | Expects                |
|---------------|-------------------------------------------|-------------|------------------------|
| style         | Controls layout, spacing, and background. | Optional    | Object: styles.name    |
| pointerEvents | Defines if the view responds to touches.  | Optional    | String: 'none', 'auto' |

### `<Text>`

In React Native, you cannot place a raw string of text directly inside a container. All text must be wrapped in a Text component. 

It supports nesting meanign it can have children (but only for other `<Text>` components) and handles typography settings like font size, weight, and letter spacing.

#### Syntax

```js
<Text style={styles.label}>
Your text content here
</Text>
```

#### Props

| Prop          | Purpose                                     | Requirement | Expects               |
|---------------|---------------------------------------------|-------------|-----------------------|
| style         | Controls typography and font settings.      | Optional    | Object: styles.name   |
| numberOfLines | Limits text to a specific amount of lines.  | Optional    | Number: 2             |
| selectable    | Allows the user to highlight and copy text. | Optional    | Boolean: true / false |

### `<Image />`

This component is used to display images from local files, the app's asset folder, or a network URL. Unlike design software, if you are loading an image from the web, you must explicitly define its width and height in the style prop, or it will not appear.

Image cannot have children! So it is a **self-closing** component

#### Syntax

```js
<Image 
  source={require('./assets/local-icon.png')} 
  style={styles.localIcon} 
/> // This is how you end the tag of a self closing component!
```


#### Props 

| Prop       | Purpose                                      | Requirement | Expects                    |
|------------|----------------------------------------------|-------------|----------------------------|
| source     | The path or URL of the image file.           | Required    | require() or {uri: ''}     |
| style      | Must define Width and Height for web images. | Required    | Object: styles.name        |
| resizeMode | How the image scales to fit its frame.       | Optional    | String: 'cover', 'contain' |
| blurRadius | Applies a Gaussian blur to the image.        | Optional    | Number: 10                 |


#### Online vs local files

Depending on whether the image you want to use is online, or in your local folder, the `<Image>` component props will be different.

##### Online Images

For online images, the source `prop` must be accompanied by a `uri` and the link to the image

```js
<Image 
  source={{
    uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Sheba1.JPG', 
  }}
/>
```

##### Local Images

For offline images (and assets in general), you must specify the _path_ to your image.

The _path_ can be easily obtain in VSCode by going to the folder where your image is, right clicking and then selecting `Copy Relative Path`

<img src="./assets/relative-paths.png" width="500">

Once you have that, you paste it into your code. However, you will notice that what you paste is as follows:

`assets/post_image.png` which is not how React Native likes it's relative paths. This is easily solved by adding a `./` at the beginning of the path you just coppied.

The final result will look like this:

```js
<Image 
    source={require("./assets/post_image.png")}
/>
```

For more information about paths, [here is a good article explaining them](https://www.freecodecamp.org/learn/responsive-web-design-v9/lecture-working-with-links/what-is-the-difference-between-absolute-and-relative-paths). However, bear in mind that it's a guide for the web, and that most programming languages (and even operating systems) have their own way to handle relative paths

### `<Button />`

A simple, self-closing component for handling user taps. It renders using the native button styles of the underlying platform (iOS or Android), meaning it will look slightly different on each device. 

It is useful for quick actions but is limited in custom visual styling. `<Button />` cannot have children and therefore is a **self-closing** component.

#### Syntax

```js
<Button 
  title="Submit" 
  onPress={() => console.log('Button pressed')} 
  color="#007AFF"
/>
```

#### Props

| Prop     | Purpose                                     | Requirement | Expects                 |
|----------|---------------------------------------------|-------------|-------------------------|
| title    | The text displayed on the button.           | Required    | String: ""Click Me""    |
| onPress  | The function to run when tapped.            | Required    | Function: () =>         |
| color    | iOS: Text color. Android: Background color. | Optional    | String: 'red' or '#hex' |
| disabled | Greys out the button and stops interaction. | Optional    | Boolean: true / false   |

### `Alert` function

Alert is not a component; it is an API (a function) that triggers a native system dialog. 

It is used to provide feedback, confirm an action, or show an error. Because it uses the native OS dialog, it will look like a standard iOS alert on an iPhone and a Material Design dialog on Android.

#### Parameters

| Argument | Purpose                                     | Requirement | Expects                   |          |                       |
|----------|---------------------------------------------|-------------|---------------------------|----------|-----------------------|
| Title    | The bold heading at the top of the pop-up.  | Required    | String: ""Warning""       |          |                       |
| Message  | The smaller body text explaining the alert. | Optional    | String: ""Are you sure?"" |          |                       |

## StyleSheet

StyleSheet is an abstraction similar to CSS that allows you to define styles away from the render function. It is the standard way to style components in React Native. 

It usually lives at the bottom of the code.

### Syntax

```js
const styles = StyleSheet.create({
  layerName: {
    property: value,
  },
});
```

### Example

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
});
```

### Some commonly used properties

| Property Group | Purpose                                         | Common Values                                      |
|----------------|-------------------------------------------------|----------------------------------------------------|
| Flexbox        | Controls how items are distributed and aligned. | flex, flexDirection, justifyContent, alignItems    |
| Spacing        | Controls distance inside and outside the frame. | padding, margin, paddingVertical, marginHorizontal |
| Borders        | Controls the stroke and corner radius.          | borderWidth, borderColor, borderRadius             |
| Positioning    | Manages layers relative to their parents.       | position: 'absolute', top, bottom, left, right     |

## Flexbox

Flexbox is the engine React Native uses to handle layout. Instead of placing elements at fixed X and Y coordinates, Flexbox allows you to stack items and distribute space dynamically. 

This is the programmatic version of Auto-Layout in Figma. It ensures that your UI adapts correctly to different screen sizes, from a small iPhone SE to a large Android tablet.

### Syntax

Flexbox properties are defined within the StyleSheet and applied to a <View> in this example.

```js
const styles = StyleSheet.create({
  layoutFrame: {
    flex: 1,                // Component fills its parent
    flexDirection: 'row',   // Sets the direction of the stack
    justifyContent: 'center', // Aligns items along the main axis
    alignItems: 'center',     // Aligns items along the cross axis
  },
});
```

### Quick Figma Comparison

| Figma Setting            | React Native Property | Possible Values                                                     |
|--------------------------|-----------------------|---------------------------------------------------------------------|
| Direction: Vertical      | flexDirection         | 'column' (Default)                                                  |
| Direction: Horizontal    | flexDirection         | 'row'                                                               |
| Distribution (Main Axis) | justifyContent        | 'flex-start', 'center', 'flex-end', 'space-between', 'space-around' |
| Alignment (Cross Axis)   | alignItems            | 'flex-start', 'center', 'flex-end', 'stretch'                       |
| Gap (Item Spacing)       | gap                   | Number (e.g., 12)                                                   |
| Padding                  | padding               | Number (e.g., 16)                                                   |
| Padding (Left/Right)     | paddingHorizontal     | Number (e.g., 20)                                                   |
| Padding (Top/Bottom)     | paddingVertical       | Number (e.g., 10)                                                   |
| Sizing: Fill Container   | flex                  | 1                                                                   |
| Sizing: Hug Contents     | (No flex property)    | Define specific width or height or let content dictate size.        |
