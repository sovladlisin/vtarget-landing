import { combineReducers } from "redux";
import { alertsReducer } from "./alerts/alerts";
// import authReducer from "./auth/login";



const RootReducer = combineReducers({

    alerts: alertsReducer,
    // auth: authReducer,

});

export default RootReducer