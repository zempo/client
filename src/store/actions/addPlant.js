import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { configs } from "../../config";

export const START_PLANT_ADD = "START_PLANT_ADD ";
export const ADD_PLANT_SUCCESS = "ADD_PLANT_SUCCESS";
export const ADD_PLANT_ERR = "ADD_PLANT_ERR";

const addProject = (newPlant) => (dispatch) => {
  dispatch({ type: START_PLANT_ADD });

  axiosWithAuth()
    .post(`${configs.API_ENDPOINT}/plants`, newPlant)
    .then(({ data }) => {
      dispatch({ type: ADD_PLANT_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: ADD_PLANT_ERR, payload: err.message });
    });
};

export default addProject;
