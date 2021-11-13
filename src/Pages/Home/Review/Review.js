import { Grid, Paper, Rating, Typography } from '@mui/material';
import { Box, minWidth } from '@mui/system';
import React from 'react';

const Review = ({ reviewinfo }) => {
    const { name, rating, review } = reviewinfo;

    return (
        <>
            {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper sx={{ my: 2, height: '250px' }}>
                    <Typography>{name}</Typography>
                    <Typography>{review}</Typography>
                </Paper>

            </Box> */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px' }}>
                <Paper sx={{ height: '250px', minWidth: '350px', p: 3, pt: 8, mb: 3 }}>
                    <Typography variant="body1">{review}</Typography>
                    <br />
                    <Typography variant="h6">{name}</Typography>
                    <Rating name="read-only" value={rating} readOnly />
                </Paper>

            </Box>

        </>
    );
};

export default Review;