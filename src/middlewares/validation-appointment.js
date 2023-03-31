const { check } = require("express-validator");
const { validatorResult } = require("./validation-result");

const validationAppointment = [
  check("patient")
    .isString()
    .trim()
    .isLength({min : 2}),
  check("doctor")
    .isString()
    .trim()
    .isLength({min : 2}),
  check("date")
    .isISO8601(),
  check("complaint")
    .isString()
    .trim()
    .isLength({min : 2}),
  validatorResult
];

module.exports = validationAppointment;

