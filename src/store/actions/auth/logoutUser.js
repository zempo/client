import { configs } from "../../../config";

export const START_LOGOUT = "START_LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERR = "LOGOUT_ERR";

const logoutUser = () => (dispatch) => {
  dispatch({ type: START_LOGOUT });
  window.localStorage.removeItem(configs.TOKEN);
  if (!window.localStorage.getItem(configs.TOKEN)) {
    dispatch({ type: LOGOUT_SUCCESS });
  } else {
    dispatch({ type: LOGOUT_ERR });
  }
};

export default logoutUser;
