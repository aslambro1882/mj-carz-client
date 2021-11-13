import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import PopularCars from '../PopularCars/PopularCars';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <PopularCars></PopularCars>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;