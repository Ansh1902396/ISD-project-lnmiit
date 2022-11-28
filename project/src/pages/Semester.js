import { Container, Grid, Paper, Typography, Stack, Card, CardContent } from "@mui/material";
import { useState } from "react";


const curSemSub = [];
curSemSub[0] = "Mathematics 1";
curSemSub[1] = "Technical Com. in English";

const prevSemData = [];

prevSemData[0] = {
    tName : "Amit Neogi",
    sName : "Physics",
    grade : "A"
}



const Semester = () => {

    const [stuName,setStuName] = useState("Rudransh Singhal");
    
    const curSemCard = curSemSub.map( subject =>
    <Card  variant="outlined" sx={{ minWidth: 250 }}>
        <CardContent>
            <Typography variant="h5" component="div">
                {subject}
            </Typography>
        </CardContent>
    </Card>
    );

    const prevSemCard = prevSemData.map( subject =>
        <Card  variant="outlined" sx={{ minWidth: 250 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Teacher : {subject.tName}
                </Typography>
                <Typography variant="h5" component="div">
                    {subject.sName}
                </Typography>
                
                <Typography variant="body2">
                    Grade : {subject.grade}
                </Typography>
            </CardContent>
        </Card>
        );

    return(
        < Container sx={{padding:3}} >
            <Grid container spacing={3}>
                <Grid item xs = {12}>
                    <Paper>
                        <Typography variant="h5" sx = {{padding : 3}}> Name: {stuName}</Typography>
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
                            {prevSemCard}
                        </Stack>

                    </Paper>
                </Grid>
            </Grid>

        </Container>
    );
    
}

export default Semester;