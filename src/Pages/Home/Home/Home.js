import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;