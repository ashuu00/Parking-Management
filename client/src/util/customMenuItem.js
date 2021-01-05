import React from 'react'
import {MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    drops:{
      '&:hover':{
        backgroundColor: '#f24a58',
        color:'white'
      }
    }
    }));

const CustomMenuItem = ({title, handleClick}) => {
    const classes=useStyles();
    return (
       <MenuItem
       className={classes.drops}
       onClick={handleClick}>
           {title}
       </MenuItem>
    )
}

export default CustomMenuItem
