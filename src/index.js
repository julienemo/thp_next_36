import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import FoodStore from "./Redux/BuyEatFood/Store";
import NewsStore from "./Redux/News/Store";

import EatBuyFood from "./Components/EatBuyFood/EatBuyFood"
import News from "./Components/News/NewsContainer"

const App = () => {
  return (
    <>
      <Provider store={FoodStore}>
        <EatBuyFood />
      </Provider>

      <Provider store={NewsStore}>
        <News />
      </Provider>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
