import {Router} from 'express'
import {upload} from '../middlewares/multer.middleware.js'
import {uploadDocument} from '../controllers/document.controller.js'


const router = Router();

router.post("/upload", upload.single("file"), uploadDocument);

export default router;