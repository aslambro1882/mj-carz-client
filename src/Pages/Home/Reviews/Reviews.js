import React, { useEffect, useState } from 'react';
import { Grid, Paper, TextField, Container, Button, Typography } from '@mui/material';
import Review from '../Review/Review.js'
import Carousel from 'react-material-ui-carousel'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Reviews.css'
import useAuth from '../../../hooks/useAuth.js';
import { Box } from '@mui/system';



const Reviews = () => {
    const { user } = useAuth()

    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };

    return (
        <Box sx={{ backgroundColor: 'rgb(128,128,128)' }}>
            <Container>

                <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                    {
                        reviews?.map(review => <Review
                            key={review._id}
                            reviewinfo={review}
                        ></Review>)
                    }
                </OwlCarousel>

            </Container >
        </Box>
    );
};

export default Reviews;