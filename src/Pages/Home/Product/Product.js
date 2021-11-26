import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Product = (props) => {
    const { name, description, img, price } = props.homeDrone;
    const [openOrder, setOpenOrder] = React.useState(false);
    const handleOrderOpen = () => setOpenOrder(true);
    const handleOrderClose = () => setOpenOrder(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, textAlign: 'center' }}>
                    <CardMedia
                        component="img"
                        style={{ width: '300px', height: '200px', margin: '0 auto' }}
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="h6" component="div">
                            ${price}
                        </Typography>
                    </CardContent>
                    <Button onClick={handleOrderOpen} variant="contained">Order Now</Button>
                </Card>
            </Grid>
        </>
    );
};

export default Product;