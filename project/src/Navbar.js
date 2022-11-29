import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

import { Link } from "react-router-dom";


const Navbar = () => {

    return(
        <AppBar position = 'static' sx = {{bgcolor: "#3b173f",color:"#fff"}}>
            <Toolbar>
                <Typography variant = 'h5'  sx = {{flexGrow:1}}>Curriculum Management</Typography>
                <Stack direction='row' spacing = {2} sx ={{}}>
                <Link to = '/' style = {{textDecoration: 'none'}}><Button sx={{color:"#fff"}}>Home</Button></Link>
               
                
            </Stack>
            </Toolbar>
            
        </AppBar>
    );
}

export default Navbar;