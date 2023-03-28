const { Schema, model } = require('mongoose');

const appointmentSchema = new Schema ({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
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
    type: Date,
    required: true
  },
  complaints: {
    type: String,
    required: true
  }
});

module.export = model("Appointments", appointmentSchema);