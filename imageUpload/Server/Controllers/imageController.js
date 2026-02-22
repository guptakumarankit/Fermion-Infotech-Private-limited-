import cloudinary from "../Configs/cloudinary.js";
import User from "../Modules/imageModules.js";

export const fetchImageController = async (req, res) => {
  try {
    const response = await User.find({});
    if (response.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Data Fetch SuccessFully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addImageController = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const { name } = req.body;
    const user = await User.create({
      name: name,
      image: result.secure_url,
    });

    return res.status(200).json({
      success: true,
      imageUrl: result.secure_url,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
