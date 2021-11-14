import React, { useEffect, useState } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import AllCar from '../AllCar/AllCar';

const AllCars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://pure-beach-57412.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <Container>
            <Typography variant="h4">Popular Cars</Typography>
            <Grid container spacing={2}>
                {
                    cars.map(car => <AllCar
                        key={car._id}
                        car={car}
                    ></AllCar>)
                }
            </Grid>
        </Container>
    );
};

export default AllCars;