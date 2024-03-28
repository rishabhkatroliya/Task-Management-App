const initialState = {
  user: null,
  error: null,
  isAuthenticated:false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_SUCCESS":
    case "LOGIN_USER_SUCCESS":
    case "UPDATE_PROFILE_SUCCESS":
      return { ...state, user: action.payload, error: null,isAuthenticated:true };
    case "REGISTER_USER_FAILURE":
    case "LOGIN_USER_FAILURE":
    case "UPDATE_PROFILE_FAILURE":
      return { ...state, user: null, error: action.payload,isAuthenticated:false };
    case "LOGOUT_USER_SUCCESS":
      return { ...state, user: null, error: null,isAuthenticated:false };
    case "LOGOUT_USER_FAILURE":
      return { ...state,error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
