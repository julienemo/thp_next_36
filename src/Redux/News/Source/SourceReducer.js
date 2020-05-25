import { UPDATE_SOURCE, CLEAR_SOURCE } from "./SourceTypes";

const initial = "";

const SourceReducer = (state = initial, action) => { 
  switch (action.type) {
    case UPDATE_SOURCE:
      return action.value;
    case CLEAR_SOURCE:
      return "";
    default:
      return state;
  }
}

export default SourceReducer;