import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'black', py: 3, color: 'white' }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8 }}>
                        <img width="220px" src="https://i.ibb.co/NpR5MWx/255091842-613280056376133-2755557088828253877-n.jpg" alt="" />
                    </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h5>Quick Links</h5>
                    <p>C2C</p>
                    <p>Enterprise</p>
                    <p>Coverage Area</p>
                    <p>FAQ'S</p>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h3>Office Location:</h3>

                    <p>Hajipara, Agrabad Access road,<br />
                        Chattogram
                    </p>
                    <p>01907706880</p>
                    <p>0909maruf@gmail.com</p>
                </Grid>
                <Grid item xs={6} md={3}>
                    <h4>Social Links</h4>
                    <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                        <Box sx={{ backgroundColor: 'rgb(127,127,127)', borderRadius: '50%', width: 50, py: 1.2, mr: 2 }}>
                            <FacebookIcon sx={{ fontSize: 30, }} />
                        </Box>
                        <Box sx={{ backgroundColor: 'rgb(127,127,127)', borderRadius: '50%', width: 50, py: 1.2, mr: 2 }}>
                            <LinkedInIcon sx={{ fontSize: 30, }} />
                        </Box>
                        <Box sx={{ backgroundColor: 'rgb(127,127,127)', borderRadius: '50%', width: 50, py: 1.2 }}>
                            <YouTubeIcon sx={{ fontSize: 30, }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <small>&copy; Maruf Bin Solaiman || 2021 || All rights reserved</small>
        </Box>
    );
};

export default Footer;