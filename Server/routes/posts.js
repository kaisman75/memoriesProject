import express  from "express";
import { GetPosts,getPost,CreatePost,UpdatePost,likePost,deletePost,disLikePost} from "../controllers/Posts.js";
const router = express.Router();


router.get('/',GetPosts);
router.get('/:id',getPost);
router.post('/',CreatePost)
router.patch('/:id',UpdatePost)
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);
router.patch('/:id/disLikePost',disLikePost)

export default router
