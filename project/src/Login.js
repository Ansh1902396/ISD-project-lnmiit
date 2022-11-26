import React from 'react';
import { Button, Grid, Paper, Typography } from'@mui/material';

const Login = () => {
    
    const paperStyle = {
        padding:20, 
        height: '60vh',
        width: 280,
        margin: "25px auto"
    }
    
    return(
        <Grid>
            <Paper elevation = {10} style = {paperStyle} >
                <Typography variant='h3h4'>Login</Typography>

                <form name ="Form">
                    <label> <Typography variant = 'body1'>User name:</Typography> 
                    <input type="text" id="uname" name="uname"></input>
                    </label>
                    <label><Typography variant = 'body1'>Password:</Typography>
                    <input type="text" id="pass" name="pass"></input>
                    </label>
                    <Button variant = "contained">
                    <Typography variant = 'button'>Login</Typography>
                    </Button>
                </form>
            </Paper>
      </Grid>
    );
}
export default Login