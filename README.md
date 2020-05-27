# FloorDrop
#### Epic game available now on the App Store, made by your's truly: William Klingler

Floor Drop is the first major project that I ever made. I made it while I was in highschool, and even though I have learned a lot since then, I am very proud of it.

## Purpose:
The main purpose of me building this app is that I wanted to:
- get some experience building a project from start to finish to learn the lifecycle of production, including deploying the app to the Apple App Store.
- I wanted to teach myself something that would be of use to me and others. Up until this point, I had only programmed in C++, so when I began making this app with React Native I immersed myself in the world of JS and all that comes with it (Node.js, JSX, etc).
- I wanted to create a fun game that my friends would enjoy. 

## Methods:
- I learnt React Native purely from the official React Native documents and tutorials, which were really well done. I learnt Javascript using W3Schools tutorials as well as the Mozilla docs. Stack Overflow and Medium articles were also of great help.
- Eventually I used Expo extensively, using their built in packages to help with the development, testing, compilation, and deployment of the app. I built the app using create-react-native-app. 
- I used some external Node packages that others had developed.

## Plan:
- Design the UI with pencil and paper.
- Plan the project hierarchy: what are the container files, what are the main functional files? How do these both interact and how are they structured? 
- Begin developing in 1 week sprints, where every week was dedicated to some functionality (e.g get the random generation of bars working in week 1, get persistent system storage with highscores working in week 2, etc). 
- Compile the app. Upload to App Store for review by Apple team. Deploy the App. 

## Final Product:
I was really happy with the final product. This was my first ever project that I had made that others could use, and to see the smiles on people in my school’s faces when they were playing it, or walking through the library and seeing someone that I didn’t know playing it made me really proud. People were happy to suggest new features and to report bugs to me. In the end, Floor Drop had really good reviews on the app store (4.5+/5 stars) and around 100 downloads (no marketing). There is a ~$150 CAD yearly Apple developer fee to keep apps on the App Store, so after a year the app was removed upon my termination of the fee. Everyone who downloaded the App still has it on their phone and every once in a while they send me a video of them playing it. 

Some of the main functionalities of the final product:

- Start screen with the option to play or view high scores.
- High scores were saved to the persistent storage of the phone for later fetching.
- Random generation of bars with openings of various lengths.
- Handle player touch inputs and use them to control the player circle.
- Keep the score of the current run, and as the player moves up levels, speed up the game to increase the difficulty. The game is able to handle an infinite amount of levels, so that really good players never have to worry about ‘beating’ the game. 
- Include sounds that are linked with specific triggers (game start, level loss, level up, etc). 
- A play again screen which appears after losing a game. 


## Challenges:
The biggest challenge was teaching myself React Native, Javascript, Node, JSX, and flex-box. I ran into lots of problems while building the app, where I had to solidify my understanding of the fundamentals of each of these things. Sometimes I spent hours on a specific problem, testing, trying different things and reading forums until I understood what was going on and how to fix it. In the end, I became very efficient at testing my app for potential problems, finding the problems, and then fixing them using all of the resources at my disposal. Not only that, but learning in this way was perhaps one of the most effective ways I had learnt something new. Going through the process of trial and error strengthened my perseverance and really allowed me to get a strong grasp on Javascript and the frameworks that I was using. Some specific challenges that I ran into were:

- The sharing of state between separate components. In order to solve this problem, I created callback functions that were passed as props to each component. I also used this to implement the conditional rendering of the different screens (start screens, game screen, etc).
- Understanding state and props, and how they were different. Understanding how state affected the lifecycle of each component.
- Understanding the different lifecycle methods of components (like componentWillMount, componentDidMount, etc).
- Using functional programming in Javascript. As I had only previously developed with C++, I was very new to lambda functions, callbacks, functions as first class objects. This was one hurdle that once I overcame, I became very appreciative of the power of Javascript. Similarly, writing asynchronous expressions was also very different for me but provided me with the same satisfaction once I understood them.
- Frame rate: React Native is not really meant for making games, so in order to get the game to update and render 60 times per second I used forced updates with this.forceUpdate(). At first, the game was very laggy, so I had to optimize some of the rendering processes by only re-mounting what needed to be updated. 
- Compiling the binaries for the app. In order to compile an app for the app store, one needs a Mac, which I did not have. I tried to get an image of a Mac OS on a virtual machine, but eventually I just used one of my family member’s. 

[Screen record of game footage:](https://live.staticflickr.com/video/49932251522/3e76a18994/720p.mp4?s=eyJpIjo0OTkzMjI1MTUyMiwiZSI6MTU5MDU5MDk5NCwicyI6IjY5ZmIwMDE4NDYwNWJiODVkMGZkNjA1NTViZDk3NTg4ZTQ5ZTVkZmEiLCJ2IjoxfQ) 
