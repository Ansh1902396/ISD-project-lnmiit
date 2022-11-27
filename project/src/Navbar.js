import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";


const Navbar = () => {

    return(
        <AppBar position = 'static'>
            <Toolbar>
                <Typography variant = 'h5' component = 'div' sx = {{ flexGrow: 1}}>BEST SITE</Typography>
            </Toolbar>
            <Stack direction='row' spacing = {2} >
                <Link to = '/'><Button color="inherit">Home</Button></Link>
                <Link to = '/Login'><Button color="inherit">Login</Button></Link>
            </Stack>
        </AppBar>
    );
}

export default Navbar;