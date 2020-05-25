import React from "react";
import { connect } from "react-redux";
import { eatRice, buyRice } from "../../Redux/BuyEatFood";

const RiceDrawer = (props) => {
  return (
    <>
      <p>Rice: {props.rice}</p>
      <button type="button" onClick={props.buyRice}>
        buy rice
      </button>
      <button type="button" onClick={props.eatRice}>
        eat rice
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    rice: state.rice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyRice: () => dispatch(buyRice()),
    eatRice: () => dispatch(eatRice()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RiceDrawer);
