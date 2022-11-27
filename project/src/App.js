
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './Navbar';
import Semester from './pages/Semester';
import {Route, Routes} from "react-router-dom";
import {createTheme, ThemeProvider} from '@mui/material'; 
import { Box , CssBaseline } from '@mui/material';
function App(){

  const appTheme = createTheme({
    palette: {
      mode : "dark",
    }
  });

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline>
        <Box>
          
          <Navbar/>

          <Routes>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/Login" element = {<Login/>}></Route>
            <Route path = "/Semester" element = {<Semester/>}></Route>
          </Routes>
          
        
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
