const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  message: "",
};

const company = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_COMPANY_BY_ID_PENDING":
      return {
        ...state,
        data: {},
        isLoading: true,
        isError: false,
        message: "",
      };

    case "GET_DATA_COMPANY_BY_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        message: action.payload.data.message,
      };

    case "GET_DATA_COMPANY_BY_ID_REJECTED":
      return {
        ...state,
        data: {},
        isLoading: false,
        isError: true,
        message: action.payload.response.data,
      };
    case "UPDATE_DATA_COMPANY_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };

    case "UPDATE_DATA_COMPANY_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "UPDATE_DATA_COMPANY_REJECTED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: action.payload.response.data.message,
      };

    case "UPDATE_IMAGE_COMPANY_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };

    case "UPDATE_IMAGE_COMPANY_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "UPDATE_IMAGE_COMPANY_REJECTED":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: action.payload.response.data.message,
      };
    default: {
      return state;
    }
  }
};

export default company;
