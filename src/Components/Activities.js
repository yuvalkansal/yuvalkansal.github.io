import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";
//import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function Activities() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
