import React from 'react'
import { Typography,Box,styled} from '@mui/material'
import { addElipsis } from '../../../utils/common-utils';
const Container=styled(Box)`
border:1px solid grey;
margin-top:20px;
margin-left:100px;
margin-bottom:10px;
border-radius:10px;
background-color:lightgrey;
min-height:150px;
margin-right:100px;
`;
const Text=styled(Typography)`
 font-size:20px;
 font-weight:bold;
 margin-top:5px;
 word-break:break-word;
`;
const Description=styled(Typography)`
 color:brown;
 font-size:20px;
 font-weight:bolder;
 word-break:break-word;
`;
const StyledTitle=styled(Typography)`
 font-size:20px;
 font-weight:bold;
 margin-top:5px;
 word-break:break-word;
`;
const StyledBox=styled(Box)`
 background:white;
 margin-top:10px;
`;
const Post = ({post}) => {
  return (
    <Container>
    <Text>Author : {post.username}</Text>
     <Text>Category : {post.categories}</Text>
     <StyledBox>
      <StyledTitle>Title : {addElipsis(post.title,30)}</StyledTitle>
       <Description>Description : {addElipsis(post.description,30)}</Description>
      </StyledBox> 
  </Container>
  )
}

export default Post