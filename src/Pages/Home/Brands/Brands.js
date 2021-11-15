import React from 'react';
import { Box } from '@mui/system';
import { Typography, Grid, TextField, Button } from '@mui/material';

const img = "https://i.ibb.co/PtYBB73/1-iqiwe-R3-Ffxfcim-LQA3-ZSMw.jpg"

const banner1 = {
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

}

const applyTestDrive = () => {
    window.alert('We will contact you soon when your desire vehicle is ready !')
}
const Brands = () => {

    return (
        <Box style={banner1} sx={{ height: 400, pt: 3 }}>
            <Grid container sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
                <form>
                    <TextField
                        sx={{ background: 'rgb(230,232,235)' }}
                        placeholder="which vahicle do you want to test?"
                        required
                    ></TextField>
                    <br />
                    <TextField
                        sx={{ background: 'rgb(230,232,235)', my: 3 }}
                        placeholder="Enter Your Phone Number"
                        required
                    ></TextField>
                    <br />
                    <Button onClick={applyTestDrive} sx={{ backgroundColor: 'rgb(42,55,108)' }} variant="contained">Apply For Test Drive</Button>
                </form>
            </Grid>
        </Box>
    );
};

export default Brands;