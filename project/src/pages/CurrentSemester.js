import { Container, Grid, Paper, Typography, Stack, Card, CardContent } from "@mui/material";
import { useState } from "react";



const CurrentSemester = () => {

    const [stuName,setStuName] = useState("Rudransh Singhal");

    const [curSemSub, setCurSemSub] = useState(["Mathematics 1","Technical Com. in English"]);
   
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
            </Grid>
        </Container>
);
    
}

export default CurrentSemester;