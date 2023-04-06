const AppointmentsService = require("../services/appointments-service");

class AppointmentsController {
  async getAllAppointments(req, res, next) {
    try {
      const appointments = await AppointmentsService.getAllAppointments(req.user.id);

      res.status(200).send(appointments);
    } catch(error) {
      next(error);
    }
  }
}

module.exports = new AppointmentsController();