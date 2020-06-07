import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Image1 from './SMO.jpg';
import Image2 from './Baseball.jpg';
import Image3 from './GIIS.jpg';




export default function Achievements() {

    return (
        <Grid container>
            <Grid item sm={4}>
                <Card  style = {{padding:15}}>
                    <CardActionArea>
                        <CardMedia
                            component="img" alt="Singapore Mathematical Olympiad"
                            height="468" image= {Image1}
                            title="Singapore Mathematical Olympiad"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Singapore Mathematical Olympiad
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                I was awarded the Silver Award in the prestigious Singapore Mathematical Olympiad
                                conducted by The Mathematical Society of Singpore.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="secondary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item sm={4}>
                <Card  style = {{padding:15}}>
                    <CardActionArea>
                        <CardMedia
                            component="img" alt="National Baseball Championship"
                            height="500" image= {Image2}
                            title="National Baseball Championship"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                National Baseball Championship
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                My team won bronze medal at the National Baseball Championship in the year
                                2017-18 which was organized by the School Games Federation of India.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="secondary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item sm={4}>
                <Card  style = {{padding:15}}>
                <CardActionArea>
                    <CardMedia
                        component="img" alt="GIIS Global Citizen Scholarship"
                        height="500" image= {Image3}
                        title="GIIS Global Citizen Scholarship"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            GIIS Global Citizen Scholarship
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            After passing my 10th from India, I was awarded the GIIS Global Citizen Scholarship
                            and got to pursue my high school in Singapore.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="secondary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            </Grid>
        </Grid>

    );
}
