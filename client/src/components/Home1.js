import React from 'react'
import {Paper, Typography, Container,Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Fade} from 'react-reveal';
import myBg from './astronomy-background-1.jpg';
import {useHistory} from 'react-router-dom'
 
const HomePage = () => {
  const history=useHistory();
    return (
        <Container maxWidth="xl" style={myStyle}>
        <Fade left duration="2000">
        <Typography variant="h3" color="initial" style={{width:'auto',marginBottom:'9%' }}>
        Your One Stop Destination for
        </Typography>
      </Fade>
      <Fade right delay="1000" duration="2000">
        <Typography variant="h2" color="initial"  style={{width:'auto'}}>
        PARKING 
        </Typography>
        <Typography variant="h2" color="initial"  style={{width:'auto'}}>
         MANAGEMENT
        </Typography>
        <Container>

        <Button variant="contained" color="primary" style={{marginRight:'20px'}}
        onClick={()=>history.push('/login')}>
          Login
        </Button>
        <Button variant="contained" color="primary"
        onClick={()=>history.push('/register')}>
          Register
        </Button>
        </Container>

        </Fade>
      </Container>
    )
}

const myStyle={backgroundImage:'linear-gradient(to bottom, rgba(80, 80, 80, 0.52), rgba(50, 50, 50, 0.73)),url('+myBg+')',
height:'100vh',
width:'100%',
color:'white',
marginTop:'64px', 
alignItems:'center',
display:'flex',
justifyContent:'center',
flexDirection:'column',
}

export default HomePage;
