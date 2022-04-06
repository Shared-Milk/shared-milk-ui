# 🍼 No Use Cryin' Over Shared Milk 🍼

"No Use Cryin' Over Shared Milk" was inspired by our founder, Seth Perna's, personal family battle with producing breast milk for his son and the mental and financial struggle that followed. Seth's mission became our mission...

***"to create a safe space for families who under-produce breast milk to connect with families who over-produce."***

Deployed Application here :point_right: [no-use-cryin-over-shared-milk.herokuapp.com](https://no-use-cryin-over-shared-milk.herokuapp.com/)

Github Organization: [Shared Milk](https://github.com/Shared-Milk)

# Table of Contents

1. [Overview](#overview)
2. [Demo](#demo)
3. [Installation Instructions](#installation-instructions)
4. [Project Goals](#project-goals)
5. [Directions and Features](#directions-and-features)
6. [Code Architecture](#code-architecture)
7. [Technologies Used](#technologies-used)
8. [Testing](#testing)
9. [Project Challenges](#project-challenges)
10. [Project Wins](#project-wins)
11. [Future Iterations](#future-iterations)
12. [Authors](#authors)

## Overview 

'No Use Cryin' Over Shared Milk' is an application that enables families that are dealing with an underproduction of breast milk to connect with families that are overproducing breast milk in a free and easily accessible manner. The end goal is to make sure that no baby goes hungry and that no family has to worry about making sure that their infant gets the best nutrition possible.

 If the user is seeking breast milk, they can click the 'Need Milk' button to view a list of donor cards that displays a donor's name, location and a short bio. If they are interested in receiving breast milk from this donor, they can click on their selected donor and send a message to that donor, via the Milk Request Form. If the user is looking to donate breast milk, they can click the 'Donate Milk' button on the landing page. The user will then fill out the Donate Milk Form and on submit, they will be registered in our database and their information will be available for users who are seeking milk. 

'No Use Cryin' Over Shared Milk' is a Mod 4 project at the Turing School of Software and Design that paired frontend and backend teams together to build a full-stack application in the limiting timeframe of two weeks. We chose to learn GraphQL as our Stretch Technology for both the backend and frontend on this project. On the frontend, the application was built with React and tested using Cypress. The Apollo platform was used to implement GraphQL to transfer data between the server and the application. On the backend, Ruby, Rails, GraphQL and PostgreSQL were used to create the backend server and database. 

- Project Spec here: [Capstone](https://mod4.turing.edu/projects/capstone/)

- No Use Cryin' Over Spilled Milk API: 
    - GitHub: [No Use Cryin' Over Spilled Milk API](https://github.com/Shared-Milk/shared_milk_be)
    - Heroku: [No Use Cryin' Over Spilled Milk Deployed API](https://shared-milk-api.herokuapp.com/graphql)

## Demo
<a href='https://no-use-cryin-over-shared-milk.herokuapp.com/' target='_blank' rel='noreferrer'>![site-overview](https://github.com/Shared-Milk/shared-milk-ui/blob/main/.github/Site-Overview.gif)</a>

## Installation Instructions

1. Clone down [this repository](https://github.com/Shared-Milk/shared-milk-ui)
2. Run `npm install`
3. Run `npm start` in your terminal
4. Go to http://localhost:3000/ and you should see the website
5. Enter `control + c` in your terminal to stop the server at any time.

## Project Goals

- Demonstrate knowledge you’ve gained throughout Turing
- Use an agile process to turn well defined requirements into deployed and production ready software
- Gain experience dividing applications into components and domains of responsibilities to facilitate multi-developer teams. Service oriented architecture concepts and patterns are highly encouraged.
- Explore and implement new concepts, patterns, or libraries that have not been explicitly taught while at Turing
- Practice an advanced, professional git workflow including a Pull Request Review
- Gain experience using continuous integration tools to build and automate the deployment of features
- Build applications that execute in development, test, CI, and production environments
- Focus on communication between front-end and back-end teams in order to complete and deploy features that have been outlined by the project spec


## Directions and Features

On the landing page, the user is given the option to donate milk, request milk and view support resources for struggling families. 

 - Click the **Need Milk** button on either the landing page or on the navigation bar link to view a database of active milk donors. If the user is interested in requesting milk from a certain donor, they may click on that selected donor's card and they will be directed to a Milk Request Form where they can then message that donor.

![need-milk](https://github.com/Shared-Milk/shared-milk-ui/blob/main/.github/Need-Milk.gif)

  - Click the **Donate Milk** button on the landing page or the 'Donate' button on the navigation bar to fill out the Donate Milk Form. Once the donor adds their information correctly and clicks the submit button, they will be directed to a thank you page. 

![donate](https://github.com/Shared-Milk/shared-milk-ui/blob/main/.github/Donate-Milk.gif)

  - Click the **Find Support** button on either the landing page or the 'Support' button on the navigation bar to view a list of links with a variety of resources for families who are struggling due to the stressors of parenthood or breast milk production issues.

![support](https://github.com/Shared-Milk/shared-milk-ui/blob/main/.github/Support.gif)

  - Navigate to the **Our Team** page in the menu to learn more about the team behind 'No Use Cryin' Over Shared Milk'.

  - Navigate to the **About** page to read more about our mission and take a look at the precious faces that inspired this app.

  - If the user does not correctly fill out a form they are prompted with form error reminders.
  
    ![form_errors](https://github.com/Shared-Milk/shared-milk-ui/blob/main/.github/form_errors.gif)
    
  - If the user navigates to a website that doesn't exist, or a network error occurs, they are prompted with error messages.

    ![error-messages](https://github.com/Shared-Milk/shared-milk-ui/blob/main/.github/error_handling.png)

  - Fully Mobile Responsive
    
    ![mobile-responsive](https://github.com/Shared-Milk/shared-milk-ui/blob/main/.github/Mobile-Responsive.gif)
   
  - 100% Accessible

    ![accessibility-score](https://github.com/Shared-Milk/shared-milk-ui/blob/main/.github/accessibility_score.png)

## Code Architecture

This application utilizes 21 functional components and uses React Hooks to manage state and perform network requests. 

## Technologies Used

### Frontend Technologies
- React
- React Router v6
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

## Testing

Cypress was used for E2E and integration testing. To test the application: 
 1. Run `npm start`
 2. In a seperate terminal tab run `npm run cypress` and you will have a window open that gives you the ability to click on each test and see whether they pass. 

## Project Challenges

- This was our team's first time working with the following technologies and concepts, which naturally came with a learning curve as we implemented them into our project:

    - Connecting to API using GraphQL and Apollo 
    - Utlizing React Hooks and Router v6
    - Implementing CI/CD with CircleCI

This project was a good combination of working with familiar technologies such as React and Cypress, while also stretching our ability to learn unfamiliar technologies such as GraphQL. We also had to learn Router v6 and Hooks which added to the project complexity. We were taken aback by the difficulties of a query language like GraphQL because we had only fetched data from Rest APIs prior to this project. Error handling with GraphQL proved to be a formidable challenge because REST APIs use status codes as a part of their response (200-ok, 404-not found, 500-internal server error etc.), but GraphQL will generally always return a 200 error(or 500 if something goes really bad). Without being able to access the status code and status message information, it was really difficult to display the results of a failed or bad request.

## Project Wins

- Created a fully funtional MVP with time scope of two weeks
- Continued to build a strong understanding of React framework 
- Successfully self-taught GraphQL with Apollo, React Hooks and Router v6
- Completed a thorough project plan and wireframe, which kept our team on track 
- Implemented React Router for a multi-page UX
- Continued to gain competency with Cypress E2E testing framework
- Utilized typechecking with PropTypes
- Implemented network error handling that tests for multiple errors
- Successful implementation of multiple NPM packages, including form error handling, and a mobile menu
- Fully mobile responsive
- 100% Accessibility Audit
- Great collaboration with the BE team on GraphQL

## Future Iterations

- A mailer to send the donating user an email when they submit to the donor database, as well as whenever someone requests milk.
- A login to have multiple users with statistics such as the amount of milk donated or received, as well as an internal messaging system to connect users.
- A review system for parents to be able to review their experience with a donor.
- A donor login so a donor can update their status when they are no longer producing.

## Authors

### Frontend Team

- [Chez Gallo](https://github.com/cagallo)
- [Jani Palomino](https://github.com/janitastic)
- [Lindsay Schnell](https://github.com/lschnell8)
- [Devon Wigle](https://github.com/devonwigle)

### Backend Team

- [Kelly Anderson](https://github.com/kanderson852)
- [Eric Miekle](https://github.com/EMielke76)
- [Seth Perna](https://github.com/SethPerna)

### Project Managers
- [Nik Seif](https://github.com/niksseif)
- [Dallas Slieker](https://github.com/he-dslieker)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).





