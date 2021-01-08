import { v4 as uuidv4 } from "uuid";

export const SET_ALERT = "SET_ALERT ";
export const REMOVE_ALERT = "REMOVE_ALERT";

const setAlert = (msg, type, timeout = 5000) => (dispatch) => {
  const id = uuidv4();

  dispatch({ type: SET_ALERT, payload: { msg, type, id } });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

export default setAlert;
