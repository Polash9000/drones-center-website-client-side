import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from './../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const OrderModal = ({ openOrder, handleOrderClose, order, setOrderSuccess }) => {
    const { name, price } = order;
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
    const [orderInfo, setOrderInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = e => {
        // collect data
        const orderDrone = {
            ...orderInfo,
            price,
            droneName: name,
        }
        // send to the server
        // console.log(orderDrone);
        fetch('https://salty-refuge-63594.herokuapp.com/orderDrones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDrone)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderSuccess(true);
                    handleOrderClose();
                }
            })

        e.preventDefault();


    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openOrder}
            onClose={handleOrderClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openOrder}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <form onSubmit={handleOrderSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            label="Price: $"
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            placeholder="Phone Number"
                            size="small"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                        >Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default OrderModal;