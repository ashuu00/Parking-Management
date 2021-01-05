import React,{Fragment} from 'react'
//import myBg from './astronomy-background-1.jpg';
import MyNav from './util/MyNav';
import Intro from './components/Home1';
import styled from 'styled-components';
import './app.css';
import HomeView from './components/Home1'
import CardsView from './components/Home2'
import myUser from './components/Forms/user'
import Footer from './components/Footer';
import LoginPage from './components/Forms/login';
import Booking from './components/Booking/MainDisplay'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Container } from '@material-ui/core';
import Register from './components/Forms/Register'
import Feedback from './components/Forms/Ratings'
import myAdmin from './components/Operator/Paperbase';
// const useStyle=makeStyles({
//   myBtn:{
//   '&:hover':{
//     color:'green'
//   }
// }
// });


function App() {
  return(
    <Router>
 <Fragment>
<MyNav/>
<Container maxWidth="xl" style={myStyle}>
<Route exact path="/" component={HomeView}/>
<Route path="/home" component={CardsView}/>
<Route path="/user" component={myUser}/>
<Route path="/login" component={LoginPage}/>
<Route path="/register" component={Register}/>
<Route path="/booking" component={Booking}/> 
<Route path="/admin" component={myAdmin}/>
<Route path="/feedback" component={Feedback}/>
<Footer/>
</Container>
</Fragment>
</Router>
  )
    
};
const myStyle={//backgroundImage:'linear-gradient(to bottom, rgba(80, 80, 80, 0.52), rgba(50, 50, 50, 0.73)),url('+myBg+')',
height:'100vh',
width:'100%',
color:'white',
marginTop:'64px', 
// alignItems:'center',
// display:'flex',
// justifyContent:'center',
// flexDirection:'column'}
}





export default App;
