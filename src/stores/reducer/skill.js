const initialState = {
  data: [],
  isLoading: false,
  loadingGet: false,
  isError: false,
  message: "",
};

const skill = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_SKILL_BY_USER_ID_PENDING":
      return {
        ...state,
        data: [],
        loadingGet: true,
        isError: false,
        message: "",
      };

    case "GET_DATA_SKILL_BY_USER_ID_FULFILLED":
      return {
        ...state,
        loadingGet: false,
        isError: false,
        data: action.payload.data.data,
      };

    case "GET_DATA_SKILL_BY_USER_ID_REJECTED":
      return {
        ...state,
        loadingGet: false,
        isError: true,
        message: action.payload.response.data,
      };

    case "CREATE_SKILL_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };

    case "CREATE_SKILL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "CREATE_SKILL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.response.data.message,
      };

    case "DELETE_SKILL_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };

    case "DELETE_SKILL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "DELETE_SKILL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.response.data.message,
      };

    case "UPDATE_SKILL_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: "",
      };

    case "UPDATE_SKILL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };

    case "UPDATE_SKILL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.response.data.message,
      };

    default: {
      return state;
    }
  }
};

export default skill;
