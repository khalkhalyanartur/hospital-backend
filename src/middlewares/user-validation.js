const { check } = require('express-validator');
const { validatorResult } = require('./validation-result');
const validationRegistration = [
  check('login')
    .isString()
    .trim()
    .matches(/^[\S*]{6,}$/),
  check('password')
    .isString()
    .trim()
    .matches(/(?=.*\d)[a-zA-Z0-9]{6,}/),
    validatorResult
];
const validationLogin = [
  check('login')
    .isString()
    .trim()
    .notEmpty(),
  check('password')
    .isString()
    .trim()
    .notEmpty(),
  validatorResult
];
module.exports = {
  validationRegistration,
  validationLogin
};