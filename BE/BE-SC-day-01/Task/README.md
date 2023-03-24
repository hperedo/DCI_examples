# Express Validator Task
> create a static basic `express` server application.
> Create a router `/addStudent` to accept adding a new student with the following date:

1. name:
    - required with custom message: `Student name is required!`.
    - min length: 5  with custom message: `Student name at lest 5 characters`.
    - max length: 20 with custom message: `Student name shouldn't be more then 20 characters`.
2. email:
    - required with error message: `email is required`.
    - email expression with error message: `field email is not a valid email!`.
3. idNumber: 
    - required with error message: `idNumber must be exist!`.
    - max: 99999 with error message: `idNumber should not be more than 99999`.
    - min: 11111 with error message: `idNumber should not be less than 11111`.
4. gender: 
    - not empty.
5. age: 
    - required with error message: `age field is required`.
    - max: 30 with error message: `age should not be more than 30`.
    - min: 18 with error message: `age should not be less than 18`.
6. married: (Bonus)
    - NOT required
    - should be Boolean with error message: `married should be "true/false"`.

