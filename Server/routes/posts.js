import express  from "express";
import { GetPost , CreatePost} from "../controllers/Posts.js";
const router = express.Router();

router.get('/',GetPost);
router.post('/',CreatePost)



export default router
