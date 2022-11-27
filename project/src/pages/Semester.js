import { Container, Grid, Paper, Typography,Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";


var name = "Rudransh";

const Semester = () => {
  
    return(
        < Container sx={{padding:3}} >
            <Grid container spacing={3}>
                <Grid item xs = {12}>
                    <Paper>
                        <Typography variant="h5" sx = {{padding : 3}}> Name: {name}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs = {12} sx = {{padding : 3}}>
                    <Paper sx = {{padding : 3}}>
                        <Typography variant="h5">Current Semester:</Typography>
                        <Box >
                            <Typography name ="currentSemSubjects" variant ="paragraph">
                                Mathematics-1 , Technical Communication in English, Physics - 1, Computer Programming 
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs = {12}>
                    <Paper sx = {{padding : 3}}>
                        <Typography variant="h5" >Previous Semester:</Typography>
                    
                        <Stack direction = "row" spacing = {2} >
                            <Link to = "/Subject">Subject</Link>
                            <Link to = "/Subject2">Subject2</Link>
                        </Stack>

                    </Paper>
                </Grid>
            </Grid>

        </Container>
    );
    
}

export default Semester;