import express from 'express'
import { addProfileController, deleteProfileController, editProfileController, fetchAllProfileController } from '../controllers/profileController.js';

const router = express.Router()

router.post('/addProfile' , addProfileController);
router.get('/fetchProfile' , fetchAllProfileController)
router.delete('/deleteProfile' , deleteProfileController);
router.post('/editProfile' , editProfileController);

export default router;