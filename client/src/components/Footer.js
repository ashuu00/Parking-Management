import React from 'react'
import { Paper, Typography, Grid, Container} from '@material-ui/core'
import {makeStyles } from '@material-ui/core/styles'

const useStyles=makeStyles({
    paper:{
        borderTop:'10px solid #ffa54c',
        position:'relative',
        backgroundColor:'#02081c',
        color:'#ea9c3c',
            textAlign:'center',
            height:'20vh'
    }
})

const Footer = () => {
    const classes=useStyles();

    return (
     <Container maxWidth="xl" className={classes.paper}>
<Typography variant="h5" color="inherited" style={{textDecoration:'underline'}}>
CONTACT-US
</Typography>
<footer style={{position:'absolute',
left: 0,
bottom: 0,
color:'black',
fontWeight:'1200',
width:'100%',
backgroundColor:'#ea9c3c'}}>
<Typography variant="caption" >Keshu Travels 2020
</Typography>
</footer>
     </Container>
    )
}

export default Footer
