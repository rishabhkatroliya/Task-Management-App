import axios from 'axios';

export const fetchTasks = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:8080/tasks');
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message });
  }
};

export const addTask = (taskData) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:8080/tasks', taskData);
    dispatch({ type: 'ADD_TASK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_TASK_FAILURE', payload: error.message });
  }
};

export const updateTask = (id, taskData) => async dispatch => {
  try {
    const response = await axios.put(`http://localhost:8080/tasks/${id}`, taskData);
    dispatch({ type: 'UPDATE_TASK_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_TASK_FAILURE', payload: error.message });
  }
};

export const deleteTask = (id) => async dispatch => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${id}`);
      dispatch({ type: 'DELETE_TASK_SUCCESS', payload: id });
    } catch (error) {
      dispatch({ type: 'DELETE_TASK_FAILURE', payload: error.message });
    }
  };
