import { Container, Grid, Paper, Typography } from "@mui/material";

var numSem = 1;
var name = "Rudransh";

const Semester = () => {

    for ( let i = 0; i < numSem; i++){
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
                        <Typography variant="h5" sx = {{padding : 3}}>Current Semester:</Typography>
                    </Paper>
                </Grid>
            </Grid>`
        </Container>
    );
    }
}

export default Semester;