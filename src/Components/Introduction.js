import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
};
export default function Introduction() {
    return (
        <Box style = {{padding: 10}} borderRadius={16} {...defaultProps}>
        <Grid container direction="column">
            <Grid item container sm>
            <Grid item style={{padding: 15}}>
                    <Typography variant="h4" color="inherit" >
                        My name is Yuval Kansal and I am currently a first year student enrolled in the University
                        of New South Wales, Sydney
                        for the Bachelor of Computer Engineering (Honours). I am highly interested in Data
                        Science and Web Development. You can find me on LinkedIn or Github.
                        I am really passionate about discovering my passion in the future :p. In my free time,
                        I like to read fiction novels and play outdoor sports (preferably cricket or baseball).
                    </Typography>
            </Grid>
            </Grid>
        </Grid>
        </Box>
    );
}
