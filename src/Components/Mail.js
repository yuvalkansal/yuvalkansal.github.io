import React from "react";
import {BottomNavigation,createMuiTheme,ThemeProvider} from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";
import brown from "@material-ui/core/colors/brown";
import green from "@material-ui/core/colors/green";
import './Mail.css';

const theme = createMuiTheme({
        palette: {
            primary: brown,
            secondary: green,
        }
    }
)
function Mailto({ email, subject, body}) {
    return (
                        <a className="button"
                            href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>
                            <MailIcon />
                            Say Hi!
                        </a>
    );
}
export default function Mail() {
    return(
    <ThemeProvider theme={theme}>
        <BottomNavigation>
            <IconButton>
                <Mailto obfuscate = {true} email="yuvalkansal@gmail.com" subject="Hello!" body="Hey, How are you?" />
            </IconButton>
        </BottomNavigation>
    </ThemeProvider>
    )
}