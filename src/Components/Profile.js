import React from 'react';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import Image from './profile_pic.jpg';

export default function Profile() {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    image = './profile_pic.jpg'
                    //style = {{height: 400}}
                    title="Yuval"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Yuval
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        My name is Yuval Kansal and I am first year student in UNSW
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
