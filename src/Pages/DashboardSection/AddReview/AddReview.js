import { TextField, Button, Alert, Rating } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const [rate, setRate] = React.useState(4);
    const { user } = useAuth()
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false)
    const [review, setReview] = useState('')

    const handleOnBlur = e => {
        setReview(e.target.value);
    }

    const handleAdminSubmit = e => {
        const reviewInfo = { review, rating: rate, name: user.displayName }


        fetch("https://pure-beach-57412.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setSuccess(true);
                    setFailed(false);
                }
                else {
                    setSuccess(false);
                    setFailed(true)
                }

            })
        e.preventDefault();
    }

    return (
        <div>
            <h1>Write A Review</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Write you review here"
                    type="email"
                    multiline
                    name="review"
                    rows={6}
                    onBlur={handleOnBlur}
                />
                <br />

                <Rating
                    sx={{ mt: 3 }}
                    name="simple-controlled"
                    value={rate}
                    onChange={(handleAdminSubmit, newValue) => {
                        setRate(newValue);
                    }}
                />


                <br />
                <Button
                    sx={{ mt: 2, width: '25%' }}
                    variant="contained"
                    type="submit"

                >Post</Button>
            </form>
            {
                failed &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Alert sx={{ width: '70%', m: 1 }} severity="success">Please input between 0 - 5</Alert>
                </Box>
            }
            {
                success &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Alert sx={{ width: '70%', m: 1 }} severity="success">Thank You For Review!</Alert>
                </Box>
            }
        </div>
    );
};

export default AddReview;