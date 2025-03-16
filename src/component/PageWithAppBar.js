import React from "react";
import AppBar from "./AppBar"; // Import your existing AppBar component
import { Box, Container } from "@mui/material";

export default function PageWithAppBar({ children }) {
    return (
        <Box>
            <AppBar />
            <Container maxWidth="md">{children}</Container>
        </Box>
    )
}
