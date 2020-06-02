import React from "react";
import {AppBar, Typography,Toolbar, Button} from "@material-ui/core";

const NavBar = () =>{
    return(
        <AppBar position="static" >
            <Toolbar>
                <Typography>
                    <Button color = "secondary" variant="contained">
                        Resume
                    </Button>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;