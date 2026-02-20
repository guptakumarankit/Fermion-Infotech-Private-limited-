import express from "express";
import {
  addProfileController,
  deleteProfileController,
  editProfileController,
  fetchAllProfileController,
  fetchProfileSpecificIdController,
} from "../controllers/profileController.js";

const router = express.Router();

router.post("/addProfile", addProfileController);
router.get("/fetchProfile", fetchAllProfileController);
router.get("/fetchProfile/:id", fetchProfileSpecificIdController);
router.delete("/deleteProfile/:id", deleteProfileController);
router.post("/editProfile/:id", editProfileController);

export default router;
