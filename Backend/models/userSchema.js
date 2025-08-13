import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: function () {
      return this.authProvider === 'local';
    },
  },
  googleId: {
    type: String
  },
  authProvider: {
    type: String,
    enum: ['local', 'google'],
    default: 'local'
  },
  avatar: {
    type: String
  }
}, { timestamps: true }); // adds createdAt & updatedAt

const User = mongoose.model('User', UserSchema);

export default User;
