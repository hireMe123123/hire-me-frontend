const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const experience = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_EXPERIENCE_USER_BY_ID_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "",
      };

    case "GET_DATA_EXPERIENCE_USER_BY_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };

    case "GET_DATA_EXPERIENCE_USER_BY_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "CREATE_EXPERIENCE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    case "CREATE_EXPERIENCE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    case "CREATE_EXPERIENCE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };

    case "UPDATE_EXPERIENCE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };
    case "UPDATE_EXPERIENCE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    case "UPDATE_EXPERIENCE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };

    default: {
      return state;
    }
  }
};

export default experience;
