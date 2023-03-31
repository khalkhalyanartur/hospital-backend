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
      const { patient, doctor, date, complaint } = req.body;
      
      const { id: userId } = req.user;
  
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

  async editAppointment (req, res, next) {
    try {
      const { patient, doctor, date, complaint } = req.body;

      const { id } = req.params;

      console.log("in controller params=",id);

      const editedAppointment = await AppointmentsService.editAppointment(id, {
        patient: patient.trim(),
        doctor: doctor.trim(),
        date: date.trim(),
        complaint: complaint.trim()
      });

      res.status(200).send(editedAppointment);
    } catch(error) {
      next(error);
    }
  }

  async deleteAppointment (req, res, next) {
    try {
      const { id } = req.params
      const deletedAppointment = await AppointmentsService.deleteAppointment(id);

      res.status(200).send(deletedAppointment);
    } catch(error) {
      next(error)
    }
  }

}
module.exports = new AppointmentsController();