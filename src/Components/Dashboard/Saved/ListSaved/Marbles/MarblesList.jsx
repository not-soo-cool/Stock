import React, { useEffect, useState } from 'react'
import './MarblesList.css'
import { useDispatch, useSelector } from 'react-redux'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Typography } from '@mui/material'
import { getMarbles } from '../../../../../Actions/UserAction'
import MarbleCard from '../../Card/Marble/MarbleCard';
import Loader from '../../../../Loader/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MarblesList = () => {

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

  const { loading, marbles , error } = useSelector((state)=>state.marble)

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

  const fetchMarbles = async (value) => {
    try {
      const { data } = await axios.post(`https://stock-tracking-39mj.onrender.com/api/v1/marbles/search`, {value}, {
        withCredentials: true,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setFlag(true);

      temp = [...fetched]
      temp = data.marbles
      setFetched(temp);
      
    } catch (error) {
      toast.error(error.response.data.message, toastOptions);
      dispatch({type: "clearErrors"})
    }
  }

  const searchChange = (val) => {
    setSearch(val);
    fetchMarbles(val);
  }

  useEffect(() => {
    dispatch(getMarbles());
    setBox(document.querySelector('.marblecard-container'));
  }, [dispatch]);

  return (
    <>
    <div className="inputBox">
      <SearchIcon className='icon'/>
      <input placeholder='Type to Search...' type="text" className='search' value={search} onChange={(e) => searchChange(e.target.value)}/>
    </div>
    <div className="marblecard-caraousel" >
      <Button className='pre-btn' onClick={pressprev}
      disabled={prevToggle}>
        <ChevronLeftIcon />
      </Button>

      <div className="marblecard-container">
        {
          flag ? fetched.length > 0 ? (
            fetched.map((marble, index) => (
              <MarbleCard 
              key={marble._id}
              link={marble._id}
              no= {index>9 ? `${index+1}` : `0${index+1}`}
              title={marble.title}
              size={marble.size}
              quantity={marble.quantity}
            //   tolink={`/detailform/${detail._id}`}
              />
            ))
          ) : (
            <Typography variant='h6'>No Marbles Stock left</Typography> 
          ) : (
            marbles ? marbles.length > 0 ? (
              marbles.map((marble, index) => (
                <MarbleCard 
                key={marble._id}
                link={marble._id}
                no= {index>9 ? `${index+1}` : `0${index+1}`}
                title={marble.title}
                size={marble.size}
                quantity={marble.quantity}
                />
              ))
            ) : (
              <Typography variant='h6'>No Marbles Stock left</Typography> 
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

export default MarblesList
