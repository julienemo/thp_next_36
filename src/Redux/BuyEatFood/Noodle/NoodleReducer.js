import { BUY_NOODLE, EAT_NOODLE } from "./NoodleTypes";

const initialStock = 4;
const maxQt = 10;
const minQt = 0;

const noodleReducer = (state = initialStock, action) => {
    switch (action.type) {
      case BUY_NOODLE:
        return Math.min(state + Number(action.value), maxQt);
      case EAT_NOODLE:
        return Math.max(state - Number(action.value), minQt);
      default:
        return state;
    }
};
  
export default noodleReducer;
