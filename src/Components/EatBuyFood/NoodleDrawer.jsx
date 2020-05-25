import React from "react";
import { connect } from "react-redux";
import {
  eatNoodle,
  buyNoodle,
} from "../../Redux/BuyEatFood";


const NoodleDrawer = (props) => { 
  return (
    <>
      <p>Noodle: {props.noodle}</p>
      <button
        type="button"
        onClick={props.buyNoodle}
      >
        buy noodle
      </button>
      <button
        type="button"
        onClick={props.eatNoodle}
      >
        eat noodle
      </button>
    </>
  );
}

const mapStateToProps = (state) => { 
  return {
    noodle: state.noodle,
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      buyNoodle: () => dispatch(buyNoodle()),
      eatNoodle: () => dispatch(eatNoodle()),
    };
 }

export default connect(mapStateToProps, mapDispatchToProps)(NoodleDrawer)