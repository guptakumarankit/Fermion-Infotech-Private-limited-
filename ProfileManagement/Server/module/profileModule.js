import mongoose, { Schema } from "mongoose";

const ProfileSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String ,
        unique : true,
        required : true
    },
    location : {
        type : String ,
        required : true
    },
    task : {
        type : String ,
        required : true,
    },
    isWorking : {
        type : Boolean ,
        default : true,
    },
    image : {
        type : String ,
        required : true,
    },
}, {timestamps : true});

export const Profile = mongoose.model("Profile" , ProfileSchema);