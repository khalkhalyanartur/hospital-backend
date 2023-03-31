const AppointmentsModel = require("../models/appointments")

class AppointmentsService {
  
  async getAllAppointments(userId) {
    const appointments = await AppointmentsModel.find({ userId });
    return appointments;
  }

  async createAppointment(appointmentData) {
    console.log("in service",appointmentData);
    const newAppointment = await AppointmentsModel.create(appointmentData);
    console.log("newAppointment=",newAppointment);
    return newAppointment;
  }

  async editAppointment(id, editedAppointment) {
    const updatedAppointment = await AppointmentsModel.findByIdAndUpdate(
      id,
      editedAppointment,
      { new: true }
    );
    
    return updatedAppointment;
  }
}
module.exports = new AppointmentsService();