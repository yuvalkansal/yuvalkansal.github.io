import React from "react";
import {AppBar, Typography,Toolbar, Button} from "@material-ui/core";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";
import brown from '@material-ui/core/colors/brown';
import green from '@material-ui/core/colors/green';
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

const theme = createMuiTheme({
        palette: {
            primary: brown,
            secondary: green,
        }
    }
)

const NavBar = ({toggleTheme}) => {
        return(
                <ThemeProvider theme={theme}>
                    <AppBar position="static" color = "primary">
                        <Toolbar>
                            <Typography style={{flexGrow: 1}}>
                                <Button color = "inherit" onClick={onResumeClick}>
                                    Resume
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
                </ThemeProvider>
        )
}
export default NavBar;