import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PropertyCard({images, price, location }) {
    return (
        <Card sx={{ width: '100%' }}>
            <CardActionArea sx={{ px: 10, py: 5 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={images}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {location}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}