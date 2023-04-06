const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user-controller");
const { validationRegistration, validationLogin } = require("../middlewares/user-validation");

router.post('/registration', validationRegistration, UserController.registration);
router.post('/authorization',validationLogin, UserController.authorization);
router.get('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);

module.exports = router;
