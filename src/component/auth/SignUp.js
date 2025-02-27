import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Step1, Step2 } from './SignUpSteps';

export default function SignUp() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        surname: ''
    });

    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/register', {
                method: 'POST', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Stringify the object
            })
            console.log('Form submitted:', formData);
        } catch (error) {
            console.error('Register failed', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sign Up - Step {step}
                </Typography>
                {step === 1 && <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />}
                {step === 2 && (
                    <Step2
                        formData={formData}
                        setFormData={setFormData}
                        prevStep={prevStep}
                        handleSubmit={handleSubmit}
                    />
                )}
            </Box>
        </Container >
    );
}