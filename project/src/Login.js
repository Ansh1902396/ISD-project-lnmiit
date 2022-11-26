import React from 'react';
import { Button, Grid, Paper, Typography,TextField } from'@mui/material';

const Login = () => {
    
    const paperStyle = {
        padding:20, 
        height: '60vh',
        width: 280,
        margin: "25px auto"
    }

    const btStyle = {
        margin: '8px 0'
    }

    const titleStyle = {
        margin : '8px'
    }
    
    return(
        <Grid align ='center'>
            <Paper elevation = {10} style = {paperStyle} >
                <Typography variant='h3'style={titleStyle}>Login</Typography>

                <TextField id = "uField" name = "uField" variant ="outlined" label='Username'  fullWidth required/>
                <TextField id = "pField" name = "pField" variant ="outlined" label='Password'  type='password' fullWidth required/>

                <Button id = "subButton" name = "subButton" type = 'submit' variant = 'contained' style ={btStyle}>
                <Typography variant='button'>Login</Typography>
                </Button>
            </Paper>
      </Grid>
    );
}
export default Login