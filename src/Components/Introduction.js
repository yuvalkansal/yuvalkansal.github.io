import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

export default function Introduction() {
    return (
        <Grid container direction="column">
            <Grid item container sm >
            <Grid item style={{padding: 15}}>
                    <Typography variant="h4" color="inherit" >
                        My name is Yuval Kansal and I am currently a first year student enrolled in UNSW
                        for the Bachelor of Computer Engineering (Honours). I am highly interested in
                        Data Science, ML and Web Development. You can find me on LinkedIn or Github.
                        I like coding in general and these are the languages that I like to code in:
                    </Typography>
            </Grid>
                <Grid item>
                    <Typography variant="h4" color="inherit">
                        <ul>
                            <li>C++</li>
                            <li>Python</li>
                            <li>React using JavaScript</li>
                        </ul>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}
