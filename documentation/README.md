# **MindFlow**

1. [Introduction](#Introduction)
2. [Background](#Background)
3. [Specifications and Design](#Specifications-and-Design)
4. [Implementation and Execution](#Implementation-and-Execution)
5. [Testing and Evaluation](#Testing-and-Evaluation)
6. [Conclusion](#Conclusion)
7. [Getting Started](#Getting-Started)

---

## **Introduction**

#### **Project Title:**

MindFlow

#### **Developers:**

Ana Genover, Edita Dolnickova, Adonelle Sagoe, Imane Ziouche, Morag McClenaghan

#### **Aims & Objectives of the project:**

To create a mood-tracking app for women to keep track of how they feel throughout their menstrual cycles as well as log any physical symptoms.

A recent [survey by the UK government](https://www.gov.uk/government/consultations/womens-health-strategy-call-for-evidence/outcome/results-of-the-womens-health-lets-talk-about-it-survey) found that 84% of women in the UK felt that there are times when healthcare professionals have not listened to their health concerns. Furthermore only 17% of women felt like they had access to enough information on menstrual wellbeing, and only 8% felt they had access to adequate information about gynaecological conditions.

#### **Roadmap of the report:**

This report will walk you through our MindFlow project. It will discuss the challenges we faced as a team, as well as our achievements. We will walk you through our thought process of the App, our objectives and also our conclusions, which will include our highlights, and things we would do to improve next time.

---

## **Background**

#### **Specifics of the project:**

Our web application has been designed for women to track their mood and menstrual symptoms to both gain a personal insight into their condition and to have clear and concise information to show their GP’s should they seek medical assistance.

It can often be challenging to be taken seriously as a woman when it comes to healthcare. We hope that our application will help women gain a better understanding of both their health and mental wellbeing and possibly be a platform from which they can begin to seek treatment, should they require it.

#### **Key Features:**

- Cycle tracker
- Calendar overview
- Mood insight stats
- Symptom tracker/stats?
- Daily questionnaire
- Daily reminder
- User profile

#### **Target Demographic:**

Women and those who experience menstruation of all ages.

---

## **Specifications and Design**

#### **Requirements technical and non-technical:**

Technical:

- Have Login, Logout and Register capabilities
- Have period calculating function
- Have unique user profile
- Have personal statistics displayed
- All pages linked together and able to navigate between them
- User authentication system
- Database to store user details and mood/symptoms logs

Non-Technical:

- Accessible
- Be easy to use
- Have a clean and simple appearance
- Consistent styling

#### **Design and architecture**

<img width="4448" alt="Mindful Mockups (2)" src="https://user-images.githubusercontent.com/100788351/184544308-3ad842ea-8483-49a4-b9d1-95f2d0bb06ef.png">

Mindful Mockup - This was used for front-end to have a template in terms of colour palette, layout and features to be added

Before starting our design process we decided to conduct research into similar web and mobile applications. A common theme we found was a lot use of the colour pink, and hyper-feminine imagery such as flowers, butterflies and hearts. We unanimously agreed that for our project we would rather take a more calm and neutral tone to reflect the mood we wanted our application to evoke. We settled on a core colour palette of light blues and greens with some accents of navy for when a stronger colour was required.

For the logo we decided a lotus leaf would capture what our app is all about, as it has connotations of meditation, relaxing, reflecting and calmness. We based the shape off of the adobe icon collection and added a light green colour to the leaves to tie in with our colour
theme.

For our font we chose Eina01-Bold. It is a sans-serif rounded font that is both clear and easy to read and modern feeling. We used this font for both the logo and throughout the website. This is to ensure that users with older browsers can also view a simple yet sophisticated font style.

We then began to plan our basic wire structures. We had extensive talks about what we should and shouldn’t include in our application, so we had a good idea of what would go on each page. Using Figma, we made an initial wireframe with the pages, what we would add on each page and how everything linked up. Once we were satisfied with the content, we mocked up a few pages just to get a sense of the design. We found some appropriate customisable illustrations on Figma and decided they would be an excellent addition to our app. They are part of the ‘Hero Women’ plug-in and showcase women in various situations.

It was important to us that our application felt welcoming, clean and calm. It needed to be easy to use and navigate, creating a warm atmosphere whilst being stylish and neutral. To achieve this we rounded off all of the components on our page so there were no sharp edges, and utilised our light cool-toned colour palette. We kept the number of elements on each page to a minimum where possible, and added a sidebar for seamless navigation. Another reason we kept it simple was to make it more accessible for everyone, including those with limited computer skills. By keeping our pages minimal and using a large, clear sans-serif font we were able to create pages that can easily be read and understood. For this same purpose, we decided to use a slightly larger font size to improve readability.

For navigation we separated our links into two different sidebars. On the left-hand side, we had a floating sidebar to link to pages that have our app’s functions on them such as the calendar and the questionnaire, this appearead on the page only once the user had logged in so they can navigate the webpage easily. This sidebar included slight movement and colour change to from light blue to grey once the user hovers their cursor over the words. This is to signify that the sidebar has clickable functions and is a common function on many websites.

We then had a drop-down hamburger menu in the top right-hand corner of the page, for more basic functional pages like user profile and settings. After researching other websites we concluded that this was a set-up often used in web design, and would therefore be familiar and intuitive for the user.

---

## **Implementation and Execution**

#### **Team Approach to Work:**

Using the Agile methodology, we had a retrospective and review meeting once a week. We also met for stand-ups where possible, and ensure that we plan out our objectives for each of our week-long sprints. We did set a rough meeting schedule of Monday, Wednesday and Friday, although this was flexible to accommodate everyone’s individual schedules. We each updated our Google doc daily with what we have done that day. We initially planned to test our code after the second week and test our code as we go along. Feedback from the testing was provided in our meetings.

We were working in a shared GitHub repository, checking out branches and taking care when merging with the main branch. As none of us are that experienced using GitHub we initially created a practice repository to practice uploading code, checking out branches and merging. Once we felt confident with GitHub we started for real!

#### **Team Members Roles:**

- Front-end: Adonelle and Morag
- Back-end: Ana and Edita
- Connecting front-end and back-end: Imane - tester

We have tried to distribute the workload as evenly as possible, however if one area takes more time/is more labour intensive than others then our team-mates steped in to help as required.

#### **Communication Tools:**

- Slack: for daily communication.
- Google Docs: to keep track of our meetings and centralise the information we gather about the topics we work on.
- Discord: for our meetings.
- Jira (free edition): to create a board with all of our tasks and keep track of what we are doing and what the other members are doing.

<img width="1464" alt="Screenshot 2022-08-14 at 15 22 28" src="https://user-images.githubusercontent.com/100788351/184544174-ee1dd40b-9811-4a53-a904-6fe493b82b65.png">

Copy of our Jira board

#### **Tools & Libraries:**

- Github
- React
- Miro
- CSS Helper
- Node.js/ Express
- Lucid Chart
- Graphic Assets (Canva)
- MongoDB
- NPM Calendar
- NPM Moment
- Firebase
- Redux Toolkit
- Postman
- EsLint

<img width="1319" alt="Screenshot 2022-08-14 at 16 29 27" src="https://user-images.githubusercontent.com/100788351/184544210-0195fcd0-6be5-4a16-bbb7-eb9caa20223d.png">

Our Miro Board to brainstorm ideas

#### **Implementation Process & Challenges:**

The implementation of our project was a very valuable and insightful experience, in that it allowed us to implement the various methodologies and good habits learned throughout the duracy of the CFG degree.

The implementation stage could be divided in the following seven steps:

- Step 1 – Idea:

We first gathered and brainstormed a few ideas, very quickly the big lines of our project were drawn.

- Step 2 – Organisation :

Throughout our second session, we defined a bit further which role each of us would be having (all based on our personal preferences), and which tools we would be using. We started from this moment to keep a log of each of our meetings, kept a shared folder to gather documents on Google Drive, and started talking about using Jira to track our progress and tasks, along deciding and having 3 meetings a week using an Agile methodology.

- Step 3 – Github:

As it was our first time using Github in a group project, our team gathered and had a few training sessions together, we decided to establish official guidelines and good practices in regards to the use of our repository, mock repositories were created in order to ensure that we were all in line.

- Step 4 – Wireframe of our project:

As a group, we decided on the main features we wanted to see on our website, and how we would like the frame of our website to be. We also decided on a website name: MindFlow

- Step 5 – Structure of our App:

A methodology was defined in order to keep our folders and files under an established naming convention, thus encouraging us to develop future good work habits, and keeping the folder organised.

- Step 6 – Development process :

Our Team gathered a few times a week, and using slack and Jira, ensured that we would keep each other updated in regards to what we were doing, and which part of the website we were developing, and what should be our priorities.

- Step 7 – Testing:

Although our testing plan had been established at the beginning of our project, we conducted tests throughout the creation of the app, and especially after everything was completed, ensuring in the process that no element was forgotten.

#### **Backend Development:**

The backend development has been a massive challenge to ensure that the site had all the features doing what they are supposed to be doing. The very basic features we needed to implement were a login/out, register, period calendar and mood questionnaire. On top of that, we had to start learning MongoDB and how to implement it, to allow the features just mentioned to save the information send by the user and save into the database for the user to have it available. We aimed to embed MongoDB authenticated chart by using a Custom JWT Provider(Firebase) to diplay interactive charts on the user profile. To manage states and data manipulation within our web app, we installed Redux Toolkit and learned how to use it.

In regards of the login/out and user registration features we managed to connect and integrate Firebase with MongoDB. At the moment, our web-app saves user details with FirebaseId to our MongoDG user collection. We managed to retrive information related to user profile and display it. However, the GET request worked only when the user profile page was directly linked to the login page. When we tried to access user profile indirectly after the login, data did not display and the console showed status 'Unauthorized'. The GET request also worked well in Postman when the token was inserted. We asume there is an issue with how Tokens are refreshed and stored within our application when using Redux Tookit and Firebase to send a GET request with a Bearer Token header. We also incorporated logout function.

We aimed to establish Public and Protected routes within our application to allow only authorized users to access certain pages. However, the user gets logged out whenever we try to access the Protected route after log in. Therefore, we have used only Public routes within our application. Again, we assume that this issue relates to Redux store and Token storage/refresh. We used Redux Toolkit to keep up to date with the most recent Redux updates and to avoid complex folder structure related to action and reducer. This was a challanging step as there were not as many tutorials available that would fit the requirements of our application. We incorporated Redux into our application after our Redux lesson when we already had the majority of login and register structure built without Redux. Therefore, there may be some inconsistencies as the POST requests are handeled directly from the components.

In regards of the mood questionnaire, we were able to allow the user to select between different options and save it to MondoDB database. We aimed to link our user and mood colection via FirebaseId to be able to retrive moods of a singular user. However, the FirebaseId field within the mood collection displays null, which means that the the system does not pass well the FirebaseId. We assume that this relates to the managment of Tokens and passing a personalised POST request. As mentioned previously, the integration of Firebase and MongoDB was mainly due to our desire to display personalised MongoDG charts. However, it has proven to be fairly complex to manage personalised POST and GET requests.

In regards of the period calendar, we were able to implement a code that showed to the user when their next period and ovulation day would be based on the information provided by themselves on the calendar as well as them providing the lenght of their cycle. However we were not able to connect the information to MongoDB database, as it showed to be more complex to do than the last features mentioned, so the user is only able to see the information on the screen but the information is never saved on the database. However, we started building the Redux structure to POST the request.

Due to the time constraints, we did not manage to test our backend structure. Nevtherless, throughout the development process, we used Postman to test our POST and GET requests.

Due to the lack of knowledge (and also the limited time available) on how to retrieve the personalised information sent to MongoDB, we were unable to implement another feature that we had planned on doing, which is the statisctics page. We have implemented the statistics page anyway and placed some images that would show how we had planned to show it to our users.

Screenshots:

- Firebase list of users:

  ![Firebase-list-of-users](media/firebase_listofusers.png)

- Postman GET user details:

  ![Postman-user-details](media/GET_userdetails_postman.png)

- MongoDB mood collection:

  ![mood-collection](media/mood_collection_MongoDB.png)

- MongoDB user collection:

  ![user-collection](media/user_collection_MongoDB.png)

- Deployment issues:

  ![deployment-issues](media/deployment.png)

---

## **Testing and Evaluation**

#### **Testing strategy:**

For our testing strategy, rather than following the testing pyramid as introduced by Mike Cohn, we thought that given the nature of our project, a frame which lies more on backend tests would be more suitable, hence we followed the testing trophy as introduced by Kent C. Dodds (https://kentcdodds.com/blog/write-tests). The style of the testing trophy is summarised as follow by its creator: "Write tests. Not too many. Mostly integration."

So here is what we implemented:

1. Static analysis: through the use of code formatters such as Prettier, or Linters like ESLint. Due to lack of time no Type checker like Typescript or Flow was implemented.

2. Unit tests to verify that the algorithms were working where we could implement them through the use of Jest.

3. Integration tests through Jest and react-testing-library to check that the features of our app were working as expected

4. and finally to check that the app was working as a whole, we used user-testers (mostly ourselves and acquaintances)

#### **Functional and user testing:**

Our strategy also comprised a smart use of time, therefore a few types of functional testing were privileged over others such as:

Unit testing : We checked if individual components or units of our app matched our requirements (functioning and performing as expected), as a result we wrote tests for each section of our app (each page and component) to ensure that the right values were being returned.

Functional : Functional testing usually involve testing the behavior rather than the code, from a user side that would mean being able to register and to submit log in details for example. In order to do so we implemented tests within our code pages as well as extra test jest pages.

We also used user-testers in order to implement our functional testing strategy.

#### **System limitations:**

Our project is a very interesting project which would have benefitted from a longer development period. Due to having a dashboard featuring multiple options (trackers, calendars, log in and Sign-Up pages), more rigorous checks would have been implemented and lengthier test codes had we had more time.

For our testing strategy, the testing trophy usually require the developers to use Cypress in order to implement end-to-end tests, however time, and training limitations stopped us from being able to do so on this project, hence the use of user-testers instead.
When using React Js, writing proper code in regards to testing is a lengthier process, especially as we need to write more code. Due to our knowledge and time limitations, having a comprehensive framework providing us with testing tools, with a more structured architecture along a set of established, official guidelines would have been helpful (a bit like Angular does, despite Angular being much more complex to get a grasp of).

---

## **Conclusion**

Nevertheless, despite how enlightening the experience was when deciding what we wanted to develop and its features, we faced a few challenges and we had to act and make decisions accordingly to the reality we were facing.

- **Poor documentation**

  One of the main issues that we encountered throughout our project is the lack of documentation available and structure in regards to the use of React JS. As we are at a very early stage of our web development journey, our knowledge is still very limited, with the new introduction of React 18, a lot of the material available online was not applicable anymore. Resources were at time scarce or hard to understand limiting at times the extent of what we could have been achieving.

- **ReactJs is a Library rather than a complete all-inclusive framework**

  Contrarily to Angular 2+, ReactJs require the users to install a lot of the packages, we encountered a few issues, which delayed the process of our project linked to having issues with webpacks and modules. The constant need to install external packages is a hindrance in us complete our work quicker and in a more efficient way.

- **The use of JSX**

  We have had classes regarding HTML, CSS and Javascript, however React’s language, JSX, which is a mixture between both HTML and Javascript, can feature a rather complex syntax at times.

- **Development speed**

  The above points, led developers, especially new developers such as ourselves, to spend lengthy times researching, and fixing issues rather than developing the project and having more time to develop the project. Thus, delaying and slowing down the development process.

- **A limitation of knowledge and time**

  Despite our enthusiasm for the task, we couldn't accomplish everything we wanted to accomplish and implement, this was due to the fact that we are still at the beginning of our programming journey. Another limitation was the time, unfortunately some of us were working full-time, attend the evening sessions of the CFG course, do homework, assignments and prepare for the final assessment, these coupled with the fact that we had 3-4 weeks to develop our project put a restriction on what we could do, and narrowed our options down considerably.

- **Integration of front-end and backend with external service providers**

  The integration of Firebase authentication and MongoDB into our project was a challenging task. Besides authentication, we believe we could have used Firebase also as a database to ease the complexity of our project. The decision to use MongoDB was based on our desire to display personalised interactive graphs for the user, which is one of the great features of MongoDB when integrated with Custom JWT Provider such as Firebase. Although we managed to integrate MongoDB and Firebase on a basic level, we consider that using both was not a time wise decision.

- **Communication**

  Although we met regularly and used Jira, there were occasionally misunderstandings over who was doing what. The confusion led to doubled work in some occasions as two individuals were working on the same thing. In restrospective, we believe that this could be improved by making better use of Jira and deciding on the team-lead.
  
  
- **Design and Architecture**
 
  In terms of our design, given the time constraints there are a few aspects of the design that we would want to improve and enhance. With our hamburger side menu, we discovered that it is not fully functional on all browsers as some of the team members were having issue with viewing the full menu. 
We also would incorporate some more interactivity such as animation, video and sound to make the web app more user friendly and interactive. 


- **Development Order**

  We also didn't decide on what order we would start developing our project and deciding what needed to be developed first. This was due on that we had a vague idea on what needed to be developed first. We had an initial discussion about it and agreed that creating a structure for the project (what folders were necessary like client and server, and how the folders inside this folders had to be structured as well) was important to get started and avoid each member of the group creating folders here and there randomly. So we decided where to place all the main directories like server, client, components, pages, etc. and had a session altogether explaining it to ensure we were all in the same page. We also agreed on a naming convention for folders and file names (camel case for folder names, ie. signup, and camel case with initial uppercase for the first letter for files, ie. SignUp.js).

  As we carried developing the project it was obvious that more in-depth development priorities were needed, as some of the developers working in the backend needed some front end done and the other way round. We solved this by communicating with the particular developer working on that area and kept working together by communicating what needs we had. It has been a fantastic learning as we learned the importance of organising what needs to be developed first and communicating in a clear way with each other.

- **Working with Github**

  Besides others, a group work on Github was also one of our main challanges. We all had different levels of experience working with github (on our own or as a team) and we decided that we would practice merging our code in a mock up repository first and then start coding our project for real.

  At the beginning of the project it was fairly easy to maintain separate streams of work. However, towards the finish line, we encountered several merge clashes which slowed down our workflow. We faced issues with accurate way of creating branches and pulling from the main repository. We suported each other with problem solving of GitHub issues which helped us to learn a great deal throughout the process.
  
  - **Testing issues**
We encountered quite a few issues upon launching our testing strategy, we wanted to orignally test using Jest, however numerous issues linked to clashes with babel, led us to drop the sue of Jest. Unfortunately we tryied all the options covered online, but due to not having enough documentation our problem couldn't be solved. Another issue encountered towards the end of the testing phase, was issues with modules which couldn't be fixed, due to lack of documentation online, we came to the conclusion that it must be an internal problem with our Team Tester's node modules. Lack of documentation and guideline limited what we could have achieved in term of testing, realistically a good tester would require a lot more training sessions to implement a more extensive strategy.

## **Getting Started**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### How to run Mindflow app

The project has two folders: client and server. To see the full functionality of the web application on your local host, run the client directory in one terminal and the server directory in another terminal simultaneously. 

Client folder

1. Go to client directory
2. In the terminal, run 'npm install' to install all the node packages
3. In the same terminal, run 'npm run start'. The React app will open on the local host 3000

Server folder

4. Go to server directory
5. Open another terminal
6. Run 'npm install' to istall node packages for server folder
7. Run 'node index' or 'nodemon index'
8. The server directory runs on the PORT 4000



You can also run:

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---
