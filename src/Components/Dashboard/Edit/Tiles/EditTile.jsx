import React, { useEffect, useState } from 'react'
import './EditTile.css'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTile, getTile, loadUser, updateTile } from '../../../../Actions/UserAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditTile = () => {

    const toastOptions = {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }

    const dispatch = useDispatch();
    const params = useParams();
    
    const { loading, tile, message, error } = useSelector((state) => state.tile)

    const [title, setTitle] = useState(tile ? tile.title : '');
    const [size, setSize] = useState(tile ? tile.size : '');
    const [quantity, setQuantity] = useState(tile ? tile.quantity : '');

    const [dialog, setDialog] = useState("");

    useEffect(() => {
        dispatch(getTile(params.id));
    }, [dispatch, params.id]);

  const [open, setOpen] = useState(false);

  const editOpen = () => {
    setDialog("Edit");
    setOpen(true);
  }

  const deleteOpen = () => {
    setDialog("Delete");
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if(dialog === "Edit"){
      await dispatch(updateTile(title, size, quantity, params.id));
      window.location.pathname = `/tile/view/${params.id}`;
    }
    else{
      await dispatch(deleteTile(params.id));
      window.location.pathname = `/dashboard`;
    }
    setOpen(false);
    // dispatch(loadUser());
  }

  useEffect(() => {
    if(error){
      toast.error(error, toastOptions);
      dispatch({type: "clearErrors"})
    }
    if(message){
      toast.success(message, toastOptions);
      dispatch({type: "clearMessage"});
    }
  }, [toast, message, error, dispatch]);


  return (
    <div className='tile'>
      <section>
        <div className="tileview">
          <form action="" >
          <h2>View Tiles</h2>
            <div className="input-box third">
                <input type="text" 
                className='trans'
                placeholder='Title'
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />

                <input type="text" 
                className='trans'
                value={size} 
                onChange={(e) => setSize(e.target.value)} />

                <input type="text" 
                className='trans'
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} />

                <DeleteIcon className='delete' 
                onClick={deleteOpen}
                />
            </div>

            <div className="input-box sixth" style={{
              marginTop: '10px'
            }}>
              <input type="button" 
              value='Save' 
              disabled={loading} 
              onClick={editOpen} 
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
                  {dialog === "Edit" ? "Are you sure you want to save the updated changes ?" : "Are you sure you want to delete the tile info from database ?"}
                {/* {"Are you sure you want to save the updated changes ?"} */}
                </DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>No</Button>
                  <Button onClick={submitHandler} autoFocus>
                      Yes
                  </Button>
                </DialogActions>
            </Dialog>
          </form>
        </div>
      </section>
    </div>
  )
}

export default EditTile
