import User from '../models/userschema.js';
import Token from '../models/tokenschema.js';
import alert from 'alert';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config({path:'./config.env'});

export const addUser=async(req,res)=>{
     const hashedPassword=await bcrypt.hash(req.body.password,10);   
    const naya_user={username:req.body.username,name:req.body.name,password:hashedPassword};
    const newUser=new User(naya_user);
    try{
      await newUser.save();
      alert("Registration Successful");
      res.status(200).json(newUser);
    }catch(err){
      alert("All fields are required and Min length of password is 8"); 
       res.status(400).json({message:err.message});
    }
}

export const loginUser=async(req,res)=>{
let user=await User.findOne({username:req.body.username});
if(!user){
 return res.status(400).json({message:'Invalid Username or Password'}); 
}
try{
  let match=bcrypt.compare(req.body.password,user.password);
  if(match){
  const accessToken=jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY,{expiresIn:'15m'});
  const refreshToken=jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY);

  const newToken=new Token({token:refreshToken});
  await newToken.save();
  return res.status(200).json({accessToken:accessToken,refreshToken:refreshToken,
  name:user.name,username:user.username});
  }
  else{
   return res.status(400).json({message:'Password does not match'}); 
  }
}catch(err){
   return res.status(500).json({message:'Something went wrong'});
}
}