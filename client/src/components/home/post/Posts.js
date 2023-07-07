import React from 'react'
import { useState,useEffect } from 'react';
import { getAllPosts} from '../../../service/api';
import { useSearchParams,Link } from 'react-router-dom';
import Post from './Post.js';
import {Box,Grid,styled} from '@mui/material';
const StyledBox=styled(Box)`
 font-size:40px;
 margin-left:30%;
 margin-top:55px;
  font-weight:bolder;
`;
const Posts = () => {
   const [posts,setPosts]=useState([]);
   const [searchParams]=useSearchParams();
   const category=searchParams.get('category');

   useEffect(()=>{
    const fetchPost=async()=>{
    let response=await getAllPosts(category);
    if(response) { 
    setPosts(response.data);
    }
  }
    fetchPost();
   },[category]); 
  return (
    <>
    {
     posts && posts.length>0 ? posts.map(post=>(
       <Grid item lg={12} sm={12} xs={12}>
       <Link to={`details/${post._id}`} style={{textDecoration:'none',color:'inherit'}}>
       <Post post={post}/>
       </Link>
       </Grid>
     )) : <StyledBox>No Data available</StyledBox>  
    }  
    </>
  )
}

export default Posts