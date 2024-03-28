const initialState = {
    tasks: [],
    error: null,
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TASKS_SUCCESS':
        return { ...state, tasks: action.payload, error: null };
      case 'FETCH_TASKS_FAILURE':
        return { ...state, tasks: [], error: action.payload };
      case 'ADD_TASK_SUCCESS':
        return { ...state, tasks: [...state.tasks, action.payload], error: null };
      case 'ADD_TASK_FAILURE':
        return { ...state, error: action.payload };
      case 'UPDATE_TASK_SUCCESS':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, ...action.payload } : task
          ),
          error: null,
        };
      case 'UPDATE_TASK_FAILURE':
        return { ...state, error: action.payload };
      case 'DELETE_TASK_SUCCESS':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload),
          error: null,
        };
      case 'DELETE_TASK_FAILURE':
        return { ...state, error: action.payload };
    }
}