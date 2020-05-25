import { UPDATE_KEYWORD, CLEAR_KEYWORD } from "./KeywordTypes";

const initial = "";

const KeywordReducer = (state = initial, action) => { 
  switch (action.type) {
    case UPDATE_KEYWORD: 
      return action.value
    case CLEAR_KEYWORD:
      return ""
    default: return state
  }
}

export default KeywordReducer;