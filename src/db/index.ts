import mongoose from "mongoose";

/**
 * Connects to the MongoDB database.
 * @returns A Promise that resolves to void when the connection is successful.
 * @throws {Error} If the connection fails, the process exits with code 1.
 */
export const connectDB = async (): Promise<void> => {
  try {
    const connectionInstance = await mongoose.connect(
      process.env.MONGODB_URL as string
    );
    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error: unknown) {
    console.log("MONGODB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;