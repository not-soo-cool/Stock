import { configureStore } from "@reduxjs/toolkit";
import { authReducer, checkMarbleReducer, checkTileReducer, contactReducer, createOrderReducer, marblesReducer, tilesReducer, userRedcuer } from "./Reducers/UserReducer";


const store = configureStore({
    reducer: {
        user: userRedcuer,
        auth: authReducer,
        tile: tilesReducer,
        marble: marblesReducer,
        checkTile: checkTileReducer,
        checkMarble: checkMarbleReducer,
        order: createOrderReducer,
        contact: contactReducer,
    }
});


export default store