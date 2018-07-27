# Senior Enrichment Project

## Getting started

1. Fork and clone this repo
2. `npm install`
3. Read the rest of this `README.md` carefully - it contains the requirements for the project and the grading rubric that will be used to assess it
4. Check out the mock-view in the `wireframes` folder to get an idea of what the project _could_ look like
5. Start the build process and your application with: `npm run start:dev`. If you using Windows, you may need to execute `npm run start-server` and `npm run build-watch` separately (in their own terminal tabs).
6. If you navigate to the URL you should see some UI already :) [We already have some connection code to get you started]
7. Check out the starting seed file in `seed.js` - you can run it by executing `npm run seed`

## Details

### The Premise

You are the CTO of the Margaret Hamilton Interplanetary Academy of JavaScript. Create a RESTful web platform that allows you to manage your students and campuses. Before getting started, please carefully review the expectations as outlined below.

### The tools

For this project, you must use Express to handle HTTP requests and Sequelize to interface with your database. Likewise, you must use React, Redux and React-Redux on the front-end. This means that all important state (i.e. students and campuses) must be managed by the Redux store (unimportant state, like form data, may be managed by stateful React components). Components that display student/campus data should therefore be connected to the Redux store. If you perform side-effects (like AJAX requests), you should encapsulate them in thunks.

### Views and Functionality

Take a look in the wireframes folder as a reference for how your front-end _could_ look. Of course, you are encouraged to be creative and flex your own design muscles, but the wireframes should function as a good baseline/inspirational resource. Either way, the most important part of the project is that it works - **design/appearance is extra-credit**. If there ever appears to be a conflict between the wireframes and the rubric/requirements below, **go with the letter of the rubric/requirements.**

## Requirements

The requirements below are broken into separate **tiers**, which model the way we **recommend you approach the project**. That is, we recommend you complete (or mostly complete) the requirements in Tier 1 before moving on to Tier 2, and so on.

For each requirement, 

### Tier 1: Campuses and Students (25%)

Objective: As a User I want to see all Campuses and navigate to a single campus view

#### Backend

- [ ] Write a `campuses` model with the following information:
  - [ ] name - not empty or null
  - [ ] imageUrl - with a default value
  - [ ] address - not empty or null
  - [ ] description - extremely large text
- [ ] Write a `students` model with the following information:
  - [ ] firstName - not empty or null
  - [ ] lastName - not empty or null
  - [ ] email - not empty or null; must be a valid email
  - [ ] imageUrl - with a default value
  - [ ] gpa - decimal between 0.0 and 4.0
- [ ] Students may be associated with at most one campuses. Likewise, campuses may be associated with many students

- [ ] Write a route to serve up all students
- [ ] Write a route to serve up all campuses

#### Frontend
- [ ] Write a campuses sub-reducer to manage campuses in your Redux store
- [ ] Write a students sub-reducer to manage students in your Redux store
- [ ] Write a component to display a list of all campuses (just their names and images)
- [ ] Write a component to display a list of all students (just their names)
- [ ] Display the all-campuses component when the url matches `/campuses`
- [ ] Display the all-students component when the url matches `/students`

Congrats! You have completed your first vertical slice! Make sure to `commit -m "Feature: Get All and Single Campus"` before moving on!

### Tier 2: Single Student and Single Campus (25%)

#### Backend

- [ ] Write a route to serve up a single campus (based on its id), _including that campuses' students_
- [ ] Write a route to serve up a single student (based on their id), _including that student's campus_

#### Frontend
- [ ] Write a component to display a single campus with the following information:
  - [ ] The campus's name, image, address and description
  - [ ] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [ ] Display the appropriate campus's info when the url matches `/campuses/:campusId`
- [ ] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view

