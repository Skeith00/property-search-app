import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function PropertyCard({property}) {
    return (
        <Card sx={{ width: '100%', mt: 2 }}>
            <CardActionArea sx={{ px: 10, py: 3 }} href={`/view/${property.id}`}>
                <CardMedia
                    component="img"
                    height="140"
                    image={property.images}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ${property.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {property.address}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}