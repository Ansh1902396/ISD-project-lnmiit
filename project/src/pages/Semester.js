import { Container, Grid, Paper, Typography,Box } from "@mui/material";
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
                <Grid item xs = {12}>
                    <Paper>
                        <Typography variant="h5" sx = {{padding : 3}}>Current Semester:</Typography><br/>
                        <Box sx={{padding : 3}}>
                            <Typography name ="currentSemSubjects" variant ="paragraph">
                                Mathematics-1 , Technical Communication in English, 
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
    
}

export default Semester;