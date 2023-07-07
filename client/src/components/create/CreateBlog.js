import {useState,useContext} from 'react'
import {Box,InputBase,styled,Button,TextareaAutosize} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import {createPost} from '../../service/api.js'

const Container=styled(Box)`
 margin-left:100px;
 margin-right:100px
`;

const Image = styled('img')({
    width: '100%',
    height: '60vh',
});

const Form=styled(InputBase)`
 width:100%;
 margin-top:30px;
 font-size:30px;
`;

const Text=styled(TextareaAutosize)`
width:100%;
margin-top:20px;
min-height:80px;
font-size:25px;
border-radius:8px
`;

const StyledButton=styled(Button)`
 margin-left:90%;
 width:141px
`;
const CreateBlog = () => {

  const location=useLocation();
  const navigate=useNavigate();
  const { acc } = useContext(DataContext); 
  const url="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
  
  const [post,setpost]=useState({
  title:'',
  description:'',
  username:acc.username,
  categories:location.search?.split('=')[1] || 'All',
  createdDate:new Date()
  });
  
  const handleChange=(e)=>{
    setpost({...post,[e.target.name]:e.target.value});
     console.log(post);
  }
 
   const addPost=async()=>{
    let response=await createPost(post);
    if(response){
     navigate('/'); 
    }
    else {
      console.log("Something went wrong");
    }
   }
  return (
    <Container>
     <Image src={url} alt="Banner"/>
     <Form placeholder='Title of your blog..' name="title" onChange={(e)=>handleChange(e)}></Form>
     <Text variant='filled' name="description" onChange={(e)=>handleChange(e)} placeholder='Write something here...'/>
     <StyledButton variant="contained" onClick={()=>addPost()}>Publish</StyledButton>
    </Container> 
  )
}

export default CreateBlog