import express ,{Router} from 'express';
import { addUser,loginUser } from '../controller/user-controller.js';
import { addingPost,getAllPosts,getPost,deletePost} from '../controller/post-controller.js';


const router=express.Router();

router.post('/signup',addUser);
router.post('/login',loginUser);
router.post('/createPost',addingPost);
router.get('/posts',getAllPosts);
router.get('/:id',getPost);
router.delete('/:id',deletePost);
export default router;
