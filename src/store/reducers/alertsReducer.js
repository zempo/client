import { REMOVE_ALERT, SET_ALERT } from "../actions/plantAlerts";

const initialState = {
  alerts: [],
};

function alertsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return { ...state, alerts: payload };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: [state.alerts].filter((alert) => alert.id !== payload),
      };
    default:
      return state;
  }
}

export default alertsReducer;
