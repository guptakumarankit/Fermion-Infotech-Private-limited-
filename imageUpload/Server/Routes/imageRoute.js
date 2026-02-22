import express from 'express'
import { addImageController, fetchImageController } from '../Controllers/imageController.js';
import upload from '../middleware/multer.js';

const router = express.Router();

router.get('/fetchImage' , fetchImageController);
router.post('/addImage' , upload.single("image") , addImageController);

export default router;
