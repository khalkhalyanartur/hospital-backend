const {Schema, model } = require('mongoose');

const appointmentSchema = new Schema ({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  date: {
    type: DataTransfer,
    required: true
  },
  complaints: {
    type: String,
    required: true
  }
});

module.export = model("Appointments", appointmentSchema);