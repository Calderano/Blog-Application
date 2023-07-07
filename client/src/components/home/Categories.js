
import { Link,useSearchParams } from 'react-router-dom';
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';


import { categories } from '../../constant/data';

const StyledTable = styled(Table)`
    border: 2px solid rgba(224, 224, 224, 1);
`;
    
const StyledButton = styled(Button)`
    margin: 20px;
    margin-left:0;
    width: 100%;
    text-decoration: none;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    return (
        <>
     <StyledLink to={`/create?category=${category ||''}`}>
    <StyledButton variant="contained">Create Blog</StyledButton>
    </StyledLink>
            <StyledTable>
            <TableRow>
             <TableCell>
            <StyledLink to={`/?category=All`}>
            All Categories
            </StyledLink>    
             </TableCell>   
            </TableRow>
            <TableBody>
            {
            categories.map(category => (
             <TableRow key={category.id}>
              <TableCell>
             <StyledLink to={`/?category=${category.type}`}>
             {category.type}
             </StyledLink>
             </TableCell>
             </TableRow>
             ))
             }
            </TableBody>
            </StyledTable>
        </>
    )
}

export default Categories;