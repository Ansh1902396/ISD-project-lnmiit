import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

import { Link } from "react-router-dom";


const Navbar = () => {

    return(
        <AppBar position = 'static'>
            <Toolbar>
                <Typography variant = 'h5'  sx = {{flexGrow:1}}>Curriculum Management</Typography>
                <Stack direction='row' spacing = {2} sx ={{}}>
                <Link to = '/' style = {{textDecoration: 'none'}}><Button color="inherit">Home</Button></Link>
                <Link to = '/Login' style = {{textDecoration: 'none'}}><Button color="inherit">Login</Button></Link>
                <Link to = '/StudentDashboard' style = {{textDecoration: 'none'}}><Button color="inherit">Student Dashboard</Button></Link>
                <Link to = '/TeacherDashboard' style = {{textDecoration: 'none'}}><Button color="inherit">Teacher Dashboard</Button></Link>
                <Link to = '/Admin' style = {{textDecoration: 'none'}}><Button color="inherit">Admin</Button></Link>
            </Stack>
            </Toolbar>
            
        </AppBar>
    );
}

export default Navbar;