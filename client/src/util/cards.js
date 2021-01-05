import React from 'react'
import {Card, CardActionArea, CardContent, Typography,
CardMedia, CardActions, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Cardpic from './Panda.jpg';
import {useHistory} from 'react-router-dom'


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

const Cards = () => {
    const classes=useStyles();
    const history=useHistory();
    return (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Cardpic}
            title="Contemplative Reptile"
            style={{width:'100%'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Vasundhara Parking Zone
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             Total Parking Spots: <span style={{color:'green'}}>1500</span> <br/>
             Space Available: <span style={{color:'blue'}}>100</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{justifyContent:'center'}}>
          <Button size="small" color="primary"
            variant='outlined' className={classes.butts} onClick={()=>history.push('/booking')}>
            Book Now!
          </Button>
        </CardActions>
      </Card>
    )
}

export default Cards
