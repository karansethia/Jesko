import mongoose from "mongoose";

type UserType = {
  name: string;
  email: string;
  password: string;
  mobile: number;
  gitUrl: string;
  notificationType: ("mobile" | "email")[];
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
  },
  gitUrl: {
    type: String,
    required: true,
  },
  notificationType: {
    type: [String],
    enum: ["mobile", "email"],
    default: [],
  },
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;
