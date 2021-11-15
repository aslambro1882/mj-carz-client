import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import PopularCars from '../PopularCars/PopularCars';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <PopularCars></PopularCars>
            <Reviews></Reviews>
            <Brands></Brands>
            <Footer></Footer>
        </div>
    );
};

export default Home;