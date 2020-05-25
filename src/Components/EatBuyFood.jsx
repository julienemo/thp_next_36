import React from 'react';

import { createStore } from 'redux';

const EatBuyFood = () => {
  const maxQt = 10;
  const minQt = 0;
  const initialQt = 0;

  const noodleCounter = (noodleState = initialQt, action) => {
    let result;
    switch (action.type) {
      case 'BUY':
        result = noodleState + Number(action.value);
        break
      case 'EAT':
        result = noodleState - Number(action.value);
        break
      default: result = noodleState;
    }
    if (result > maxQt) {
      result = maxQt;
      console.warn('storage limit reached, cannot buy noodle')

    }
    if (result < minQt) {
      result = minQt
      console.warn('no more noodle, can not eat')

    }
    return result;
  }

  const riceCounter = (riceCounter = initialQt, action) => {
    let result;
    switch (action.type) {
      case 'BUY':
        result = riceCounter + Number(action.value)
        break
      case 'EAT':
        result = riceCounter - Number(action.value)
        break
      default: result = riceCounter
    }
    if (result > maxQt) {
      result = maxQt;
      console.warn('storage limit reached, cannot buy rice')
    }
    if (result < minQt) {
      result = minQt
      console.warn('no more rice, can not eat')

    }
    return result;
  }

  let noodleStore = createStore(noodleCounter);
  let riceStore = createStore(riceCounter);

  const buy = (value, index) => {
    return {
      type: 'BUY',
      value: Math.floor(Math.random() * 2) +1 ,
      index
    }
  }

  const eat = (value, index) => {
    return {
      type: 'EAT',
      value: Math.floor(Math.random() * 2) +1,
      index
    }
  }


  noodleStore.subscribe(() => console.log('noodle ' + noodleStore.getState()));
  riceStore.subscribe(() => console.log('rice ' + riceStore.getState()))


  return (
    <div>
      <button type="button" onClick={() => { noodleStore.dispatch(buy()) }}>buy noodle</button>
      <button type="button" onClick={() => { noodleStore.dispatch(eat()) }}>eat noodle</button>
      <button type="button" onClick={() => { riceStore.dispatch(buy()) }}>buy rice</button>
      <button type="button" onClick={() => { riceStore.dispatch(eat()) }}>eat rice</button>
    </div>);
}

export default EatBuyFood;