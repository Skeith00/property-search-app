// src/components/Step1.js
import React from 'react';
import { TextField, Button } from '@mui/material';

const Step1 = ({ formData, setFormData, nextStep }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <form onSubmit={nextStep}>
            <TextField
                fullWidth
                margin="normal"
                type="text"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                margin="normal"
                type="text"
                label="Surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
            />
            <TextField
                fullWidth
                margin="normal"
                type="email"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
            >
                Next
            </Button>
        </form>
    );
};

export default Step1;