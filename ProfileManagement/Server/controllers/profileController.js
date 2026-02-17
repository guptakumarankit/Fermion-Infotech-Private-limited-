import { Profile } from "../module/profileModule.js"

export const addProfileController = async(req , res) => {
    try {
        const { name , email , location , task , isWorking , image} = req.body;

        if(!name || !email || !location || !task || !isWorking || !image){
            res.status(404).json({message : "All Field is required" , Success : false});
        }

        const newProfile = await Profile.create(req.body);

        if(!newProfile){
            res.status(404).json({message : "New Profile not created Something went wrong!" , Success : false});

        }

        res.status(200).json({message : "Add Profile Successfully" , Success : true});
    } catch (error) {
        res.status(404).json({message : `Something Went Wrong ${error.message}` , Success : false})
    }
}

export const fetchAllProfileController = async(req , res) => {
    try {
        const profiles = await Profile.find({});

        if(!profiles){
            res.status(404).json({message : "Profiles doesn't found!" , success : false})
        }

        res.status(200).json({message : "Fetch Profiles Successfully" , success : true});
    } catch (error) {
        res.status(404).json({message : error.message , success : false});
    }
}

export const deleteProfileController = async(req , res) => {
    try {
        const {id} = req.params;

        const deleteProfile = await Profile.findByIdAndDelete(id);

        if(!deleteProfile){
            res.status(404).json({message : "Profile doesn't find"})
        }

        res.status(200).json({message : "Delete Profile SuccessFully"})
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

export const editProfileController = async(req , res) => {
    try {
        const { id } = req.params;
        const { name , email , location , task , isWorking , image} = req.body;

        if(!name || !email || !location || !task || !isWorking || !image){
            res.status(404).json({message : "All Field is required" , success : false});
        }

        const updateProfile = await Profile.findByIdAndUpdate(id , {name , email , location , task , isWorking , image});

        if(!updateProfile){
            res.status(404).json({message : "Something went wrong " , success : false})
        }

        res.status(200).json({message : "Edit Profile Successfully" , success : true})
    } catch (error) {
        re.status(400).json({message : error.message})
    }
}