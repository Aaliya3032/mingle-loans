import React from "react";
import { TextField, Grid, MenuItem } from '@mui/material';


const PersonalDetailsForm = ({ formData, handleChange, errors } ) => {

    return (
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          select
          label="Gender"
          fullWidth
          variant="outlined"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          error={!!errors.gender}
          helperText={errors.gender}
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Date of Birth"
          type="date"
          fullWidth
          variant="outlined"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          error={!!errors.dob}
          helperText={errors.dob}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="PAN Card"
          fullWidth
          variant="outlined"
          name="pan"
          value={formData.pan}
          onChange={handleChange}
          error={!!errors.pan}
          helperText={errors.pan}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Aadhaar Card"
          fullWidth
          variant="outlined"
          name="aadhaar"
          value={formData.aadhaar}
          onChange={handleChange}
          error={!!errors.aadhaar}
          helperText={errors.aadhaar}
        />
      </Grid>
    </Grid>
    )
}
export default PersonalDetailsForm;