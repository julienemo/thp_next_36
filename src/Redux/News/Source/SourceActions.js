import { UPDATE_SOURCE, CLEAR_SOURCE } from "./SourceTypes";

export const updateSource = (value) => {
  return {
    type: UPDATE_SOURCE,
    value,
  }
}

export const clearSource = () => {
  return {
    type: CLEAR_SOURCE,
  };
};