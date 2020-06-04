import React from "react";
import {AppBar, Typography,Toolbar, Button} from "@material-ui/core";
// import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";
import Resume from '../YuvalResume.pdf';

const onResumeClick = () =>{
    window.open(Resume);
}
const handleGithub = () =>{
    window.open('https://github.com/yuvalkansal');
}
const handleInstagram = () =>{
    window.open('https://www.instagram.com/yuvikansal/');
}
const handleLinkedIn = () =>{
    window.open('https://www.linkedin.com/in/yuval-kansal-0a1643193/');
}

const NavBar = () => {
        return(
                <AppBar position="static" color = "primary">
                    <Toolbar>
                        <Typography>
                            <Button color = "inherit" onClick={onResumeClick}>
                                Resume
                            </Button>
                        </Typography>
                        <Typography style={{flexGrow: 1}}>
                            <Button color = "inherit">
                                Activities
                            </Button>
                        </Typography>
                        <Typography>
                            <IconButton onClick={handleInstagram}>
                                <InstagramIcon allowReorder="yes"/>
                            </IconButton>
                            <IconButton onClick={handleLinkedIn}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton onClick={handleGithub}>
                                <GitHubIcon />
                            </IconButton>

                        </Typography>
                    </Toolbar>
                </AppBar>
        )
}
export default NavBar;