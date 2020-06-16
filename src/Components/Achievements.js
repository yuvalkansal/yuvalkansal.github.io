import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
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
import Movie from '../movie.mp4'

class Achievements extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            prizes: [
                {
                    id: 0,
                    component: 'img',
                    name:'Singapore Mathematical Olympiad',
                    image: Image1,
                    height: "468",
                    description:'I was awarded the Silver Award in the prestigious Singapore Mathematical Olympiad conducted by The Mathematical Society of Singapore.'
                },
                {
                    id: 1,
                    component: 'img',
                    name:'National Baseball Championship',
                    image: Image2,
                    height: "500",
                    description:'My team won bronze medal at the National Baseball Championship in the year 2017-18 which was organized by the School Games Federation of India.'
                },
                {
                    id: 2,
                    component: 'iframe',
                    name:'C++ text base game',
                    image: Movie,
                    height: "495",
                    description:'A text-based RPG, \'Monster\', made for first year project which has over 33 different levels and 6 alternate endings.'
                },
            ],
        };
    }
    render() {
        const Prizes = this.state.prizes.map((prize)=>{
            return(
                <Grid item sm={4}>
                    <Card  style = {{padding:15}}>
                        <CardActionArea>
                            <CardMedia
                                component={prize.component} alt={prize.name}
                                height={prize.height} src={prize.image}
                                title={prize.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {prize.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {prize.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="secondary"
                                    onClick={()=>window.open('https://github.com/yuvalkansal/ENGG1340-Project')}
                            >
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            );
        })
        return(
            <Grid container id="Achievements">
                {Prizes}
            </Grid>
        );
}

}

export default Achievements;