import { BUY_NOODLE, EAT_NOODLE } from "./NoodleTypes";

export const buyNoodle = () => {
    return {
      type: BUY_NOODLE,
      value: Math.floor(Math.random() * 2) + 1,
    };
};

export const eatNoodle = () => {
  return {
    type: EAT_NOODLE,
    value: Math.floor(Math.random() * 2) + 1,
  };
};