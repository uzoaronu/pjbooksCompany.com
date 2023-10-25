import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
});

export default mongoose.model('User', usersSchema);
