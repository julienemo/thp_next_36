import { UPDATE_KEYWORD, CLEAR_KEYWORD } from "./KeywordTypes";

export const updateKeyword = (value) => {
  return {
    type: UPDATE_KEYWORD,
    value,
  }
}

export const clearKeyword = () => {
  return {
    type: CLEAR_KEYWORD,
  };
};