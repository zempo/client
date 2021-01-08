import { configs } from "../../config";
import {
  ADD_USER,
  REGISTER_SUCCESS,
  REGISTER_ERR,
} from "../actions/auth/registerUser";
import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERR,
} from "../actions/auth/loginUser";
import {
  START_LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERR,
} from "../actions/auth/logoutUser";

const initialState = {
  loading: false,
  authenticated: false,
  message: "",
  token: localStorage.getItem(configs.TOKEN),
  newUser: {},
  user: {},
  error: "",
};

function userAuthReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_USER:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        newUser: payload.user,
        token: payload.token,
      };
    case START_LOGIN:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: true,
        message: payload.message,
        token: payload.token,
        user: payload.user,
      };
    case REGISTER_ERR:
    case LOGIN_ERR:
      return { ...state, loading: false, error: payload.message };
    case START_LOGOUT:
      return { ...state, loading: true };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: false,
        message: "",
        token: "",
        user: {},
        newUser: {},
      };
    case LOGOUT_ERR:
      return { ...state, loading: false, error: "Logout Failed" };
    default:
      return state;
  }
}

export default userAuthReducer;
