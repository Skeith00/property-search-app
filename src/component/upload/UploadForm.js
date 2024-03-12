import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const PropertyForm = () => {
  const [street, setStreet] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState([]);

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleImageChange = (e) => {
    const newImages = [...images];
    newImages.push(e.target.files[0]);
    setImages(newImages);
  };

  const fetchStreetSuggestions = async (value) => {
    // Mock API call to fetch street suggestions
    setLoading(true);
    // Simulate delay
    setTimeout(() => {
      const suggestions = ['Street 1', 'Street 2', 'Street 3'].filter((street) =>
        street.toLowerCase().includes(value.toLowerCase())
      );
      setStreetSuggestions(suggestions);
      setLoading(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('street', street);
    formData.append('location', location);
    images.forEach((image) => {
      formData.append('images', image);
    });
    // Now you can submit formData to your backend API
    console.log('Form data:', formData);
  };

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Upload Property Data
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Find your address"
          value={street}
          onChange={handleStreetChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Location"
          value={location}
          onChange={handleLocationChange}
        />
        <input type="file" onChange={handleImageChange} multiple />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default PropertyForm;
