const {Schema, model, default: mongoose} = require('mongoose');

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

module.exports = model("Token", tokenSchema);