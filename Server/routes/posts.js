import express  from "express";
import { GetPost , CreatePost,postUpdating} from "../controllers/Posts.js";
const router = express.Router();

router.get('/',GetPost);
router.post('/',CreatePost)
router.patch('/:id',postUpdating)


export default router
