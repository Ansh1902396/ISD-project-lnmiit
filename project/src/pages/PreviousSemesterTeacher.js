import { Container, Grid, Paper, Typography, Stack, Card, CardContent } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";

const PreviousSemesterTeacher = () => {
    const [teachName,setStuName] = useState("Amit Neogi");

    const [teachID, setTeachID] = useState("d334");

    

    

    
    

    return (
        < Container sx={{padding:3}} >
            <Grid container spacing={3}>
                <Grid item xs = {12}>
                    <Paper>
                        <Typography variant="h5" sx = {{padding : 3}}> Name: {teachName}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs = {12}>
                    <Paper>
                        <Typography variant="h5" sx = {{padding : 3}}> ID: {teachID}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs = {12}>
                    <Paper>
                        <Typography variant="h5" sx = {{padding : 3}}> Subject: {teachName}</Typography>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    );

}

export default PreviousSemesterTeacher;