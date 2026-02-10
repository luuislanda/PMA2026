# Cheatsheet

Over the course of the semester, this page will be updated with tips and tricks of things you will use a lot. If you would like to contribute feel free to send a pull request!

**Table of Contents**

- [Session 1](#session-1)
    - [Setting Up a New Project](#setting-up-a-new-project)
- [Session 2](#session-2)
    - [Comments](#comments)
    - [`<Image>` online vs local files](#image-online-vs-local-files)



## Session 1

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

## Session 2

### Component Attributes

### Styling

### Comments

The common way to write comments in React Native is to use the `/*` & `*/` characters like so:

```js
      {/* Post Header */}
```

### `<Image>` online vs local files

Depending on whether the image you want to use is online, or in your local folder, the `<Image>` component props will be different.

#### Online Images

For online images, the source `prop` must be accompanied by a `uri` and the link to the image

```js
<Image 
  source={{
    uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Sheba1.JPG', 
  }}
/>
```

#### Local Images

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
