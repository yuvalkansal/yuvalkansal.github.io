import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import {Box} from "@material-ui/core";
import Image from './profile_pic.jpg';

export default function Profile() {
    return (
        <Box style = {{padding: 15}} borderRadius={10} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="560"
                    src = {Image}
                    title="Yuval Kansal"
                />
            </CardActionArea>
        </Box>
    );
}
