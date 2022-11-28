import { Grid,Paper,Typography,Card,CardContent, CardActionArea} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


const StudentDashboard = () => {
    return(
            <Paper sx ={{ margin: "3 auto", padding: 3}} spacing = {3} variant="outlined" elevation={2}>

                <Grid container align = 'center' spacing={2}>
                    <Grid item xs = {12}>
                        <Typography variant = "h3"  >Choose Semester :</Typography>
                    </Grid>
                
                    <Grid item xs = {6}>
                        <Card  variant="outlined" sx={{ minWidth: 250 }} item xs = {6}>
                            <CardActionArea component = {RouterLink} to = '/CurrentSemester'>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Current Semester
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs = {6}>
                        <Card  variant="outlined" sx={{ minWidth: 250 }} item xs = {6}>
                        <CardActionArea component = {RouterLink} to = '/PreviousSemester'>
                            <CardContent>
                                    <Typography variant="h5" component="div">
                                        Previous Semester
                                    </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                
                </Grid>
            </Paper>
        
    );
}

export default StudentDashboard;