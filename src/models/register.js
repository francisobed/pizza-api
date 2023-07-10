const mongoose = require('mongoose');


const registerSchema = mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  firstName: String,
  lastName:   String,
  email: String,
  password: String,
  confirmPassword: Boolean,
  role: String
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;