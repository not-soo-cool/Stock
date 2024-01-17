import axios from "axios"

const serverUrl = "https://stock-tracking-39mj.onrender.com/api/v1"

export const loginUser = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: "LoginRequest",
        });

        const {data} = await axios.post(`${serverUrl}/login`, {email, password}, {
            withCredentials: true,
        }, 
        {
            headers:{
                "Content-Type":"application/json"
            },
        });

        dispatch({
            type: "LoginSuccess",
            payload: data.user
        })
    } catch (error) {
        dispatch({
            type: "LoginFailure",
            payload: error.response.data.message
        }) 
    }
}

// export const registerUser = (name, email, password) => async(dispatch) => {

//     try {

//         dispatch({
//             type: "RegisterRequest",
//         });

//         const {data} = await axios.post(`${serverUrl}/register`, {name, email, password}, {
//             headers:{
//                 "Content-Type":"application/json"
//             },
//         });

//         // console.log(data);

//         dispatch({
//             type: "RegisterSuccess",
//             payload: data.user
//         })
        
//     } catch (error) {

//         dispatch({
//             type: "RegisterFailure",
//             payload: error.response.data.message
//         }) 
//     }
// }

export const logoutUser = () => async(dispatch) => {

    try {

        dispatch({
            type: "LogoutUserRequest",
        });

        await axios.get(`${serverUrl}/logout`, {
            withCredentials: true,
        });

        // console.log(data);

        dispatch({
            type: "LogoutUserSuccess",
        })
        
    } catch (error) {

        dispatch({
            type: "LogoutUserFailure",
            payload: error.response.data.message
        })
        
    }

}

export const loadUser = () => async(dispatch) => {

    try {

        dispatch({
            type: "LoadUserRequest",
        });

        const {data} = await axios.get(`${serverUrl}/me`, {
            withCredentials: true,
        });

        dispatch({
            type: "LoadUserSuccess",
            payload: data.user
        })
        
    } catch (error) {

        dispatch({
            type: "LoadUserFailure",
            payload: error.response.data.message
        })
    }
}

export const addTiles = (tiles) => async(dispatch) => {
    try {
        dispatch({
            type: "AddTilesRequest",
        });

        const {data} = await axios.post(`${serverUrl}/admin/tiles/add`, {tiles}, {
            withCredentials: true,
        }, 
        {
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "AddTilesSuccess",
            payload: data.message,
        });
        
    } catch (error) {
        dispatch({
            type: "AddTilesFailure",
            payload: error.response.data.message
        }) 
    }

}

export const addMarbles = (marbles) => async(dispatch) => {
    try {
        dispatch({
            type: "AddMarblesRequest",
        });

        const {data} = await axios.post(`${serverUrl}/admin/marbles/add`, {marbles}, {
            withCredentials: true,
        }, 
        {
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "AddMarblesSuccess",
            payload: data.message,
        });
        
    } catch (error) {
        dispatch({
            type: "AddMarblesFailure",
            payload: error.response.data.message
        }) 
    }
}

export const getTiles = () => async(dispatch) => {
    try {
        dispatch({
            type: "GetTilesRequest",
        });

        const {data} = await axios.get(`${serverUrl}/admin/tiles/all`, {
            withCredentials: true,
        });

        dispatch({
            type: "GetTilesSuccess",
            payload: data.tiles
        })
        
    } catch (error) {
        dispatch({
            type: "GetTilesFailure",
            payload: error.response.data.message
        })
    }
}

export const getMarbles = () => async(dispatch) => {
    try {
        dispatch({
            type: "GetMarblesRequest",
        });

        const {data} = await axios.get(`${serverUrl}/admin/marbles/all`, {
            withCredentials: true,
        });

        dispatch({
            type: "GetMarblesSuccess",
            payload: data.marbles
        })
        
    } catch (error) {
        dispatch({
            type: "GetMarblesFailure",
            payload: error.response.data.message
        })
    }
}

export const getTile = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "GetTileRequest",
        });

        const {data} = await axios.get(`${serverUrl}/admin/tile/${id}`, {
            withCredentials: true,
        });

        dispatch({
            type: "GetTileSuccess",
            payload: data.tile
        })
        
    } catch (error) {
        dispatch({
            type: "GetTileFailure",
            payload: error.response.data.message
        })
    }
}

export const getMarble = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "GetMarbleRequest",
        });

        const {data} = await axios.get(`${serverUrl}/admin/marble/${id}`, {
            withCredentials: true,
        });

        dispatch({
            type: "GetMarbleSuccess",
            payload: data.marble
        })
        
    } catch (error) {
        dispatch({
            type: "GetMarbleFailure",
            payload: error.response.data.message
        })
    }
}

export const updateTile = (title, size, quantity, id) => async(dispatch) => {
    try {
        dispatch({
            type: "UpdateTileRequest",
        });

        const {data} = await axios.put(`${serverUrl}/admin/tile/${id}`, {title, size, quantity}, {
            withCredentials: true,
        }, {
            headers:{
                "Content-Type": "application/json"
            }
        });

        dispatch({
            type: "UpdateTileSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "UpdateTileFailure",
            payload: error.response.data.message
        })
    }
}

