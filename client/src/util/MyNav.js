import React,{useState} from 'react';
import {Box, AppBar, Toolbar, Typography,
IconButton, Slide,useScrollTrigger, 
Button, MenuItem, Menu, Link} 
from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import Logo from './logo.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CustomMenuItem from '../util/customMenuItem';
import {Link as Anchor,Route,useHistory} from 'react-router-dom'
import myUser from '../components/Forms/user';

const MyNav=()=>{
   // let contentRef = React.createRef();
  //  const [scrollTarget, setScrollTarget] = useState(undefined); // keep i undefined here to not make useScrollTrigger throw an error on first render
  //  const scrollTrigger = useScrollTrigger({ target: contentRef.current });
  const trigger=useScrollTrigger();
  const history=useHistory()
  const [anchorEl, setAnchorEl] = React.useState(null);
  //  let [name,setName]=React.useState('');
  //  setName(localStorage.getItem('user'));
  //this return the current html target where we want the menu
  React.useEffect(()=>{
    console.log(localStorage.getItem('user'));
  })
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
console.log(localStorage.getItem('user'));
const menuArr=['Admin'];
  //removes the menu on clicking
  const handleClose = () => {
    history.push('/admin');
    setAnchorEl(null);
  };
  //const classes=useStyles();
    return(
      <Slide appear={false} direction="down" in={!trigger}> 
     <AppBar position="fixed" color="secondary"/* ref={ node => node ? setScrollTarget(node) : setScrollTarget(undefined) }*/
     style={{
     boxSizing:'border-box'}}>
       <Toolbar  >
         <IconButton>
      {/** get the icons */}
         </IconButton>
         <Typography variant="h4"  style={{flexGrow:'1'}}>
          Parking Management System
         </Typography>
         
         <Button  aria-controls="simple-menu" 
         aria-haspopup="true" style={{color:"white"}} onClick={handleClick}
        >
          Services<ExpandMoreIcon/>
        </Button>
          <Anchor to="/">
        <Button  style={{color:'white'}}>
            Logout
            </Button>
            </Anchor>
            <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            {menuArr.map(currArr=>{
              return <CustomMenuItem handleClick={handleClose}
              title={currArr} />
            })}
          </Menu>
       </Toolbar>
     </AppBar>
     </Slide>
    )
   ;
}

   export default MyNav;
