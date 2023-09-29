const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image:{
    type:String,
    required:true,
  },
  website:{
    type:String,
    required:true,
  },
  gender:{
    type:String,
    required:true,
  },
  skills:{
    type:[String],
    required:true,
  }
});

const Register = mongoose.model("Register", RegistrationSchema);
module.exports = Register;
