import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AllCars from '../AllCars/AllCars';

const ExploreHome = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AllCars></AllCars>
            <Footer></Footer>
        </div>
    );
};

export default ExploreHome;