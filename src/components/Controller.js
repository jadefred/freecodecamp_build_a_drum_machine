import React, { useState } from "react";

function Controller(props) {
  const [onOff, setOnOff] = useState("On");

  function powerControl() {
    if (props.powerSetting.power) {
      props.powerSetting.setPower(false);
      setOnOff("Off");
    } else {
      props.powerSetting.setPower(true);
      setOnOff("On");
    }
  }

  return (
    <>
      <button className="power-btn" onClick={powerControl}>
        {onOff}
      </button>
      <div>You audio display</div>
      <div>
        <label htmlFor="myRange">Volume : </label>
        <input type="range" min="1" max="100" className="slider" id="myRange" />
      </div>
      <button>Bank 1</button>
    </>
  );
}

export default Controller;
