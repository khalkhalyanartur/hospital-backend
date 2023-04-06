const express = require("express");
const router = express.Router();
const users  = require("./users");
const appointments = require("./appointments");

router.use('/users', users);
router.use('/appointments', appointments);

module.exports = router;