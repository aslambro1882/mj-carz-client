import { TextField, Button, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState();
    const [success, setSuccess] = useState(false);


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch("https://pure-beach-57412.herokuapp.com/orders/admin", {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    setSuccess(true);
                }
                else {
                    setSuccess(false);
                }

            })
        e.preventDefault();
    }


    return (
        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    variant="standard"
                    type="email"
                    name="email"
                    onBlur={handleOnBlur}
                />
                <br />
                <Button
                    sx={{ mt: 2, width: '25%' }}
                    variant="contained"
                    type="submit"
                >Make Admin</Button>
            </form>
            {
                success &&
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Alert sx={{ width: '70%', m: 1 }} severity="success">Admin Made successfully!</Alert>
                </Box>
            }
        </div>
    );
};

export default MakeAdmin;