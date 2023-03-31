const express = require("express");
const router = express.Router();
const AppointmentsController = require("../controllers/appointments-controller")
const authorizationMiddleware   = require("../middlewares/auth-middleware");
const validationAppointment = require("../middlewares/validation-appointment")

router.get('/', authorizationMiddleware, AppointmentsController.getAllAppointments);
router.post('/create', authorizationMiddleware, AppointmentsController.createAppointment);
router.patch('/edit/:id', authorizationMiddleware, validationAppointment, AppointmentsController.editAppointment);



module.exports = router;
