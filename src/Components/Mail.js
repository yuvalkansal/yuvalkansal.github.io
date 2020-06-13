import React from "react";
import {BottomNavigation} from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import './Mail.css';
import CopyrightIcon from '@material-ui/icons/Copyright';

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
            <BottomNavigation style = {{alignItems: 'center',margin: 0}} id="Contact">
                <Typography >
                    All rights reserved.
                </Typography>
                <IconButton>
                    <Mailto email="yuvalkansal@gmail.com" subject="Hello!" body="Hey, How are you?" />
                </IconButton>
                <Typography >
                    Yuval Kansal.
                </Typography>
                <IconButton>
                    <CopyrightIcon />
                </IconButton>
            </BottomNavigation>
    )
}