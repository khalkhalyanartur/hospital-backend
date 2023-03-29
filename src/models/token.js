const mongoose = require('mongoose');
const { Schema } = mongoose;

const tokenSchema = new Schema ({
  login: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  refreshToken: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Tokens", tokenSchema);