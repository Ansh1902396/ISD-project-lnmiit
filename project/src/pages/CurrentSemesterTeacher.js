import { Container, Grid, Paper, Typography, Stack, TextField, Button } from "@mui/material";
import { useState } from "react";



const CurrentSemesterTeacher = () => {

    const [teachName,setStuName] = useState("Amit Neogi");

    const [teachID, setTeachID] = useState("d334");

    const [subName, setSubName] = useState("Physics");
    
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
                        <Typography variant="h5"> Add Student :</Typography>
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
                        >ADD
                        </Button>
                        </Stack>
                    </Paper>
                </Grid>

                <Grid item xs ={12}>
                    <Paper>
                        <Stack direction="column">
                            <Stack direction = "row" sx = {{padding : 3, alignItems : 'center'}} spacing = {2}> 
                                <Typography variant="h5"> Student Roll:</Typography>
                                <TextField
                                    name="enterUpRoll"
                                    variant="outlined"
                                    label="Enter Roll No"
                                    required
                                />
                                <Typography variant="h5"> Update Grade :</Typography>
                                <TextField
                                    name="enterUp2Roll"
                                    variant="outlined"
                                    label="Update Grade"
                                    required
                                />
                                <Button
                                    name="updateGradeButton"
                                    type="submit"
                                    variant="contained"
                                >Update
                                </Button>
                            </Stack>

                        </Stack>
                    </Paper>
                </Grid>

            </Grid>
        </Container>
);
    
}

export default CurrentSemesterTeacher;