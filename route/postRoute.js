import express from 'express'
import { createPost, deletePost, updatePost } from '../controller/postController.js';
const postRouter=express.Router();

postRouter.route("/createPost").post(createPost);
postRouter.route("/updatePost").put(updatePost);
postRouter.route("/deletePost").delete(deletePost);

export default postRouter;