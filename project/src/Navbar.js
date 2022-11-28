import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

import { Link } from "react-router-dom";


const Navbar = () => {

    return(
        <AppBar position = 'static'>
            <Toolbar>
                <Typography variant = 'h5'  sx = {{flexGrow:1}}>Curriculum Management</Typography>
                <Stack direction='row' spacing = {2} sx ={{}}>
                <Link to = '/'><Button color="inherit">Home</Button></Link>
                <Link to = '/Login'><Button color="inherit">Login</Button></Link>
                <Link to = '/StudentDashboard'><Button color="inherit">Student Dashboard</Button></Link>
                <Link to = '/TeacherDashboard'><Button color="inherit">Teacher Dashboard</Button></Link>

            </Stack>
            </Toolbar>
            
        </AppBar>
    );
}

export default Navbar;