# Project Name
Feathers McGraw's great cheese heist 
## Overview

This project is designed to create a function that helps Feathers McGraw identify and select the most valuable cheeses from a list of items. The goal is to filter through a list, find the cheeses with the highest value, and then calculate their total worth. This challenge is aimed at beginners, helping players understand how to manipulate and filter data within an array, store the relevant items separately, and then perform calculations on them, such as adding up their total value. It's a practical exercise in working with arrays and filtering data in JavaScript.

To test your function, save your changes and run the test by typing `npm run test` in your terminal.

- Data Available: main.js
- Test Available: main.test.js

## Planning Phase
- Using disney Ideation: Dreamer , Realist, and Critic phase to narrow down on challenge
- creating a more simple test to practice developing a test 
- Creating the main test using TDD framework
- Testing Framework: Vitest
- Creating the test before creating the functions 
- making sure that both an invalid and valid input give the correct result

### Progress Tracking
- Break down the results that where needed into chunks 
- Test 1 will check if they have filtered the high end cheese
- test 2 will check if they have calculated the total value 

### Technical Documentation
- Testing Framework: Vitest
- Language: JavaScript
- Data Available: main.js
- Test Available: main.js
### Challenges & Solutions
- Challenge: Test was always passing even when the actual was empty 
- solution: I was using describe and test the wrong way around , which meant that the test did not have parameters it needed to check so would automatically pass 
- status: resolved 

- Challenge: Test was failing even though the return should have had an identical value as the expected 
- solution: needed to call the function and use dot notation to call the variable as i was simply calling the variable 
- status: resolved 

## Next Steps
- Make sure that there is a test that confirms the player is creating a table and using the cheeses function
  