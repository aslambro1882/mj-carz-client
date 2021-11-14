import * as React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    CssBaseline,
    Box,
    AppBar,
    Typography,
    Toolbar,
    Drawer,
    Divider,
    List,
    ListItem,
    IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import HomeIcon from '@mui/icons-material/Home';
import {
    Switch,
    Route,
    useRouteMatch,
    Link
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth'
import MyOrders from '../../DashboardSection/MyOrders/Myorders'
import AddReview from '../AddReview/AddReview';
import Pay from '../Pay/Pay';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddAProduct from '../AddAProduct/AddAProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';




const drawerWidth = 230;

function Dashboard({ window }) {
    const { logOut } = useAuth();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar >
                <Box>
                    <Typography>MJ Cars</Typography>
                </Box>
            </Toolbar>
            <Divider />
            <List>
                <ListItem button>
                    <HomeIcon sx={{ mr: 4 }} />
                    <Link
                        to="/home"
                        style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
                </ListItem>
                <ListItem button>
                    <PaymentIcon sx={{ mr: 4 }} />
                    {/* <ListItemText primary="Pay" /> */}
                    <Link
                        to={`${url}/pay`}
                        style={{ textDecoration: 'none', color: 'black' }}>Pay</Link>

                </ListItem>
                <ListItem button>
                    <ShoppingCartIcon sx={{ mr: 4 }} />
                    <Link
                        to={`${url}/orders`}
                        style={{ textDecoration: 'none', color: 'black' }}>My Orders</Link>
                </ListItem>
                <ListItem button>
                    <RateReviewIcon sx={{ mr: 4 }} />
                    <Link
                        to={`${url}/review`}
                        style={{ textDecoration: 'none', color: 'black' }}>Review</Link>
                </ListItem>
                {admin &&
                    <Box>
                        <ListItem button>
                            <ManageAccountsIcon sx={{ mr: 4 }} />
                            <Link
                                to={`${url}/manageorders`}
                                style={{ textDecoration: 'none', color: 'black' }}>Manage All Orders</Link>
                        </ListItem>
                        <ListItem button>
                            <AddToHomeScreenIcon sx={{ mr: 4 }} />
                            <Link
                                to={`${url}/addaproduct`}
                                style={{ textDecoration: 'none', color: 'black' }}>Add A Product</Link>
                        </ListItem>
                        <ListItem button>
                            <AdminPanelSettingsIcon sx={{ mr: 4 }} />
                            <Link
                                to={`${url}/makeadmin`}
                                style={{ textDecoration: 'none', color: 'black' }}>Make Admin</Link>
                        </ListItem>
                        <ListItem button>
                            <ProductionQuantityLimitsIcon sx={{ mr: 4 }} />
                            <Link
                                to={`${url}/manageproducts`}
                                style={{ textDecoration: 'none', color: 'black' }}>Manage Products</Link>
                        </ListItem>
                    </Box>
                }
                <ListItem button>
                    <LogoutIcon sx={{ mr: 3 }} />
                    <Button
                        onClick={logOut}
                        style={{ textDecoration: 'none', color: 'black', textTransform: 'capitalize', fontSize: '17px' }}>Logout</Button>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <Link
                            style={{ textDecoration: 'none', color: 'white' }}>Dashboard</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/orders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/manageorders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/addaproduct`}>
                        <AddAProduct></AddAProduct>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    {/* <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute> */}
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;