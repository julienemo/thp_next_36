import { createStore, combineReducers } from "redux";
import noodleReducer from "./Noodle/NoodleReducer";
import riceReducer from "./Rice/RiceReducer";

const rootReducer = combineReducers({
  noodle: noodleReducer,
  rice: riceReducer,
});

const FoodStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default FoodStore;
