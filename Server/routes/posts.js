import express  from "express";
import { GetPost , CreatePost} from "../controllers/getPosts.js";
const router = express.Router();

router.get('/',GetPost);
router.post('/create',CreatePost)



export default router
