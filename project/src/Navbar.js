import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";

const Navbar = () => {
    return(
        <AppBar position = 'static'>
            <Toolbar>
                <Typography variant = 'h5' component = 'div' sx = {{ flexGrow: 1}}>BEST SITE</Typography>
            </Toolbar>
            <Stack direction='row' spacing = {2} >
                <Button color="inherit">Home</Button>
                <Button color="inherit">Login</Button>
            </Stack>
        </AppBar>
    );
}

export default Navbar;