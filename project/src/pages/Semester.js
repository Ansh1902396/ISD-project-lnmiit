import { Container, Grid, Paper, Typography,Box, Stack, Card, CardContent } from "@mui/material";


var teacherName = "Amit Neogi";
var subjectName = "Physics";
var subjectGrade = "A";


var name = "Rudransh";
const curSemSub = [];
curSemSub[0] = "Mathematics 1";
curSemSub[1] = "Technical Com. in English";



const Semester = () => {
    
    const curSemCard = curSemSub.map( subject =>
    <Card  variant="outlined" sx={{ minWidth: 250 }}>
        <CardContent>
            <Typography variant="h5" component="div">
                {subject}
            </Typography>
        </CardContent>
    </Card>
        );

    return(
        < Container sx={{padding:3}} >
            <Grid container spacing={3}>
                <Grid item xs = {12}>
                    <Paper>
                        <Typography variant="h5" sx = {{padding : 3}}> Name: {name}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs = {12}>
                    <Paper sx = {{padding : 3}}>
                        <Typography variant="h5">Current Semester:</Typography>
                        <Stack direction = "row" spacing = {2}  sx= {{ mt : 2 }}>
                            
                            {curSemCard}
                            
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs = {12}>
                    <Paper sx = {{padding : 3}}>
                        <Typography variant="h5" >Previous Semester:</Typography>
                    
                        <Stack direction = "row" spacing = {2}  sx= {{ mt : 2 }}>
                        <Card  variant="outlined" sx={{ minWidth: 250 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Teacher : {teacherName}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {subjectName}
                                </Typography>
                
                                <Typography variant="body2">
                                Grade : {subjectGrade}
                                </Typography>
                            </CardContent>
                        </Card>
                        </Stack>

                    </Paper>
                </Grid>
            </Grid>

        </Container>
    );
    
}

export default Semester;