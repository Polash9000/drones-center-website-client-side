import React from 'react';
import Footer from '../../Home/Shared/Footer/Footer';
import Navigation from '../../Home/Shared/Navigation/Navigation';
import AvailableDrones from '../AvailableDrones/AvailableDrones';

const Drone = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AvailableDrones></AvailableDrones>
            <Footer></Footer>
        </div>
    );
};

export default Drone;