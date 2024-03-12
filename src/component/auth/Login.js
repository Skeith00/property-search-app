import React, { useState } from 'react';
import { useAuth } from '../../context/auth.context.js';
import { Container, TextField, Typography, Button, Paper } from "@mui/material";

export default function Login() {
    const { login } = useAuth()

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
                headers: {
                    'Content-Type': 'application/json',
                },
                body: { username: credentials.email, password: credentials.email }, // Convert the object to JSON
            })
            const { accessToken, refreshToken } = response.data;
            login(accessToken, refreshToken);
        } catch (error) {
            console.error('Login failed', error);
        }
    }

    return (
        <Container component="main" maxWidth="xs" sx={{ mt: 16 }}>
            <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Login</Typography>
                <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 16 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="email"
                        id="email"
                        label="Email"
                        name="email"
                        autoFocus
                        value={credentials.email}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 16 }}>
                        Log In
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}