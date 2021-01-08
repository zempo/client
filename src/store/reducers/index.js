//redux imports
import { combineReducers } from "redux";

// reducers
import alertsReducer from "./alertsReducer";
import plantsReducer from "./plantsReducer";
import userAuthReducer from "./userAuthReducer";

// root reducer
const rootReducer = combineReducers({
  alertsReducer,
  plantsReducer,
  userAuthReducer,
});

export default rootReducer;
