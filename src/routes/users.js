const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user-controller")
const { validationUser } = require("../middlewares/user-validation");

router.post('/registration', validationUser, UserController.registration);
router.post('/authorization', UserController.authorization);
router.get('/logout', UserController.logout);
router.get('/refresh', UserController.refresh);

module.exports = router;
