import {
    Box,
    Button,
    Chip,
    Container,
    Divider,
    Grid,
    IconButton,
    Paper,
    Typography
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import React from "react";

export default function PropertyView({property}) {
    // Now you can use the userId variable in your component
    return (
        <Container maxWidth="md">
            {/* Top Section: Two Columns */}
            <Grid container spacing={4} alignItems="center">

                {/* Left Column: Property Info */}
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h4" fontWeight="bold">
                            {property.title}
                        </Typography>
                        <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
                            ${property.price.toLocaleString()}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                            {property.address}
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        {/* Amenities */}
                        <Grid container spacing={1}>
                            <Grid item>
                                <Chip label={`${property.bedrooms} Beds`} variant="outlined" />
                            </Grid>
                            <Grid item>
                                <Chip label={`${property.bathrooms} Baths`} variant="outlined" />
                            </Grid>
                            <Grid item>
                                <Chip label={`${property.size} sqft`} variant="outlined" />
                            </Grid>
                        </Grid>

                        {/* Action Buttons */}
                        <Box sx={{ mt: 2 }}>
                            <IconButton color="primary">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton color="primary">
                                <ShareIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column: Property Image */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            width: "100%",
                            height: 350,
                            borderRadius: 2,
                            backgroundImage: `url(${property.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            boxShadow: 2,
                        }}
                    />
                </Grid>
            </Grid>

            {/* Bottom Section: Single Column */}
            <Paper elevation={3} sx={{ mt: 4, padding: 3, borderRadius: 2 }}>
                <Typography variant="h5" fontWeight="bold">
                    Property Description
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                    {property.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Button variant="contained" color="primary">
                    Contact Agent
                </Button>
            </Paper>
        </Container>
    )
}