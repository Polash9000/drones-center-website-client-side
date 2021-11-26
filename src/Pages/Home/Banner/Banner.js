import React from 'react';
import Box from '@mui/material/Box';
import bg from './../../../Images/bg.jpg';
import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const bannerBg = {
    background: `url(${bg})`,

}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Grid className="text-center pt-5" style={bannerBg}>
            <Box style={{ width: '100%', height: '600px' }}>
                <Typography sx={{ mb: 2 }} variant={'h4'}>
                    Drone! Drone! Drone!
                    <br />
                    Take Your Drone
                </Typography>
                <Typography sx={{ color: 'gray', mb: 2 }} variant={'body2'}>

                </Typography>
                <Link style={{ textDecoration: 'none', color: 'white' }} to="/drone"><Button variant={'contained'}>Get Drone</Button></Link>
            </Box>
        </Grid>
    );
};

export default Banner;