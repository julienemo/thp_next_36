import React from 'react';

import { createStore, combineReducers } from 'redux';

const EatBuyFood = () => {
  const maxQt = 10;
  const minQt = 0;
  const initialStock = {
    noodle: 2,
    rice: 4,
  }

  const noodleCounter = (state = initialStock.noodle, action) => {
    switch (action.type) {
      case 'BUY_NOODLE':
        return Math.min(state + Number(action.value), maxQt)
      case 'EAT_NOODLE':
        return Math.max(state - Number(action.value),minQt)
      default: return state
    }
  }

  const riceCounter = (state = initialStock.rice, action) => {
    switch (action.type) {
      case 'BUY_RICE':
        return Math.min(state + Number(action.value), maxQt)
      case 'EAT_RICE':
        return Math.max(state - Number(action.value), minQt)
      default: return state
    }
  }

  const rootReducer = combineReducers({
    noodle: noodleCounter,
    rice: riceCounter,
  })

  let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  const buyNoodle = (type, value) => {
    return {
      type: 'BUY_NOODLE',
      value: Math.floor(Math.random() * 2) +1 ,
    }
  }

  const eatNoodle = (type, value) => {
    return {
      type: 'EAT_NOODLE',
      value: Math.floor(Math.random() * 2) + 1,
    }
  }

  const buyRice = (type, value) => {
    return {
      type: 'BUY_RICE',
      value: Math.floor(Math.random() * 2) + 1,
    }
  }

  const eatRice = (type, value) => {
    return {
      type: 'EAT_RICE',
      value: Math.floor(Math.random() * 2) + 1,
    }
  }

  store.subscribe(() => console.log(JSON.stringify(store.getState())));

  return (
    <div>
      <p>Project 1: Buyting and Eating stuff</p>
      <button type="button" onClick={() => { store.dispatch(buyNoodle()) }}>buy noodle</button>
      <button type="button" onClick={() => { store.dispatch(eatNoodle()) }}>eat noodle</button>
      <button type="button" onClick={() => { store.dispatch(buyRice()) }}>buy rice</button>
      <button type="button" onClick={() => { store.dispatch(eatRice()) }}>eat rice</button>
    </div>);
}

export default EatBuyFood;