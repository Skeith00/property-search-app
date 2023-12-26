import React, { useState } from 'react';
import { useAuth } from '../../context/auth.context.js';
import { Container, TextField, Typography, Button, Paper } from "@mui/material";

export default function Login({ setToken }) {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST', // Adjust the HTTP method as needed (e.g., 'GET', 'POST', etc.)
                headers: {
                    'Content-Type': 'application/json',
                },
                body: { username: email, password }, // Convert the object to JSON
            })
            const token = response.data.token;
            login(token);
        } catch (error) {
            console.error('Login failed', error);
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5">Login</Typography>
                <form onSubmit={handleLogin} style={{ width: '100%', marginTop: 16 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 16 }}>
                        Log In
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}