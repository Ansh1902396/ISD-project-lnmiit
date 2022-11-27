
import { Grid,Box, Typography } from '@mui/material';
var teacherName = "Amit Neogi";
var subjectName = "Physics";

const Subject = () => {
    return (
        <Box sx = {{padding : 3 }} fullwidth>
            <Grid align = 'center' >
                <Box> 
                    <Typography variant='h2'>{subjectName}</Typography> 
                </Box>
                <Box>
                    <Typography variant = "h5"> Teacher: {teacherName}</Typography>
                </Box>
            </Grid>
        </Box>
        
    );
}

export default Subject