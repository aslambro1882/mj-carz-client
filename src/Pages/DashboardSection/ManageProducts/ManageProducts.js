import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

const ManageProducts = () => {

    const [manageCars, setManageCars] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://pure-beach-57412.herokuapp.com/cars`)
            .then(res => res.json())
            .then(data => {
                setManageCars(data);
                setLoading(true);
            })
    }, [])



    const handleDeleteCar = (id) => {
        const value = window.confirm('Are You Sure?')
        if (value) {
            const uri = `https://pure-beach-57412.herokuapp.com/cars/${id}`
            fetch(uri, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Product Deleted Successfully')
                        const remainingCars = manageCars.filter(car => car._id !== id);
                        setManageCars(remainingCars);
                    }
                })
        }
    }




    return (
        <div>

            <TableContainer component={Paper} sx={{ border: '1px solid black', maxWidth: '1200px', mx: 'auto' }}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="h5">Manage Products</Typography>
                            </TableCell>
                            {/* <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Treatment</TableCell>
                            <TableCell align="right">Action</TableCell>
                            <TableCell align="right">Action</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            !loading &&
                            <Box sx={{ display: 'flex', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
                                <CircularProgress />
                            </Box>

                        }
                        {manageCars?.map((row) => (
                            <TableRow
                                key={row._id}
                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                                <TableCell sx={{ width: '15%' }}>
                                    <Typography>{row.mileage}</Typography>
                                </TableCell>
                                <TableCell sx={{ width: '25%' }}>
                                    <Typography>${row.price}</Typography>
                                </TableCell>
                                <TableCell sx={{ width: '25%' }}>
                                    <Button
                                        onClick={() => handleDeleteCar(row._id)}
                                        variant="contained" sx={{ backgroundColor: 'rgb(209,54,62)' }}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;