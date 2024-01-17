import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { loadUser } from './Actions/UserAction';
import Landing from './Components/Landing/Landing';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard'
import TilesList from './Components/Dashboard/Saved/ListSaved/Tiles/TilesList';
import MarblesList from './Components/Dashboard/Saved/ListSaved/Marbles/MarblesList';
import ViewTile from "./Components/Dashboard/View/Tiles/ViewTile"
import ViewMarble from './Components/Dashboard/View/Marbles/ViewMarble';
import EditTile from './Components/Dashboard/Edit/Tiles/EditTile';
import EditMarble from './Components/Dashboard/Edit/Marbles/EditMarble';
import Order from './Components/Dashboard/Order/Order';
import ViewOrder from './Components/Dashboard/View/Orders/ViewOrder';

function App() {

  const dispatch = useDispatch();

  const {isAuthenticated} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
    <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        // transition: Zoom,
      />
    
    <Router>

      <Routes>

        <Route path='/' element= { <Landing /> } />

        {/* <Route path='/home' element= { <Home /> } /> */}

        <Route path='/login' element= { <Login /> } />

        <Route path='/tilelist' element= { <TilesList /> } />

        <Route path='/marblelist' element= { <MarblesList /> } />

        <Route path='/dashboard' element= { isAuthenticated ? <Dashboard /> : <Login /> } />

        {/* <Route path='/dashboard' element= { <Dashboard /> } /> */}

        <Route path='/tile/view/:id' element= { <ViewTile /> } />

        <Route path='/marble/view/:id' element= { <ViewMarble /> } />

        <Route path='/tile/edit/:id' element= { <EditTile /> } />

        <Route path='/marble/edit/:id' element= { <EditMarble /> } />

        <Route path='/order' element= { isAuthenticated ? <Order /> : <Login /> } />

        <Route path='/view/order/:id' element= { <ViewOrder /> } />

      </Routes>
    </Router>
    </>

  );
}

export default App;
