import React from 'react'
import { useState,useContext } from 'react';
import {Box,Button,TextField,styled,Typography} from '@mui/material';
import {additionUser,loggedinUser} from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';
const Component=styled(Box)`
 width:400px;
 height:615px;
 margin:auto;
 box-shadow:4px 2px 4px 2px rgb(0 0 0/0.5);
 margin-top:80px;
`;
const Image=styled('img')({
   width:380,
   margin:'auto',
   display:'flex',
   paddingTop:50
})
const Wrapper=styled(Box)`
 margin-top:10px;
  & > div{
    display:grid;
    padding:10px;     
   & >button{
    margin-top:8px;
    font-size:15px;
    color:black;
    font-weight:bold;
    background-color:lightblue;
    border-radius:8px;
    transform:none
   }
   & >p{
    margin-top:5px;
   } 
  };
`;
const initialValues={
  name:'',
  username:'',
  password:''
}
const defaultValues={
  username:'',
  password:''
}

const Login = ({isUserAuth}) => {
  const url="https://media.istockphoto.com/id/626669886/photo/blogging-blog-word-coder-coding-using-laptop.jpg?s=612x612&w=0&k=20&c=gX9o-kj9RohNBAT2n4wR6fldiTdvnpxZOsetFonpBJw="
    const [account,setAccount]=useState('login');
    const [user,setUser]=useState(initialValues);
    const [loggedin,setLoggedin]=useState(defaultValues);

     let navigate=useNavigate();

    const {setAcc}=useContext(DataContext);
    const toggleSignUp=()=>{
        if(account==='signup'){
           setAccount('login'); 
        }
        else{
           setAccount('signup'); 
        }
    }
    const onInputChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value});
    }
     const onValueChange=(e)=>{
      setLoggedin({...loggedin,[e.target.name]:e.target.value});
      console.log(loggedin);
    }

     const addUserDetails=async()=>{
      let response=await additionUser(user);
      if(!response) console.log("Registration Unsuccessful");
      else{
      console.log("Registration Successful");  
      toggleSignUp('login');  
      setUser(initialValues);}
    }

    const logSuccess=async()=>{
      let response=await loggedinUser(loggedin);
      if(!response){
        console.log("Login Unsuccessful");
      }
      else{
      console.log("Login Successful");  
     sessionStorage.setItem('accessToken',`Bearer${response.data.accessToken}`);
     sessionStorage.setItem('refreshToken',`Bearer${response.data.refreshToken}`); 
     setAcc({name:response.data.name,username:response.data.username});
     navigate('/');
     isUserAuth(true);
     sessionStorage.clear();
      }
    }
   
    
  return (
    account==='login'?
    <Component>
    <Box>
      <Image src={url} alt="logo"/>
      <Wrapper>
      <TextField variant='standard' name='username' onChange={(e)=>onValueChange(e)} placeholder='Enter Username'/>
      <TextField variant='standard' name='password' onChange={(e)=>onValueChange(e)} placeholder='Enter Password'/>
      <Box>
      <Button variant='contained' onClick={()=>logSuccess()}>Login</Button>
      <Typography style={{textAlign:'center'}}>OR</Typography>
      <Button variant='outlined' onClick={()=>toggleSignUp()}>Create an account</Button>
      </Box>
      </Wrapper>
      </Box>
    </Component>
   :
   <Component>
    <Box>
      <Image src={url} alt="logo"/>
      <Wrapper>
      <TextField variant='standard' name='name' onChange={(e)=>onInputChange(e)} placeholder='Enter Name'/>
      <TextField variant='standard' name='username' onChange={(e)=>onInputChange(e)} placeholder='Enter Username'/>
      <TextField variant='standard' name='password' onChange={(e)=>onInputChange(e)} placeholder='Enter Password'/>
      <Box>
      <Button variant='outlined' onClick={()=>addUserDetails()}>SignUp</Button>
      <Typography style={{textAlign:'center'}}>OR</Typography>
      <Button variant='contained' onClick={()=>toggleSignUp()}>Already have an account</Button>
      </Box>
      </Wrapper>
      </Box>
    </Component>
  )
}

export default Login