---
theme: academic
class: 'text-center'
transition: slide-left
title: PMA2026 Session 11
mdc: true
hideInToc: true
---

# Session 11: Generative AI for Programming Mobile Applications 

A critical introduction, best practices and overview 


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

- Supervisions are starting today, don't forget to sign up some of your groups are missing
- I found at least one guest lecturer, maybe even 2. Their session will be on the 28th of April, it will be about accesibility and design (no programming during those classes)
- If I haven't sent you feedback for Assignment 1 I am very sorry, I need to check and earliest I can do that is Thursday
- 

---
layout: center
---

Disclaimer

---
layout: image-left
image: https://substackcdn.com/image/fetch/$s_!sZvi!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faffa0b07-6e05-41f6-b364-ef70cfc99714_1600x900.png
backgroundSize: 100%
zoom: 0.9
---

## Who is making AI and profiting from it?

- Currently, only giant (mostly U.S.A) companies are driving the AI business. Their main competition comes from Chinese Big Tech companies
- Truly crazy amounts of money are being spent building more infrastructure for AI
- Despite that, some like Goldman Sachs [report that virtually none of that money contribute to US economy](https://finance.yahoo.com/news/ai-contributed-basically-zero-us-181419807.html) fueling ideas of _another_ tech bubble
- On the other side, chip sellers, component manufacturers, rare earth miners, data center construction companies are making a lot of money.


---
layout: figure-side
figureCaption: Taxonomy of AI
figureFootnoteNumber: 1
figureUrl: https://www.researchgate.net/publication/395264831/figure/fig3/AS:11431281650625497@1758927328681/A-Venn-diagram-illustrating-the-conceptual-foundations-of-agentic-AI.tif
backgroundSize: 100%
zoom: 0.9

---

# What is genAI and how is it made?

Generative AI, is a type of AI that specialises in _generating_ content. It became mainstream and commercialised in November/December 2022 with ChatGPT.

It's made by following roughly these steps:

0. Having an insane amount of resources in the form of money, land, energy, computing power, and expertise
1. Data collection
2. Training of "foundational" models
3. Fine-tuning and alignment
4. Release and integration

<Footnotes separator>
  <Footnote :number=1>
    <span style="font-size: 8px;">
      <a href="https://www.mdpi.com/1999-5903/17/9/404" rel="noreferrer" target="_blank">The Rise of Agentic AI: A Review of Definitions, Frameworks, Architectures, Applications, Evaluation Metrics, and Challenges by Ajay Bandi ,Bhavani Kongari, Roshini Naguru, Sahitya Pasnoor, and Sri Vidya Vilipala
      </a>
    </span>
  </Footnote>
</Footnotes>

---
layout: image-right
image: https://hbr.org/resources/images/article_assets/2024/10/W241014_ZHU_AI_IMAGE_GENERATING_JOBS_360.png
backgroundSize: 50%
zoom: 0.8
---

## 1. Data "Collection"

Data is acquired via a combination of aggresive automated collection, tapping into their own sources and purchasing data from data brokers.

- You can access an open-access dataset called [Common Crawl](https://commoncrawl.org/) that contains a lot of the data used to train models. Your website data might be there!
- The scraping and collection has been compared to theft, as very few of the owners of the data actually consented to it
- Currently there are +100 lawsuits against AI companies for copyright breaches/abuse
- Writers, visual artists, and many more are trying to resist big companies such as [Spotify](https://musictechpolicy.com/2025/09/02/ai-implications-of-spotifys-updated-terms-of-use-your-data-is-their-new-oil/) , [Adobe](https://helpx.adobe.com/creative-cloud/apps/adobe-content-authenticity/generative-ai-training-preferences.html) , [Reddit](https://www.reddit.com/r/help/comments/1piorj6/how_can_you_opt_out_of_ai_on_reddit/), and pretty much all Big Tech using their data.
- Research shows that visual artists are among the earliest to be affected by genAI 

<Footnotes separator>
  <Footnote :number=2>
    <span style="font-size: 8px;">
      <a href="https://hbr.org/2024/11/research-how-gen-ai-is-already-impacting-the-labor-market" rel="noreferrer" target="_blank">How Gen AI Is Already Impacting the Labor Market
by Ozge Demirci, Jonas Hannane and Xinrong Zhu
      </a>
    </span>
  </Footnote>
</Footnotes>


---
layout: image-right
image: https://blog.contact-software.com/wp-content/uploads/2025/04/Embeddings.png
backgroundSize: 100%
zoom: 0.8
---

## 2. Foundational Model Training

The data is then used to train models. These models are often called "base" or "foundational" models. Some are open-source but most remain closed

- This _was_ the most computationally heavy part, often requiring a lot of water to cool the machines doing the work
- The process takes the data and embeds it, creating multidimensional spaces around language/images/whatever data is fed
- The relationships between these spaces then becomes the number of parameters in models
- Models these days go for trillions of parameters. The more data, the more parameters you end up with

<Footnotes separator>
  <Footnote :number=3>
    <span style="font-size: 8px;">
      <a href="https://blog.contact-software.com/en/2025/04/embeddings-erklaert-grundbausteine-hinter-ki-gestuetzten-systemen/" rel="noreferrer" target="_blank">From: Embeddings explained: basic building blocks behind AI-powered systems
      </a>
    </span>
  </Footnote>
</Footnotes>

---
layout: image-left
image: https://cms.mistral.ai/assets/4605d8e3-b58f-4077-ba14-be1838696497.jpg?width=1841&height=1540
backgroundSize: 100%
zoom: 0.85
---

## 3 and 4. Fine Tuning & Release + Integration

The foundational models then undergo various ways of fine tuning. Ending up with the models we are familiar with today:

- Models get additional training data to work in a "chat" setting
- Models get are forced to output their data in a structured format like JSON, allowing tools like Copilot and Claude Code to interact with many tools
- These models are then made available to the larger public, which has now become the most computationally heavy part of the AI supply chain
- All that said let's use these models...

<Footnotes separator>
  <Footnote :number=3>
    <span style="font-size: 8px;">
      <a href="https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai" rel="noreferrer" target="_blank">Mistral's inference marginal climate impact
      </a>
    </span>
  </Footnote>
</Footnotes>


---

# AI for Programming - An Introduction

Much has happened since 2022, and now developers and other coding aficionados no longer have to copy paste replies from ChatGPT to code.

The field has become much more professionalised, ironically leading to "Vibe Coding" and lately the rise of "Agentic Coding"

Truth is that most people I spoke to that do programming are using AI, in different capacities and for different things. 

Today I will introduce how a person programming with React Native at a basic/beginner level would use it, or at least, how I would recommend you use it.

> genAI for coding can often create issues, it's important that you always review the code it made!


---

## Using Copilot

- For this class, we will be using [Copilot for VS Code](https://code.visualstudio.com/docs/copilot/overview)
- As ITU student, you get free credits to use Copilot, the models are the standard selection of Big Tech models
- In the real world, you will have to take care of the cost of using AI for programming, I don't use it like that so I can't give you many tips about that
- I will show some alternatives to Copilot and Big Tech AI at the end of the class


---

## How to Use it for React Native Development

I really recommend that you begin to use genAI _after_ you have gotten most of your basic app skeleton done. By this I mean, you should have coded at least 2 - 3 screens yourself.

Once you have that, use it to add _specific features_ to your app. This makes it much more manageable to review all the code. Here's some other things to consider:

1. GenAI is best used for specific tasks. Today we'll do two things that you voted for the most in session 8
  - Adding animations
  - Working with APIs/databases

2. Since we are doing fairly basic things, the code can be broadly trusted, however, you are also being evaluated on some specific objectives. I you are going to use AI, make sure that the output still conforms to the expectations of your course/exam/etc

3. Don't forget to always be transparent about its use in the exam!


---

## Journal App Example:

On LearnIT, you can find the starting code for todays' examples. It's a simple Journalling app (don't use it for the exam!)

Let's check the code and app really quick before going over what we will add

---

## About prompting

I am not a prompting expert, but generally speaking since "AI" can be so chaotic, it's a good idea to be as specific as you can be when prompting.

So instead of prompting:

Add more fields to the settings to make my prototype more beleivable

Try something like:

> On the SettingsScreen.js, add 4 TextInputs similar to the one currently implemented. The fields will be: Email, Address, Date of Birth, and Daily Goal (for diary entries)

or

> On the SettingsScreen.js, add the following:
> 1. TextInput for Email - Has the same style as the current Username field
> 2. TextInput for Address - Has the same style as the current Username field
> 3. Date of Birth - Uses native OS scrollers to select the date
> 4. Daily Goal - This must be a counter that has a + and - button




--- 

### Example 1. Populating the Settings Screen

Goal: We want to add more TextInput's to our Settings screen so it looks more beleivable.

Let's try the queries above and see what happens.

There will likely have to be some adjustments done after the code is finished. It's best to take things one step at a time, that way you can also learn a bit from the written code.



---

### Example 2. Adding Animations to the Journal App

Goal: We want to add some animations to the app's HomeScreen. 

Let's start by making the `{username}` variable spin whenever the user accesses the HomeScreen.

We will use this prompt:

> I want the {username} in the header of the "HomeScreen.js" to spin whenever the screen is rendered. It must do one single 360 degree spin that takes 3 seconds in total. The animation should restart whenever the user presses on {username}

And then we will review the code it output

---

Break!

---
layout: two-cols-header
zoom: 0.9
---

## APIs and Databases

::left::

**APIs**

APIs (Application Programming Interface) are interfaces that allow you, the user, to communicate with a platform/database/application. This mostly done to obtain data, though APIs can also do stuff like control devices, send data, etc.

APIs are written and maintained by the organisations that publish them, they set the rules for how to use them. Many of them are paid, though some free exist here and there.

To use APIs you will very likely need a **API Key**, which is obtained by registering an account in whatever platform you want to connect with.

There is often a great deal of work put into documenting how APIs work, so make sure to always read the documentation ;)

::right::

**Databases**

Databases are more often than not **private**. Meaning, that unlike APIs, you won't be granting access to them unless the user has internal authorization.

Databases these days (and how we will use them) are ways to store the user's data locally, meaning, without using the cloud. 

They are still used a lot, though, due to different political-economical reasons most things have moved to the cloud. Only a handle of mobile apps still exist that offer local only storage.

<style>
.two-cols-header {
  column-gap: 20px; /* Adjust the gap size as needed */
}
</style>

---

### Example 3. Adding a Quote via an API - Set Up

Let's add an inspirational quote that appears on the homescreen that is fetched using data that the user just used.

For this we will use the [first quote API I could find on DuckDuckGo](https://api-ninjas.com/api/quotes), I registered an obtained this key:

`jgBK8m5rTQOWvzauyODAWedlg4B4ODpkKwrtAQDm`

Feel free to use it, I will deactivate it after this class. 

Let's check the documentation to try to understand what is going on

---
layout: iframe-right
url: https://api-ninjas.com/api/quotes#v2-quotes
zoom: 0.9
---

### Example 3. Adding a Quote via an API - Reading the Documentation

What you are looking for are _endpoints_ and in our case the endpoint we care about is `/v2/quotes`

Next thing we care about is how the response from the API will look like. Usually they have a live demo

---

### Example 3. Adding a Quote via an API - Responses

The responses from APIs, most likely will be formatted as JSON. From the API above, the response to a example request is as follows:

```json
[
  {
    "quote": "The road to success begins with knowing what you need to know and why",
    "author": "Savania China",
    "work": "",
    "categories": [
      "success",
      "wisdom",
      "inspirational"
    ]
  }
]
```

This data structure can help us define how we want to implement the quote in our app. Ideally you will have designed how you want the quote to appear!

---

### Example 3. Adding a Quote via an API - The little details

Ok so we want to show a quote but why? is it related to something the user did or wrote?

It's important to think about this because this will dictate how "complex" your implementation will be.

We will try 3 examples:

1. The quote of the day is displayed on the homescreen
2. The quote of the day is displayed on the homescreen, with a background that matches the quote
3. A quote is obtained based on the last "mood" the user set in the journal, as well as a matching background




---

### Example 3. Adding a Quote via an API - Prompt 1

```
To the HomeScreen.js, add a component that showcases a quote of the day.

The quote is obtained from https://api-ninjas.com/api/quotes#v2-quotes, the endpoint I want to use is: https://api.api-ninjas.com/v2/quoteoftheday

If the API asks for a key, make a constant where I will input the key. The expected response from the API is:

[
  {
    "quote": "I share my love and gratefully accept love as it flows back to me.",
    "author": "Amy Leigh Mercree",
    "work": "Joyful Living: 101 Ways to Transform Your Spirit and Revitalize Your Life",
    "categories": [
      "love",
      "wisdom",
      "happiness"
    ]
  }
]
```

---

### Example 3. Adding a Quote via an API - Prompt 2

```
To the HomeScreen.js, add a component that showcases a quote of the day. The component must have a background image that matches the first category of the quote.

The quote is obtained from https://api-ninjas.com/api/quotes#v2-quotes, the endpoint I want to use is: https://api.api-ninjas.com/v2/quoteoftheday

If the API asks for a key, make a constant where I will input the key. The expected response from the API is:

[
  {
    "quote": "I share my love and gratefully accept love as it flows back to me.",
    "author": "Amy Leigh Mercree",
    "work": "Joyful Living: 101 Ways to Transform Your Spirit and Revitalize Your Life",
    "categories": [
      "love",
      "wisdom",
      "happiness"
    ]
  }
]
```


---

### Example 3. Adding a Quote via an API - Prompt 3

> OBS: Here we are changing the endpoint as it fits better with our general idea

```
To the HomeScreen.js, add a component that showcases a quote related to the last mood the user chose in their entries. The component must have a background image that matches the quote.

The quote is obtained from https://api-ninjas.com/api/quotes#v2-quotes, the endpoint I want to use is: https://api.api-ninjas.com/v2/quotes


If the API asks for a key, make a constant where I will input the key. The expected response from the API is:

[
  {
    "quote": "I share my love and gratefully accept love as it flows back to me.",
    "author": "Amy Leigh Mercree",
    "work": "Joyful Living: 101 Ways to Transform Your Spirit and Revitalize Your Life",
    "categories": [
      "love",
      "wisdom",
      "happiness"
    ]
  }
]
```

---

## Some advice

To keep your code from becoming increasingly complex in a way that you don't understand, keep your requests simple and to the point.

If you are actually interested in continuing to program, read about things first. Find out about APIs, how they work theoretically, then do small requests and see how these things interact with the code you already have

Remember what I just showed you is for prototypes, to code "real" apps, you need to consider many things like:
- Storing of API keys would be done via Environment Variables or via a backend proxies 
- Backend and server logic
- Security

Also remember to use the `Checkpoint` feature in case the AI destroys your project!

---
layout: center
---

# Alternatives to Big Tech's AI

---
layout: center
---

The best alternative is to not use it, I am not joking, sometimes it's ok to just use use a search engine or look up things yourself

That said, it's hard to deny that asking a question in natural language is a great way to interface with the computer. So what if we want to still use AI but want to avoid all the ethical, political and environmental issues associated with Big Tech?


---
zoom: 0.9
---

## Some things to consider:

If you are looking for some alternatives to Big Tech's AI, you should take a few things into consideration:

- "Open Source" models, are not always fully open source. They are open "weights" but rarely will provide the datasets they used to train them
  - They still require crazy amounts of resources and data to train!
  - They don't open their datasets because it will likely get them in legal trouble
  - Some "truly" open models exist like [K2](https://huggingface.co/LLM360/K2) that also provide full access to their dataset

- Do not expect the same quality as Big Tech. The architechture of this technology thrives and depends on crazy hardware
  - That said, some smaller models are pretty decent, provided you contrain them to certain tasks
  - Depending on what computer you have, you might be able to run some locally

- Do expect to do a lot of DIY work and learn a thing or two about AI models :)

---

## Local AI

> This method needs you to have a very capable computer, please _do not_ attempt this if your computer is already struggling

You'll need:

- At least 16GB of RAM
- Helps if your computer has a GPU
- At least 20GB of storage for the model
- Patience

The easiest way to use AI models, is to run them in your computer. The easiest way to do that is to use [LM Studio](https://lmstudio.ai/)

---

### LM Studio

LM Studio allows you to download any of the "open" models, with it you can:

- Use it as a chat interface similar to ChatGPT
- Serve the model via a local server and an API endpoint so other programs can use the model

For this demo, I will showcase `Gemma 4 E4B` from Google (boooo) and `QWEN3.5-9B` from Alibaba (also Big Tech so booooo)

This is ITU's computer, it's a Macbook M1 Pro with 16GB of RAM

Play attention to the quality of the responses and decide for yourself

---
layout: image-right
image: https://media.cybernews.com/images/featured-big/2025/06/data-base-target-bomb.jpg
zoom: 0.9
---

## Small AI?

It's a bit of an illusion to think that we can get Small AI, at least in a way that avoids all the problems with Big Tech's AI. IMO, the main issue with AI is who controls and owns it. Despite it being all of our data, we have no say whatsoever and it all ends up being just speculation through theft.

These small models are spillovers and specific use cases from the larger body of research and development going into AI. But at least they provide a choice, sadly due to its requirements and easy of access to the AI platforms, they are apparently `<1%`

That said, maybe once the market collapses, we will see more attention put to this. 

---

# Exercises

While some groups have supervision, you can do a show and tell of your current exam with another group.

Instructions on how to do it are on LearnIT.


---

See you all during exercises/supervision