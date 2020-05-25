import { BUY_RICE, EAT_RICE } from "./RiceTypes";

const initialStock = 2  ;
const maxQt = 10;
const minQt = 0;

const riceReducer = (state = initialStock, action) => {
    switch (action.type) {
      case BUY_RICE:
        return Math.min(state + Number(action.value), maxQt);
      case EAT_RICE:
        return Math.max(state - Number(action.value), minQt);
      default:
        return state;
    }
};
  
export default riceReducer;
