import mongoose from "mongoose";

const connection=async(conn)=>{

const DB=`${conn}`
await mongoose.connect(DB,{
 useNewUrlParser:true,
 useUnifiedTopology:true,
}).then(()=>{
   console.log("Connection Successful"); 
}).catch((err)=>console.log(err));
}

export default connection
