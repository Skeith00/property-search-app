import React from 'react';
import { Card, CardContent, Container, Typography, Button, Stack} from "@mui/material";

export default function Admin() {
    return (
        <Container maxWidth="md" sx={{
            paddingTop: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",    // Align text within children
        }}>

            {/* Title Above the Card */}
            <Typography variant="h4" sx={{mb: 2}}>
                Admin Dashboard
            </Typography>

            {/* Card with Menu Options */}
            <Card sx={{width: 400, p: 3, textAlign: "center", boxShadow: 3}}>
                <CardContent>
                    <Stack spacing={2}>
                        <Button variant="contained" color="primary" href="/admin/new">
                            Add New Property
                        </Button>
                        <Button variant="contained" color="primary">
                            List My Properties
                        </Button>
                        <Button variant="contained" color="error">
                            Logout
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}