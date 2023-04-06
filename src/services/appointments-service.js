const AppointmentModel = require("../models/appointments")

class AppointmentsService {
  async getAllAppointments(userId) {
    const appointments = await AppointmentModel.find({ userId });

    return appointments;
  }
}

module.exports = new AppointmentsService();