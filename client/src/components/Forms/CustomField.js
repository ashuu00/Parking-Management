import React from 'react';
import {TextField} from '@material-ui/core';
import {withStyles,makeStyles} from '@material-ui/core/styles';

const CustomField = ({Label, PlaceHolder, helperText}) => {
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
    const classes=useStyle();
    return (
        <div >
            <EditField
          id="standard-full-width"
          label={Label}
          style={{ margin: 8 }}
          placeholder={PlaceHolder}
          helperText={helperText}
        
          variant="outlined"
          margin="normal"
          FormHelperTextProps={{
            className: classes.root
          }}
          InputLabelProps={{
              shrink: true,
            }}
            />
        </div>
    );
}

export default CustomField;
