# **MindFlow**

1. [Introduction](#Introduction)
2. [Background](#Background)
3. [Specifications and Design](#Specifications-and-Design)
4. [Implementation and Execution](#Implementation-and-Execution)
5. [Testing and Evaluation](#Testing-and-Evaluation)
6. [Getting Started](#Getting-Started)
7. [Conclusion](#Conclusion)

---

## **Introduction**

#### **Project Title:**

MindFlow

#### **Developers:**

Ana Genover, Edita Dolnickova, Adonelle Sagoe, Imane Ziouche, Morag McClenaghan

#### **Aims & Objectives of the project:**

To create a mood-tracking app for women to track how they feel throughout their menstrual cycles as well as any physical symptoms.

A recent [survey by the UK government](https://www.gov.uk/government/consultations/womens-health-strategy-call-for-evidence/outcome/results-of-the-womens-health-lets-talk-about-it-survey) found that 84% of women in the UK felt that there are times when healthcare professionals have not listened to their health concerns. Furthermore only 17% of women felt like they had access to enough information on menstrual wellbeing, and only 8% felt they had access to adequate information about gynaecological conditions.

#### **Roadmap of the report:**

---

## **Background**

#### **Specifics of the project:**

Our web application has been designed for women to track their mood (and symptoms?\*) to both gain a personal insight into their condition and to have clear and concise information to show their GP’s should they seek medical assistance.

It can often be challenging to be taken seriously as a woman when it comes to healthcare, particularly when it comes to women’s health. We hope that our application will help women to gain a better understanding of both their health and mental wellbeing, and possibly be a platform from which they can begin to seek treatment, should they require it.

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

#### **Design and architecture**

---

## **Implementation and Execution**

#### **Team Approach to Work:**

Using the Agile methodology we had a retrospective and review meeting once a week. We also met for stand-ups where possible, and ensure that we plan out our objectives for each of our week-long sprints. We did set a rough meeting schedule of Monday, Wednesday and Friday, although this was flexible to accommodate everyone’s individual schedules. We each updated our Google doc daily with what we have done that day. We initially planned to test our code after the second week and test our code as we go along. Feedback from the testing was provided in our meetings.

We were working in a shared GitHub repository, checking out branches and taking care when merging with the main branch. As none of us are that experienced using GitHub we initially created a practice repository to practice uploading code, checking out branches and merging. Once we felt confident with GitHub we started for real!

#### **Team Members Roles:**

- Front-end: Adonelle and Morag
- Back-end: Ana and Edita
- Connecting front-end and back-end: Imane - tester

We have tried and distribute the workload as evenly as possible, however if one area takes more time/is more labour intensive than others then our team-mates steped in to help as required.

#### **Communication Tools:**

- Slack: for daily communication.
- Google Docs: to keep track of our meetings and centralise the information we gather about the topics we work on.
- Discord: for our meetings.
- Jira (free edition): to create a board with all of our tasks and keep track of what we are doing and what the other members are doing.

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

Nevertheless, despite how enlightening the experience was, we faces a few challenges, which were as follow: 

- Poor documentation 
One of the main issues that we encountered throughout our project is the lack of documentation available and structure in regards to the use of React JS. As we are at a very early stage of our web development journey, our knowledge is still very limited, with the new introduction of React 18, a lot of the material available online was not applicable anymore. Resources were at time scarce or hard to understand limiting at times the extent of what we could have been achieving. 

- ReactJs is a Library rather than a complete all-inclusive framework 
Contrarily to Angular 2+, ReactJs require the users to install a lot of the packages, we encountered a few issues, which delayed the process of our project linked to having issues with webpacks and modules. The constant need to install external packages is a hindrance in us complete our work quicker and in a more efficient way. 

- The use of JSX 
We have been having classes about HTML, CSS and Javascript, however React’s language, JSX, which is a mixture between both HTML and Javascript, can feature a rather complex syntax at times. 

- Development speed 
The above points, lead developers, especially new developers such as ourselves, to spend lengthy times researching, and fixing issues rather than developing the project and having more time to develop the project, thus delaying and slowing down the development process. 

- A limitation of knowledge and time
Despite our enthusiasm for the task, we couldn't’ accomplish everything we wanted to accomplish and implement, this was due to the fact that we are still at the beginning of our programming journey. Another limitation was the time, unfortunately some of us were working full-time, this coupled with the fact that we had 3-4 weeks to develop our project put a restriction on what we could do, and narrowed our options. 
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

## **Getting Started**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

## **Conclusion**
