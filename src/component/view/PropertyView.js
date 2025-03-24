import {Box, Button, Chip, Container, Divider, Grid, IconButton, Paper, Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import GarageOutlinedIcon from '@mui/icons-material/GarageOutlined';

import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

export default function PropertyView() {

    // Access the userId parameter from the URL
    const { propertyId } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        fetchProperty();
    }, [propertyId]);

    const fetchProperty = async () => {
        try {
            const response = await fetch(`/property/${propertyId}`, { method: 'GET' });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
             // Convert response to JSON
            const data = await response.json(); // Convert response to JSON
            setProperty(data);
        } catch (error) {
            console.error(`Fetch property ${propertyId} failed`, error);
        }
    };

    return (
        <>
            {property ? (
                <Container maxWidth="lg">
                    {/* Top Section: Two Columns */}
                    <Grid container spacing={4} alignItems="center" sx={{ mt: 3 }}>
                        {/* Left Column: Property Info */}
                        <Grid item xs={12} md={6} sx={{ alignSelf: "stretch" }}>
                            <Box>
                                <Typography variant="h5" fontWeight="bold">
                                    {property.address}
                                </Typography>
                                <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
                                    ${property.price}
                                </Typography>
                                {property.rooms && (
                                    <Grid item sx={{ mt: 1 }}>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            {property.rooms.bedrooms && property.rooms.bedrooms > 0 && (
                                                <Typography variant="body1" color="text.secondary">
                                                    <BedroomParentOutlinedIcon sx={{ verticalAlign: 'middle', fontSize: '1.2rem' }} /> {property.rooms.bedrooms}
                                                </Typography>
                                            )}
                                            {property.rooms.bathrooms && property.rooms.bathrooms > 0 && (
                                                <Typography variant="body1" color="text.secondary">
                                                    <BathroomOutlinedIcon sx={{ verticalAlign: 'middle', fontSize: '1.2rem' }} /> {property.rooms.bathrooms}
                                                </Typography>
                                            )}
                                            {property.rooms.carparks && property.rooms.carparks > 0 && (
                                                <Typography variant="body1" color="text.secondary">
                                                    <GarageOutlinedIcon sx={{ verticalAlign: 'middle', fontSize: '1.2rem' }} /> {property.rooms.carparks}
                                                </Typography>
                                            )}
                                        </Box>
                                    </Grid>
                                )}
                                <Divider sx={{ my: 2 }} />
                                {/* Amenities */}
                                {property.tags && (
                                    <Grid container spacing={1}>
                                        {Object.entries(property.tags).map(([key, value]) => (
                                            <Grid key={key} item>
                                                <Chip label={`${value}`} variant="outlined" />
                                            </Grid>
                                        ))}
                                    </Grid>
                                )}
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
                            {property.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                            {property.address}
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
            ) : (
                <LoadingSpinner />
            )}
        </>
    )
}