import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import Review from '../Review/Review.js'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Box } from '@mui/system';



const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://pure-beach-57412.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <Box sx={{ backgroundColor: 'rgb(128,128,128)', my: 10 }}>
            <Container>
                <Grid container spacing={2}>

                    {
                        reviews?.map(review => <Review
                            key={review._id}
                            reviewinfo={review}
                        ></Review>)
                    }

                </Grid>
            </Container >
        </Box>
    );
};

export default Reviews;