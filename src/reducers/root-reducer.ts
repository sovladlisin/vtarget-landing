import { combineReducers } from "redux";
import { alertsReducer } from "./alerts/alerts";



const RootReducer = combineReducers({

    alerts: alertsReducer,

});

export default RootReducer