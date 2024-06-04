import { AppBar, Toolbar, Typography, styled,alpha, Box, InputBase, Badge, Avatar, Menu, MenuItem, Stack, Link } from "@mui/material";
import {  ChildFriendlySharp, Mail } from "@mui/icons-material";
import React, { useState } from "react";
import SchoolIcon from '@mui/icons-material/School';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import avaartImg  from "../media/img/gigachad.jpg"

function Navbar() {
    const [open, setOpen] = useState(false);

    const StyledToolBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between",
    });


    const UserBox = styled(Box)(({theme}) => ({ 
        display: "flex", 
        gap:"10px",
        alignItems:"center",
        [theme.breakpoints.up("sm")]:{
            display: "none"
        }
    }));
   
    const StyledLink = styled(Link)({
      color: "#000"
  });

      
     
  return (
    <AppBar position="sticky" color="default" >
        <StyledToolBar>
            <Stack direction="row" spacing={2} alignItems="center">
                <SchoolIcon href="/" />
                <Typography variant="body" fontWeight={600}>RoboSchool</Typography>
            </Stack>
            
            
          <Stack direction="row" spacing={5} alignItems="center">
            <Link sx={{ color: "#000", textDecoration: "none", fontSize: "14px"}} href="/">Басты бет</Link>
            <Link sx={{ color: "#000", textDecoration: "none", fontSize: "14px"}} href="about">Біз жайлы</Link>
            <IconButton
            onClick={e=>setOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            > 
              <Typography variant="body" color="initial" sx={{fontSize: "14px"}}>Тақырыптар</Typography>
            </IconButton>
            </Stack>
           
         

          
        </StyledToolBar>
        <Menu
        sx={{width: "100%"}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        onClick={(e)=>setOpen(false)}
        >
       <Stack padding={5} >
        <Box sx={{padding: "15px 100px 15px 15px" }}><Link href="/page/1.1"  sx={{ color: "#000", textDecoration: "none", fontSize: "16px"}}>1 сынып</Link></Box>
        <Box sx={{marginTop: "30px",padding: "15px 100px 15px 15px" }}><Link sx={{ color: "#000", textDecoration: "none", fontSize: "16px"}}>2 сынып</Link></Box>
        <Box sx={{marginTop: "30px",padding: "15px 100px 15px 15px" }}><Link sx={{ color: "#000", textDecoration: "none", fontSize: "16px"}}>3 сынып</Link></Box>
        <Box sx={{marginTop: "30px",padding: "15px 100px 15px 15px" }}><Link sx={{ color: "#000", textDecoration: "none", fontSize: "16px"}}>4 сынып</Link></Box>
       </Stack>
        </Menu>
    </AppBar>
  );
}

export default Navbar;
