const AppointmentsModel = require("../models/appointments")

class AppointmentsService {
  async getAllAppointments(id) {
    const appointments = await AppointmentsModel.find({id});
    
    return appointments;
  }

}
module.exports = new AppointmentsService();