import express from 'express'
import dbConnect from './config/dbConfig.js';
import indexRouter from './route/indexRoute.js';
const app=express();
dbConnect();

const PORT=4000

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.send("Welcome to express server")
})

app.use("/api/v1",indexRouter);

app.listen(PORT,(req,res)=>{
    console.log("App is listening on PORT=",PORT);
})