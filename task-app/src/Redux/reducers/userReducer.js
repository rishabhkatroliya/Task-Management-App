const initialState = {
  user: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_SUCCESS":
    case "LOGIN_USER_SUCCESS":
    case "UPDATE_PROFILE_SUCCESS":
      return { ...state, user: action.payload, error: null };
    case "REGISTER_USER_FAILURE":
    case "LOGIN_USER_FAILURE":
    case "UPDATE_PROFILE_FAILURE":
      return { ...state, user: null, error: action.payload };
    case "LOGOUT_USER_SUCCESS":
      return { ...state, user: null, error: null };
    case "LOGOUT_USER_FAILURE":
      return { ...state,error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
