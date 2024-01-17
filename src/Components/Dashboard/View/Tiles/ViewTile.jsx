import React, { useEffect, useState } from 'react'
import './ViewTile.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getTile } from '../../../../Actions/UserAction';

const ViewTile = () => {

    const dispatch = useDispatch();
    const params = useParams();

    const { loading, tile } = useSelector((state) => state.tile)

    useEffect(() => {
        dispatch(getTile(params.id));
    }, [dispatch, params.id]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='tile'>
      <section>
        <div className="tileview">
          <form action="" >
          <h2>View Tiles</h2>
            <div className="input-box third">
                <input type="text" 
                className='trans'
                value={tile ? tile.title : ''} readOnly />

                <input type="text" 
                className='trans'
                value={tile ? tile.size : ''} 
                readOnly />

                <input type="text" 
                className='trans'
                value={tile ? tile.quantity : ''} 
                readOnly />
            </div>

            <div className="input-box sixth" style={{
              marginTop: '10px'
            }}>
              <input type="button" 
              value='Edit' 
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
                {"Are you sure you want to edit the tile info?"}
                </DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Link to = {`/tile/edit/${tile ? tile._id : ''}`} >
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

export default ViewTile
