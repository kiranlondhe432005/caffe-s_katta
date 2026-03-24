import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin1:help1234@cluster1.ja3as6f.mongodb.net/food-delivery"
    );
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};