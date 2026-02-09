# EXERCISE 1



- [Installation Guide: Setting up your First App](#installation-guide-setting-up-your-first-app)
    - [Step 1: Visual Studio Code](#step-1-visual-studio-code)
    - [Step 2: Install Node.js](#step-2-install-nodejs)
    - [Step 3: Check your version of NPM](#step-3-check-your-version-of-npm)
    - [Step 4: Create a new React Native Project](#step-4-create-a-new-react-native-project)
- [Getting started with React Native](#getting-started-with-react-native)
- [Getting started with Expo](#getting-started-with-expo)
- [Getting a Figma Account](#getting-a-figma-account)



## Installation Guide: Setting up your First App
### Step 1: Visual Studio Code

Make sure you have VS Code installed. If not, then install by this link:
https://code.visualstudio.com/download

### Step 2: Install Node.js
In order for you to develop React Native applications, you must have Node.js installed on your computer. To check if you already have Node.js installed, you can open your (Command Prompt on Windows or Terminal on Mac) and type `node -v`

If you the response is similar to ‘command not found’ you should proceed to download node.js from the following link and follow the default settings for installation:

https://nodejs.org/en/download/

If the response is something like `v20.11.0` then you are good to go. If you have an older version of node, you can update it with the following command:

`nvm install --lts`

### Step 3: Check your version of NPM

npm stands for "Node Package Manager." It is a package manager for JavaScript, primarily used for managing and distributing packages of code that can be reused in various projects. We will be using npm throughout the course to initiate your React Native projects.

You can check the version of npm by typing the following command in your
terminal/command prompt:

`npm -v`

If you get something similar to: 10.2.0 you are good to go. If you have an older version of npm, you can update it with the following command:

`npm install -g npm`

After installing Node.js, please check that you can see the two versions in your Command Prompt / Terminal, using the commands you have just applied (namely node -v & npm -v)

### Step 4: Create a new React Native Project
> OBS! In this course, we develop React Native applications with a JavaScript template.

The official Expo/React Documentation has recently shifted to TypeScript as the default template. In this course we will be using the
command as described below to setup the JavaScript template.

## Getting started with React Native

Here's how I recommend you start your projects.

0. Open VSCode and click on `Open`
1. Using that navigator, create a folder for this project, we'll call it "My First Project"
2. Click on `Open` and then say you trust the authors
3. On the top menu, go to `Terminal` and then click on `New Terminal`
4. Once it's open, we can run the commands from the guide in exercise 1

`npx create-expo-app@latest --template blank .`

5. After a minute or so, everything is set up. Now, run the final command:

`npm start`

If you see a QR code in your terminal you are ready! Now it's time to use Expo

## Getting started with Expo

Expo will be 'training wheels' we'll use through this course. It will help us demo your apps directly on your phone.

First, you need to download the **Expo Go app on your phone**. You can go into the following link to do so:

- iOS: https://apps.apple.com/us/app/expo-go/id982107779
- Android: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en-US&pli=1

Once it's installed, you can scan the QR code in the terminal to see your app on your phone.

If for whatever reason Expo is failing, please follow this troubleshooting guide:

https://github.com/luuislanda/PMA2026/tree/main/troubleshooting

## Getting a Figma Account
To get started with Figma, please follow these steps:
- Make sure you have a Figma account. If not, then create an account by this link: 
    - https://www.figma.com/signup?locale=en-us
    - OBS‼️ **You have to sign up using your ITU email address**
- Apply for the free education tier by this link:
    - https://www.figma.com/education/apply
    

The education tier provides additional features that will be useful for our course projects.

If you encountered any issues during the setup process, please let us know. We are here to help!