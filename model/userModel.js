const mongoose = require('mongoose');
const userModel = {
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: false, unique: true, set: (v) => md5(v), select: false },
  password: { type: String, required: false },
  phone: { type: String, required: false },
};

const userSchema = new mongoose.Schema(userModel);
module.exports = userSchema;
