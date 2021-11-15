import { Grid, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import PopularCar from '../PopularCar/PopularCar';
import CircularProgress from '@mui/material/CircularProgress';
import userEvent from '@testing-library/user-event';

const PopularCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://pure-beach-57412.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data.slice(8, 14));
                setLoading(true);
            })
    }, [])
    return (
        <Container>
            {
                !loading &&
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>

            }
            <Typography variant="h4">Popular Cars</Typography>
            <Grid container spacing={2}>
                {
                    cars.map(car => <PopularCar
                        key={car._id}
                        car={car}
                    ></PopularCar>)


                }
            </Grid>
        </Container>
    );
};

export default PopularCars;

