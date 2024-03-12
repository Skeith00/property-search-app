// src/components/Step2.js
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const Step2 = ({ formData, setFormData, prevStep, handleSubmit }) => {
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePasswords = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>

      <TextField
        fullWidth
        margin="normal"
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        margin="normal"
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={passwordError !== ''}
        helperText={passwordError}
      />
      <Button
        type="button"
        variant="contained"
        color="primary"
        fullWidth
        onClick={prevStep}
        sx={{ marginTop: 2, marginRight: 2 }}
      >
        Back
      </Button>
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
        Sign Up
      </Button>
    </form>
  );
};

export default Step2;
