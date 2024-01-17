import React, { useEffect, useState } from 'react'
import './TilesList.css'
import { useDispatch, useSelector } from 'react-redux'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Typography } from '@mui/material'
import { getTiles } from '../../../../../Actions/UserAction'
import TileCard from '../../Card/Tile/TileCard';
import Loader from '../../../../Loader/Loader';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TilesList = () => {

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

  const { loading, tiles, error } = useSelector((state)=>state.tile)

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

  const fetchTiles = async (value) => {
    try {
      const { data } = await axios.post(`https://stock-tracking-39mj.onrender.com/api/v1/tiles/search`, {value}, {
        withCredentials: true,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      setFlag(true);

      temp = [...fetched]
      temp = data.tiles
      setFetched(temp);
      
    } catch (error) {
      toast.error(error.response.data.message, toastOptions);
      dispatch({type: "clearErrors"})
    }
  }

  const searchChange = (val) => {
    setSearch(val);
    fetchTiles(val);
  }

  useEffect(() => {
    dispatch(getTiles());
    setBox(document.querySelector('.tilecard-container'));
  }, [dispatch]);

  return (
    // (loading ? <Loader /> : 
    <>
    <div className="inputBox">
      <SearchIcon className='icon'/>
      <input placeholder='Type to Search...' type="text" className='search' value={search} onChange={(e) => searchChange(e.target.value)}/>
    </div>
    <div className="tilecard-caraousel" >
      <Button className='pre-btn' onClick={pressprev}
      disabled={prevToggle}>
        <ChevronLeftIcon />
      </Button>

      <div className="tilecard-container">
        {
          flag ? fetched.length > 0 ? (
            fetched.map((tile, index) => (
              <TileCard 
              key={tile._id}
              no= {index>9 ? `${index+1}` : `0${index+1}`}
              title={tile.title}
              size={tile.size}
              quantity={tile.quantity}
              link={tile._id}
              />
            ))
          ) : (
            <Typography variant='h6'>No Tiles Stock left</Typography> 
          ) : (
            tiles ? tiles.length > 0 ? (
              tiles.map((tile, index) => (
                <TileCard 
                key={tile._id}
                no= {index>9 ? `${index+1}` : `0${index+1}`}
                title={tile.title}
                size={tile.size}
                quantity={tile.quantity}
                link={tile._id}
                />
              ))
            ) : (
              <Typography variant='h6'>No Tiles Stock left</Typography> 
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
    // )
  )
}

export default TilesList