- [ ] Write a component to display a single student with the following information:
  - [ ] The student's full name, email, image, and gpa
  - [ ] The name of their campus (or a helpful message if they don't have one)
- [ ] Display the appropriate student when the url matches `/students/:studentId`
- [ ] Clicking on a student from the all-students view should navigate to show that student in the single-student view

- [ ] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [ ] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

Congrats! You have completed your second vertical slice! Make sure to `commit -m "Feature: Get All and Single Student"` before moving on!

### Tier 3: Adding a Campus and Adding a Student (25%)

#### Backend

- [ ] Write a route to add a new campus
- [ ] Write a route to add a new student

#### Frontend

- [ ] Write a component to display a form for adding a new campus that contains inputs for _at least_ the name and address.
- [ ] Display this component EITHER as part of the all-campuses view, or as its own view
- [ ] Submitting the form with a valid name/address should:
  - [ ] Make an AJAX request that causes the new campus to be persisted in the database
  - [ ] Add the new campus to the list of campuses without needing to refresh the page

- [ ] Write a component to display a form for adding a new student that contains inputs for _at least_ first name, last name and email
- [ ] Display this component EITHER as part of the all-students view, or as its own view
- [ ] Submitting the form with a valid first name/last name/email should:
  - [ ] Make an AJAX request that causes the new student to be persisted in the database
  - [ ] Add the new student to the list of students without needing to refresh the page

Congrats! You have completed your third vertical slice! Make sure to `commit -m "Feature: Add Campus and Student"` before moving on!

### Tier 4: Removing a Campus and Removing a Student (25%)

#### Backend

- [ ] Write a route to remove a campus (based on its id)
- [ ] Write a route to remove a student (based on their id)

#### Frontend

- [ ] In the all-campuses view, include an `X` button next to each campus
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that campus to be removed from database
  - [ ] Remove the campus from the list of campuses without needing to refresh the page

- [ ] In the all-students view, include an `X` button next to each student
- [ ] Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that student to be removed from database
  - [ ] Remove the student from the list of students without needing to refresh the page

Congrats! You have completed your fourth vertical slice! Make sure to `commit -m "Feature: Remove Campus and Student"` before moving on!

### Bonus Tier: Updating a Campus and Updating a Student
### Bonus Tier: Advanced Forms

## Rubric

### Backend

| Criteria | Score | Comments |
| ------------- |:-------------| -----|
| Properly handles errors in Express (i.e. by passing them to `next`) | | |

### Frontend

| Criteria | Score | Comments |
| ------------- |:-------------| -----|
| Uses thunks to encapsulate AJAX requests | | |
| Avoids side effects/mutations in reducers and in renders | | |

### Code Cleanliness/Maintainability

| Criteria | Score | Comments |
| ------------- |:-------------| -----|
| Formatting (indentation, whitespace, etc) is consistent | | |
| No unused/unnecessary code | | |
| Uses meaningful/self-documenting variable/function names | | |
| Does not contain blocks of commented out code (except for documentation) | | |

## Other Important Info

### How to test functionality without a frontend
- GET: use your browser
- POST / PUT / DELETE : 
 - CLI (command line interface) with `curl`
   - e.g. `curl -H "Content-Type: application/json" -X POST -d '{"username":"kate","password":"1234"}' http://localhost:3000/api/login`
   - `-H`: headers. `-X`: verb. `-d`: data (must be of the type specified in headers). http://[address]:[port]/[route_path]
 - [Postman](https://www.getpostman.com/)
   ![](https://www.dropbox.com/s/4fk3b90cd0i1a5y/postman_post.png?raw=true)
- Databases: use Sequelize in your routes and see if you are receiving what you expect

### Video Walkthrough
Please submit a 5 to 10 minute screencast of a walk-through of the functionality *and code* for each user story in your app. E.g. for "As a user, I can create a campus", please show us that you can successfully create a campus in your app, and also the actual code that is involved in doing that (from the front-end components to the backend routes and models). We recommend using Quicktime to record the screencast (instructions on how to do that [here](https://support.apple.com/kb/PH5882?locale=en_US&viewlocale=en_US)).

Once you've recorded your screencast, please *upload it to YouTube as an unlisted video*. Email `academics@fullstackacademy.com` with the title `Senior Enrichment Submission: [Your Name]` and include your repo link and YouTube recording link. This will aid us in evaluating your submission.

## Evaluation

- User stories (60%)
- Rubric score (40%)
- Extra credit (15% max)

