const AppointmentsModel = require("../models/appointments")

class AppointmentsService {
  
  async getAllAppointments(userId) {
    const appointments = await AppointmentsModel.find({ userId });
    return appointments;
  }

  async createAppointment(appointmentData) {
    const newAppointment = await AppointmentsModel.create(appointmentData);
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

  async deleteAppointment(id) {
    const deletedAppointment = await AppointmentsModel.deleteOne({ _id: id });
    return deletedAppointment;
  }
}

module.exports = new AppointmentsService();