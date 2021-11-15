import React, { useEffect, useState } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import AllCar from '../AllCar/AllCar';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';

const AllCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://pure-beach-57412.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
                setLoading(true)
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
            <Typography variant="h4">Our Carz</Typography>
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