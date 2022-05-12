import React, { useState } from "react";

function Controller(props) {
  const [onOff, setOnOff] = useState("On");

  function powerControl() {
    if (props.powerSetting.power) {
      props.powerSetting.setPower(false);
      props.keyDisplay.setKeyDisplay("");
      setOnOff("Off");
    } else {
      props.powerSetting.setPower(true);
      setOnOff("On");
    }
  }

  function handleVolumn(e) {
    props.volume.setVolume(e.target.value);
  }

  return (
    <>
      <button className="power-btn" onClick={powerControl}>
        {onOff}
      </button>
      <div>{props.keyDisplay.keyDisplay}</div>
      <div>
        <label htmlFor="myRange">Volume : </label>
        <input onChange={handleVolumn} type="range" min="1" max="100" value={props.volume.volume} className="slider" id="myRange" />
      </div>
      <button>Bank 1</button>
    </>
  );
}

export default Controller;
