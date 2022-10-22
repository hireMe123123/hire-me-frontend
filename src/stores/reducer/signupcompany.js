const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const signupcompany = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_COMPANY_PENDING": {
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: false,
        message: "",
      };
    }
    case "SIGNUP_COMPANY_FULFILLED": {
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case "SIGNUP_COMPANY_REJECTED": {
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

export default signupcompany;
