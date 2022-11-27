
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material'; 
import { Box } from '@mui/material';
function App(){

  const appTheme = createTheme({
    palette: {
      mode : "light",
    }
  });

  return (
    <ThemeProvider theme={appTheme}>
      <Box>
        
        <Navbar/>

        <Routes>
          <Route path = "/" element = {<Home/>}></Route>
          <Route path = "/Login" element = {<Login/>}></Route>
        </Routes>
        
      
      </Box>
    </ThemeProvider>
  );
}

export default App;
