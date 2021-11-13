import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Link } from 'react-router-dom';

const img1 = "https://i.ibb.co/h9347pY/jake-weirick-BD-s-Af-TPYA8-unsplash.jpg"
const img2 = "https://i.ibb.co/Rg5gZgY/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg"
const img3 = "https://i.ibb.co/mz8ryV0/serge-kutuzov-1-K9-Tb-JWs2-U-unsplash.jpg"

const banner1 = {
    backgroundImage: `url(${img1})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',

}
const banner2 = {
    backgroundImage: `url(${img2})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',

}

const banner3 = {
    backgroundImage: `url(${img3})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
}


const Banner = () => {

    return (
        <Carousel interval="10000000000">
            <Box style={banner1} sx={{ py: 5 }}>
                <Container sx={{ height: '500' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} sx={{ textAlign: 'start', color: 'white', height: '470px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ height: '100%' }}>
                                    <Typography variant="h2">
                                        BUY PREMIUM LUXURY <br />
                                        CARS
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} variant="h6">
                                        BUY CARS TO GET PREMIUM COSTS IN A CHEAP COST. <br />
                                        LET US HELP YOU TO MAKE YOUR LIFE EASIER AND LUXURIOUS.
                                    </Typography>
                                    <Button sx={{ mt: 3 }} variant="contained"><Link to="/cars" style={{ textDecoration: 'none', color: 'white' }}>EXPLORE MORE</Link></Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
                            <Box >
                                <img src="https://i.ibb.co/QbWYbMN/purepng-com-blue-honda-accord-hybrid-carcarvehicletransporthonda-961524653570veqwm.png" alt="" width="100%" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box style={banner2} sx={{ py: 5 }}>
                <Container sx={{ height: '500' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5} sx={{ textAlign: 'start', color: 'white', height: '470px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ height: '100%' }}>
                                    <Typography variant="h2">
                                        FIND NEW <br />
                                        ROAD
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} variant="h6">
                                        IF YOU WANT TO GO AHEAD, DON'T WASTE YOUR TIME AND BOOK THE LAMBORGINI NOW!  <br />
                                        WE'RE ALWAYS WITH YOU!
                                    </Typography>
                                    <Button sx={{ mt: 3 }} variant="contained"><Link to="/cars" style={{ textDecoration: 'none', color: 'white' }}>EXPLORE MORE</Link></Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'end' }}>
                            <Box >

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box style={banner3} sx={{ py: 5 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12} sx={{ textAlign: 'start', color: 'white', height: '470px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box>
                                    <Typography variant="h2" sx={{ backgroundColor: '#030E0F', p: 2, borderRadius: 1 }}>
                                        THE WIND IS EVEN<br />
                                        NEVER CLOSE <br />
                                        TO US
                                    </Typography>
                                    <Typography sx={{ mt: 2 }} variant="h6">
                                        GET THE BEST LOOKING FIRST EVER BEST MODEL. INTRODUCTION IN BELIEVE.
                                    </Typography>
                                    <Button sx={{ mt: 3 }} variant="contained"><Link to="/cars" style={{ textDecoration: 'none', color: 'white' }}>EXPLORE MORE</Link></Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

        </Carousel>
    );
};

export default Banner;