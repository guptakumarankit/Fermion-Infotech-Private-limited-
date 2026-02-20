import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const connectDB = async() => {
    try {
        const url = process.env.MONGO_URL;
        if(!url){
            throw new error("Mongo URI not found. Check your .env file!")
        }
        // console.log("mongoDb url ok")
        await mongoose.connect(url);
        console.log("DataBase connected Successfully");
    } catch (error) {
        console.log('MongoDB Not connected')
    }
}

export default connectDB;