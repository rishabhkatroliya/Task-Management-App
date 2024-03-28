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
    if (response.status === 200) {
      const token = response.data.token;
      // Handle successful login, e.g., store the token in localStorage or a cookie
      localStorage.setItem("token", JSON.stringify(token));
      dispatch({ type: 'LOGIN_USER_SUCCESS', payload: response.data });
      return true;
    }
    
  } catch (error) {
    dispatch({ type: 'LOGIN_USER_FAILURE', payload: error.message });
  }
};
