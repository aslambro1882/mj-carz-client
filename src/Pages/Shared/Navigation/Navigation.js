import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HomeIcon from '@mui/icons-material/Home';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';



const Navigation = () => {

    const { user, logOut } = useAuth();


    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <HomeIcon />
                </IconButton>
                <Link
                    style={{ textDecoration: 'none', color: 'black', fontWeight: 600 }}
                    to="/home"
                >Home</Link>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <DashboardIcon />
                </IconButton>
                <Link
                    style={{ textDecoration: 'none', color: 'black', fontWeight: 600 }}
                    to="/dashboard"
                >Dashboard</Link>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                >
                    <ElectricCarIcon />
                </IconButton>
                <Link
                    style={{ textDecoration: 'none', color: 'black', fontWeight: 600 }}
                    to="/cars"
                >Cars</Link>
            </MenuItem>
            {user.email ?
                <MenuItem>
                    <IconButton
                        size="large"
                        color="inherit"
                    >
                        <LogoutIcon />
                    </IconButton>
                    <Button
                        variant="text"
                        to="/cars"
                    >Logout</Button>
                </MenuItem>
                :
                <MenuItem>
                    <IconButton
                        size="large"
                        color="inherit"
                    >
                        <LoginIcon />
                    </IconButton>
                    <Link
                        style={{ textDecoration: 'none', color: 'black', fontWeight: 600 }}
                        to="/login"
                    >Login</Link>
                </MenuItem>
            }
        </Menu>
    );
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ background: '#2E3B55' }}
            >
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            <Link
                                to="/home"
                            >
                                <img src="https://i.ibb.co/NpR5MWx/255091842-613280056376133-2755557088828253877-n.jpg" alt="" width="120px" />
                            </Link>
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <Button variant="text">
                                    <Link
                                        to="/home"
                                        style={{ me: 2, textDecoration: 'none', color: 'white', textTransform: 'uppercase', fontSize: 18 }}
                                    >Home</Link>
                                </Button>
                                <Button variant="text">
                                    <Link
                                        to="/cars"
                                        style={{ me: 2, textDecoration: 'none', color: 'white', textTransform: 'uppercase', fontSize: 18 }}
                                    >Cars</Link>
                                </Button>
                                <Button
                                    variant="text">
                                    <Link
                                        to="/dashboard"
                                        style={{ textDecoration: 'none', color: 'white', textTransform: 'uppercase', fontSize: 18 }}
                                    >Dashboard</Link>
                                </Button>

                                <Button sx={{ textTransform: 'uppercase', fontSize: 18 }}>
                                    {
                                        user.email ?
                                            <Button
                                                style={{ ms: 5, textDecoration: 'none', color: 'white' }}
                                                onClick={logOut}
                                            >Logout</Button>
                                            :
                                            <NavLink
                                                style={{ ms: 5, textDecoration: 'none', color: 'white' }}
                                                to="/login"
                                            >Login</NavLink>
                                    }
                                </Button>
                            </Box>
                            <Typography>{user?.displayName?.split(' ').slice(0, 10).toString().replace(/,/g, ' ')}</Typography>
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                {
                                    user?.photoURL ?
                                        <img style={{ borderRadius: '50%', width: '40px' }} src={user?.photoURL} alt="" />
                                        :
                                        <AccountCircle sx={{ fontSize: '40px' }} />
                                }
                            </IconButton>

                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
};

export default Navigation;