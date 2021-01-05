import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
//import {EditField} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DatePicker from 'react-date-picker';
import './BF.css'

    const currencies = [
        {
          value: '2Wheeler',
          label: '2 Wheeler',
        },
        {
          value: '4Wheeler',
          label: '4 Wheeler',
        },
        {
          value: 'BTC',
          label: 'Suv',
        },
        {
          value: 'JPY',
          label: 'Van',
        },
      ];

export default function BookingForm({getChildData}) {
    const [value, onChange] = useState(new Date());
   // getChildData('Working Fine From Child')
   // const handleSubmit{}
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Booking Details
      </Typography>
      <Grid container spacing={3}>
      <form >

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="standard-select-vehicle"
          select
          fullWidth
          label="Select Vehicle"
          
          SelectProps={{
            native: true,
          }}
          helperText="Please select your vehicle"
          >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </Grid>
        <Grid item xs={12}>
        <Typography  variant="body1">Select Date:
        <DatePicker
        className="datePick"
        onChange={onChange}
        value={value}/> </Typography>
        
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="vehicleNo"
            name="city"
            label="Vehicle Number"
            fullWidth
            autoComplete="shipping address-level2"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
            />
        </Grid>
      </form>
      </Grid>
    </React.Fragment>
  );
}