import React, { useState } from 'react';
import { Button, Grid, Paper, Typography,TextField } from'@mui/material';

const Login = () => {
    const [inputs, setInputs] = useState(
        {
            username:"" ,
            password:""
        }
        );

     const handleChange = (event) => {
            setInputs({ ...inputs, [event.target.name]: event.target.value });
            };

     const handleSubmit = (event) => {
        console.log(inputs);
        setInputs({ username: "", password: "" });
        };
    
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

                <TextField id = "uField" name = "username" variant ="outlined" label='Username' onChange ={handleChange} value={inputs.username} fullWidth required/>
                <TextField id = "pField" name = "password" variant ="outlined" label='Password' onChange ={handleChange} value={inputs.password} type='password' fullWidth required/>

                <Button id = "subButton" name = "subButton" type = 'submit' variant = 'contained' style ={btStyle} onClick = {handleSubmit}>
                <Typography variant='button'>Login</Typography>
                </Button>
            </Paper>
      </Grid>
    );
}
export default Login