import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import FoodStore from "./Redux/BuyEatFood/Store";

import EatBuyFood from "./Components/EatBuyFood/EatBuyFood"
import News from "./Components/News"

const App = () => {
  return (
    <Provider store={FoodStore}>
      <EatBuyFood />
      <News />
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
