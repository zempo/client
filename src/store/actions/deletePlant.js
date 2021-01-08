import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { configs } from "../../config";

export const START_PLANT_DELETE = "START_PLANT_DELETE ";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_ERR = "DELETE_PLANT_ERR";

const deletePlant = (plantToDelete) => (dispatch) => {
  dispatch({ type: START_PLANT_DELETE });

  axiosWithAuth()
    .delete(`${configs.API_ENDPOINT}/plants/${plantToDelete}`)
    .then(({ data }) => {
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_PLANT_ERR, payload: err.message });
    });
};

export default deletePlant;
