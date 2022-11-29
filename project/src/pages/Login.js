import React, { useState } from "react";
import { Button, Grid, Paper, Typography, TextField } from "@mui/material";
import GoogleButton from "react-google-button";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
const Login = ({userId,password,userType}) => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {

    if (userType === "Student"){
      navigate("/StudentDashboard")
    }
    else if (userType === "Teacher"){
      navigate("/TeacherDashboard")
    }
    else if ( userType === "Admin"){
      navigate("/Admin")
    }
    else{
      navigate("/Login")
    }
    // console.log(inputs);
    
    // console.log(process.env.REACT_APP_API_URL)
    // try {
		// 	const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
		// 	  userId: inputs.username,
		// 	  password:inputs.password
	
		// 	});

		//    console.log(res);
			
		// 	// if(res.status != 401 && res.data.isgsec){
		// 	// setUser(res.data);
		// 	// setUserLogin(true);
		// 	// localStorage.setItem("userInfo",JSON.stringify(res.data));
		// 	// navigate('/gsechome');}
		// 	// console.log("this is  user data ==>", res.data);
		//   }
		//   catch (error) {
		// 	console.log(error)
		//   }
    setInputs({ username: "", password: "" });
  };

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "25px auto",
  };

  const btStyle = {
    margin: "8px 0",
  };

  const titleStyle = {
    margin: "8px",
  };

  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle}>
        <Typography variant="h3" style={titleStyle}>
          Login
        </Typography>

        <TextField
          id="uField"
          name="username"
          variant="outlined"
          label="Username"
          onChange={handleChange}
          value={inputs.username}
          fullWidth
          required
        />
        <TextField
          id="pField"
          name="password"
          variant="outlined"
          label="Password"
          onChange={handleChange}
          value={inputs.password}
          type="password"
          fullWidth
          required
        />

        <Button
          id="subButton"
          name="subButton"
          type="submit"
          variant="contained"
          style={btStyle}
          onClick={handleSubmit}
        >
          <Typography variant="button">Login</Typography>
        </Button>

      </Paper>
    </Grid>
  );
};
export default Login;
