# 🍼 No Use Cryin' Over Shared Milk 🍼

"No Use Cryin' Over Shared Milk" was inspired by our founder, Seth Perna's, personal family battle with producing breast milk for his son and the mental and financial struggle that followed. Seth's mission became our mission...

***"to create a safe space for families who under-produce breast milk to connect with families who over-produce."***

Deployed Application here: [No Use Cryin' Over Shared Milk](https://no-use-cryin-over-shared-milk.herokuapp.com/)

Github Organization: [Shared Milk](https://github.com/Shared-Milk)

# Table of Contents

1. [Overview](#overview)
2. [Installation Instructions](#installationInstructions)
3. [Project Goals](#projectGoals)
4. [Directions and Features](#directions)
5. [Code Architecture](#codeArchitecture)
6. [Technologies Used](#techUsed)
7. [Testing](#testing)
8. [Project Challanges](#projectChallanges)
9. [Project Wins](#projectWins)
10. [Future Iterations](#futureIterations)
11. [Authors](#authors)

## Overview <a name="overview"></a>

'No Use Cryin' Over Shared Milk' is an application that enables families that are dealing with an underproduction of breast milk to connect with families that are overproducing breast milk in a free and easily accessible manner. The end goal is to make sure that no baby goes hungry and that no family has to worry about making sure that their infant gets the best nutrition possible.

 If the user is seeking breast milk, they can click the 'Need Milk' button to view a list of donor cards that displays a donor's name, location and a short bio. If they are interested in receiving breast milk from this donor, they can click on their selected donor and send a message to that donor, via the Milk Request Form. If the user is looking to donate breast milk, they can click the 'Donate Milk' button on the landing page. The user will then fill out the Donate Milk Form and on submit, they will be registered in our database and their information will be available for users who are seeking milk. 

'No Use Cryin' Over Shared Milk' is a Mod 4 project at the Turing School of Software and Design that paired frontend and backend teams together to build a full-stack application in the limiting timeframe of two weeks. We chose to learn GraphQL as our Stretch Technology for both the backend and frontend on this project. On the frontend, the application was built with React and tested using Cypress. The Apollo platform was used to implement GraphQL to transfer data between the server and the application. On the backend, Ruby, Rails, GraphQL and PostgreSQL were used to create the backend server and database. 

- Project Spec here: [Capstone](https://mod4.turing.edu/projects/capstone/)

- No Use Cryin' Over Spilled Milk API: 
    - GitHub: [No Use Cryin' Over Spilled Milk API](https://github.com/Shared-Milk/shared_milk_be)
    - Heroku: [No Use Cryin' Over Spilled Milk Deployed API]('https://secret-forest-87730.herokuapp.com/graphql')

## Installation Instructions <a name="installationInstructions"></a>

1. Clone down [this repository](https://github.com/Shared-Milk/shared-milk-ui)
2. Run `npm install`
3. Run `npm start` in your terminal
4. Go to http://localhost:3000/ and you should see the website
5. Enter `control + c` in your terminal to stop the server at any time.

## Project Goals <a name="projectGoals"></a>

- Demonstrate knowledge you’ve gained throughout Turing
- Use an agile process to turn well defined requirements into deployed and production ready software
- Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams. Service oriented architecture concepts and patterns are highly encouraged.
- Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
- Practice an advanced, professional git workflow including a Pull Request Review
- Gain experience using continuous integration tools to build and automate the deployment of features
- Build applications that execute in development, test, CI, and production environments
- Focus on communication between front-end and back-end teams in order to complete and deploy features that have been outlined by the project spec


## Directions and Features <a name="directions"></a>

On the landing page, the user is given the option to donate milk, request milk and view resources for struggling families. The user may also click the About link in the navigation bar at the top right of the page to learn more about the team behind 'No Use Cryin' Over Shared Milk'.

Click on the 'Need Milk' button on either the landing page or on the navigation bar link to view a database of active milk donors. If the user is interested in requesting milk from a certain donor, they may click on that selected donor's card and they will be directed to a Milk Request Form where they can then message that donor.

Click on the 'Donate Milk' button on the landing page or the 'Donate' button on the navigation bar to fill out the Donate Milk Form. Once the donor adds their information correctly and clicks the submit button, they will be directed to a thank you page. 

Click on the 'Find Support' button on either the landing page or the 'Support' button on the navigation bar to view a list of links with a variety of resources for families who are struggling due to the stressors of parenthood or breast milk production issues.

Lastly, the user may click the 'About' button on the navigation bar to learn more about the team behind the application.

## Code Architecture <a name="codeArchitecture"></a>

This application utlizes seventeen functional components and uses React Hooks to manage state and perform network requests. 

## Technologies Used <a name="techUsed"></a>

### Frontend Technologies
- React
- React Router
- Javascript
- React Hooks
- GraphQL
- Apollo
- SASS
- HTML5
- webpack
- PropTypes
- NPM
- Cypress
- CircleCI
- Heroku

## Testing <a name="testing"></a>

Cypress was used for E2E and integration testing. To test the application: run `npm run cypress` and you will have a window open that gives you the ability to click on each test and see whether they pass. Make sure you've run `npm start` in a separate terminal tab before you begin the testing. 

## Project Challanges <a name="projectChallanges"></a>

- This was our team's first time working with the following technologies and concepts, which naturally came with a learning curve as we implemented them into our project:

    - Connecting to API using GraphQL and Apollo 
    - Utlizing React Hooks and Router v6
    - Implementing CI/CD with CircleCI

This project was a good combination of working with familiar technologies such as React and Cypress, while also stretching our ability to learn unfamiliar technologies such as GraphQL. We also had to learn Router v6 and Hooks which added to the project complexity. We were taken aback by the difficulties of a query language like GraphQL because we had only fetched data from Rest APIs prior to this project. Error handling with GraphQL proved to be a formidable challenge because REST APIs use status codes as a part of their response (200-ok, 404-not found, 500-internal server error etc.), but GraphQL will generally always return a 200 error(or 500 if something goes really bad). Without being able to access the status code and status message information, it was really difficult to display the results of a failed or bad request.

## Project Wins <a name="projectWins"></a>

- Created a fully funtional MVP with time scope of two weeks
- Continued to build a strong understanding of React framework 
- Successfully self-taught GraphQL with Apollo, React Hooks and Router v6
- Completed a thorough project plan and wireframe, which kept our team on track 
- Implemented React Router for a multi-page UX
- Continued to gain competency with Cypress E2E testing framework
- Utilized typechecking with PropTypes

## Future Iterations <a name="futureIterations"></a>

- A mailer to send the donating user an email when they submit to the donor database, as well as whenever someone requests milk
- A login to have multiple users with statistics such as the amount of milk donated or received, as well as an internal messaging system to connect users

## Authors

### Frontend Team: 

- [Chez Gallo](https://github.com/cagallo)
- [Jani Palomino](https://github.com/janitastic)
- [Lindsay Schnell](https://github.com/lschnell8)
- [Devon Wigle](https://github.com/devonwigle)

### Backend Team: 

- [Kelly Anderson](https://github.com/kanderson852)
- [Eric Miekle](https://github.com/EMielke76)
- [Seth Perna](https://github.com/SethPerna)

- Project Managers: 

      - [Nik Seif](https://github.com/niksseif)
      - [Dallas Slieker](https://github.com/he-dslieker)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).





