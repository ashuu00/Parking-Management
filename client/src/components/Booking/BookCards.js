import React from 'react'
import {Card, CardActionArea, CardContent, Typography,
CardMedia, CardActions, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Cardpic from './Panda.jpg';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      textAlign:'center'
    },
    media: {
      height: 300,
    },
    butts:{
        '&:hover':{
            color:'white',
            backgroundColor: '#0b3def'
        }
    }
  });

const BookCards = ({cardTitle,}) => {
    const classes=useStyles();

    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Cardpic}
            title={cardTitle}
            style={{width:'100%'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Kage Parking
            </Typography>
            <p>
             Total Parking Spots:<p style={{color:'red'}}>1500</p><br/>
             Space Available: 140
            </p>
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent:'center'}}>
          <Button size="small" color="primary"
            variant='outlined' className={classes.butts}>
            Book Now!
          </Button>
        </CardActions>
      </Card>
    )
}

export default BookCards
