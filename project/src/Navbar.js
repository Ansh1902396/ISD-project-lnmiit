import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";

import { Link } from "react-router-dom";


const Navbar = () => {

    return(
        <AppBar position = 'static'>
            <Toolbar>
                <Typography variant = 'h5' component = 'div' sx = {{ flexGrow: 1}}>ISD Project</Typography>
            </Toolbar>
            <Stack direction='row' spacing = {2} >
                <Link to = '/'><Button color="inherit">Home</Button></Link>
                <Link to = '/Login'><Button color="inherit">Login</Button></Link>
                <Link to = '/Semester'><Button color="inherit">Semester</Button></Link>
            </Stack>
        </AppBar>
    );
}

export default Navbar;