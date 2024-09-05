import React from "react";
import { Button, Grid } from '@mui/material';

const DocumentUploadForm = ({ handleFileChange, errors }) => {
    
 return (
    <Grid container spacing={3}>
    <Grid item xs={12}>
      <Button variant="contained" component="label" fullWidth>
        Upload PAN Card
        <input type="file" name="panFile" onChange={handleFileChange} />
      </Button>
      {errors.panFile && <span style={{ color: 'red' }}>{errors.panFile}</span>}
    </Grid>
    <Grid item xs={12}>
      <Button variant="contained" component="label" fullWidth>
        Upload Aadhaar Card
        <input type="file" name="aadhaarFile" onChange={handleFileChange} />
      </Button>
      {errors.aadhaarFile && <span style={{ color: 'red' }}>{errors.aadhaarFile}</span>}
    </Grid>
  </Grid>
 )
}
export default DocumentUploadForm;