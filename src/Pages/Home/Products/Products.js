import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Product from '../Product/Product';

const homeDrones = [
    {
        id: 1,
        name: 'Single-Rotor Drones',
        description: 'That said, there are drawbacks to that design. First, the single blade design combined with their often gas-powered nature can mean that single-rotor drones can sometimes cost more than their counterparts. What’s more, larger rotor blades mean a higher chance of one accidentally injuring you.',
        price: 500,
        img: 'https://i.ibb.co/7Cw7Yvg/drone1.jpg'
    },
    {
        id: 2,
        name: 'Multi-Rotor Drones',
        description: 'when it comes to different types of commercial drones, as a general rule of thumb, the more rotors you add, the less time the craft is able to remain airborne. As such, while these units offer good stability, they often top out at half an hour of flight time.',
        price: 600,
        img: 'https://i.ibb.co/cTZD0Yc/drone2.jpg'
    },
    {
        id: 3,
        name: 'Fixed-Wing Drones',
        description: 'The lack of rotors and fixed-wing style of these drones make them more similar to controllable airplanes rather than the helicopter style of other drones. Rather than rotors, their wings provide vertical lift, which means they only need enough energy to keep moving forward, making them ideal long-range drones.',
        price: 650,
        img: 'https://i.ibb.co/cXVjpkk/drone3.jpg'
    },
    {
        id: 4,
        name: 'Fixed-Wing Hybrid Drones',
        description: 'This types of drone attempt to take the best from fixed-wing and rotor-based designs, making for drones that feature both. A fixed-wing hybrid drone will tend to have a couple rotors attached to the ends of fixed wings.These units are still rather experimental, and so are far less commercially.',
        price: 690,
        img: 'https://i.ibb.co/TbR1K1y/drone4.jpg'
    },
    {
        id: 5,
        name: 'Small Drones',
        description: 'These drones are strictly recreational and usually cannot perform many of the commercial functions of which some of those other models are capable. For example, when properly mounted, cameras onboard highly stable multi-rotor can capture stunning aerial pictures and video.',
        price: 400,
        img: 'https://i.ibb.co/jfSpQ39/drone5.jpg'
    },
    {
        id: 6,
        name: 'Micro Drones',
        description: 'While smaller drones may mean recreation in the eyes of consumers, for militaries who use drones, micro drones are all business. The most well-known example of this type of drone in action today is the Black Hornet, manufactured for the British military.',
        price: 900,
        img: 'https://i.ibb.co/WzC8SDj/drone6.jpg'
    },
]

const Products = () => {
    return (
        <Container>
            <Typography sx={{ fontWeight: 500, textAlign: 'center', m: 2, color: 'success.main' }} variant="h6" component="div">
                OUR FEATURED DRONES
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        homeDrones.map(homeDrone => <Product
                            key={homeDrone.id}
                            homeDrone={homeDrone}
                        ></Product>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Products;