export const updateMarble = (title, size, quantity, id) => async(dispatch) => {
    try {
        dispatch({
            type: "UpdateMarbleRequest",
        });

        console.log(title, size, quantity, id);

        const {data} = await axios.put(`${serverUrl}/admin/marble/${id}`, {title, size, quantity}, {
            withCredentials: true,
        }, {
            headers:{
                "Content-Type": "application/json"
            }
        });

        dispatch({
            type: "UpdateMarbleSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "UpdateMarbleFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteTile = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "DeleteTileRequest",
        });

        const {data} = await axios.delete(`${serverUrl}/admin/tile/${id}`, {
            withCredentials: true,
        });

        dispatch({
            type: "DeleteTileSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "DeleteTileFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteMarble = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "DeleteMarbleRequest",
        });

        const {data} = await axios.delete(`${serverUrl}/admin/marble/${id}`, {
            withCredentials: true,
        });

        dispatch({
            type: "DeleteMarbleSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "DeleteMarbleFailure",
            payload: error.response.data.message
        })
    }
}

export const getAllTiles = (value) => async(dispatch) => {
    try {
        dispatch({
            type: "GetAllTilesRequest",
        });

        const {data} = await axios.post(`${serverUrl}/tiles/search`, {value}, {
            withCredentials: true,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "GetAllTilesSuccess",
            payload: data.tiles
        })
        
    } catch (error) {
        dispatch({
            type: "GetAllTilesFailure",
            payload: error.response.data.message
        })
    }
}

export const getAllMarbles = (value) => async(dispatch) => {
    try {
        dispatch({
            type: "GetAllMarblesRequest",
        });

        const {data} = await axios.post(`${serverUrl}/marbles/search`, {value}, {
            withCredentials: true,
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "GetAllMarblesSuccess",
            payload: data.marbles
        })
        
    } catch (error) {
        dispatch({
            type: "GetAllMarblesFailure",
            payload: error.response.data.message
        })
    }
}

export const checkTiles = (title, size) => async (dispatch) => {
    try {
        dispatch({
            type: "CheckTileRequest"
        });

        const {data} = axios.post(`${serverUrl}/tiles/check`, {title, size}, {
            withCredentials: true
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        })

        dispatch({
            type: "CheckTileSuccess",
            payload: data.quantity,
        })
        
    } catch (error) {
        dispatch({
            type: "CheckTileFailure",
            payload: error.response.data.message
        })
    }
}

export const checkMarbles = (title, size) => async (dispatch) => {
    try {
        dispatch({
            type: "CheckMarbleRequest"
        });

        const {data} = axios.post(`${serverUrl}/marbles/check`, {title, size}, {
            withCredentials: true
        }, {
            headers: {
                "Content-Type": "application/json",
            },
        })

        dispatch({
            type: "CheckMarbleSuccess",
            payload: data.quantity,
        })
        
    } catch (error) {
        dispatch({
            type: "CheckMarbleFailure",
            payload: error.response.data.message
        })
    }
}

export const createOrder = (dataRows) => async (dispatch) => {
    try {
        dispatch({
            type: "CreateOrderRequest"
        })

        const { data } = await axios.put(`${serverUrl}/order/create`, {dataRows}, {
            withCredentials: true,
        }, {
            headers: {
                'Content-Type': "application/json"
            }
        })

        dispatch({
            type: "CreateOrderSuccess",
            payload: data.message
        })

    } catch (error) {
        dispatch({
            type: "CreateOrderFailure",
            payload: error.response.data.message
        })
    }
}

export const getAllOrders = () => async(dispatch) => {
    try {
        dispatch({
            type: "GetAllOrdersRequest",
        });

        const {data} = await axios.get(`${serverUrl}/view/orders/all`, {
            withCredentials: true,
        });

        dispatch({
            type: "GetAllOrdersSuccess",
            payload: data.orders
        })
        
    } catch (error) {
        dispatch({
            type: "GetAllOrdersFailure",
            payload: error.response.data.message
        })
    }
}

export const getOrder = (id) => async(dispatch) => {
    try {
        dispatch({
            type: "GetOrderRequest",
        });

        const {data} = await axios.get(`${serverUrl}/view/order/${id}`, {
            withCredentials: true,
        });

        dispatch({
            type: "GetOrderSuccess",
            payload: data.order
        })
        
    } catch (error) {
        dispatch({
            type: "GetOrderFailure",
            payload: error.response.data.message
        })
    }
}

export const contactUs = (name, email, num, subj, msg) => async(dispatch) => {
    try {
        dispatch({
            type: "ContactRequest",
        });

        const {data} = await axios.post(`${serverUrl}/contact`, {name, email, num, subj, msg}, {
            withCredentials: true,
        }, {
            headers: {
                'Content-Type': "application/json"
            }
        });

        dispatch({
            type: "ContactSuccess",
            payload: data.message
        })
        
    } catch (error) {
        dispatch({
            type: "ContactFailure",
            payload: error.response.data.message
        })
    }
}



