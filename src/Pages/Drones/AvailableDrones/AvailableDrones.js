import { Alert, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Order from '../Order/Order';
import drone1 from './../../../Images/drones/drone1.jpg';
import drone2 from './../../../Images/drones/drone2.jpg';
import drone3 from './../../../Images/drones/drone3.jpg';
import drone4 from './../../../Images/drones/drone4.jpg';
import drone5 from './../../../Images/drones/drone5.jpg';
import drone6 from './../../../Images/drones/drone6.jpg';
import drone7 from './../../../Images/drones/drone7.jpg';
import drone8 from './../../../Images/drones/drone8.jpg';
import drone9 from './../../../Images/drones/drone9.jpg';
import drone10 from './../../../Images/drones/drone10.jpg';
import drone11 from './../../../Images/drones/drone11.jpg';
import drone12 from './../../../Images/drones/drone12.jpg';
import drone13 from './../../../Images/drones/drone13.jpg';
import drone14 from './../../../Images/drones/drone14.jpg';
import drone15 from './../../../Images/drones/drone15.webp';
import drone16 from './../../../Images/drones/drone16.webp';

const orders = [
    {
        id: 1,
        name: 'Single-Rotor Drones',
        description: 'That said, there are drawbacks to that design. First, the single blade design combined with their often gas-powered nature can mean that single-rotor drones can sometimes cost more than their counterparts. What’s more, larger rotor blades mean a higher chance.',
        price: 500,
        img: drone1
    },
    {
        id: 2,
        name: 'Multi-Rotor Drones',
        description: 'when it comes to different types of commercial drones, as a general rule of thumb, the more rotors you add, the less time the craft is able to remain airborne. As such, while these units offer good stability, they often top out at half an hour of flight time.',
        price: 600,
        img: drone2
    },
    {
        id: 3,
        name: 'Fixed-Wing Drones',
        description: 'The lack of rotors and fixed-wing style of these drones make them more similar to controllable airplanes rather than the helicopter style of other drones. Rather than rotors, their wings provide vertical lift, which means they only need enough energy to keep moving forward.',
        price: 650,
        img: drone3
    },
    {
        id: 4,
        name: 'Fixed-Wing Hybrid Drones',
        description: 'This types of drone attempt to take the best from fixed-wing and rotor-based designs, making for drones that feature both. A fixed-wing hybrid drone will tend to have a couple rotors attached to the ends of fixed wings.These units are still rather experimental.',
        price: 690,
        img: drone4
    },
    {
        id: 5,
        name: 'Small Drones',
        description: 'These drones are strictly recreational and usually cannot perform many of the commercial functions of which some of those other models are capable. For example, when properly mounted, cameras onboard highly stable multi-rotor can capture stunning aerial pictures and video.',
        price: 400,
        img: drone5
    },
    {
        id: 6,
        name: 'Micro Drones',
        description: 'While smaller drones may mean recreation in the eyes of consumers, for militaries who use drones, micro drones are all business. The most well-known example of this type of drone in action today is the Black Hornet, manufactured for the British military.',
        price: 900,
        img: drone6
    },
    {
        id: 7,
        name: 'Tactical Drones',
        description: 'These types of drones are often used for surveillance work. As with the Black Hornets, the Ravens are capable of being outfitted with special infrared cameras, helping them supply soldiers with an accurate picture of the area even in the nighttime.',
        price: 1500,
        img: drone7
    },
    {
        id: 8,
        name: 'Reconnaissance Drones',
        description: 'With another military drone class, we once again move up in size a bit to drones that are not designed to be handheld. Instead, these drones measure around 16 ft long, are launched from the ground, and are called Medium Altitude Long Endurance (MALE).',
        price: 1200,
        img: drone8
    },
    {
        id: 9,
        name: 'Large Combat Drones',
        description: 'Chances are when you think of “drones” in a military sense, these are the types you imagine. Variants such as the Predator and Reaper, used by the US, are around 36 ft long and able to fire on targets with air-to-surface missiles and laser-guided bombs.',
        price: 1299,
        img: drone9
    },
    {
        id: 10,
        name: 'Non-Combat Large Drones',
        description: 'By contrast, there are large drones that are not meant to be used in combat. These can take on a variety of jobs, often reconnaissance, and are used for more large-scale recon missions than their miniscule Black Hornet and Raven counterparts.Just because these drones.',
        price: 2000,
        img: drone10
    },
    {
        id: 11,
        name: 'Target and Decoy Drones',
        description: 'One of the most important things to keep in mind about military drones is that they can serve several functions depending on the situation. For example, while some drones can be used for surveillance and others are meant for strike capabilities, these operate as decoys.',
        price: 4500,
        img: drone11
    },
    {
        id: 12,
        name: 'GPS Drones',
        description: 'Now that we’ve looked at the major types of drones for the commercial market as well as military use, let’s conclude by looking at a few specialty types, starting with drones that are specifically designed with GPS purposes in mind.These drones work by linking up to.',
        price: 719,
        img: drone12
    },
    {
        id: 13,
        name: 'Photography Drones',
        description: 'We’ve already touched on drones’ photo-taking capabilities. While a few smaller options can take limited photos and there are obviously several drones that are capable of doing so for militaries, if you are looking to take professional photos.',
        price: 700,
        img: drone13
    },
    {
        id: 14,
        name: 'Racing Drones',
        description: 'If it has an engine, chances are people will get around to wanting to race them, and that’s certainly the case with one of these favorite forms of hobbyist-friendly drones Racing drones can reach speeds of up to 60 miles per hour. That said, all of that power.',
        price: 544,
        img: drone14
    },
    {
        id: 15,
        name: 'Foldable GPS Drones',
        description: 'Intelligent GPS Follow: After the drone wth camera links the GPS, turn on the app follow function, and the aircraft follows the mobile phone. 1-5m away from the drone to identify the subject and carry out automatic following flight. Gesture shooting.',
        price: 499,
        img: drone15
    },
    {
        id: 16,
        name: 'DJI Mini SE Drones',
        description: 'Light as a Smartphone - Weighing less than 0 55lbs / 249 grams, DJI Mini SE is roughly the same weight as the smartphone. In the United States and Canada, you can fly this camera drone without the need to register your drone with the government Capture on the Go.',
        price: 299,
        img: drone16
    }
]


const AvailableDrones = () => {
    const [orderSuccess, setOrderSuccess] = useState(false)
    return (
        <Container style={{ textAlign: 'center' }}>
            <h2>Available Drones</h2>
            {orderSuccess && <Alert severity="success" color="info">
                Drones Ordered Successfully!
            </Alert>}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {
                        orders.map(order => <Order
                            key={order.id}
                            order={order}
                            setOrderSuccess={setOrderSuccess}
                        ></Order>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AvailableDrones;