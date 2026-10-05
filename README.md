# University Course Management System

A simple JavaScript project for managing students and grades. It uses classes,
callbacks, property descriptors, and array methods.

## Files

- `models.js` has the `Student` class.
- `database.js` returns sample data after two seconds.
- `analytics.js` has functions for grades and students.
- `main.js` runs the program and prints the results.

## Run

Run this in the project folder:

```sh
node main.js
```

The output shows the average for course 101, the top student, and the students
in course 102.

## Implementation notes

One challenge was keeping each student's ID unchanged. I used
`Object.defineProperty()` for the ID. The program also turns the data into
`Student` objects before using the report functions.
