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

const ManageSingleOrder = ({ order }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleShipped = id => {
        order = { status: "Shipped" }
        fetch(`https://pure-beach-57412.herokuapp.com/manageOrders/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        setAnchorEl(null)
    }

    const handlePending = id => {
        order = { status: "Pending" }
        fetch(`https://pure-beach-57412.herokuapp.com/manageOrders/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        setAnchorEl(null)
    }

    const handleDelete = id => {
        const attension = window.confirm('Are You Sure?')
        if (attension) {
            fetch(`https://pure-beach-57412.herokuapp.com/manageOrders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Order Deleted Successfully');
                    }
                })
        }


        console.log('Delete')
        setAnchorEl(null)
    }
    return (
        <>
            <TableRow
                key={order._id}
            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell sx={{ p: 0, width: '20%' }}>
                    <img src={order.img} alt="" width="100%" />
                </TableCell>
                <TableCell sx={{ width: '25%' }}>
                    <Typography>{order.carName}</Typography>
                </TableCell>
                <TableCell sx={{ width: '20%' }}>
                    <Typography>${order.price}</Typography>
                </TableCell>
                <TableCell sx={{ width: '15%' }}>
                    <Typography>{order.email}</Typography>
                </TableCell>
                <TableCell sx={{ width: '25%' }}>
                    <Typography>{order.status}</Typography>
                </TableCell>
                <TableCell sx={{ width: '25%' }}>
                    {/* <Button
                                        // onClick={() => handleOrderCancel(order._id)}
                                        variant="contained" sx={{ backgroundColor: 'orange' }}>Manage Order</Button> */}
                    <div>
                        <Button
                            sx={{}}
                            variant="contained"
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Manage Order
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => handleShipped(order._id)}>Shipped</MenuItem>
                            <MenuItem onClick={() => handlePending(order._id)}>Pending</MenuItem>
                            <MenuItem onClick={() => handleDelete(order._id)}>Delete</MenuItem>
                        </Menu>
                    </div>

                </TableCell>
            </TableRow>
        </>
    );
};

export default ManageSingleOrder;