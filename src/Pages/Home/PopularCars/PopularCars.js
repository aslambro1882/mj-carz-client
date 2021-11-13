import { Grid, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PopularCar from '../PopularCar/PopularCar';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PopularCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data.slice(8, 14)))
    }, [])
    return (


        <Container>
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

// {/* <Box sx={{ display: 'flex' }}>
//     <CircularProgress />
// </Box> */}