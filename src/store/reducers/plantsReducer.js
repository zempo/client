import {
  START_PLANTS_GET,
  GET_PLANT_SUCCESS,
  GET_PLANT_ERR,
} from "../actions/getPlants";
import {
  START_PLANT_ADD,
  ADD_PLANT_SUCCESS,
  ADD_PLANT_ERR,
} from "../actions/addPlant";
import {
  START_PLANT_EDIT,
  EDIT_PLANT_SUCCESS,
  EDIT_PLANT_ERR,
} from "../actions/editPlant";
import {
  START_PLANT_DELETE,
  DELETE_PLANT_SUCCESS,
  DELETE_PLANT_ERR,
} from "../actions/deletePlant";

const initialState = {
  loading: false,
  plants: [],
  edittedPlants: [],
  error: "",
};

function plantsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case START_PLANTS_GET:
    case START_PLANT_ADD:
    case START_PLANT_EDIT:
    case START_PLANT_DELETE:
      return { ...state, loading: true };
    case GET_PLANT_SUCCESS:
    case DELETE_PLANT_SUCCESS:
      return { ...state, loading: false, plants: payload };
    case ADD_PLANT_SUCCESS:
      return { ...state, loading: false, plants: payload.plants };
    case EDIT_PLANT_SUCCESS:
      return {
        ...state,
        loading: false,
        plants: [...state.plants].map((plant) =>
          plant.id === payload.id ? payload : plant
        ),
      };
    case GET_PLANT_ERR:
    case ADD_PLANT_ERR:
    case EDIT_PLANT_ERR:
    case DELETE_PLANT_ERR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}

export default plantsReducer;
