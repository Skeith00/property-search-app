import React from "react";
import "./LoadingSpinner.css";
import {Grid} from "@mui/material";

export default function LoadingSpinner() {
    return (
        <Grid container spacing={0} direction="column" alignItems="center" justify="center" sx={{ mt: 3 }}>
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        </Grid>
    );
}