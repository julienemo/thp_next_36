import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import EatBuyFood from "./Components/EatBuyFood"

const App = () => {
  return (
    <div>
      <EatBuyFood/>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
