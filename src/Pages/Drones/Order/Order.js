import { Button, CardMedia, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import OrderModal from '../OrderModal/OrderModal';

const Order = ({ order, setOrderSuccess }) => {
    const { name, description, img, price } = order;
    const [openOrder, setOpenOrder] = React.useState(false);
    const handleOrderOpen = () => setOpenOrder(true);
    const handleOrderClose = () => setOpenOrder(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ py: 5 }} elevation={3}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={img}
                        alt="Paella dish"
                    />
                    <Typography variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" gutterBottom component="div">
                        {description}
                    </Typography>
                    <Typography variant="h6" display="block" gutterBottom>
                        ${price}
                    </Typography>
                    <Button onClick={handleOrderOpen} variant="contained">Order Now</Button>
                </Paper>
            </Grid>
            <OrderModal
                order={order}
                handleOrderClose={handleOrderClose}
                openOrder={openOrder}
                setOrderSuccess={setOrderSuccess}
            ></OrderModal>
        </>
    );
};

export default Order;