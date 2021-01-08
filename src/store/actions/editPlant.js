import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { configs } from "../../config";

export const START_PLANT_EDIT = "START_PLANT_EDIT ";
export const EDIT_PLANT_SUCCESS = "EDIT_PLANT_SUCCESS";
export const EDIT_PLANT_ERR = "EDIT_PLANT_ERR";

const editPlant = (plantToEdit) => (dispatch) => {
  dispatch({ type: START_PLANT_EDIT });

  axiosWithAuth()
    .delete(`${configs.API_ENDPOINT}/plants/${plantToEdit}`)
    .then(({ data }) => {
      dispatch({ type: EDIT_PLANT_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: EDIT_PLANT_ERR, payload: err.message });
    });
};

export default editPlant;
