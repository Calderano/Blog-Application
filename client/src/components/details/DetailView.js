import { useState, useEffect, useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import {useParams,useNavigate} from 'react-router-dom'

import {getPostById,delPost} from '../../service/api';

import { DataContext } from '../../context/DataProvider';

const Container = styled(Box)`
    margin-top:30px;
    margin-left:60px;
    margin-right:60px;
    margin-bottom:20px
`;
const Image = styled('img')({
    width: '100%',
    height: '60vh',
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
    cursor:pointer
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
    word-break:break-word;
`;
const Des=styled(Typography)`
 word-break:break-word;
 font-size:25px;
 color:brown
`
const Author = styled(Box)`
    color: '#878787';
    display: 'flex';
    margin: '20px 0';
    display:flex;
    margin-top:15px;
    margin-bottom:15px;
    font-size:20px;
    font-weight:bolder;
    color:black
`;

const DetailView = () => {
    const url="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    const [post, setPost] = useState({});
    const { acc } = useContext(DataContext);
    const { id } = useParams();
    const navigate=useNavigate();
    
    useEffect(() => {
        const fetchData = async () => {
            let response = await getPostById(id);
            if (response) {
            setPost(response.data);
            }
        }
        fetchData();
    }, []);
       
    const deletePost=async(id)=>{
       let response=await delPost(id);
       if(response){
        navigate('/');
       }
    }
    
    return (
    <Container>
        <Image src={url} alt="post" />
        <Box style={{ float: 'right' }}>
        {   
        acc.username === post.username && 
        <>  
      
        <DeleteIcon color="error" onClick={()=>deletePost(post._id)}/>
        </>
         }
        </Box>
    <Heading>{post.title}</Heading>

    <Author>
    <Typography>Author: <span style={{fontWeight: 600}}>{post.username}</span></Typography>           
    <Typography style={{marginLeft: 'auto'}}>{new Date(post.createdDate).toDateString()}</Typography>
    </Author>

    <Des>{post.description}</Des>

    </Container>
    )
}

export default DetailView;