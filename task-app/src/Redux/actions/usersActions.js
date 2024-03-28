import axios from 'axios';

export const registerUser = (userData) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:8080/register', userData);
    dispatch({ type: 'REGISTER_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_USER_FAILURE', payload: error.message });
  }
};

export const loginUser = (userData) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:8080/login', userData);
    dispatch({ type: 'LOGIN_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_USER_FAILURE', payload: error.message });
  }
};
