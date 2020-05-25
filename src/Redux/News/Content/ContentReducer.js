import { MAKE_REQUEST, REQUEST_FAIL, REQUEST_SUCCESS } from "./ContentTypes";

const initial = {
  loading: false,
  list: undefined,
  error: ""
};

const ContentReducer = (state = initial, action) => { 
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case REQUEST_SUCCESS:
      return {
        loading: false,
        list: action.list,
        error: "",
      };
    case REQUEST_FAIL:
      return {
        loading: false,
        list: undefined,
        error: "An error occurred. Please retry or contact the service provider.",
      };
    default:
      return state;
  }
}

export default ContentReducer;