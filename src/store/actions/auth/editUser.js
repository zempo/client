import { axiosWithAuth } from "../../../utils/axiosWithAuth";
import { configs } from "../../../config";

export const START_USER_EDIT = "START_USER_EDIT";
export const USER_EDIT_SUCCESS = "USER_EDIT_SUCCESS";
export const USER_EDIT_ERR = "USER_EDIT_ERR";

const editUser = (newUserInfo) => (dispatch) => {
  dispatch({ type: START_USER_EDIT });

  axiosWithAuth()
    .post(`${configs.API_ENDPOINT}/user/${newUserInfo.id}`, newUserInfo)
    .then(({ data }) => {
      dispatch({ type: USER_EDIT_SUCCESS, payload: data });
    })
    .catch(({ response: { data } }) => {
      dispatch({ type: USER_EDIT_ERR, payload: data });
    });
};

export default editUser;
