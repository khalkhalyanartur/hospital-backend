const express = require("express");
const router = express.Router();
const AppointmentsController = require("../controllers/appointments-controller")
const authorizationMiddleware   = require("../middlewares/auth-middleware");

router.get('/', authorizationMiddleware, AppointmentsController.getAllAppointments);
router.post('/create', authorizationMiddleware, AppointmentsController.createAppointment);



module.exports = router;
