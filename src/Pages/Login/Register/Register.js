import { Grid, TextField, Button, Typography, CircularProgress, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const history = useHistory();
    const location = useLocation();

    const { user, registerUser, isLoading, authError, signInwithGoogle } = useAuth()
    const [loginData, setLoginData] = useState({});
    console.log(loginData);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegisterSubmit = e => {
        registerUser(loginData?.email, loginData?.password, loginData?.name, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInwithGoogle(location, history)
    }
    return (
        <Grid container>
            <Grid item sx={{ display: { xs: 'none', md: 'block' }, height: '100vh' }} md={4}>
                <img src="https://i.ibb.co/f0CyjfG/jakob-rosen-9-VXMt6-YRHEA-unsplash.jpg" alt="" height="100%" width="100%" />
            </Grid>
            <Grid item xs={12} md={8} sx={{ backgroundColor: 'rgb(35,57,74)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ border: '2px solid white', width: '60%' }}>
                    <Button variant="text" sx={{ display: 'flex' }}><Link style={{ textDecoration: 'none', color: 'rgb(255,255,255)' }} to="/login">Login</Link></Button>
                    {
                        isLoading &&
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress />
                        </Box>
                    }
                    <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ backgroundColor: 'rgb(68,88,103)', color: 'white', my: 1, width: '100%' }}
                            variant="outlined"
                            label="Full Name"
                            name="name"
                            onBlur={handleOnBlur}
                            InputLabelProps={{
                                style: {
                                    color: 'rgb(222,219,219)'
                                }
                            }}
                        />
                        <br />
                        <TextField
                            sx={{ backgroundColor: 'rgb(68,88,103)', my: 1, width: '100%' }}
                            variant="outlined"
                            label="E-mail Address"
                            name="email"
                            onBlur={handleOnBlur}
                            InputLabelProps={{
                                style: {
                                    color: 'rgb(222,219,219)',
                                }
                            }}
                        />
                        <br />
                        <TextField
                            sx={{ backgroundColor: 'rgb(68,88,103)', my: 1, width: '100%' }}
                            variant="outlined"
                            label="Password"
                            name="password"
                            onBlur={handleOnBlur}
                            InputLabelProps={{
                                style: {
                                    color: 'rgb(222,219,219)',
                                }
                            }}
                        />
                        <br />

                        <Button
                            sx={{ my: 1, display: 'flex', width: '35%', backgroundColor: 'rgb(255,255,255)', color: 'rgb(63,57,74)', fontWeight: 600 }}
                            variant="contained" type="submit">Register</Button>

                    </form>
                    <Box sx={{ textAlign: 'start' }}>
                        <Typography sx={{ display: 'inline', fontSize: 12, color: 'rgb(255,255,255)' }} variant="body1">Or register with</Typography>
                        <Button variant="text" onClick={handleGoogleSignIn}>Google</Button>
                    </Box>
                    {
                        user.email &&
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Alert sx={{ width: '70%', m: 1 }} severity="success">User Created successfully!</Alert>
                        </Box>
                    }
                    {
                        authError &&
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Alert sx={{ width: '70%', m: 1 }} severity="error">{authError}</Alert>
                        </Box>
                    }
                </Box>
            </Grid>
        </Grid>
    );
};

export default Register;