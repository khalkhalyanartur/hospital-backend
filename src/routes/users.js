const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller")
const { validationUser } = require("../middlewares/user-validation");

router.post('/registration', validationUser, userController.registration);

module.exports = router;
