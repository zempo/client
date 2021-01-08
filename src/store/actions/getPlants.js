import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { configs } from "../../config";
import { dummyData } from "../../utils/dummy";

export const START_PLANTS_GET = "START_PLANTS_GET ";
export const GET_PLANT_SUCCESS = "GET_PLANT_SUCCESS";
export const GET_PLANT_ERR = "GET_PLANT_ERR";

const getPlants = () => (dispatch) => {
  dispatch({ type: START_PLANTS_GET });

  // axiosWithAuth()
  //   .get(`${configs.API_ENDPOINT}/plants`)
  //   .then(({ data }) => {
  //     dispatch({ type: GET_PLANT_SUCCESS, payload: data });
  //   })
  //   .catch((err) => {
  //     dispatch({ type: GET_PLANT_ERR, payload: err.message });
  //   });
  dispatch({ type: GET_PLANT_SUCCESS, payload: dummyData });
};

export default getPlants;
