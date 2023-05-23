import Post from '../model/blogSchema.js'
import asyncHandler from 'express-async-handler'



export const createPost=asyncHandler(async(req,res)=>{
    const {title, body}=req.body

    // check if title and body is present
    if(!(title && body)){
        throw new Error("Title and description is require");
    }

    const post=await Post.create({
        title: title,
        body: body,
    })

    if(post){
        res.status(201).json({
            success: true,
            post
        })
    }
})


export const updatePost=asyncHandler(async(req,res)=>{
    const {id, title, body}=req.body

    if(!(id && title && body)){
        throw new Error("All feilds are required");
    }
    
    
    const post=await Post.findById(id);
    if(!post){
        throw new Error("Invalid post id");
    }


    const updatedPost=await Post.findByIdAndUpdate(id,{
        title: title,
        body: body,
    },{new: true,})

    if(!updatedPost){
        throw new Error("Something went wrong");
    }

    res.status(201).json({
        success: true,
        updatedPost
    })
})

export const deletePost=asyncHandler(async(req,res)=>{
    const {id}=req.body

    if(!id){
        throw new Error("id is required")
    }
    
    const post=await Post.findByIdAndDelete(id)

    if(post){
        res.status(201).json({
            success: true,
            message: "post deleted successfully"
        })
    }
    else{
        throw new Error("Invalid id")
    }
   

})