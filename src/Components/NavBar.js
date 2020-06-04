import React from "react";
import {AppBar, Typography,Toolbar, Button} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Activities from "./Activities";
import Resume from '../YuvalResume.pdf';

import brown from "@material-ui/core/colors/brown";
const onResumeClick = () =>{
    window.open(Resume);
}
const NavBar = () =>{
    return(
        <Router>
            <AppBar position="static" color = "primary">
                <Toolbar>
                    <Typography>
                        <Button color = "inherit" onClick={onResumeClick}>
                            Resume
                        </Button>
                    </Typography>
                    <Typography style={{flexGrow: 1}}>
                        <Button color = "inherit">
                            About
                        </Button>
                    </Typography>
                    <Typography>
                        <IconButton>
                            <InstagramIcon allowReorder="yes"/>
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>

                    </Typography>
                </Toolbar>
            </AppBar>
        </Router>
    )
}
export default NavBar;