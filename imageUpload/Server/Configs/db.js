import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env. MONGO_URL);
        console.log("MongoDb Connect SuccessFully");
    } catch (error) {
        console.log("MongoDB doesn't connected");
    }
}