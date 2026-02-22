import { Profile } from "../module/profileModule.js";

export const addProfileController = async (req, res) => {
  try {
    const { name, email, location, task, isWorking, image } = req.body;

    console.log(isWorking);
    // console.log(name , email , location , task , isWorking , image)
    if (!name || !email || !location || !task || !image) {
      return res
        .status(400)
        .json({ message: "All Field is required", Success: false });
    }

    const newProfile = await Profile.create(req.body);

    if (!newProfile) {
      return res
        .status(500)
        .json({
          message: "New Profile not created Something went wrong!",
          Success: false,
        });
    }

    return res
      .status(201)
      .json({ message: "Add Profile Successfully", Success: true });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: `Something Went Wrong ${error.message}`,
        Success: false,
      });
  }
};

export const fetchAllProfileController = async (req, res) => {
  try {
    const profiles = await Profile.find({});

    if (!profiles) {
      return res
        .status(500)
        .json({ message: "Profiles doesn't found!", success: false });
    }

    return res
      .status(201)
      .json({ message: "Fetch Profiles Successfully", success: true , profiles});
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

export const fetchProfileSpecificIdController = async (req, res) => {
  const { id } = req.params;

  try {
    const currentProfile = await Profile.findById(id);
    if (!currentProfile) {
      return res
        .status(500)
        .json({ message: "currentProfile Doesn't find!", success: false });
    }

    return res
      .status(201)
      .json({ message: "currentProfile fetch SuccessFully", success: true , currentProfile});
  } catch (error) {
    return res.status(500).json({ message: error.message, success: false });
  }
};

export const deleteProfileController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProfile = await Profile.findByIdAndDelete(id);

    if (!deleteProfile) {
      return res.status(500).json({ message: "Profile doesn't find" });
    }

    return res.status(201).json({ message: "Delete Profile SuccessFully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const editProfileController = async (req, res) => {
  try {
    const  { id }  = req.params;
    const { name, email, location, task, isWorking, image } = req.body;

    if (!name || !email || !location || !task || !image) {
      return res
        .status(404)
        .json({ message: "All Field is required", success: false });
    }

    const updateProfile = await Profile.findByIdAndUpdate(id, {
      name,
      email,
      location,
      task,
      isWorking,
      image,
    });

    if (!updateProfile) {
      return res
        .status(500)
        .json({ message: "Something went wrong ", success: false });
    }

    return res
      .status(201)
      .json({ message: "Edit Profile Successfully", success: true });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
