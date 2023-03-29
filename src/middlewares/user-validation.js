const { check } = require("express-validator");
const { validatorResult } = require("./validation-result");

const validationUser = [
  check("login")
    .isString()
    .trim()
    .matches(/^[\S*]{6,}$/),
  check("password")
    .isString()
    .trim()
    .matches(/(?=.*\d)[a-zA-Z0-9]{6,}/),
    validatorResult
];

module.exports = {
  validationUser
}