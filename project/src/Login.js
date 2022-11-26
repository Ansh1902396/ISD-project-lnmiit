import React from 'react';
import { Button, Grid, Paper, Typography,TextField } from'@mui/material';

const Login = () => {
    
    const paperStyle = {
        padding:20, 
        height: '60vh',
        width: 280,
        margin: "25px auto"
    }
    
    return(
        <Grid align ='center'>
            <Paper elevation = {10} style = {paperStyle} >
                <Typography variant='h3'>Login</Typography>

                <TextField  variant ="outlined" label='Username'  fullWidth required/>
                <TextField variant ="outlined" label='Password'  type='password' fullWidth required/>

                <Button type = 'submit' variant = 'contained'>
                <Typography variant='button'>Login</Typography>
                </Button>
            </Paper>
      </Grid>
    );
}
export default Login