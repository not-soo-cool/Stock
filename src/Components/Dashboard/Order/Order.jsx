import React, { useEffect, useState } from 'react'
import './Order.css'
// import Select from 'react-select'
import axios from 'axios'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import AutoModeIcon from '@mui/icons-material/AutoMode';
import { useDispatch, useSelector } from 'react-redux';
import { addTiles, checkTiles, createOrder, getAllMarbles, getAllTiles, loadUser } from '../../../Actions/UserAction';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/material'
import Loader from '../../Loader/Loader'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Order = () => {

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
    let newDataRow = [];
    let newTitle = [];
    let newSize = [];
    let newSizeSelect = [];
    let newQuantity = [];
    let uniSize = [];
    let newSelect = [];
    let newAmount = [];
    let newFlag = [];
    let tileReady = []

    const { loading, error, message } = useSelector((state) => state.order)

    const [dataRows, setDataRows] = useState([{ 'prod': "Tiles", 'title': "", "size": "", "quantity": ""}]);

    const [selVal, setSelVal] = useState(["Tiles"]);
    const [title, setTitle] = useState([""]);
    const [sizeSelVal, setSizeSelVal] = useState([""]);
    const [quantity, setQuantity] = useState([""]);
    const [size, setSize] = useState([[""]]);
    const [amount, setAmount] = useState([""]);
    const [flag, setFlag] = useState([false]);
    const [newTile, setNewTile] = useState([false]);

    const checkTiles = async (title, size, ind) => {
      try {
        const { data } = await axios.post("https://stock-tracking-39mj.onrender.com/api/v1/tiles/check", {title, size}, {
          withCredentials: true
        }, {
          headers: {
            "Content-Type": "application/json",
          },
        })

        newFlag = [...flag];
        newFlag[ind] = true;
        setFlag(newFlag);
        
        newAmount = [...amount];
        newAmount[ind] = data.quantity
        setAmount(newAmount);

        toast.success("Tile Matched", toastOptions);
        
      } catch (error) {
        toast.error(error.response.data.message, toastOptions);
        dispatch({type: "clearErrors"})
      }
    }

    const checkMarbles = async (title, size, ind) => {
      try {
        const { data } = await axios.post("https://stock-tracking-39mj.onrender.com/api/v1/marbles/check", {title, size}, {
          withCredentials: true
        }, {
          headers: {
            "Content-Type": "application/json",
          },
        })

        newFlag = [...flag];
        newFlag[ind] = true;
        setFlag(newFlag);

        newAmount = [...amount];
        newAmount[ind] = data.quantity
        setAmount(newAmount);

        toast.success("Marble Matched", toastOptions);
        
      } catch (error) {
        toast.error(error.response.data.message, toastOptions);
        dispatch({type: "clearErrors"})
      }
    }

    const fetchTiles = async (value, ind) => {
      try {
        const { data } = await axios.post("https://stock-tracking-39mj.onrender.com/api/v1/tiles/search", {value}, {
          withCredentials: true
        }, {
          headers: {
            "Content-Type": "application/json",
          },
        })

        size[ind].splice(0, size[ind].length);
        data.tiles.forEach(element => {
          size[ind].push(element.size);
        });

        uniSize = [...new Set(size[ind])];
        newSize = [...size];
        newSize[ind] = uniSize;
        setSize(newSize);

        if(newSize[ind].length === 1){
          // newDataRow = [...dataRows];
          // newDataRow[ind] = {...newDataRow[ind], size: newSize[ind][0]};
          // setDataRows(newDataRow);

          newSizeSelect = [...sizeSelVal];
          newSizeSelect[ind] = newSize[ind][0];
          setSizeSelVal(newSizeSelect);
          checkTiles(value, newSizeSelect[ind], ind)
        }
        
      } catch (error) {
        toast.error(error.response.data.message, toastOptions);
        dispatch({type: "clearErrors"})
      }
    }

    const fetchMarbles = async (value, ind) => {
      try {
        const { data } = await axios.post("https://stock-tracking-39mj.onrender.com/api/v1/marbles/search", {value}, {
          withCredentials: true
        }, {
          headers: {
            "Content-Type": "application/json",
          },
        })

        size[ind].splice(0, size[ind].length);
        data.marbles.forEach(element => {
          size[ind].push(element.size);
        });

        uniSize = [...new Set(size[ind])];
        newSize = [...size];
        newSize[ind] = uniSize;
        setSize(newSize);
        if(newSize[ind].length === 1){
          // newDataRow = [...dataRows];
          // newDataRow[ind] = {...newDataRow[ind], size: newSize[ind][0]};
          // setDataRows(newDataRow);

          newSizeSelect = [...sizeSelVal];
          newSizeSelect[ind] = newSize[ind][0];
          setSizeSelVal(newSizeSelect);
          checkMarbles(value, newSizeSelect[ind], ind)
        }
        
      } catch (error) {
        toast.error(error.response.data.message, toastOptions);
        dispatch({type: "clearErrors"})
      }
    }

  const [open, setOpen] = useState(false);
  
  const selectChange = async (e, index) => {
    newSelect = [...selVal];
    newSelect[index] = e.target.value;
    setSelVal(newSelect);

    newTitle = [...title];
    newTitle[index] = "";
    setTitle(newTitle);

    newSizeSelect = [...sizeSelVal];
    newSizeSelect[index] = "";
    setSizeSelVal(newSizeSelect);

    newQuantity = [...quantity];
    newQuantity[index] = "";
    setQuantity(newQuantity);

    size[index].splice(0, size[index].length);

    if(flag[index]){
      newFlag = [...flag];
      newFlag[index] = false;
      setFlag(newFlag);
    }

    // fetchData(e.target.value, index)
  }

  const TitleChange = async (e, index) => {
    newTitle = [...title];
    newTitle[index] = e.target.value;
    setTitle(newTitle);

    if(flag[index]){
      newFlag = [...flag];
      newFlag[index] = false;
      setFlag(newFlag);
    }

    if(e.target.value === ""){
      size[index].splice(0, size[index].length);
    }
    else{
      if(selVal[index] === 'Tiles'){
        fetchTiles(e.target.value, index);
        // console.log(size[index].length);
      }
      else{
        fetchMarbles(e.target.value, index)
      }
    }
    // console.log("Current: ", selVal[index], title[index], sizeSelVal[index], quantity[index]);
  }
  
  const sizeSelectChange = async (e, index) => {
    newSizeSelect = [...sizeSelVal];
    newSizeSelect[index] = e.target.value;
    setSizeSelVal(newSizeSelect);

    if(selVal[index] === "Tiles"){
      checkTiles(title[index], newSizeSelect[index], index);
    }
    else{
      checkMarbles(title[index], newSizeSelect[index], index);
    }
    console.log("Amount: ", amount);
  }

  const quantityClick = async (index) => {
    if(!flag[index]){
      toast.error("Fill title and size correctly first", toastOptions);
    }
  }

  const quantityChange = async (e, index) => {
    newQuantity = [...quantity];
    newQuantity[index] = e.target.value;
    setQuantity(newQuantity);

    if(selVal[index] === "Tiles"){
      if(amount[index] !== ""){
        if(amount[index] < e.target.value){
          tileReady = [...newTile];
          tileReady[index] = false;
          setNewTile(tileReady);
          toast.error("Quantity exceeded", toastOptions);
        }
        else{
          tileReady = [...newTile];
          tileReady[index] = true;
          setNewTile(tileReady);
        }
      }
    }
    else{
      if(amount[index] !== ""){
        if(amount[index] < e.target.value){
          tileReady = [...newTile];
          tileReady[index] = false;
          setNewTile(tileReady);
          toast.error("Quantity exceeded", toastOptions);
        }
        else{
          tileReady = [...newTile];
          tileReady[index] = true;
          setNewTile(tileReady);
        }
      }
    }
  }

  const handleOpen = () => {
    let cont = false;
    newTile.forEach(element => {
      if(!element){
        cont = true;
        toast.error("Order is not correct", toastOptions);
        return;
      }
    });

    if(cont) return;
    flag.forEach(element => {
      if(!element){
        cont = true;
        toast.error("Order is not correct", toastOptions);
        return;
      }
    });

    if(cont) return;

    newDataRow = [...dataRows];
    newDataRow[newDataRow.length - 1] = {prod: selVal[newDataRow.length - 1], title: title[newDataRow.length - 1], size: sizeSelVal[newDataRow.length - 1], quantity: quantity[newDataRow.length - 1]};
    // newDataRow.push({'prod': 'Tiles', 'title': "", 'size': "", 'quantity': ""});
    setDataRows(newDataRow);

    setOpen(true);
    
  }

  const handleClose = () => {
    setOpen(false);
  };

  const newTileRow = () => {
    if(newTile[newTile.length - 1]){
      newDataRow = [...dataRows];
      newDataRow[newDataRow.length - 1] = {prod: selVal[newDataRow.length - 1], title: title[newDataRow.length - 1], size: sizeSelVal[newDataRow.length - 1], quantity: quantity[newDataRow.length - 1]};
      newDataRow.push({'prod': 'Tiles', 'title': "", 'size': "", 'quantity': ""});
      setDataRows(newDataRow);

      newSelect = [...selVal];
      newSelect.push("Tiles");
      setSelVal(newSelect);

      newTitle = [...title];
      newTitle.push("");
      setTitle(newTitle);

      newSizeSelect = [...sizeSelVal];
      newSizeSelect.push("");
      setSizeSelVal(newSizeSelect);

      newQuantity = [...quantity];
      newQuantity.push("");
      setQuantity(newQuantity);

      newSize = [...size];
      newSize.push([""]);
      setSize(newSize);

      newAmount = [...amount];
      newAmount.push("");
      setAmount(newAmount);

      newFlag = [...flag];
      newFlag.push(false);
      setFlag(newFlag);

      tileReady = [...newTile];
      tileReady.push(false);
      setNewTile(tileReady);

    }
    else{
      toast.error("Fill Previous Info Correctly", toastOptions);
    }
  };

  const deleteHandler = (index) => {
    newDataRow = [...dataRows];
    newDataRow.splice(index, 1);
    setDataRows(newDataRow);

    newSelect = [...selVal];
    newSelect.splice(index, 1);
    setSelVal(newSelect);

    newTitle = [...title];
    newTitle.splice(index, 1);
    setTitle(newTitle);

    newSizeSelect = [...sizeSelVal];
    newSizeSelect.splice(index, 1);
    setSizeSelVal(newSizeSelect);

    newQuantity = [...quantity];
    newQuantity.splice(index, 1);
    setQuantity(newQuantity);

    newSize = [...size];
    newSize.splice(index, 1);
    setSize(newSize);

    newAmount = [...amount];
    newAmount.splice(index, 1);
    setAmount(newAmount);

    newFlag = [...flag];
    newFlag.splice(index, 1);
    setFlag(newFlag);

    tileReady = [...newTile];
    tileReady.splice(index, 1);
    setNewTile(tileReady);

    // console.log(newDataRow.length, newSelect.length, newTitle.length, newSizeSelect.length, newQuantity.length, newAmount.length, newSize.length, newFlag.length, tileReady.length);
  };

  const saveTileInfo = async (e) => {
    e.preventDefault();
    await dispatch(createOrder(dataRows));
    // dispatch(loadUser());
    setOpen(false);

    newDataRow = [...dataRows];
    newDataRow = [{ 'prod': "Tiles", 'title': "", "size": "", "quantity": ""}];
    setDataRows(newDataRow);

    newSelect = [...selVal];
    newSelect = ["Tiles"];
    setSelVal(newSelect);

    newTitle = [...title];
    newTitle = [""];
    setTitle(newTitle);

    newSizeSelect = [...sizeSelVal];
    newSizeSelect = [""];
    setSizeSelVal(newSizeSelect);

    newQuantity = [...quantity];
    newQuantity = [""];
    setQuantity(newQuantity);

    newSize = [...size];
    newSize = [[""]];
    setSize(newSize);

    newAmount = [...amount];
    newAmount = [[""]];
    setAmount(newAmount);

    newFlag = [...flag];
    newFlag = [false];
    setFlag(newQuantity);

    tileReady = [...newTile];
    tileReady = [false];
    setNewTile(tileReady);

  }

  useEffect(() => {
    if(error){
        toast.error(error, toastOptions);
        dispatch({type: "clearErrors"})
    }
    if(message){
        toast.success(message, toastOptions);
        dispatch({type: "clearMessage"})
    }
  }, [toast, error, message, dispatch]);


  return (
    ( loading ? <Loader /> : 
    <div className='order'>
      <section>
        <div className="orderok">
          <form action="" >
          <h2>Create Order </h2>
            {
                dataRows && dataRows.length > 0 && (
                    dataRows.map((ele, index) => (
                        <div className="input-box third" key={index}>

                          <select 
                            name="Product"
                            // value="None"
                            style={{
                              width: '50%'
                            }}
                            onChange={(e) => selectChange(e, index)} 
                          >
                            <option value="Tiles">Tiles</option>
                            <option value="Marbles">Marbles</option>
                          </select>

                            <input type="text" 
                            className='trans'
                            value={title[index]} placeholder='Title' 
                            onChange={(e)=>TitleChange(e, index)} />

                            <select name="Size" 
                            // value={size[index].length === 1 && size[index][0]}
                            onChange={(e) => sizeSelectChange(e, index)}>
                              {
                                size[index] && size[index].length > 0 && (
                                  size[index].map((elem, i) => (
                                    <option
                                    // selected={i===0}
                                    value={elem} key={i}>
                                      {elem}
                                    </option>
                                  ))
                                )
                              }
                            </select>

                            <input type="text" 
                            className='trans'
                            readOnly={!flag[index]}
                            value={quantity[index]} 
                            placeholder='Quantity'  
                            onClick={() => quantityClick(index)}
                            onChange={(e)=>quantityChange(e, index)}
                            />

                            <DeleteIcon className='delete' 
                            onClick={() => deleteHandler(index)}
                            />
                        </div>
                    ))
                )
            }

            <div className="input-box sixth" style={{
              marginTop: '10px'
            }}>
              <input type="button" 
              value='Submit' 
              // disabled={loading} 
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
                {"Do you want to save the Tiles info?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    All the tiles information will be added to the database, once you'll agree.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button 
                onClick={saveTileInfo} 
                autoFocus>
                    Save
                </Button>
                </DialogActions>
            </Dialog>
          </form>


        </div>
        <Fab size="medium" 
        color="primary"
        aria-label="add" sx={{
            // bottom: '-280px',
            bottom: '10px',
            left: "1300px"
        }} 
        onClick={() => newTileRow()}
        >
            <AutoModeIcon />
        </Fab>
      </section>
    </div>
    )
  )
}

export default Order
