import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import Axios from 'axios';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function Content(props) {
  const { classes } = props;
  const [query, setQuery] = useState('')
  const [users,setUsers]=useState([]);
  const [tableVal,setVal]=useState([]);
useEffect(()=>{
  Axios.get('/users').then((res)=>{
    for (let user in res.data) {
      //users.push(user);
      console.log('response for users',res.data[user]);
      let tabClass=res.data[user].suspend?"table-danger":"table-info"
      let tempUser=( <tr class={tabClass}>
      <th scope="row">{res.data[user].username}</th>
      <td>{res.data[user].uid}</td>
      <td>{res.data[user].email}</td>
      <td>{res.data[user].phoneNo}</td>
  </tr>);
      setUsers(prev=>[...prev,tempUser]);
    }
  })
},[]);
  
  const handleSearch=()=>{
    Axios.get(`/users/${query}`).then(res=>{
      for (const user in res) {
        console.log(res);
        users.push(user);
      }
    });
  }

 
//   for (const curr in users) {
//     let currVal=[...tableVal];
//     currVal.push(( <tr class="table-info">
//     <th scope="row">{users[curr].username}</th>
//     <td>{users[curr].uid}</td>
//     <td>{users[curr].email}</td>
//     <td>{users[curr].phoneNo}</td>
// </tr>));
//   }
  
  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by username"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
                onChange={(e)=>{e.preventDefault();setQuery(e.target.value)}}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" className={classes.addUser}
              onClick={handleSearch}>
                Search User
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
        {users.length===0?'No Users Found':(<table class="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">User Id</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                    </tr>
                     </thead>
                    <tbody>
                    {users}
                    </tbody>
                </table>)}
        </Typography>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);