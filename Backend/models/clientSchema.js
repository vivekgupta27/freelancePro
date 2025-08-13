import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  freelancerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
  },
  company: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
  },
  industry: {
    type: String,
  },
  notes: {
    type: String,
  },
  tags: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Client = mongoose.model("Client", clientSchema);
export default Client;
