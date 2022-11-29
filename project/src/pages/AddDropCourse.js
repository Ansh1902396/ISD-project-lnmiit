import { Grid, Paper, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddDropCourse = () => {
    return (
        <Grid align = 'center'>
            <Grid item xs = {12}>
            <Paper sx = {{padding: 3}}>
            <TextField
                name="subject"
                variant="outlined"
                label="Enter Subject"
                
            />
            <TextField
                name="roll no."
                variant="outlined"
                label="Enter Roll No."
                
            />
            
                <FormControl sx={{minwidth : 120}} >
                    <InputLabel>Add/Drop</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="Add/DropSelect"
                    >
                    <MenuItem value={"Add"}>Add</MenuItem>
                    <MenuItem value={"Drop"}>Drop</MenuItem>
                    </Select>
                </FormControl>
            
            </Paper>
            </Grid>
        </Grid>
    );
}

export default AddDropCourse;