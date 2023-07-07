import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './Routes/Route.js'
import bodyParser from 'body-parser';
import cors from 'cors';
const app=express();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);

dotenv.config({path:'./config.env'});

const port=process.env.PORT;
app.listen(port,()=>{
   console.log(`server is running on port ${port}`); 
})
const conn=process.env.DATABASE;
connection(conn);