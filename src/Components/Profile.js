import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import Image from './profile_pic.jpg';


export default function Profile() {
    return (
        <Card style = {{padding: 10}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="555"
                    src = {Image}
                    title="Yuval Kansal"
                />

            </CardActionArea>
        </Card>
    );
}
