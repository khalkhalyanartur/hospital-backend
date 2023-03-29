const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user-controller")
const { validationUser } = require("../middlewares/user-validation");

router.post('/registration', validationUser, UserController.registration);
router.post('/login', validationUser, UserController.login);
router.get('/logout', UserController.logout);

module.exports = router;
