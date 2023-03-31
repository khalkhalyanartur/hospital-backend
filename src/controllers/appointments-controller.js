const AppointmentsService = require("../services/appointments-service");

class AppointmentsController {
  async getAllAppointments(req, res, next) {
    try {
      const { id } = req.user
      const appointments = await AppointmentsService.getAllAppointments(id);
      
      return res.json(appointments);
    } catch(error) {
      next(error);
    }
  }

  async createAppointment(req, res, next) {
    try {
      console.log("in controller create");
      const { patient, doctor, date, complaint } = req.body;

      const { id: userId } = req.user;
      console.log("obj=",{
        userId,
        patient: patient.trim(),
        doctor: doctor.trim(),
        date: date.trim(),
        complaint: complaint.trim() });

      const newAppointment = await AppointmentsService.createAppointment({
        userId,
        patient: patient.trim(),
        doctor: doctor.trim(),
        date: date.trim(),
        complaint: complaint.trim() 
      });

      res.status(200).send(newAppointment);
    } catch(error) {
      next(error);
    }
  }

}
module.exports = new AppointmentsController();