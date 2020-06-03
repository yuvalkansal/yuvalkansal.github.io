import React from "react";
import {AppBar, Typography,Toolbar, Button} from "@material-ui/core";

const NavBar = () =>{
    return(
        <AppBar position="static" color = "primary">
            <Toolbar>
                <Typography style={{flexGrow: 1}}>
                    <Button color = "secondary" variant="contained">
                        Resume
                    </Button>
                </Typography>
                <Typography>
                    <Button color = "secondary" variant="contained">
                        About
                    </Button>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;