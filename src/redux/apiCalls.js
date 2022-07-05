import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from './userRedux';
import { publicRequest } from '../requestMethods';

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  await publicRequest
    .post('/auth/login', user)
    .then((res) => {
      dispatch(loginSuccess(res.data.data));
      localStorage.setItem('token', res.data.data.token);
    })
    .catch((err) => {
      dispatch(loginFailure(err.response.data.message));
    });
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  await publicRequest
    .post('/auth/register', user)
    .then((res) => {
      dispatch(registerSuccess(res.data.message));
    })
    .catch((err) => {
      dispatch(registerFailure(err.response.data.message));
    });
};
