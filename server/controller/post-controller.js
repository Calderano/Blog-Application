import Post from '../models/postSchema.js';

export const addingPost=async(req,res)=>{
   const postadd=req.body;
   const new_post=new Post(postadd);
   try{
  await new_post.save();
  res.status(200).json(new_post);
   }catch(err){
     res.status(400).json({message:err.message});  
   } 
}

export const getAllPosts=async(req,res)=>{  
    try{
      //console.log(req.query.category);
     let allPosts;
     if(req.query.category==='All') allPosts=await Post.find({});
    else allPosts=await Post.find({categories:req.query.category});
      res.status(200).json(allPosts);
    }catch(err){
       res.status(400).json({message:err.message});
    }
}

export const getPost=async(req,res)=>{
  try{
     const singlePost=await Post.findById(req.params.id);
      res.status(200).json(singlePost);
  }catch{
   res.status(400).json({message:err.message});
  }
}

export const deletePost=async(req,res)=>{
  try{
     await Post.deleteOne({_id:req.params.id});
      res.status(200).json({message:'Post Deleted'});
  }catch{
   res.status(400).json({message:err.message});
  }
}