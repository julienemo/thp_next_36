import { BUY_RICE, EAT_RICE } from "./RiceTypes";

export const buyRice = () => {
    return {
      type: BUY_RICE,
      value: Math.floor(Math.random() * 2) + 1,
    };
};
  

export const eatRice = () => {
  return {
    type: EAT_RICE,
    value: Math.floor(Math.random() * 2) + 1,
  };
};