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

const Myorders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState();

    useEffect(() => {
        fetch(`https://pure-beach-57412.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email])


    const handleOrderCancel = id => {
        const value = window.confirm('Are You Sure?')
        if (value) {
            const uri = `https://pure-beach-57412.herokuapp.com/orders/${id}`
            fetch(uri, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Product Deleted Successfully')
                        const remainingOrders = myOrders.filter(order => order._id !== id);
                        setMyOrders(remainingOrders);
                    }
                })
        }
    }


    return (
        <div>
            <TableContainer component={Paper} sx={{ maxWidth: '1200px', mx: 'auto' }}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell>
                                <Typography variant="h5">Order Img</Typography>
                            </TableCell> */}
                            <TableCell align="left">Order Image</TableCell>
                            <TableCell align="left">Car Name</TableCell>
                            <TableCell align="left">Engine</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myOrders?.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ p: 0, width: '20%' }}>
                                    <img src={row.img} alt="" width="100%" />
                                </TableCell>
                                <TableCell sx={{ width: '25%' }}>
                                    <Typography>{row.carName}</Typography>
                                </TableCell>
                                <TableCell sx={{ width: '20%' }}>
                                    <Typography>{row.engine}</Typography>
                                </TableCell>
                                {/* <TableCell sx={{ width: '15%' }}>
                                    <Typography>{row.mileage}</Typography>
                                </TableCell> */}
                                <TableCell sx={{ width: '25%' }}>
                                    <Typography>${row.price}</Typography>
                                </TableCell>
                                <TableCell sx={{ width: '25%' }}>
                                    <Typography>{row.status}</Typography>
                                </TableCell>
                                <TableCell sx={{ width: '25%' }}>
                                    <Button
                                        onClick={() => handleOrderCancel(row._id)}
                                        variant="contained" sx={{ backgroundColor: 'orange' }}>Cancel</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Myorders;