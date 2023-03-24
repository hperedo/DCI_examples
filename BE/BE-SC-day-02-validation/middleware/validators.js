import { body, validationResult } from "express-validator";

export const validateNewUserForm = async (req, res, next) => {
  await body("name").exists().withMessage("name is Required").trim().custom(val=>{
    // check if "," exist, if so > true else false
    if(val.includes(','))
    return true
    return false
  }).withMessage("Dosn't contains ','").run(req);
  await body("email")
    .exists()
    .withMessage("email is Required")
    .isEmail()
    .withMessage("Not a valid Email!")
    .run(req);
  await body("password")
    .exists()
    .withMessage("password is Required")
    .isLength({ min: 8, max: 16 })
    .withMessage("password must be in range of [8, 16] characters.")
    .run(req);
  await body("age")
    .exists()
    .withMessage("age is Required!")
    .isInt({ min: 18, max: 30 })
    .withMessage("age must be in range [18, 30].")
    .run(req);
  await body("married")
    .isBoolean()
    .withMessage('married should be "true/false"')
    .run(req);

  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // got to next handler (controller)
    next();
  } else {
    // the request will NOT reach the controller
    res.status(422).json({ success: false, error: errors.array() });
    // for global error handler in server.js (express error handler)
    // let error = new Error("Validation failed")
    // error.errors = errors
    // next(error)
  }
};


