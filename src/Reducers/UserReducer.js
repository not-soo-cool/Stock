import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {

}

const LoginRequest = createAction('LoginRequest');
const LoginSuccess = createAction('LoginSuccess');
const LoginFailure = createAction('LoginFailure');

// const RegisterRequest = createAction('RegisterRequest');
// const RegisterSuccess = createAction('RegisterSuccess');
// const RegisterFailure = createAction('RegisterFailure');

const LoadUserRequest = createAction('LoadUserRequest');
const LoadUserSuccess = createAction('LoadUserSuccess');
const LoadUserFailure = createAction('LoadUserFailure');

const LogoutUserRequest = createAction('LogoutUserRequest');
const LogoutUserSuccess = createAction('LogoutUserSuccess');
const LogoutUserFailure = createAction('LogoutUserFailure');

const AddTilesRequest = createAction('AddTilesRequest');
const AddTilesSuccess = createAction('AddTilesSuccess');
const AddTilesFailure = createAction('AddTilesFailure');

const AddMarblesRequest = createAction('AddMarblesRequest');
const AddMarblesSuccess = createAction('AddMarblesSuccess');
const AddMarblesFailure = createAction('AddMarblesFailure');

const GetTilesRequest = createAction('GetTilesRequest');
const GetTilesSuccess = createAction('GetTilesSuccess');
const GetTilesFailure = createAction('GetTilesFailure');

const GetAllTilesRequest = createAction('GetAllTilesRequest');
const GetAllTilesSuccess = createAction('GetAllTilesSuccess');
const GetAllTilesFailure = createAction('GetAllTilesFailure');

const GetTileRequest = createAction('GetTileRequest');
const GetTileSuccess = createAction('GetTileSuccess');
const GetTileFailure = createAction('GetTileFailure');

const UpdateTileRequest = createAction('UpdateTileRequest');
const UpdateTileSuccess = createAction('UpdateTileSuccess');
const UpdateTileFailure = createAction('UpdateTileFailure');

const DeleteTileRequest = createAction('DeleteTileRequest');
const DeleteTileSuccess = createAction('DeleteTileSuccess');
const DeleteTileFailure = createAction('DeleteTileFailure');

const CheckTileRequest = createAction('CheckTileRequest');
const CheckTileSuccess = createAction('CheckTileSuccess');
const CheckTileFailure = createAction('CheckTileFailure');

const CheckMarbleRequest = createAction('CheckMarbleRequest');
const CheckMarbleSuccess = createAction('CheckMarbleSuccess');
const CheckMarbleFailure = createAction('CheckMarbleFailure');

const GetMarblesRequest = createAction('GetMarblesRequest');
const GetMarblesSuccess = createAction('GetMarblesSuccess');
const GetMarblesFailure = createAction('GetMarblesFailure');

const GetAllMarblesRequest = createAction('GetAllMarblesRequest');
const GetAllMarblesSuccess = createAction('GetAllMarblesSuccess');
const GetAllMarblesFailure = createAction('GetAllMarblesFailure');

const GetMarbleRequest = createAction('GetMarbleRequest');
const GetMarbleSuccess = createAction('GetMarbleSuccess');
const GetMarbleFailure = createAction('GetMarbleFailure');

const UpdateMarbleRequest = createAction('UpdateMarbleRequest');
const UpdateMarbleSuccess = createAction('UpdateMarbleSuccess');
const UpdateMarbleFailure = createAction('UpdateMarbleFailure');

const DeleteMarbleRequest = createAction('DeleteMarbleRequest');
const DeleteMarbleSuccess = createAction('DeleteMarbleSuccess');
const DeleteMarbleFailure = createAction('DeleteMarbleFailure');

const CreateOrderRequest = createAction('CreateOrderRequest');
const CreateOrderSuccess = createAction('CreateOrderSuccess');
const CreateOrderFailure = createAction('CreateOrderFailure');

const GetAllOrdersRequest = createAction('GetAllOrdersRequest');
const GetAllOrdersSuccess = createAction('GetAllOrdersSuccess');
const GetAllOrdersFailure = createAction('GetAllOrdersFailure');

const GetOrderRequest = createAction('GetOrderRequest');
const GetOrderSuccess = createAction('GetOrderSuccess');
const GetOrderFailure = createAction('GetOrderFailure');

const ContactRequest = createAction('ContactRequest');
const ContactSuccess = createAction('ContactSuccess');
const ContactFailure = createAction('ContactFailure');


const clearErrors = createAction('clearErrors');
const clearMessage = createAction('clearMessage');

