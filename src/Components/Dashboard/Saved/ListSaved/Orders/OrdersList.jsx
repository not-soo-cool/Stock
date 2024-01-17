import React, { useEffect, useState } from 'react'
import './OrdersList.css'
import { useDispatch, useSelector } from 'react-redux'
// import { useAlert } from 'react-alert';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Typography } from '@mui/material'
import OrderCard from '../../Card/Order/OrderCard';
import { getAllOrders } from '../../../../../Actions/UserAction';
import Loader from '../../../../Loader/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OrdersList = () => {

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

  let temp;

  const [prevToggle, setPrevToggle] = useState(true);
  const [nextToggle, setNextToggle] = useState(false);
  const [box, setBox] = useState("");

  const [search, setSearch] = useState("");

  const [fetched, setFetched] = useState([]);
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();
  // const alert = useAlert();

  const { orders } = useSelector((state)=>state.order)

  const pressprev = () => {
    setNextToggle(false);

    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft - width/2;

    if(box.scrollLeft - width/2 <= 0){
      setPrevToggle(true);
    }
  }

  const pressnext = () => {
    let width = box.clientWidth
    box.scrollLeft = box.scrollLeft + width/2;

    setPrevToggle(false);

    if(box.scrollWidth - width - box.scrollLeft <= 0){
      setNextToggle(true);
    }
  }

  const fetchOrders = async (date) => {
    try {
      const { data } = await axios.post(`https://stock-tracking-39mj.onrender.com/api/v1/date/orders`, {date}, {
        withCredentials: true,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setFlag(true);

      temp = [...fetched]
      temp = data.orders
      setFetched(temp);
      
    } catch (error) {
      toast.error(error.response.data.message, toastOptions);
      dispatch({type: "clearErrors"})
    }
  }

  const searchChange = (val) => {
    setSearch(val);
    const parts = val.split("/");
    if(parts.length > 2){
      fetchOrders(val);
    }
  }

  useEffect(() => {
    dispatch(getAllOrders())
    setBox(document.querySelector('.ordercard-container'));
  }, [dispatch]);

  return (
    <>
    <div className="inputBox">
      <SearchIcon className='icon'/>
      <input placeholder='Type to Search...' type="text" className='search' value={search} onChange={(e) => searchChange(e.target.value)}/>
    </div>
    <div className="ordercard-caraousel" >
      <Button className='pre-btn' onClick={pressprev}
      disabled={prevToggle}>
        <ChevronLeftIcon />
      </Button>

      <div className="ordercard-container">
        {
          flag ? fetched.length > 0 ? (
            fetched.map((order, index) => (
              <OrderCard 
              key={index}
              no= {index>9 ? `${index+1}` : `0${index+1}`}
              items={order.items}
              amount={order.amount}
              link={order._id}
              day={new Date(order.createdAt).getDate()}
              month={new Date(order.createdAt).getMonth() + 1}
              year={new Date(order.createdAt).getFullYear()}
              hour={new Date(order.createdAt).getHours()}
              min={new Date(order.createdAt).getMinutes()}
              />
            ))
          ) : (
            <Typography variant='h6'>No Orders of mentioned date</Typography> 
          ) : (
            orders ? orders.length > 0 ? (
              orders.map((order, index)=> (
                <OrderCard 
                key={index}
              //   did={detail._id}
                no= {index>9 ? `${index+1}` : `0${index+1}`}
                items={order.items}
                amount={order.amount}
                link={order._id}
                day={new Date(order.createdAt).getDate()}
                month={new Date(order.createdAt).getMonth() + 1}
                year={new Date(order.createdAt).getFullYear()}
                hour={new Date(order.createdAt).getHours()}
                min={new Date(order.createdAt).getMinutes()}
                />
              ))
            ) : (
              <Typography variant='h6'>No Orders Stock left</Typography> 
            ) : (
              <Loader />
            )
          )
        }
      </div>

      <Button className='next-btn' onClick={pressnext} 
      disabled={nextToggle}>
        <ChevronRightIcon />
      </Button>

    </div>
    </>
  )
}

export default OrdersList
