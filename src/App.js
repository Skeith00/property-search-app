import React from 'react';
import './App.css';
import { RouterProvider } from "react-router-dom"
import {router} from "./route/routes";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { red, lime } from '@mui/material/colors';

const theme = createTheme({
    typography: {
        fontFamily: "'Inter', 'Roboto', 'Segoe UI', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;", // Add your custom font here
    },
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: lime[50],
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '20px', // Adjust this value to make it more or less rounded
                },
            },
        },
    },
})

export default function App(){
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}