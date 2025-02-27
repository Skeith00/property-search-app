import React, {useState} from 'react';
import { Container, Typography, Button, Box, TextField} from "@mui/material";

export default function NewProperty() {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        address: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value, // Update the correct field dynamically
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/property/save', {
                method: 'POST', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Stringify the object
            })
            console.log('Property submitted:', formData);
        } catch (error) {
            console.error('Submit failed', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    New Property
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        margin="normal"
                        type="text"
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <TextField
                        multiline
                        variant="outlined"
                        fullWidth
                        minRows={3}
                        margin="normal"
                        type="text"
                        label="Description"
                        name="description"
                        inputProps={{ style: {resize: 'both'} }}
                        value={formData.description}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        type="text"
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: 2 }}
                        handleSubmit={handleSubmit}
                    >
                        Save
                    </Button>
                </form>
            </Box>
        </Container>
    );
}