export const authReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(LoginRequest, (state) => {
        state.loading = true;
    })
    .addCase(LoginSuccess, (state, action) => {
        state.loading = false;
        state.user = action.payload;  
        state.isAuthenticated = true;
    })
    .addCase(LoginFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    })
    .addCase(LoadUserRequest, (state) => {
        state.loading = true;
    })
    .addCase(LoadUserSuccess, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    })
    .addCase(LoadUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
        state.isAuthenticated = false;
    })
    .addCase(LogoutUserRequest, (state) => {
        state.loading = true;
    })
    .addCase(LogoutUserSuccess, (state) => {
        state.loading = false;
        state.user = null;  
        state.isAuthenticated = false;
    })
    .addCase(LogoutUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
})

export const userRedcuer = createReducer(initialState, (builder) => {

    builder
    .addCase(AddTilesRequest, (state) => {
        state.loading = true;
    })
    .addCase(AddTilesSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload
    })
    .addCase(AddTilesFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(AddMarblesRequest, (state) => {
        state.loading = true;
    })
    .addCase(AddMarblesSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload
    })
    .addCase(AddMarblesFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })

})

export const tilesReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(GetTilesRequest, (state) => {
        state.loading = true;
    })
    .addCase(GetTilesSuccess, (state, action) => {
        state.loading = false;
        state.tiles = action.payload
    })
    .addCase(GetTilesFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(GetAllTilesRequest, (state) => {
        state.loading = true;
    })
    .addCase(GetAllTilesSuccess, (state, action) => {
        state.loading = false;
        state.tiles = action.payload
    })
    .addCase(GetAllTilesFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(GetTileRequest, (state) => {
        state.loading = true;
    })
    .addCase(GetTileSuccess, (state, action) => {
        state.loading = false;
        state.tile = action.payload
    })
    .addCase(GetTileFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(UpdateTileRequest, (state) => {
        state.loading = true;
    })
    .addCase(UpdateTileSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload
    })
    .addCase(UpdateTileFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(DeleteTileRequest, (state) => {
        state.loading = true;
    })
    .addCase(DeleteTileSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload
    })
    .addCase(DeleteTileFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
})

export const marblesReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(GetMarblesRequest, (state) => {
        state.loading = true;
    })
    .addCase(GetMarblesSuccess, (state, action) => {
        state.loading = false;
        state.marbles = action.payload
    })
    .addCase(GetMarblesFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(GetAllMarblesRequest, (state) => {
        state.loading = true;
    })
    .addCase(GetAllMarblesSuccess, (state, action) => {
        state.loading = false;
        state.marbles = action.payload
    })
    .addCase(GetAllMarblesFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(GetMarbleRequest, (state) => {
        state.loading = true;
    })
    .addCase(GetMarbleSuccess, (state, action) => {
        state.loading = false;
        state.marble = action.payload
    })
    .addCase(GetMarbleFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(UpdateMarbleRequest, (state) => {
        state.loading = true;
    })
    .addCase(UpdateMarbleSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload
    })
    .addCase(UpdateMarbleFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(DeleteMarbleRequest, (state) => {
        state.loading = true;
    })
    .addCase(DeleteMarbleSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload
    })
    .addCase(DeleteMarbleFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
})

export const checkTileReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(CheckTileRequest, (state) => {
        state.loading = true;
    })
    .addCase(CheckTileSuccess, (state, action) => {
        state.loading = false;
        state.quantity = action.payload
    })
    .addCase(CheckTileFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
})

export const checkMarbleReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(CheckMarbleRequest, (state) => {
        state.loading = true;
    })
    .addCase(CheckMarbleSuccess, (state, action) => {
        state.loading = false;
        state.quantity = action.payload
    })
    .addCase(CheckMarbleFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
})

export const createOrderReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(CreateOrderRequest, (state) => {
        state.loading = true;
    })
    .addCase(CreateOrderSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload
    })
    .addCase(CreateOrderFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(GetAllOrdersRequest, (state) => {
        state.loading = true;
    })
    .addCase(GetAllOrdersSuccess, (state, action) => {
        state.loading = false;
        state.orders = action.payload
    })
    .addCase(GetAllOrdersFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(GetOrderRequest, (state) => {
        state.loading = true;
    })
    .addCase(GetOrderSuccess, (state, action) => {
        state.loading = false;
        state.order = action.payload
    })
    .addCase(GetOrderFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
})

export const contactReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(ContactRequest, (state) => {
        state.loading = true;
    })
    .addCase(ContactSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload
    })
    .addCase(ContactFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
})