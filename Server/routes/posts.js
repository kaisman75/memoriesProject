import express  from "express";
import { GetPost,CreatePost,UpdatePost} from "../controllers/Posts.js";
const router = express.Router();

router.get('/',GetPost);
router.post('/',CreatePost)
router.patch('/:id',UpdatePost)


export default router
