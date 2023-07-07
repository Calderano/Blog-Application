import axios from 'axios';

const URL='http://localhost:8000'; 
export const additionUser=async(user)=>{
  try{
    return await axios.post(`${URL}/signup`, user);
    } catch(error){
        console.log(error);
    }
}

export const loggedinUser=async(loggedin)=>{
  try{
    return await axios.post(`${URL}/login`, loggedin);
    } catch(error){
        console.log(error);
    }
}

export const createPost=async(post)=>{
  try{
    return await axios.post(`${URL}/createPost`,post);
    } catch(error){
        console.log(error);
    }
}

export const getAllPosts=async(category)=>{
  try{
    //console.log(category);
    return await axios.get(`${URL}/posts?category=${category}`);
    } catch(error){
        console.log(error);
    }
}

export const getPostById=async(id)=>{
  console.log(id);      
  try{
    return await axios.get(`${URL}/${id}`);
  }catch(error){
    console.log(error);
  }
}

export const delPost=async(id)=>{
  try{
    return await axios.delete(`${URL}/${id}`);
  }catch(error){
    console.log(error);
  }
}



