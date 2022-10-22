const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const forgotPasswordU = (state = initialState, action) => {
  switch (action.type) {
    case "FORGOT_PASSWORD_USER_PENDING": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "FORGOT_PASSWORD_USER_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "FORGOT_PASSWORD_USER_REJECTED": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default forgotPasswordU;
