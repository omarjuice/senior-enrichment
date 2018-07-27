## Requirements

The requirements below are broken into separate **tiers**, which model the way we **recommend you approach the project**. That is, we recommend you complete (or mostly complete) the requirements in Tier 1 before moving on to Tier 2, and so on.



### Tier 1: Campuses and Students (25%)

Objective: As a User I want to see all Campuses and navigate to a single campus view

#### Backend

- Write a `campuses` model with the following information:
  - [ ] name - not empty or null
  - [ ] imageUrl - with a default value
  - [ ] address - not empty or null
  - [ ] description - extremely large text
- Write a `students` model with the following information:
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
- Write a component to display a single campus with the following information:
  - [ ] The campus's name, image, address and description
  - [ ] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [ ] Display the appropriate campus's info when the url matches `/campuses/:campusId`
- [ ] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view

- Write a component to display a single student with the following information:
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
- Submitting the form with a valid name/address should:
  - [ ] Make an AJAX request that causes the new campus to be persisted in the database
  - [ ] Add the new campus to the list of campuses without needing to refresh the page

- [ ] Write a component to display a form for adding a new student that contains inputs for _at least_ first name, last name and email
- [ ] Display this component EITHER as part of the all-students view, or as its own view
- Submitting the form with a valid first name/last name/email should:
  - [ ] Make an AJAX request that causes the new student to be persisted in the database
  - [ ] Add the new student to the list of students without needing to refresh the page

Congrats! You have completed your third vertical slice! Make sure to `commit -m "Feature: Add Campus and Student"` before moving on!

### Tier 4: Removing a Campus and Removing a Student (25%)

#### Backend

- [ ] Write a route to remove a campus (based on its id)
- [ ] Write a route to remove a student (based on their id)

#### Frontend

- [ ] In the all-campuses view, include an `X` button next to each campus
- Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that campus to be removed from database
  - [ ] Remove the campus from the list of campuses without needing to refresh the page

- [ ] In the all-students view, include an `X` button next to each student
- Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that student to be removed from database
  - [ ] Remove the student from the list of students without needing to refresh the page

Congrats! You have completed your fourth vertical slice! Make sure to `commit -m "Feature: Remove Campus and Student"` before moving on!

### Bonus Tier: Updating a Campus and Updating a Student

<detail>
</detail>

### Bonus Tier: Advanced Forms

<detail>
</detail>
