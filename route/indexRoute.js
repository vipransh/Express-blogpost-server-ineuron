import express from 'express'
const indexRouter=express.Router();


import postRouter from './postRoute.js';

indexRouter.use("/",postRouter);

export default indexRouter;