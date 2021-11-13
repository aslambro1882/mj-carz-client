import { Grid, Paper, Rating, Typography } from '@mui/material';
import { Box, minWidth } from '@mui/system';
import React from 'react';

const Review = ({ reviewinfo }) => {
    const { name, rating, review } = reviewinfo;

    return (
        <>
            <Grid xs={12} md={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
                    <Paper elevation={3} square sx={{ height: 250, width: 280, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{ width: 250 }}>
                            <Typography variant="body1">{review}</Typography>
                            <br />
                            <Typography variant="h6">{name}</Typography>
                            <Rating name="read-only" value={rating} readOnly />
                        </Box>

                    </Paper>

                </Box>
            </Grid>
        </>
    );
};

export default Review;