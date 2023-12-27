import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongodbUrl = process.env.MONGODB_URL;

    if (!mongodbUrl) {
      throw new Error("MONGODB_URL environment variable is not set");
    }

    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(mongodbUrl);
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
