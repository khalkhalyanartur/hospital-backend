const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user-controller")
const { validationUser } = require("../middlewares/user-validation");

router.post('/registration', validationUser, UserController.registration);

module.exports = router;
