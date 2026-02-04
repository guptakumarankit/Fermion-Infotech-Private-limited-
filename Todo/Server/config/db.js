import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect('url');
        console.log("MongoDB connected");
    } catch (error) {
        console.log('MongoDB Not connected')
    }
}

export default connectDB;