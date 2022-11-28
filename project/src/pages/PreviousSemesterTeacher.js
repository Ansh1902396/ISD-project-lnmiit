import { Container, Grid, Paper, Typography, Stack,TextField, Button } from "@mui/material";
import { useState } from "react";

const PreviousSemesterTeacher = () => {
    const [teachName,setStuName] = useState("Amit Neogi");

    const [teachID, setTeachID] = useState("d334");

    const [subName, setSubName] = useState("Physics");

    const [gradePara, setGradePara] = useState("The grade is A.");


    
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
                        <Typography variant="h5" sx = {{padding : 3}}> Subject: {subName}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs = {12}>
                    <Paper>
                        <Stack direction = "row" sx = {{padding : 3, alignItems : 'center'}} spacing = {2}> 
                        <Typography variant="h5"> Check Grade :</Typography>
                        <TextField
                            name="enterRoll"
                            variant="outlined"
                            label="Enter Roll No"
                            required
                        />
                        <Button
                            name="checkGradeButton"
                            type="submit"
                            variant="contained"
                        >Submit
                        </Button>
                        </Stack>
                        <Typography variant ="paragraph" sx={{marginLeft: 3}}>{gradePara}</Typography>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    );

}

export default PreviousSemesterTeacher;