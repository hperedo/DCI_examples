# Project
# Credit Card Validation

You're starting your own credit card business. You need to come up with a new way to validate credit cards with a simple function called  `validateCreditCard`  that returns  `true`  or  `false`.

Here are the rules for a valid number:

-   Number must be 16 digits, all of them must be numbers
-   You must have at least two different digits represented (all of the digits cannot be the same)
-   The final digit must be even
-   The sum of all the digits must be greater than 16

The following credit card numbers are valid:

-   `9999777788880000`
-   `6666666666661666`

The following credit card numbers are invalid:

-   `a92332119c011112`  _invalid characters_
-   `4444444444444444`  _only one type of number_
-   `1111111111111110`  _sum less than 16_
-   `6666666666666661`  _odd final number_


**Bonus #1:**  A valid credit card number may also contain dashes, to make a card number easier to read. For example, the following credit card numbers are now also valid:

-   `9999-7777-8888-0000`
-   `6666-6666-6666-1666`

Update your program to allow such numbers. (Hint: Remove the dashes from the input string before checking if the input credit card number is valid.)

**Bonus #2:**  Return an object indicating whether the credit card is valid, and if not, what the error is  
`{ valid: true, number: '9923-3211-9c01-1112' }`  
`{ valid: false, number: '9923-3211-9c01-1112', error: ‘wrong_length’ }`

----------

**Bonus #3:**  Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the  [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)  for inspiration.
[//]: # (autograding info start)
## Results
  [![Results badge](../../blob/badges/.github/badges/autograding-solution/badge.svg)](https://github.com/DigitalCareerInstitute/PB-CreditCard-Validation-Project/actions)
  
  [Results Details](https://github.com/DigitalCareerInstitute/PB-CreditCard-Validation-Project/actions)
  
  ### Debugging your code
  > [reading the test outputs](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  There are two ways to see why tasks might not be completed:
  #### 1. Running tests locally
  - Run `npm install`
  - Run `npm test` in the terminal. You will see where your solution differs from the expected result.
  
  #### 2. Inspecting the test output on GitHub
  - Go to the [Actions tab of your exercise repo](https://github.com/DigitalCareerInstitute/PB-CreditCard-Validation-Project/actions)
  - You will see a list of the test runs. Click on the topmost one.
  - Click on 'Autograding'
  - Expand the item 'Run DCI-EdTech/autograding-action@main'
  - Here you see all outputs from the test run
[//]: # (autograding info end)