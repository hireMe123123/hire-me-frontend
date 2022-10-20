const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_USER_BY_ID_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "GET_DATA_USER_BY_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };

    case "GET_DATA_USER_BY_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };

    default: {
      return state;
    }
  }
};

export default user;
