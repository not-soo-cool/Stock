import React, { useEffect, useState } from 'react'
import './ViewOrder.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../../Actions/UserAction';

const ViewOrder = () => {

    const dispatch = useDispatch();
    const params = useParams();

    const { loading, order } = useSelector((state) => state.order)

    useEffect(() => {
        dispatch(getOrder(params.id));
    }, [dispatch, params.id]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='order'>
      <section>
        <div className="orderview">
          <form action="" >
          <h2>View Order</h2>
          {
            order && order.orders.length > 0 && (
                order.orders.map((element, index) => (
                    <div className="input-box third" key={index}>
                        <input type="text" 
                        className='trans'
                        value={element ? element.prod : ''} readOnly />

                        <input type="text" 
                        className='trans'
                        value={element ? element.title : ''} readOnly />

                        <input type="text" 
                        className='trans'
                        value={element ? element.size : ''} 
                        readOnly />

                        <input type="text" 
                        className='trans'
                        value={element ? element.quantity : ''} 
                        readOnly />
                    </div>
                ))
            )
          }
            

            <div className="input-box sixth" style={{
              marginTop: '10px'
            }}>
              <input type="button" 
              value='Download' 
              disabled={loading} 
              onClick={handleOpen} 
              id='btn' style={{
                width: '15%'
              }}/>
            </div>

            <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle  id="alert-dialog-title">
                {"Are you sure you want to edit the order info?"}
                </DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Link to = {`/order/edit/${order ? order._id : ''}`} >
                    <Button onClick={handleClose} autoFocus>
                        Yes
                    </Button>
                </Link>
                </DialogActions>
            </Dialog>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ViewOrder
