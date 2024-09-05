import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Typography,Container, Paper } from '@mui/material';
import PersonalDetailsForm from '../components/PersonalDetailsForm'
import ContactDetailsForm from '../components/ContactDetailsForm'
import DocumentUploadForm from '../components/DocumentUploadForm'

const steps = ['Personal Details', 'Contact Details', 'Upload Documents'];

const LoanApplication = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        dob: '',
        pan: '',
        aadhaar: '',
        address: '',
        phone: '',
        panFile: null,
        aadhaarFile: null,
      });
      const [errors, setErrors] = useState({});

    const handleNext = () => {
        if (validateForm()) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
          }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
      setActiveStep(0);
      setFormData({
        name: '',
        gender: '',
        dob: '',
        pan: '',
        aadhaar: '',
        address: '',
        phone: '',
        panFile: null,
        aadhaarFile: null,
      })
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
      };

      const handleSubmit = () => {
        if (validateForm()) {
          console.log('Form submitted:', formData);
          alert('Success! Your application has been submitted.');
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
      };
    
      const validateForm = () => {
        const newErrors = {};
    
        // Validate personal details
        if (activeStep === 0) {
          if (!formData.name) newErrors.name = 'Name is required';
          if (!formData.gender) newErrors.gender = 'Gender is required';
          if (!formData.dob) newErrors.dob = 'Date of Birth is required';
          if (!formData.pan) newErrors.pan = 'PAN Card is required';
          if (!formData.aadhaar) newErrors.aadhaar = 'Aadhaar Card is required';
        }
    
        // Validate contact details
        if (activeStep === 1) {
          if (!formData.address) newErrors.address = 'Address is required';
          if (!formData.phone) newErrors.phone = 'Phone is required';
        }
    
        // Validate document upload
        if (activeStep === 2) {
          if (!formData.panFile) newErrors.panFile = 'PAN Card file is required';
          if (!formData.aadhaarFile) newErrors.aadhaarFile = 'Aadhaar Card file is required';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };

    return (
        <Container>
        <Typography variant="h4" gutterBottom>
          Personal Loan Application
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
  
        {activeStep === steps.length ? (
          <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Thank you! Your application has been submitted.
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
          Reset
         </Button>
         </Paper>
        ) : (
          <div>
            {activeStep === 0 && (
              <PersonalDetailsForm
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
            {activeStep === 1 && (
              <ContactDetailsForm
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
            {activeStep === 2 && (
              <DocumentUploadForm
                handleFileChange={handleFileChange}
                errors={errors}
              />
            )}
  
            <div style={{ marginTop: '20px' }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                style={{ marginRight: '10px' }}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              ) : (
                <Button variant="contained" color="primary" onClick={handleNext}>
                  Next
                </Button>
              )}
            </div>
          </div>
        )}
      </Container>
    )
}
export default LoanApplication;