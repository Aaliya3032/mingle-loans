import React from "react";
import { TextField, Grid } from '@mui/material';

const ContactDetailsForm = ({ formData, handleChange, errors }) => {

    return (
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="Address"
          fullWidth
          variant="outlined"
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Phone"
          fullWidth
          variant="outlined"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
      </Grid>
    </Grid>
    )
}
export default ContactDetailsForm;