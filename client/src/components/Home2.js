import React from 'react'
import {Paper, Grid, Typography, Container} from '@material-ui/core';
import Card from '../util/cards';
import {makeStyles} from '@material-ui/core/styles';
import Tada from 'react-reveal/Tada';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor:'#FFFDD0',
      height:'auto'
    },
    Grids:{
        padding:theme.spacing(3),
        margin:'20px'
    }
  }));


const Home2 = () => {
    const classes=useStyles();
    return (
        <Container maxWidth="xl" className="myPage" className={classes.paper}>
              <Typography variant="h3"  style={{width:'auto',margin:'3% 0'}}>
         Our Services
        </Typography>
        <Grid container className={classes.Grids}
        spacing={3} justify="space-around" >
        <Grid item md={6} lg={4}>
            <Tada >
            <Card/>   
            </Tada>
        </Grid>
        <Grid item sm={12}md={6}  lg={4} >
            <Tada delay='1000'>
          <Card/>
            </Tada>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
            <Tada delay='2000'>
         <Card/>
            </Tada>
        </Grid>
        </Grid>
      </Container>
    )
}

export default Home2
