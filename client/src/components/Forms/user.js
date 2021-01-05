import React from 'react';
import PropTypes from 'prop-types';
import {Paper, TextField,FormHelperText} from '@material-ui/core'
import {withStyles,makeStyles} from '@material-ui/core/styles'
import CustomField from './CustomField'




const EditField=withStyles((theme)=>({
    root:{
      '& label':{
        color: 'rgb(16, 150, 76)',
        fontSize: '1.5rem',
        fontWeight: "bolder",
      },
      '& input':{
        margin:'15px 0 0 0'
      },
      '& formHelperText':{
        color:'orange'
      },
      margin:'20px 20px 40px 20px' ,
      width:'100%',
      display:'block'
    },
    helperText:{
        color:'rgb(202, 95, 6)'
    }
}))(TextField);
const useStyle=makeStyles((theme)=>({
    root:{
        color:' rgb(202, 95, 6)'
      }}));

const User=()=>{
const classes=useStyle();
    
    return (
    <Paper style={{marginTop:"100px",
    backgroundColor:"rgb(231, 236, 158)",margin:"auto",
    width:"80%",paddingLeft:'0px',display:"flex",justifyContent:"center"}}>
        <form noValidate autoComplete="off" style={{zIndex:"100"}} >
          <CustomField Label="Username" helperText="Enter characters 5-50" PlaceHolder="Enter Name"
            />
         <CustomField Label="Email"  PlaceHolder="Email Here"
          helperText="Please Enter Valid Email"
         />
         <CustomField
          Label="Phone No"
          PlaceHolder="Number Here"
          helperText="Enter only numbers here!"
            />
         <EditField
          label="Location"
          placeholder="Enter Area"
          helperText="Enter the Location of the Parking Area"
            />
        
        <EditField
          id="standard-select-date"
          select
          fullWidth
          label="Select Date"
          SelectProps={{
              native: true,
            }}
            helperText="Please select the Date"
            >
          {
              <option key="1Jan" value="23 October 2020">
              23 October 2020
            </option>
          }
        </EditField>
        </form>
    </Paper>
       
    )
        };






export default User;
