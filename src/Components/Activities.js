import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
//import CardContent from "@material-ui/core/CardContent";

export default function Activities() {
    return (
        <Grid container direction="column">
            <Grid item container sm >
            <Grid item style={{padding: 25}}>
                    <Typography variant="body2" color="primary" component="p">
                        My name is Yuval Kansal and I am currently a first year student enrolled in UNSW
                        for the Bachelor of Computer Engineering (Honours). I am highly interested in
                        Data Science, ML and Web Development. You can find me on LinkedIn or Github.
                        I like coding in general and these are the langauages that I like to code in:
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
