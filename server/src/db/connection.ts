import mongoose from "mongoose";

export const connectDb = async (url: string) => {
  try {
    await mongoose.connect(url);
  } catch (e) {
    throw new Error("Couldnt connect to db");
  }
};
