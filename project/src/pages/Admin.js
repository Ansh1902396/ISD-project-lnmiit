import { useState } from "react";
import { Grid, Stack, Typography,Paper, Button, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Admin = () => {
    return (
        <Grid align = 'center'>
            <Grid item xs= {12}>
                <Paper>
                    <Stack direction="row" spacing={2} sx = {{padding : 3, alignItems : 'center'}}>
                        <Typography variant="h5">Add / Drop Course Requests:</Typography>
                        <Button
                            name="checkRequestButton"
                            type="submit"
                            variant="contained"
                        > Check Requests
                        </Button>
                    </Stack>
                </Paper>

                <Paper>
                    <Stack direction="row" spacing={2} sx = {{padding : 3, alignItems : 'center'}}>
                        <Typography variant="h5">Add / Remove Course:</Typography>

                        <TextField
                            name="enterTeacherID"
                            variant="outlined"
                            label="Enter Teacher ID"
                            required
                        />

                        <Button
                            name="addCourseButton"
                            type="submit"
                            variant="contained"
                        > Add
                        </Button>
                        <Button
                            name="removeCourseButton"
                            type="submit"
                            variant="contained"
                        > Remove
                        </Button>
                    </Stack>
                </Paper>
                <Paper>
                    <Stack direction="row" spacing={6} sx = {{padding : 3, alignItems : 'center'}}>
                        <Typography variant="h5"> View Grade Details:</Typography>

                        <Paper sx = {{padding: 3}}>
                            <TextField
                                name="enterStudentRoll"
                                variant="outlined"
                                label="Enter Roll No."
                            />
                            <Box sx={{ minWidth: 120 , marginTop: 3}}>
                                <FormControl fullWidth>
                                    <InputLabel>Semester</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    label="Semester"
                                    >
                                    <MenuItem value={10}>Current Semester</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                                <Button
                                    name="viewGradeButton"
                                    type="submit"
                                    variant="contained"
                                    sx = {{marginTop: 2}}
                                > View
                                 </Button>
                            </Box>
                       </Paper>

                       <Typography variant = "paragraph">Grades will display here</Typography>
                        
                    </Stack>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Admin;