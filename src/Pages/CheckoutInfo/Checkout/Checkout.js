import { Grid, Paper, TextField, Container, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Checkout = () => {
    const { carid } = useParams();
    const [car, setCar] = useState({});
    const { name, price, mpg, img, engine, fueltype, mileage } = car;
    const { user } = useAuth();
    const initialInfo = { customarName: user.displayName, email: user.email, phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    // console.log(bookingInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log('field:', field, 'value:', value)
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        console.log(bookingInfo)
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        const order = {
            ...bookingInfo,
            img,
            carName: name,
            engine,
            fueltype,
            mileage,
            mpg,
            price
        }
        order.status = 'pending'
        console.log(order)

        //send order to the server
        fetch("https://pure-beach-57412.herokuapp.com/orders", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Order Placed Successfully')
                }
            })

        e.preventDefault();
    }

    useEffect(() => {
        fetch(`https://pure-beach-57412.herokuapp.com/cars/${carid}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [carid])

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <form onSubmit={handleBookingSubmit}>
                        <Paper sx={{ py: 3 }}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="name"
                                label="Name"
                                defaultValue={user.displayName}
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="phone"
                                label="Phone Number"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="country"
                                label="Country"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <br />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                name="district"
                                label="District"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <br />
                            <Button
                                sx={{ width: '75%', mt: 3 }}
                                type="submit"
                                variant="contained">Place Order</Button>
                        </Paper>
                    </form>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3}>
                                <img src={img} alt="" width="100%" />
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>{name}</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} md={3} sx={{ borderRight: 1 }}>
                                                <Typography>Mileage</Typography>
                                                <Typography>{mileage}</Typography>

                                            </Grid>
                                            <Grid item xs={12} md={3} sx={{ borderRight: 1 }}>
                                                <Typography>MPG</Typography>
                                                <Typography>{mpg}</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={3} sx={{ borderRight: 1 }}>
                                                <Typography>Engine</Typography>
                                                <Typography>{engine}</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={3}>
                                                <Typography>Price</Typography>
                                                <Typography>${price}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Checkout;