import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background:white;
    margin-left:0px;
    margin-top:0px;
    `;
    
  const Des=styled(Toolbar)`
    justify-content:center;
  `;  
const Tabs = styled(NavLink)`
    color: black;
    margin-right: 30px;
    text-decoration: none;
    font-size: 30px;
    font-weight:bold;
    padding:10px
`;

const Navbar= () => {
    return (
        <Header position="static">
            <Des>
                <Tabs to="/" exact>Home</Tabs>
                <Tabs to="/login" exact>Logout</Tabs>
            </Des>
        </Header>
    )
}

export default Navbar;