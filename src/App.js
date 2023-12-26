import React from 'react';
import './App.css';
import { RouterProvider } from "react-router-dom"
import {router} from "./route/routes";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
})

export default function App(){
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}