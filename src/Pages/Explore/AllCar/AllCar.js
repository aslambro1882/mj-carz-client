import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import EvStationIcon from '@mui/icons-material/EvStation';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const AllCar = ({ car }) => {
    const { name, price, mpg, img, _id, engine } = car;

    const url = `/carsdetails/${_id}`
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper>
                <Grid container spacing={0}>
                    <Grid item xs={12} sx={{ p: 0, m: 0 }}>
                        <img src={img} alt="" width="100%" />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'start', }}>
                        <Typography variant="h6" sx={{ backgroundColor: 'gray', textAlign: 'center', color: 'white' }}>{name}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', px: 2, mt: 2 }}>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}><EvStationIcon />{mpg}</Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }}><ElectricCarIcon />{engine}</Typography>
                            <Typography sx={{ display: 'flex', alignItems: 'center' }} ><AttachMoneyIcon />{price}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: 'black' }}>
                                <Link
                                    to={url}
                                    style={{ textDecoration: 'none', color: 'white' }}
                                >BOOK NOW</Link>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default AllCar;