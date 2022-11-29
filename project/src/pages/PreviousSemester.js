import { Container, Grid, Paper, Typography, Stack, Card, CardContent } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";

const PreviousSemester = () => {
    const [stuName,setStuName] = useState("Rudransh Singhal");

    const [prevSems,setPrevSems] = useState([
    { semName:"Semester 1", semId: 1, }, 
    { semName:"Semester 2", semId: 2,} 
     ]);

    const [prevSemData,setPrevSemData] = useState([{
        tName : "Amit Neogi",
        sName : "Physics",
        grade : "A"
    }]);

    const [sem, setSem] = useState('');

    useEffect(
        () => {
            setPrevSemData([{
                tName : "Usha",
                sName : "English",
                grade : "A"
            }]);
        } , [sem]
    );

    const handleSemChange = (event) => {
        setSem(event.target.value);
    };

    const semMenuItem = prevSems.map( sems =>
        <MenuItem value={sems.semId}>{sems.semName}</MenuItem>
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

    return (
        < Container sx={{padding:3}} >
            <Grid container spacing={3}>
                <Grid item xs = {12}>
                    <Paper>
                        <Typography variant="h5" sx = {{padding : 3}}> Name: {stuName}</Typography>
                    </Paper>
                </Grid>

                <Grid item xs = {12}>
                    <Paper>
                    <FormControl sx={{ m: 1, minWidth: 180 }} size="small">
                        <InputLabel id="demo-select-small">Semester</InputLabel>
                        <Select
                            value={sem}
                            label="Semester"
                            onChange={handleSemChange}
                        >
                            {semMenuItem}
                        </Select>
                    </FormControl>
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

export default PreviousSemester;