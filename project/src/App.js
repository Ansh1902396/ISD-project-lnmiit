import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import CurrentSemester from "./pages/CurrentSemester";
import PreviousSemester from "./pages/PreviousSemester";
import CurrentSemesterTeacher from "./pages/CurrentSemesterTeacher";
import PreviousSemesterTeacher from "./pages/PreviousSemesterTeacher";
import AddDropCourse from "./pages/AddDropCourse";
import Admin from "./pages/Admin";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { Box, CssBaseline } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const appTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/google/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline>
        <Box>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/Login"
              element={user ? <StudentDashboard/> : <Login />}
            ></Route>
            <Route path="/StudentDashboard" element={<StudentDashboard/>}></Route>
            <Route path="/CurrentSemester" element={<CurrentSemester/>}></Route>
            <Route path="/PreviousSemester" element={<PreviousSemester/>}></Route>
            <Route path="/TeacherDashboard" element={<TeacherDashboard/>}></Route>
            <Route path="/CurrentSemesterTeacher" element={<CurrentSemesterTeacher/>}></Route>
            <Route path="/PreviousSemesterTeacher" element={<PreviousSemesterTeacher/>}></Route>
            <Route path="/Admin" element = {<Admin/>}></Route>
            <Route path="/AddDropCourse" element = {<AddDropCourse/>}></Route>
          </Routes>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
