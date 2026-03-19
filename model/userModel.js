const mongoose = require('mongoose');
const userModel = {
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
};

const userSchema = new mongoose.Schema(userModel);
module.exports = userSchema;
