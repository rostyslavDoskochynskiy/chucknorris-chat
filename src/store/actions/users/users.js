import {
  USERS_FETCH,
  USERS_SUCCESS,
  USERS_ERROR,
} from "@app/store/actionTypes/users";

/** Actions creators **/
const usersFetch = () => ({
  type: USERS_FETCH,
});

const usersSuccess = (data) => ({
  data,
  type: USERS_SUCCESS,
});

export const usersError = (data) => ({
  data,
  type: USERS_ERROR,
});

export const fetchUsers = () => (dispatch, getState, { api }) => {
  dispatch(usersFetch());
  return api.users
    .getUsers()
    .then((res) => {
      dispatch(usersSuccess(res));
      return res;
    })
    .catch((err) => {
      dispatch(usersError(err));
      throw err;
    });
};
