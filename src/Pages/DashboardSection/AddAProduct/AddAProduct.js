import { TextField, Button, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddAProduct = () => {
    const [addCar, setAddCar] = useState();
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...addCar }
        newProduct[field] = value;
        setAddCar(newProduct)
        console.log(newProduct);
    }

    const handleAddProductSubmit = e => {
        fetch("https://pure-beach-57412.herokuapp.com/cars", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setSuccess(true);
                    setFailed(false);
                }
                else {
                    setFailed(true);
                    setSuccess(false);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Add A Car</h1>
            <form onSubmit={handleAddProductSubmit} style={{ lineHeight: 4 }}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Car Name"
                    type="text"
                    name="name"
                    onBlur={handleOnBlur}
                />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Image URL"
                    type="text"
                    name="img"
                    onBlur={handleOnBlur}
                />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Price"
                    type="number"
                    name="price"
                    onBlur={handleOnBlur}
                />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Car Mileage"
                    type="text"
                    name="mileage"
                    onBlur={handleOnBlur}
                />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Mile Per Galon"
                    type="text"
                    name="mpg"
                    onBlur={handleOnBlur}
                />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Engine Type"
                    type="text"
                    name="engine"
                    onBlur={handleOnBlur}
                />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Fuel Type"
                    type="text"
                    name="fueltype"
                    onBlur={handleOnBlur}
                />
                <br />
                <Button
                    sx={{ mt: 2, width: '25%' }}
                    variant="contained"
                    type="submit"

                >Add</Button>
            </form>

            {
                success &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Alert sx={{ width: '70%', m: 1 }} severity="success">Product Added Successfully!</Alert>
                </Box>
            }
            {
                failed &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Alert sx={{ width: '70%', m: 1 }} severity="warning">Something Wrong Happened. <br />Please Try Again !</Alert>
                </Box>
            }
        </div>
    );
};

export default AddAProduct;