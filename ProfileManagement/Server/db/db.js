import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()  

const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URL);
        if(!res){
            console.log("MongoDb Connection Problem: Maybe URL is incorrect or not found!")
        }
        console.log("DataBase Connect Successfully")
    } catch (error) {
        console.log("DataBase not Connected", error.message)
    }
}

export default connectDB;
