import React from "react";
import {AppBar, Typography,Toolbar, Button} from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";
const NavBar = () =>{
    return(
        <AppBar position="static" color = "primary">
            <Toolbar>
                <Typography>
                    <Button color = "inherit">
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
                        <InstagramIcon />
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
    )
}
export default NavBar;