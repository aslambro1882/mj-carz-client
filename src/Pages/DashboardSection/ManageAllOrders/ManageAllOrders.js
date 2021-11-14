import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState();


    useEffect(() => {
        fetch(`https://pure-beach-57412.herokuapp.com/manageOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders])





    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleShipped = id => {


        console.log('shipped')

        fetch(`https://pure-beach-57412.herokuapp.com/manageOrders/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allOrders)
        })

        setAnchorEl(null)
    }

    const handlePending = id => {
        console.log('Pending')
        setAnchorEl(null)
    }

    const handleDelete = id => {
        console.log('Delete')
        setAnchorEl(null)
    }





    return (
        <div>
            <h1>Manage All Orders</h1>
            <TableContainer component={Paper} sx={{ maxWidth: '1150px', mx: 'auto' }}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Product Image</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Customar Email</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrders?.map(row => <ManageSingleOrder
                            key={row._id}
                            order={row}
                        ></ManageSingleOrder>)
                            // <TableRow
                            //     key={row._id}
                            // // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            // >
                            //     <TableCell sx={{ p: 0, width: '20%' }}>
                            //         <img src={row.img} alt="" width="100%" />
                            //     </TableCell>
                            //     <TableCell sx={{ width: '25%' }}>
                            //         <Typography>{row.carName}</Typography>
                            //     </TableCell>
                            //     <TableCell sx={{ width: '20%' }}>
                            //         <Typography>${row.price}</Typography>
                            //     </TableCell>
                            //     <TableCell sx={{ width: '15%' }}>
                            //         <Typography>{row.email}</Typography>
                            //     </TableCell>
                            //     <TableCell sx={{ width: '25%' }}>
                            //         <Typography>{row.status}</Typography>
                            //     </TableCell>
                            //     <TableCell sx={{ width: '25%' }}>
                            //         {/* <Button
                            //             // onClick={() => handleOrderCancel(row._id)}
                            //             variant="contained" sx={{ backgroundColor: 'orange' }}>Manage Order</Button> */}
                            //         <div>
                            //             <Button
                            //                 sx={{}}
                            //                 variant="contained"
                            //                 id="basic-button"
                            //                 aria-controls="basic-menu"
                            //                 aria-haspopup="true"
                            //                 aria-expanded={open ? 'true' : undefined}
                            //                 onClick={handleClick}
                            //             >
                            //                 Manage Order
                            //             </Button>
                            //             <Menu
                            //                 id="basic-menu"
                            //                 anchorEl={anchorEl}
                            //                 open={open}
                            //                 onClose={handleClose}
                            //                 MenuListProps={{
                            //                     'aria-labelledby': 'basic-button',
                            //                 }}
                            //             >
                            //                 <MenuItem onClick={() => handleShipped(row._id)}>Shipped</MenuItem>
                            //                 <MenuItem onClick={() => handlePending(row._id)}>Pending</MenuItem>
                            //                 <MenuItem onClick={() => handleDelete(row._id)}>Delete</MenuItem>
                            //             </Menu>
                            //         </div>

                            //     </TableCell>
                            // </TableRow>
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllOrders;